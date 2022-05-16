const app = require('express')();


const { query } = require('express');
const sql = require('mssql')

const connect = sql.connect('Server=localhost,1401;Database=MYDB;User Id=sa;Password=zahra@123321;Encrypt=false')

async function postVideoinfo(info) {
    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(Email);
        // query to the database and get the records
        const result = await sql.query(`INSERT INTO Courses (youtubeVideoTitle) VALUES('${info}')`)
        console.log(result.recordset[0]);
        return result.recordset[0]
    }
    catch (err) {
        console.log(err);
        return "oh no";
    }
}

exports.postVideoinfo = postVideoinfo;