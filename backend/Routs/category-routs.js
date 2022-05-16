const Repositorycategory = require('../Repository/Repositorycategory')
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

// get paintig info
router.get("/paintig", isDevelopment ? cors() : nothing(), async (req, res) => {
    const result = await Repositorycategory.getpaintingcourses();
    console.log("@@!", result);
    res.send(result);
})


// get drawing info

router.get("/drawing", isDevelopment ? cors() : nothing(), async (req, res) => {
    // res.send(Repositorycategory.getdrawingcourses(req.params))
    // let Email = req.query["0"];
    // Email = 'zahra@gmail.com'

    const result = await Repositorycategory.getdrawingcourses();
    console.log("@@!", result);
    res.send(result);
});

module.exports = router;