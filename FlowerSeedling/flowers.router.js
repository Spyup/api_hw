const { SearchAll, SearchById_name, InsertInfo, UpdateInfo, DeleteInfo } = require("./flowers.controller");
const router = require("express").Router();
var multer = require("multer");
var upload = multer();

//讀取
router.get("/", SearchAll);
router.get("/Search/", SearchById_name);

//新增
router.post("/", upload.array(), InsertInfo);

//修改
router.put("/", upload.array(), UpdateInfo);
//刪除
router.delete("/", upload.array(), DeleteInfo);

module.exports = router;