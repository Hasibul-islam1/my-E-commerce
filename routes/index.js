var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RAFCART' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

/*GET ACCOUNT PAGE .*/
 router.get("/account",(req,res,next)=>{
res.render("account",{title: "account" })
 });
//  get Profile Information page
router.get("/profileInfo",(req,res,next)=>{
  res.render("profileInfo",{title:"profileInfo"})
})
//  get change password page
router.get("/changepassword",(req,res,next)=>{
  res.render("changepassword",{title:"changepassword"})
})

//  get Manage Address page
router.get("/manageAddress",(req,res,next)=>{
  res.render("manageAddress",{title:"manageAddress"})
})
//  get cart  page
router.get("/cart",(req,res,next)=>{
  res.render("cart",{title:"cart"})
})
// get wish page 
router.get("/wish",(req,res,next)=>{
res.render("wish",{title:"wish"})
})
// get checkout page
router.get("/checkout",(req,res,next)=>{
  res.render("checkout",{title:"checkout"})
})
// get oder complete page
router.get("/odercomplete",(req,res,next)=>{
  res.render("odercomplete",{title:"oder-complete"})
})
// get contact us  page
router.get("/contact",(req,res,next)=>{
  res.render("contact",{title:"contact us"})
})
// get about us  page
router.get("/about",(req,res,next)=>{
  res.render("about",{title:"about us"})
})
module.exports = router;
