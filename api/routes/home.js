const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
const router = express.Router();                                                                                                            


router.get('/', (req, res, next) => {
   
   const products = {
      name: req.body.name,
  }
  const location = {
   name: req.body.namel,
}
  res.status(200).json({
     message:"Requested GET Successfull",
     data: products,
     location: location
  })
   // res.render("home",products);
});

module.exports = router;
