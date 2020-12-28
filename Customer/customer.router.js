const { SearchAll, SearchById_name, InsertInfo, UpdateInfo, DeleteInfo } = require("./customer.controller");
const router = require("express").Router();
var multer = require("multer");
// 設定 storage
const storage = multer.diskStorage({
    // 設定檔案存取位置
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    // 設定檔案命名方式
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, new Date().toISOString() + "." + extension)
    }
})

// 設定 Multer
const upload = multer({
    limit: {
        // 限制上傳檔案的大小為 1MB
        fileSize: 1000000
    },
    storage
})

//讀取
router.get("/", SearchAll);
router.get("/Search/", upload.array(), SearchById_name);

//新增
router.post("/", upload.single("file"), InsertInfo);

//修改
router.put("/", upload.single("file"), UpdateInfo);
//刪除
router.delete("/", upload.array(), DeleteInfo);

module.exports = router;