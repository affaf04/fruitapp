require('dotenv').config()
const express = require('express')
const app = express()
const froots = require('./models/fruits')
const Fruit = require('./models/fruit')
const mongoose = require('mongoose');
const methodOverride = require('method-override');
app.set("view engine","jsx")
app.engine("jsx", require("express-react-views").createEngine())
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});
// --> Intercept reqRes proccess and manage dataFlow



// ---------------------------------[Middleware]


app.get('/fruits', (req,res)=>{
    Fruit.find({},(err,allFruits)=>{
        console.log("ALL_FRUITS:", allFruits)
        fruits: allFruits
        res.render('Index',{
            fruits: allFruits
        })
    })
})
// ----------------------------------[Index (R)]

app.get('/fruits/new',(req,res)=>{
    res.render('New')
})
// --------------------------------------[New]

app.post('/fruits',(req,res)=>{
    if(req.body.readyToEat === 'on'){ 
        req.body.readyToEat = true; 
    } else { 
        req.body.readyToEat = false; 
    }
    Fruit.create(req.body,(err, createdFruit)=>{
        console.log("Created Fruit: ",req.body)
        console.log(err)
    })
    res.redirect('/fruits')
    // ---> Add New Fruit to Existing DataSet
})
// ----------------------------------[POST (C)]


app.get('/fruits/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ 
      if(!err){
        res.render(
    		  'Edit',
    		{
    			fruit: foundFruit 
    		}
    	);
    } else {
      res.send({ msg: err.message })
    }
    });
});
// --------------------------------------[Edit]



app.put('/fruits/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit)=>{
       console.log(updatedFruit)
        res.redirect(`/fruits/${req.params.id}`);
    });
});
// -----------------------------------------------[PUT/PATCH (U)]



app.delete('/fruits/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id,(err, data)=>{
        res.redirect('/fruits')
    })
});
// --------------------------------------[Delete (D)]

app.get('/fruits/seed', (req, res)=>{
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});






app.get('/fruits/:id', (req,res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('Show',{
            fruit: foundFruit
        })
    });
})
// ----------------------------------[Show]



app.listen(3000,()=>{
    console.log("YerrOn3k")
})