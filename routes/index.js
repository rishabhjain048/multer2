var express = require('express');
var router = express.Router();
const User = require('../models/userSchema')
const upload = require('../utils/multer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', upload.single('image'), function(req, res, next) {
  const user = new User({
    name: req.body.name,
    image: req.file.filename
  })

  user.save().then(() => {
    res.redirect('/')
  }).catch((err) => {
    console.log(err)
  })
})

router.get('/collection', async function(req, res, next) {
  const collection = await User.findOne( )
  res.render('collection', { c
    : collection });
})

router.get('/updateprofile', async function(req, res, next) {
  const collection = await User.findOne( )
  res.render('updateprofile', { c: collection });
})
router.post('/update', upload.single('image'), async function(req, res, next) {
  const collection = await User.findOneUpdate({
    image: req.file.filename
  }) 
  collection.save().then(() => {
    res.redirect('/collection')
  }).catch((err) => {
    console.log(err)
  })
})

module.exports = router;
