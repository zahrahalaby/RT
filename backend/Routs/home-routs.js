const Repositoryhome = require('../Repository/Repositoryhome')
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


// get headqout
router.get("/headqout", isDevelopment ? cors() : nothing(), (req, res) => {
    res.send(Repositoryhome.getheadqout(req.body))
})

// get card
router.get("/card", isDevelopment ? cors() : nothing(), (req, res) => {
    res.send(Repositoryhome.getcard(req.body))
})

// get categoriesItems
router.get("/categoriesItems", isDevelopment ? cors() : nothing(), (req, res) => {
    res.send(Repositoryhome.getcategoriesItems(req.body))
})

// get shop
router.get("/shop", isDevelopment ? cors() : nothing(), (req, res) => {
    res.send(Repositoryhome.getshop(req.body))
})


module.exports = router;