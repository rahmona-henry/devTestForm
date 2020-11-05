const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('client'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','hbs')



///Get Routes/////
app.get('/', function (req,res) {
  res.send(index.html)
})

///Post Routes/////
app.post('https://forms.hubspot.com/uploads/form/v2/4014783/b5bd028f-9547-40e0-af6e-95fae78fa1bf', function(req,res){
    res.send(thankYou.html)
     })

///Listen Route///////

app.listen(3000, function(){
  console.log('We have lift off on port 3000')
})
