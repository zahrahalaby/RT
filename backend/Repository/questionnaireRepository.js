const connect = require('../DB/dbconfig');


function getAllFields() {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun()
        const fields = pool.query(`SELECT qf.id ,
         qf.nameField ,
          qf.typeField , 
          qf.createdDate ,
           qf.required , 
           ot.option
            FROM questionnairefields as qf inner join optionType as ot
             on qf.id = ot.idQuestionnaire;`, (err, rows) => {
            if (!err) {
                console.log('The data from questionnairefields table are: \n', rows)
                pool.release()
            } else {
                console.log(err)
                pool.release()
                reject(err);
            }

            resolve(rows)
            console.log(rows, "the data appear");

        })
    })
}

exports.getAllFields = getAllFields;


function getFieldById(id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();

        const resultquestionnaire = pool.query(`SELECT * FROM questionnairefields WHERE id='${id}'`, (err, rows) => {
            if (!err) {
                console.log("The data from user table are: \n", rows);
                pool.release();
            }
            else {
                console.log(err);
                pool.release();
                reject(err);
            }
            resolve(rows)
        });
        const resultoptions = pool.query(`SELECT * FROM optiontype WHERE idQuestionnaire='${id}'`, (err, rows) => {
            if (!err) {
                console.log("The data from user table are: \n", rows);
                pool.release();
            }
            else {
                console.log(err);
                pool.release();
                reject(err);
            }
            resolve(rows)
        });
    });
}
exports.getFieldById = getFieldById


function addNewField(req) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        for(const i=0 ; i<req.length;i++)
        {
            var d = new Date();

                pool.query('INSERT INTO questionnairefields (id,nameField,typeField,createDate,required) VALUES(?,?,?,?)', [req[i].id,req[i].questionText, req[i].questionType,d, req[i].required], (err, rows) => {
                    if (!err) {
                        console.log('The data from questtionaire table are: \n', rows);
                        resolve('your insert data is succesfull')
                        pool.release()
                    } else {
                        console.log(err);
                        pool.release()
                        reject(err);
                    }
                })
                if(req[i].options[0].optionText !== ""){
                    for(const j=0 ; j<req.options.length;j++){
                        pool.query('INSERT INTO optiontype (idQuestionnaire,option) VALUES(?,?)', [req[i].id, options[i].optionText], (err, rows) => {
                            if (!err) {
                                console.log('The data from optiontype table are: \n', rows);
                                resolve('your insert data is succesfull')
                                pool.release()
                            } else {
                                console.log(err);
                                pool.release()
                                reject(err);
                            }
                        })
                    }

                }
        }
    })
}
exports.addNewField = addNewField;


function deleteFieldById(id) {
    return new Promise(async (resolve, reject) => {
        let pool = await connect.connectionfun();
        for(const i=0 ; i<req.length;i++)
        {
            pool.query(`DELETE FROM questionnairefields WHERE id='${id}'`, (err, rows) => {
                if (!err) {
                    console.log('The data from questtionaire table are: \n', rows);
                    resolve('Delete data is succesfull')
                    pool.release()
                } else {
                    console.log(err);
                    pool.release()
                    reject(err);
                }
            })
        
            pool.query(`DELETE FROM optiontype WHERE idQuestionnaire='${id}'`, (err, rows) => {
                if (!err) {
                    console.log('The data from optiontype table are: \n', rows);
                    resolve('Delete data is succesfull')
                    pool.release()
                } else {
                    console.log(err);
                    pool.release()
                    reject(err);
                }
            })   
        }
    })
}
exports.deleteFieldById = deleteFieldById;
