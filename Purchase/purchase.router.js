const { SearchAll, SearchById, InsertInfo, UpdateInfo, DeleteInfo } = require("./purchase.controller");
const router = require("express").Router();
var multer = require("multer");
var upload = multer();

//讀取
router.get("/", SearchAll);
router.get("/Search/", SearchById);

//新增
router.post("/", upload.array(), InsertInfo);

//修改
router.put("/", upload.array(), UpdateInfo);
//刪除
router.delete("/", upload.array(), DeleteInfo);

module.exports = router;