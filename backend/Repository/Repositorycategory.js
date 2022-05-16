let AllPainting = require('../JSONs/Course').Painting;
// let Alldrawing = require('../JSONs/Course').Drawing;


// const getpaintingcourses = () => {
//     return AllPainting;
// }
// exports.getpaintingcourses = getpaintingcourses;

// const getdrawingcourses = () => {
//     return Alldrawing;
// }
// exports.getdrawingcourses = getdrawingcourses;

const app = require('express')();


const { query } = require('express');
const sql = require('mssql')

const connect = sql.connect('Server=localhost,1401;Database=MYDB;User Id=sa;Password=zahra@123321;Encrypt=false')

async function getdrawingcourses() {
    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log();
        // query to the database and get the recordsCountry IN ('Germany')
        const result = await sql.query(`select  *  from courses where courseCategory in ('Drawing')`)
        console.log(result.recordsets[0]);
        return result.recordset
    }
    catch (err) {
        console.log(err);
        return "oh no";
    }
}

exports.getdrawingcourses = getdrawingcourses;


async function getpaintingcourses() {
    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log();
        // query to the database and get the recordsCountry IN ('Germany')
        const result = await sql.query(`select  *  from courses where courseCategory in ('painting')`)
        console.log(result.recordsets[0]);
        return result.recordset
    }
    catch (err) {
        console.log(err);
        return "oh no";
    }
}

exports.getpaintingcourses = getpaintingcourses;



