const RepositoryFoot = require('../Repository/RepositoryFoot')
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


// get Nav
router.get("/Foot", isDevelopment ? cors() : nothing(), (req, res) => {
    res.send(RepositoryFoot.GetFoot(req.body))
})

module.exports = router;