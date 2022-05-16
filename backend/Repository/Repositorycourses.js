
const app = require('express')();


const { query } = require('express');
const sql = require('mssql')

const connect = sql.connect('Server=localhost,1401;Database=MYDB;Corses Id=sa;Password=zahra@123321;Encrypt=false')


async function addcourse(userinfo) {
    try {
        await connect
        const theuserinfo = { ...userinfo }
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(theuserinfo);
        console.log(theuserinfo.courcetype + " " + theuserinfo.courseCategory + " " + theuserinfo.Coursetitle);
        // query to the database and get the records
        const result = await sql.query(`INSERT INTO courses (Email,courcetype,coursetitle,coursecategory) VALUES
         ('${theuserinfo.Email}','${theuserinfo.courcetype}','${theuserinfo.Coursetitle}','${theuserinfo.courseCategory}')`);
        // const result = await sql.query(`INSERT INTO courses (courcetype,coursetitle,coursecategory) VALUES
        //  ('hello','hello','hello')`);
        console.log("ffffffffffff");
        console.log(result.recordset);
        return 'every thing ok';
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

exports.addcourse = addcourse;


async function getCourseByEmail(Email) {
    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log("insid getCourseByEmail,Email=" + Email);
        // query to the database and get the records
        const result = await sql.query(`select * from courses where Email ='${Email}'`)
        console.log("getCourseByEmail  from the DB" + result.recordset);
        return result.recordset
    }
    catch (err) {
        console.log(err);
        return "oh no";
    }
}

exports.getCourseByEmail = getCourseByEmail;

async function getCourseByid(id) {
    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(id);
        // query to the database and get the records
        const result = await sql.query(`select * from courses where id ='${id}'`)
        console.log(result.recordset[0]);
        return result.recordset[0]
    }
    catch (err) {
        console.log(err);
        return "oh no";
    }
}

exports.getCourseByid = getCourseByid;


async function updatecourse(id, userinfo) {

    try {
        await connect
        // create Request object
        console.log('!!!!!!!!!!!!!!!!!!!');
        console.log(userinfo);
        console.log(id);
        // const userbyEmail = getUserByEmail(theEmail)
        // console.log(userbyEmail);
        const result = await sql.query(`UPDATE  courses
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

exports.updatecourse = updatecourse;


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
