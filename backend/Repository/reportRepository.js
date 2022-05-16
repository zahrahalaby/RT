const connect = require('../DB/dbconfig')

function getAllCandidates() {
    return new Promise(async (resolve, reject) => {
        let y = await connect.connectionfun()
        const candidate = y.query(`SELECT * FROM candidate`, (err, rows) => {
            if (!err) {
                console.log('The data from candidates table are: \n', rows)
                y.release()
            } else {
                console.log(err)
                y.release()
                reject(err);
            }

            resolve(rows)
            console.log(rows, "the data appear");

        })
    })
}

exports.getAllCandidates = getAllCandidates;


function getCandidateById(id) {
    return new Promise(async (resolve, reject) => {
        let y = await connect.connectionfun();

        const results = y.query(`SELECT * FROM candidate WHERE id='${id}'`, (err, rows) => {
            if (!err) {
                console.log("The data from user table are: \n", rows);
                y.release();
            }
            else {
                console.log(err);
                y.release();
                reject(err);
            }
            resolve(rows)
        });
    });
}
exports.getCandidateById = getCandidateById



async function updateCandidate(id, userinfo) {

    try {
        let y = await connect.connectionfun();
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(userinfo);
        console.log(id);
        // const userbyEmail = getUserByEmail(theEmail)
        // console.log(userbyEmail);
        const result = y.query(`UPDATE  courses
                                     SET Email='${userinfo.Email}',courcetype='${userinfo.courcetype}',Coursetitle='${userinfo.Coursetitle}',courseCategory='${userinfo.courseCategory}',learninCourse='${userinfo.learninCourse}',Courserequirement='${userinfo.Courserequirement}',Coursefor='${userinfo.Coursefor}',Coursecontent='${userinfo.Coursecontent}',Coursesubtitle='${userinfo.Coursesubtitle}',Coursedescription='${userinfo.Coursedescription}',level='${userinfo.level}' 
                                    WHERE id='${id}'
        `);
        console.log(result.rowsAffected[0]);
        return true;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

exports.updateCandidate = updateCandidate;

