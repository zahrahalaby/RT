const express = require('express');
const QuestionnaireRepository = require('../Repository/questionnaireRepository');
const router = express.Router();
const fs = require('fs');
const Excel = require('exceljs')
router.use(express.urlencoded({ extended: true }))
router.use(express.json());
const cors = require('cors');
router.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }))
var bodyParser = require('body-parser');
router.use(bodyParser.json())
router.use(cors())
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });




//get data by id
router.get("/data/:doc_id",(req,res)=>{
var docId=req.params.doc_id;
console.log("doId " + docId);
fs.readFile(`./files/${docId}.json`, (err, data) => {
if (err) console.log(err);;
let ques_data = JSON.parse(data);
console.log(req.params.doc_id)       
res.send(ques_data);
});
})

const path = require('path');



//get all data
router.get("/get_all_files",(req,res)=>{
const directoryPath = path.join(__dirname, '../files');
fs.readdir(directoryPath, function (err, files) {
if (err) {
    return console.log('Unable to scan directory: ' + err);
} 
res.send(files);
});


});


//add new data
router.post(`/add_questions/:doc_id`,(req,res)=>{
console.log(req.body);
var docs_data = req.body;
var name = req.params.doc_id
let data = JSON.stringify(docs_data);
fs.writeFileSync(`./files/${name}.json`, data);
})

//delete data by id
router.delete(`/delete_question/:doc_id`,(req,res)=>{
    var name = req.params.doc_id;
    fs.unlinkSync(`./files/${name}.json`);
})


module.exports = router;