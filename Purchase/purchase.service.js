const pool = require("../config/config")

module.exports = {
    //查詢全部資料
    SearchAll: callback => {
        pool.query(
            `SELECT * FROM Purchase Where PDelete="0";`,
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    //查詢特定資料
    SearchById: (id, cid, callback) => {
        let a = "%" + id + "%";
        let b = "%" + cid + "%";
        pool.query(
            `SELECT * FROM Purchase where P_FID like ? and P_CID like ? and PDelete="0";`,
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
        let FID = req.body.fid;
        let FName = req.body.fname;
        let CID = req.body.cid;
        let SName = req.body.sname;
        let Quantity = req.body.quantity;
        let SellPrice = req.body.sellprice;
        let OrderDate = req.body.order;
        let EstimateDate = req.body.estimate;
        let ActualDate = req.body.actual;
        if (req.body.actual === "")
            ActualDate = null;
        pool.query(
            `SELECT CDiscount FROM Customer where CID=? ;`,
            [
                CID
            ],
            (error, CDiscount, fields) => {
                if (error) {
                    return callback(error);
                }
                else {
                    let Total = (parseInt(Quantity, 10) * parseFloat(SellPrice));
                    let AfterDiscount = Total * parseFloat(CDiscount[0].CDiscount);
                    Total = Total.toString();
                    AfterDiscount = AfterDiscount.toString();
                    pool.query(
                        `INSERT INTO Purchase (P_FID,P_FName,P_CID,P_SName,PQuantity,PSellingPrice,PTotal,PAfterDiscount,POrderDate,PEstimatedDate,PActualDate,PRemark,PDelete) VALUES (?,?,?,?,?,?,?,?,?,?,?,"","0");`,
                        [
                            FID, FName, CID, SName, Quantity, SellPrice, Total, AfterDiscount, OrderDate, EstimateDate, ActualDate
                        ],
                        (error, results, fields) => {
                            if (error) {
                                return callback(error);
                            }
                            return callback(null, results);
                        }
                    )
                }
            }
        )
    },
    //修改
    UpdateInfo: (req, callback) => {
        let ID = req.body.id;
        let FID = req.body.fid;
        let FName = req.body.fname;
        let CID = req.body.cid;
        let SName = req.body.sname;
        let Quantity = req.body.quantity;
        let SellPrice = req.body.sellprice;
        let OrderDate = req.body.order;
        let EstimateDate = req.body.estimate;
        let ActualDate = req.body.actual;
        pool.query(
            `SELECT CDiscount FROM Customer where CID=? ;`,
            [
                CID
            ],
            (error, CDiscount, fields) => {
                if (error) {
                    return callback(error);
                }
                else {
                    let Total = (parseInt(Quantity, 10) * parseFloat(SellPrice));
                    let AfterDiscount = Total * parseFloat(CDiscount[0].CDiscount);
                    Total = Total.toString();
                    AfterDiscount = AfterDiscount.toString();
                    pool.query(
                        `UPDATE Purchase SET P_FID=?,P_FName=?,P_CID=?,P_SName=?,PQuantity=?,PSellingPrice=?,PTotal=?,PAfterDiscount=?,POrderDate=?,PEstimatedDate=?,PActualDate=? Where PID=?;`,
                        [
                            FID, FName, CID, SName, Quantity, SellPrice, Total, AfterDiscount, OrderDate, EstimateDate, ActualDate, ID
                        ],
                        (error, results, fields) => {
                            if (error) {
                                return callback(error);
                            }
                            return callback(null, results);
                        }
                    )
                }
            }
        )
    },
    //刪除
    DeleteInfo: (id, callback) => {
        pool.query(
            `UPDATE Purchase SET PDelete="1" Where PID=?;`,
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