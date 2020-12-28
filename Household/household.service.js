const pool = require("../config/config")

module.exports = {
    //查詢全部資料
    SearchAll: callback => {
        pool.query(
            `SELECT * FROM Customer Where CDelete="1";`,
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    //查詢特定資料
    SearchById_name: (id, name, callback) => {
        let ID = "%" + id + "%";
        let Name = "%" + name + "%";
        pool.query(
            `SELECT * FROM Customer where CID like ? and CName like ? and CDelete="0" and CDelete="1";`,
            [ID, Name],
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
        pool.query(
            `UPDATE Customer SET CDelete="1" Where CID=?;`,
            [
                ID
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
        let Birth = req.body.birth;
        let Phone = req.body.phone;
        let Email = req.body.email;
        let Age = req.body.age;
        let Discount = req.body.discount;
        let Path = req.file.path;
        pool.query(
            `UPDATE Customer SET CName=?,CBirth=?,CPhone=?,CEmail=?,CAge=?,CPhoto=?,CDiscount=? Where CID=?;`,
            [
                Name, Birth, Phone, Email, Age, Path, Discount, ID
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
            `UPDATE Customer SET CDelete="0" Where CID=?;`,
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