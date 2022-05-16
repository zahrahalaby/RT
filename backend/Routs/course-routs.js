const Repositorycourses = require('../Repository/Repositorycourses')
const express = require('express');
const router = express.Router();
const cors = require('cors');
const isDevelopment = true;
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
if (isDevelopment) {
    router.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
}
function non() {

}

// post (add) new user in sign up
router.post("/addcourse", isDevelopment ? cors() : nothing(), async (req, res) => {
    console.log(req.body);
    Repositorycourses.addcourse(req.body)

        .then((result) => {
            console.log('@@@', req.body, '@@@@');
            if (result === 'every thing ok') {
                res.send("added new user");

            }
            else {
                res.send("unsuccessful adding new user");
            }
            console.log(result);
        })
});



// get cours by Email
router.get("/Course", isDevelopment ? cors() : nothing(), async (req, res) => {
    console.log("//////////////////////");
    console.log(req[0]);
    let Email = req.query["0"];
    // Email = 'zahra@gmail.com'
    console.log(Email);
    const result = await Repositorycourses.getCourseByEmail(Email);
    console.log("@@!", result);
    res.send(result);
});

// router.get("/Courseid/:id", isDevelopment ? cors() : nothing(), async (req, res) => {
//     console.log("//////////////////////");
//     // console.log(req);
//     let id = req.query["0"];
//     // Email = 'zahra@gmail.com'
//     console.log(id);
//     const result = await Repositorycourses.getCourseByid(id);
//     console.log("@@!", result);
//     res.send(result);
// });


// update User

router.put("/upDate", isDevelopment ? cors() : nothing(), async (req, res) => {
    console.log(req.body);
    console.log(req.body.id + "idd");
    const isAllOK = await Repositorycourses.updatecourse(req.body.id, req.body);
    console.log("inside /upDate/:id isAllOK= " + isAllOK);
    if (isAllOK === true) {
        res.send("successfully updated user");
    }
    else {
        res.send("unsuccessful to update ");
    }
});


module.exports = router;

