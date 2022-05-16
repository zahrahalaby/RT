
const app = require('express')();


const { query } = require('express');
const sql = require('mssql')

const connect = sql.connect('Server=localhost,1401;Database=MYDB;User Id=sa;Password=zahra@123321;Encrypt=false')

async function getUserByEmail(Email) {
    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(Email);
        // query to the database and get the records
        const result = await sql.query(`select * from Users where Email ='${Email}'`)
        console.log(result.recordset[0]);
        return result.recordset[0]
    }
    catch (err) {
        console.log(err);
        return "oh no";
    }
}

exports.getUserByEmail = getUserByEmail;



async function addUser(userinfo) {
    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(userinfo);
        // query to the database and get the records
        const result = await sql.query(`INSERT INTO Users (userName,Email,birth,password) VALUES
         ('${userinfo.userName}','${userinfo.Email}','${userinfo.birth}','${userinfo.password}')`);
        console.log(result.recordset);
        return 'every thing ok';
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

exports.addUser = addUser;

async function updateUser(theEmail, userinfo) {

    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(userinfo);

        // const userbyEmail = getUserByEmail(theEmail)
        // console.log(userbyEmail);
        const result = await sql.query(`UPDATE  Users
                                     SET userName='${userinfo.userName}',Email='${userinfo.Email}',birth='${userinfo.birth}',password='${userinfo.password}' 
                                    WHERE Email='${theEmail}'
        `);
        console.log(result.rowsAffected[0]);
        return true;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

exports.updateUser = updateUser;


async function deleteUserByEmail(userEmail) {

    try {
        await connect
        // create Request object

        console.log(userEmail);
        // const userbyEmail = getUserByEmail(theEmail)
        // console.log(userbyEmail);
        const result = await sql.query(`DELETE FROM Users 
                                 WHERE Email='${userEmail}';
                                 `);
        console.log(result);
        if (result.rowsAffected[0] !== 0) {
            console.log(result.rowsAffected[0]);
            return true;
        }
        return false;
    }

    catch (err) {
        console.log(err);
        return err;
    }
}

exports.deleteUserByEmail = deleteUserByEmail;


// Delete a user by its Email

// const deleteUserByEmail = async (userEmail) => {
//     const x = await user.deleteOne({ Email: userEmail });

//     if (x !== null) {

//         return true;
//     }
//     return false;
// }
// exports.deleteUserByEmail = deleteUserByEmail;