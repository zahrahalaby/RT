const Repositoryusers = require('../Repository/Repositoryusers')
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


// get users
router.get("/", isDevelopment ? cors() : nothing(), async (req, res) => {


    res.send(Repositoryusers.getusersInfo(req.body))

})

// get user by Email
router.get("/users", isDevelopment ? cors() : nothing(), async (req, res) => {

    console.log("//////////////////////");
    console.log(req.query);
    let Email = req.query["0"];
    // Email = 'zahra@gmail.com'
    console.log(Email);
    const result = await Repositoryusers.getUserByEmail(Email);
    console.log("@@!", result);
    res.send(result);
});



// post (add) new user in sign up
router.post("/signup", isDevelopment ? cors() : nothing(), async (req, res) => {
    console.log(req.body);
    Repositoryusers.addUser(req.body)

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

// update User
router.put("/upDate/:Email", isDevelopment ? cors() : nothing(), async (req, res) => {
    const isAllOK = await Repositoryusers.updateUser(req.body.Email, req.body);
    console.log(isAllOK + "allok");
    if (isAllOK === true) {
        res.send("successfully updated user");
    }
    else {
        res.send("unsuccessful to update ");
    }
});




// delete user by Email
router.delete("/Delete/:Email", isDevelopment ? cors() : nothing(), async (req, res) => {
    console.log(req.params);
    console.log(req.body.Email);
    let result = await Repositoryusers.deleteUserByEmail(req.params.Email)
    console.log(result);
    if (result === true) {
        res.send("deleted the user")
    }
    else {
        res.send("user with the provided Email does not exist")
    }
});

module.exports = router;
