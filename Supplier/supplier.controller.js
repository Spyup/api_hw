const { SearchAll, SearchById_name, InsertInfo, UpdateInfo, DeleteInfo } = require("./supplier.service");

module.exports = {
    SearchAllSupplier: (req, res) => {
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
    SearchSupplierById_name: (req, res) => {
        const id = req.query.id;
        const name = req.query.name;
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
    DeleteInfo: (req, res) => {
        const id = req.body.id;
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
    },
}