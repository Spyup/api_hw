const pool = require("../config/config")

module.exports = {
    //查詢全部資料
    SearchAll: callback => {
        pool.query(
            `SELECT * FROM FlowerSeedling Where FDelete="0";`,
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
        let a = "%" + id + "%";
        let b = "%" + name + "%";
        pool.query(
            `SELECT * FROM FlowerSeedling where FID like ? and FName like ? and FDelete="0";`,
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
        let SName = req.body.sname;
        let Sum = req.body.sum;
        let Unit = req.body.unit;
        let UnitPrice = req.body.unitprice;
        let Subtotal = (parseInt(Sum, 10) * parseFloat(UnitPrice));
        Subtotal = Subtotal.toString();
        let Locate = req.body.locate;
        let Date = req.body.date;
        pool.query(
            `INSERT INTO FlowerSeedling (FID,FName,F_SName,FSum,FUnit,FUnitPrice,FSubTotal,FLocate,FDate,FRemark,FDelete) VALUES (?,?,?,?,?,?,?,?,?,"","0");`,
            [
                ID, Name, SName, Sum, Unit, UnitPrice, Subtotal, Locate, Date
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
        let SName = req.body.sname;
        let Sum = req.body.sum;
        let Unit = req.body.unit;
        let UnitPrice = req.body.unitprice;
        let Subtotal = (parseInt(Sum, 10) * parseFloat(UnitPrice));
        Subtotal = Subtotal.toString();
        let Locate = req.body.locate;
        let Date = req.body.date;
        pool.query(
            `UPDATE FlowerSeedling SET FName=?,F_SName=?,FSum=?,FUnit=?,FUnitPrice=?,FSubTotal=?,FLocate=?,FDate=? Where FID=?;`,
            [
                Name, SName, Sum, Unit, UnitPrice, Subtotal, Locate, Date, ID
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
            `UPDATE FlowerSeedling SET FDelete="1" Where FID=?;`,
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