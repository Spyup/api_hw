const { SearchAll, SearchById_name, InsertInfo, UpdateInfo, DeleteInfo } = require("./customer.service");

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
    SearchById_name: (req, res) => {
        const id = req.body.id;
        const name = req.body.name;
        SearchById_name(id, name, (error, results) => {
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