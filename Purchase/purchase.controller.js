const { SearchAll, SearchById, InsertInfo, UpdateInfo, DeleteInfo } = require("./purchase.service");

module.exports = {
    //查詢全部
    SearchAll: (req, res) => {
        SearchAll((error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    sucess: 0,
                    message: "Error"
                });
            }
            return res.status(200).json({
                sucess: 1,
                data: results
            })
        });
    },
    //查詢特定
    SearchById: (req, res) => {
        const id = req.query.id;
        const name = req.query.name;
        SearchById(id, name, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    sucess: 0,
                    message: "Error"
                });
            }
            if (!results[0]) {
                return res.json({
                    sucess: 0,
                    message: "Recrod not Found"
                });
            }
            return res.status(200).json({
                sucess: 1,
                data: results
            })
        });
    },
    //新增
    InsertInfo: (req, res) => {
        let Order = (Date.parse(req.body.order)).valueOf();
        let Actual = (Date.parse(req.body.actual)).valueOf();
        let Estimate = (Date.parse(req.body.estimate)).valueOf();
        if (Order < Estimate && (Order < Actual || req.body.actual === ""))
            InsertInfo(req, (error, results) => {
                if (error) {
                    console.log(error);
                    return res.status(500).json({
                        sucess: 0,
                        message: "Error"
                    });
                }
                return res.status(200).json({
                    sucess: 1,
                    data: results
                })
            });
        else
            return res.status(500).json({
                sucess: 0,
                message: "Error"
            });
    },
    //修改
    UpdateInfo: (req, res) => {
        UpdateInfo(req, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    sucess: 0,
                    message: "Error"
                });
            }
            return res.status(200).json({
                sucess: 1,
                data: results
            })
        });
    },
    //刪除
    DeleteInfo: (req, res) => {
        let id = req.body.id;
        DeleteInfo(id, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    sucess: 0,
                    message: "Error"
                });
            }
            return res.status(200).json({
                sucess: 1,
                data: results
            })
        });
    }
}