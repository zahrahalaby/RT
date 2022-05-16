let headqout = require('../JSONs/Home').headqout
let card = require('../JSONs/Home').card
let categoriesItems = require('../JSONs/Home').categoriesItems
let shop = require('../JSONs/Home').shop

//Get All headqout
const getheadqout = () => {
    return headqout;
};
exports.getheadqout = getheadqout;

//Get All card
const getcard = () => {
    return card;
};
exports.getcard = getcard;

//Get All categoriesItems
const getcategoriesItems = () => {
    return categoriesItems;
};
exports.getcategoriesItems = getcategoriesItems;

//Get All shop
const getshop = () => {
    return shop;
};
exports.getshop = getshop;