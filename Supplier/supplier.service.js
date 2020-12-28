const pool = require("../config/config")

module.exports = {
    //查詢全部
    SearchAll: callback => {
        pool.query(
            `SELECT * FROM Supplier Where SDelete="0";`,
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    //查詢特定
    SearchById_name: (id, name, callback) => {
        let a = "%" + id + "%"
        let b = "%" + name + "%";
        pool.query(
            `SELECT * FROM Supplier where STaxNumber like ? and SName like ? and SDelete="0";`,
            [a, b],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    //新增
    InsertInfo: (req, callback) => {
        let ID = req.body.id;
        let Name = req.body.name;
        let Phone = req.body.phone;
        let Email = req.body.email;
        let Principal = req.body.principal;
        pool.query(
            `INSERT INTO Supplier (STaxNumber,SName,SPhone,SEmail,SPrincipal,SRemark,SDelete) VALUES (?,?,?,?,?,"","0");`,
            [
                ID, Name, Phone, Email, Principal
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    //修改
    UpdateInfo: (req, callback) => {
        let ID = req.body.id;
        let Name = req.body.name;
        let Phone = req.body.phone;
        let Email = req.body.email;
        let Principal = req.body.principal;
        pool.query(
            `UPDATE Supplier SET SName=?,SPhone=?,SEmail=?,SPrincipal=? Where STaxNumber=?;`,
            [
                Name, Phone, Email, Principal, ID
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    //刪除
    DeleteInfo: (id, callback) => {
        pool.query(
            `UPDATE Supplier SET SDelete="1" Where STaxNumber=?;`,
            [
                id
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
}