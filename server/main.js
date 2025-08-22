const mongoose = require('mongoose');
var express = require("express");
var app = express();
var cors = require("cors");
const multer = require('multer');
const bodyParser = require("body-parser");
app.use("/public", express.static("public"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const path = require("path");
const { Collection, MongoClient } = require('mongodb');
const { error } = require('console');
const { url } = require('inspector');
const { response } = require('express');
const nodemailer = require('nodemailer');



/* Connection to Database*/
mongoose.connect('mongodb://localhost:27017/grow_smart', {

})
    .then(() => {
        console.log("Sucessfully Connect to MongoDB.");
    })
    .catch((err) => {
        console.error("Connection err", err);
        process.exit();
    })
/* end of Connection to */


const MyDataSchema = new mongoose.Schema({
    u_firstname: String,
    u_lastname: String,
    u_mob: Number,
    u_dob: Date,
    u_gender: String,
    u_email: String,
    u_password: String,
})

const MyDataSchema1 = new mongoose.Schema({
    post_title: String,
    post_decrisption: String,
    post_extradecrisption: String,

    post_subtitle: String,
    post_subdecrisption: String,
    post_file: String,
    postpdffile:String,
    post_upload_date: String,
    post_price:String,
    post_type: String,

})

const MyDataSchema2 = new mongoose.Schema({
    cartemail: String,
    product_id: String,
    productcurentval: String,
    productinitval: String,
   productqty:String ,
   post_title:String,
   post_file:String,

})

const MyDataSchema3 = new mongoose.Schema({

    product_id: String,
    product_title:String,
    number_of_products: String,
    price_of_product: String,
    purchase_date: String,
    u_email:String,
    post_img:String,
    p_name:String,
    p_mob:String,
    p_pincode:String,
    p_houseno:String,
    p_setarea:String,
    p_setlamdmark:String,
    p_setstate:String,
    p_setdistrict:String,
   

})



const MyDataSchema4 = new mongoose.Schema({
  product_id: String,
    u_email: String,
    u_firstname: String,
    reviews: String,
    upload_date: String,
  

})


const MyDataSchema5 = new mongoose.Schema({
    equipment_title: String,
    equipment_decrisption: String,
    equipment_price: Number,
    qeuipment_file: String,

})

const MyDataSchema6 = new mongoose.Schema({
    Payment_id: Number,
    Payment_type: String,
    Payment_Price: Number,
    Product_id: Number,
    payment_date: Date,

})

const MyDataSchema7 = new mongoose.Schema({
    Review_id: Number,
    u_id: Number,
    Review_decrisption: String,
    Review_responce: String,
    date_of_Review: Date,
    date_of_Responce: Date,

})
const MyDataSchema8 = new mongoose.Schema({

    setnamecontact: String,
    setemailcontact: String,
    setphonecontact: String,
    setsubjectcontact: String,
    setmessagecontact: String,
})

const Registration = mongoose.model('Registration', MyDataSchema);
const create_post = mongoose.model('create_post', MyDataSchema1);
const cart = mongoose.model('Cart', MyDataSchema2);
const payment = mongoose.model('payment', MyDataSchema3);
const review = mongoose.model('review', MyDataSchema4);
const equipment = mongoose.model('equipment', MyDataSchema5);
const products = mongoose.model('products', MyDataSchema6);
const subsidies = mongoose.model('subsidies', MyDataSchema7);


const Contactus = mongoose.model('Contactus', MyDataSchema8)


///////////////////////STATIC  ENTRY///////////////////

// const myregister = new  Registration({u_firstname : 'admin',u_lastname : 'admin' , u_mob : '1111111' ,u_email : 'admin1@.com' , u_password : 'admin'});
//  myregister.save();
///////////////////////REGISTRATON USER///////////////////


app.post('/api/registration1', async (req, resp) => {
    console.log("data aaye");
    var u_firstname = req.body.u_firstname;
    console.log(u_firstname);
    var u_lastname = req.body.u_lastname;
    var u_gender = req.body.u_gender;
    console.log(u_gender)
    var u_mob = req.body.u_mob
    var u_dob = req.body.u_dob;
    var u_email = req.body.u_email;
    var u_password = req.body.u_password;

    try {
        const check =await Registration.findOne({u_email:u_email})
        if (check) {
           
         console.log("exist");
         resp.send({ msg: "User already exists" });
        }
        else {
            await Registration.insertMany({
                u_firstname: u_firstname, u_lastname: u_lastname, u_gender: u_gender
                , u_mob: u_mob, u_dob: u_dob, u_email: u_email,
                u_password: u_password
            });
            insert.save(function (err, res) {
                if (err) throw err;

                resp.json();
            });

        }
    } catch(e) {
           resp.json("noexists");

     }
}
);///////////////////////LOGIN USER///////////////////
app.post('/api/loginuser', async(req, resp) => {

    var u_email = req.body.u_email;
    console.log(u_email);
    var u_password = req.body.u_password;
    console.log(u_password);
   
try{
   const check = await Registration.find({u_email:u_email ,u_password:u_password});
   console.log(check);
   if(check.length > 0){
  
    
   // console.log("Login Sucessful");
    //console.log(Registration._id)
    resp.send(check);
    //console.log(_id)
   }
   else{

     console.log("wrong id password")
     resp.send({msg:"Wrong id password"})
   }

    }
catch{
    resp.json("noexists");
}    
   
});

///////////////////////LOGIN ADMIN///////////////////
app.post('/api/loginadmin', async(req, resp) => {

    var u_email = req.body.u_email;
   
    var u_password = req.body.u_password;
   
   
try{
   
 if(u_email=="admin1@123.com" && u_password=="Admin@123"){
  
    console.log(u_email)
   // console.log("Login Sucessful");
    //console.log(Registration._id)
    resp.send(check);
    //console.log(_id)
   }
   else{

     console.log("wrong id password")
     resp.send({msg:"Wrong id password"})
   }

    }
catch{
    resp.json("noexists");
}    
   
});
///////////////////////PROFILE CHANGE PASSWORD///////////////////
app.post('/api/change_password',async(req, resp)=>{
var u_password= req.body.u_password
console.log(u_password)
var u_email=req.body.u_email
console.log(u_email)
var new_pass= req.body.new_pass
console.log(new_pass)
try{
let updateprofile = await Registration.findOne({u_email:u_email,u_password:u_password})
if(updateprofile){
   let  updt= await Registration.updateOne({u_email:u_email},{$set:{
             u_password:new_pass
     }})
     resp.send(updt)
}else{
   resp.send({msg:"not updated"})
}
}
catch{
    resp.json("noexists");
}
})
///////////////////////PROFILE UPDATE  USER DATA///////////////////
app.post('/api/update_profile',(req, resp)=>{
    var _id =req.body._id
    console.log(_id);
    var new_name = req.body.new_name
    console.log(new_name);
    var new_dob = req.body.new_dob
    console.log(new_dob)
    var u_mob = req.body.new_phone
    console.log(u_mob)
   
    var u_password= req.body.pass1
    console.log(u_password)
   
    try{
    let updateprofilee =  Registration.findOne({_id:_id,u_password:u_password})
    if(updateprofilee.length>0){
        let updateOne= new Registration({_id:_id, u_password:u_password },{$set:{
            u_firstname:new_name,u_mob:u_mob,u_email:u_email
        }})
        resp.send(updt);
    }
    else{
        resp.send({msg:"Password is incorrect enter valid password"})
    }
}

catch{
    resp.json("noexists");
}
})

///////////////////////CONTACT US///////////////////
app.post('/api/Contact_submit', (req, resp) => {
    
    var setnamecontact = req.body.setnamecontact;
   
    var setemailcontact = req.body.setemailcontact;

    var setphonecontact = req.body.setphonecontact;
    var setsubjectcontact = req.body.setsubjectcontact;
    var setmessagecontact = req.body.setmessagecontact;

    const insert = new Contactus({
        setnamecontact: setnamecontact,
        setemailcontact: setemailcontact,
        setphonecontact: setphonecontact, setsubjectcontact: setsubjectcontact, setmessagecontact: setmessagecontact
    })
    insert.save(function (err, res) {
        if (err) throw err;
        resp.send({ message: "Done !!!" })
    })

})
///////////////////Alll post//////////////////


app.get("/api/allpostlist",(req,resp)=>{
  create_post.find().then(data=>{
    resp.send(data);
  })

})

////////////////////////////////////////////////Search bar//////////////////////////////////////////////////////////////////////////////

app.post("/api/findword", async(req,resp)=>{
  
    
    var srch = req.body.srch;
    // var MongoClient = require('mongodb').MongoClient;
    // var url = "mongodb://localhost:27017/grow_smart";
    // const mongodb=require('mongodb');
    // const ObjectID = require('mongodb').ObjectId;
    // const client= new MongoClient(url);
    // client.connect();

    // var db = client.db('grow_smart');
    // db.collection("create_posts").find({"post_title":/varun/}).pretty()
    // const serah=new RegExp(searchword,"i");
   


    const search= new RegExp(srch,"i");
   
  let srchword =await create_post.find({post_title:search})
       
        if(srchword){
           console.log(srchword)
            resp.send(srchword);
        }
        else{
            resp.send({msg:"Search Not Found"})
        }
})




const storage=multer.diskStorage({
    destination:path.join(__dirname,'./public/'),
    filename: function(req, file, callback) {
        callback(null,  Date.now() + '-' + path.extname(file.originalname))
}
},

);


 
//////////////////////////////////////////////////////////Upload_Agriculture/////////////////////////////////////////////////////////////

 var upload1=multer({storage:storage});
 var multi=upload1.fields([{name:'rp_image'}]);


app.post("/api/upload_agriculture",multi,(req,resp)=>{
    
    if(req.files){
        console.log("Agriculture");
    var a = req.body.A_title;
    var b = req.body.A_description;
    var bb= req.body.A_extradescription;
    const c = req.files.rp_image[0];
    var fn=c.filename;
    var d = req.body.upload_date;
    var e = req.body.type;
    var f = req.body.A_subtitle;
    var g = req.body.A_subdescription;
    console.log(fn);

              const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:bb ,post_file:fn,post_upload_date:d,post_type:e,post_subtitle:f,post_subdecrisption:g});
     
          insert.save(function (err) {
            if (err) return handleError(err);
            resp.send({message:"Done!!!!"});
            // saved!
             })
       
      }
    });


app.get('/api/mainpost',(req,resp)=>{
    
    var _id = req.query._id
    // console.log(_id)
    create_post.find({_id:_id}).then(data =>{
        resp.send(data)
    })

    
})




//////////////////////////////////////////////////////////Manage_Agriculture/////////////////////////////////////////////////////////////


app.get('/api/agriculture_fetch', (req,resp)=>{
 
    create_post.find({post_type:0})
    .then(data => {
       
        resp.send(data);
     })
     
});



app.post('/api/get_agriculture_fetch', (req, res) => {
const ObjectID = require('mongodb').ObjectId;
console.log("Agricutlure");
var id = req.body.id;
console.log(id);
create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
 console.log(data);
 console.log("1");
 res.json(data);
}).catch(error => {
   console.log("exit");
   console.log(error);
 
 res.status(500).send('Error retrieving data from database');
});
});



app.post('/api/updated_agriculture', (req, res) => {

const ObjectID = require('mongodb').ObjectId;
var id = req.body.id;
var post_title1 = req.body.post_title1;
var post_description1 = req.body.post_description1;
var post_description_etc= req.body.post_description_etc;
var post_subtitle1 = req.body.post_subtitle1;
var post_subdescription1 = req.body.post_subdescription1;

console.log(id);

create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_extradecrisption:post_description_etc,post_subtitle:post_subtitle1,post_subdescription:post_subdescription1}},

(err, result)=> {

if(err)throw err;

console.log(result);
res.send('');
}             
);

});


app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) 
{
if (err) throw err;
 client.close();
});

});





//////////////////////////////////////////////////////////Upload_Fruit/////////////////////////////////////////////////////////////


    var upload2=multer({storage:storage});
    var multi=upload2.fields([{name:'F_image'}]);

    app.post("/api/upload_fruit",multi,(req,resp)=>{
    
        if(req.files){
            console.log("Fruit");
        var a = req.body.F_title;
        var b = req.body.F_description;
        var bb= req.body.F_extradescription;
        const c = req.files.F_image[0];
        var fn=c.filename;
        var d = req.body.upload_date;
        var e = req.body.type;
        var f = req.body.F_subtitle;
        var g = req.body.F_subdescription;
        console.log(fn);

                  const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:bb,post_file:fn,post_upload_date:d,post_type:e,post_subtitle:f,post_subdecrisption:g});
         
              insert.save(function (err) {
                if (err) return handleError(err);
                resp.send({message:"Done!!!!"});
                // saved!
                 })
           
          }
        });


//////////////////////////////////////////////////////////Manage_Fruit/////////////////////////////////////////////////////////////


app.get('/api/fruit_fetch', (req,resp)=>{
 
    create_post.find({post_type:1})
    .then(data => {
       
        resp.send(data);
     })
     
});


app.post('/api/get_fruit_fetch', (req, res) => {
    const ObjectID = require('mongodb').ObjectId;
    console.log("Fruit");
    var id = req.body.id;
    console.log(id);
    create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
      console.log(data);
      console.log("1");
      res.json(data);
    }).catch(error => {
        console.log("exit");
        console.log(error);
      
      res.status(500).send('Error retrieving data from database');
    });
  });



  app.post('/api/updated_fruit', (req, res) => {
    
    const ObjectID = require('mongodb').ObjectId;
    var id = req.body.id;
    var post_title1 = req.body.post_title1;
    var post_description1 = req.body.post_description1;
    var post_description_etc= req.body.post_description_etc;
    var post_subtitle1 = req.body.post_subtitle1;
    var post_subdescription1 = req.body.post_subdescription1;
    
    console.log(id);
    
    create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_extradecrisption:post_description_etc,post_subtitle:post_subtitle1,post_subdescription:post_subdescription1}},
     
    (err, result)=> {
    
     if(err)throw err;
     
     console.log(result);
     res.send('');
     }             
    );
   
 });



app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
if (err) throw err;
 client.close();
});

});


//////////////////////////////////////////////////////////Upload_Vegetable/////////////////////////////////////////////////////////////




var upload3=multer({storage:storage});
var multi=upload3.fields([{name:'V_image'}]);

app.post("/api/upload_vegetable",multi,(req,resp)=>{

    if(req.files){
        console.log("Vegetable");
    var a = req.body.V_title;
    var b = req.body.V_description;
    var bb= req.body.V_extradescription;
    const c = req.files.V_image[0];
    var fn=c.filename;
    var d = req.body.upload_date;
    var e = req.body.type;
    var f = req.body.V_subtitle;
    var g = req.body.V_subdescription;
    console.log(fn);

              const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:bb,post_file:fn,post_upload_date:d,post_type:e,post_subtitle:f,post_subdecrisption:g});
     
          insert.save(function (err) {
            if (err) return handleError(err);
            resp.send({message:"Done!!!!"});
            // saved!
             })
       
      }
    });


//////////////////////////////////////////////////////////Manage_vegetable/////////////////////////////////////////////////////////////


app.get('/api/vegetable_fetch', (req,resp)=>{
 
    create_post.find({post_type:2})
    .then(data => {
       
        resp.send(data);
     })
     
});



app.post('/api/get_vegetable_fetch', (req, res) => {
    const ObjectID = require('mongodb').ObjectId;
    console.log("Vegetable");
    var id = req.body.id;
    console.log(id);
    create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
      console.log(data);
      console.log("1");
      res.json(data);
    }).catch(error => {
        console.log("exit");
        console.log(error);
      
      res.status(500).send('Error retrieving data from database');
    });
  });



  app.post('/api/updated_vegetable', (req, res) => {
    
    const ObjectID = require('mongodb').ObjectId;
    var id = req.body.id;
    var post_title1 = req.body.post_title1;
    var post_description1 = req.body.post_description1;
    var post_description_etc= req.body.post_description_etc;
    var post_subtitle1 = req.body.post_subtitle1;
    var post_subdescription1 = req.body.post_subdescription1;
    
    console.log(id);
    
    create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_extradecrisption:post_description_etc,post_subtitle:post_subtitle1,post_subdescription:post_subdescription1}},
     
    (err, result)=> {
    
     if(err)throw err;
     
     console.log(result);
     res.send('');
     }             
    );
   
 });


app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
if (err) throw err;
 client.close();
});

});



    //////////////////////////////////////////////////////////Upload_Gardening/////////////////////////////////////////////////////////////



    var upload4=multer({storage:storage});
    var multi=upload4.fields([{name:'G_image'}]);
    
    app.post("/api/upload_gardening",multi,(req,resp)=>{
    
        if(req.files){
            console.log("Gardening");
        var a = req.body.G_title;
        var b = req.body.G_description;
        var bb= req.body.G_extradescription;
        const c = req.files.G_image[0];
        var fn=c.filename;
        var d = req.body.upload_date;
        var e = req.body.type;
        var f = req.body.G_subtitle;
        var g = req.body.G_subdescription;

        console.log(fn);
    
                  const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:bb,post_file:fn,post_upload_date:d,post_type:e,post_subtitle:f,post_subdecrisption:g});
         
              insert.save(function (err) {
                if (err) return handleError(err);
                resp.send({message:"Done!!!!"});
                // saved!
                 })
           
          }
        });

  //////////////////////////////////////////////////////////Manage_Gardening/////////////////////////////////////////////////////////////


  app.get('/api/gardening_fetch', (req,resp)=>{
 
    create_post.find({post_type:3})
    .then(data => {
       
        resp.send(data);
     })
     
});


app.post('/api/get_gardening_fetch', (req, res) => {
    const ObjectID = require('mongodb').ObjectId;
    console.log("Gardening");
    var id = req.body.id;
    console.log(id);
    create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
      console.log(data);
      console.log("1");
      res.json(data);
    }).catch(error => {
        console.log("exit");
        console.log(error);
      
      res.status(500).send('Error retrieving data from database');
    });
  });



  app.post('/api/updated_gardening', (req, res) => {
    
    const ObjectID = require('mongodb').ObjectId;
    var id = req.body.id;
    var post_title1 = req.body.post_title1;
    var post_description1 = req.body.post_description1;
    var post_description_etc= req.body.post_description_etc;
    var post_subtitle1 = req.body.post_subtitle1;
    var post_subdescription1 = req.body.post_subdescription1;
    
    console.log(id);
    
    create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_extradecrisption:post_description_etc,post_subtitle:post_subtitle1,post_subdescription:post_subdescription1}},
     
    (err, result)=> {
    
     if(err)throw err;
     
     console.log(result);
     res.send('');
     }             
    );
   
 });

app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
if (err) throw err;
 client.close();
});

});

 
//////////////////////////////////////////////////////////Upload_Fertilizer/////////////////////////////////////////////////////////////


var upload5=multer({storage:storage});
var multi=upload5.fields([{name:'Fe_image'}]);


app.post("/api/upload_fertilizer",multi,(req,resp)=>{
   
   if(req.files){
       console.log("Fertilizer");
   var a = req.body.Fe_title;
   var b = req.body.Fe_description;
   var bb= req.body.Fe_extradescription;
   const c = req.files.Fe_image[0];
   var fn=c.filename;
   var d = req.body.upload_date;
   var e = req.body.type;
   var f = req.body.Fe_subtitle;
    var g = req.body.Fe_subdescription;
   console.log(fn);

             const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:bb,post_file:fn,post_upload_date:d,post_type:e,post_subtitle:f,post_subdecrisption:g});
    
         insert.save(function (err) {
           if (err) return handleError(err);
           resp.send({message:"Done!!!!"});
           // saved!
            })
      
     }
   });


//////////////////////////////////////////////////////////Manage_Fertilizer/////////////////////////////////////////////////////////////

app.get('/api/fertilizer_fetch', (req,resp)=>{
 
    create_post.find({post_type:4})
    .then(data => {
       
        resp.send(data);
     })
     
});


app.post('/api/get_fertilizer_fetch', (req, res) => {
    const ObjectID = require('mongodb').ObjectId;
    console.log("Fertilizer");
    var id = req.body.id;
    console.log(id);
    create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
      console.log(data);
      console.log("1");
      res.json(data);
    }).catch(error => {
        console.log("exit");
        console.log(error);
      
      res.status(500).send('Error retrieving data from database');
    });
  });



  app.post('/api/updated_fertilizer', (req, res) => {
    
    const ObjectID = require('mongodb').ObjectId;
    var id = req.body.id;
    var post_title1 = req.body.post_title1;
    var post_description1 = req.body.post_description1;
    var post_description_etc= req.body.post_description_etc;
    var post_subtitle1 = req.body.post_subtitle1;
    var post_subdescription1 = req.body.post_subdescription1;
    
    console.log(id);
    
    create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_extradecrisption:post_description_etc,post_subtitle:post_subtitle1,post_subdescription:post_subdescription1}},
     
    (err, result)=> {
    
     if(err)throw err;
     
     console.log(result);
     res.send('');
     }             
    );
   
 });


app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
if (err) throw err;
 client.close();
});

});


//////////////////////////////////////////////////////////Upload_Disease/////////////////////////////////////////////////////////////



 var upload6=multer({storage:storage});
 var multi=upload6.fields([{name:'D_image'}]);


app.post("/api/upload_disease",multi,(req,resp)=>{
    
    if(req.files){
        console.log("Disease");
    var a = req.body.D_title;
    var b = req.body.D_description;
    var bb= req.body.D_extradescription;
    const c = req.files.D_image[0];
    var fn=c.filename;
    var d = req.body.upload_date;
    var e = req.body.type;
    var f = req.body.D_subtitle;
    var g = req.body.D_subdescription;
    console.log(fn);

              const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:bb,post_file:fn,post_upload_date:d,post_type:e,post_subtitle:f,post_subdecrisption:g});
     
          insert.save(function (err) {
            if (err) return handleError(err);
            resp.send({message:"Done!!!!"});
            // saved!
             })
       
      }
    });

//////////////////////////////////////////////////////////Manage_Disease/////////////////////////////////////////////////////////////



app.get('/api/disease_fetch', (req,resp)=>{

    create_post.find({post_type:5})
    .then(data => {
       
        resp.send(data);
     })
     
});


app.post('/api/get_disease_fetch', (req, res) => {
    const ObjectID = require('mongodb').ObjectId;
    console.log("Diease");
    var id = req.body.id;
    console.log(id);
    create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
      console.log(data);
      console.log("1");
      res.json(data);
    }).catch(error => {
        console.log("exit");
        console.log(error);
      
      res.status(500).send('Error retrieving data from database');
    });
  });



  app.post('/api/updated_disease', (req, res) => {
    
    const ObjectID = require('mongodb').ObjectId;
    var id = req.body.id;
    var post_title1 = req.body.post_title1;
    var post_description1 = req.body.post_description1;
    var post_description_etc= req.body.post_description_etc;
    var post_subtitle1 = req.body.post_subtitle1;
    var post_subdescription1 = req.body.post_subdescription1;
    
    console.log(id);
    
    create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_extradecrisption:post_description_etc,post_subtitle:post_subtitle1,post_subdescription:post_subdescription1}},
     
    (err, result)=> {
    
     if(err)throw err;
     
     console.log(result);
     res.send('');
     }             
    );
   
 });


app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
if (err) throw err;
 client.close();
});

});

//////////////////////////////////////////////////////////Upload_Product/////////////////////////////////////////////////////////////



var upload7=multer({storage:storage});
var multi=upload7.fields([{name:'P_image'}]);


app.post("/api/upload_product",multi,(req,resp)=>{
   
   if(req.files){
       console.log("Product");
   var a = req.body.P_title;
   var b = req.body.P_description;
   var p = req.body.P_extradescription;
   const c = req.files.P_image[0];
   var fn=c.filename;
   var d = req.body.upload_date;
   var e = req.body.type;
   var f = req.body.P_price;
   
   console.log(fn);                                                                                                         

             const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:p,post_file:fn,post_upload_date:d,post_type:e,post_price:f});
    
         insert.save(function (err) {
           if (err) return handleError(err);
           resp.send({message:"Done!!!!"});
           // saved!
            })
      
     }
   });    
//////////////////////////////////////////////////////////Manage_Product/////////////////////////////////////////////////////////////


app.get('/api/product_fetch', (req,resp)=>{
 
    create_post.find({post_type:6})
    .then(data => {
       
        resp.send(data);
     })
     
});


app.post('/api/get_product_fetch', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  console.log("product");
  var id = req.body.id;
  console.log(id);
  create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
    console.log(data);
    console.log("1");
    res.json(data);
  }).catch(error => {
      console.log("exit");
      console.log(error);
    
    res.status(500).send('Error retrieving data from database');
  });
});



app.post('/api/updated_product', (req, res) => {
  
  const ObjectID = require('mongodb').ObjectId;
  var id = req.body.id;
  var post_title1 = req.body.post_title1;
  var post_description1 = req.body.post_description1;
  var post_price1= req.body.post_price1;
  
  
  console.log(id);
  
  create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_price:post_price1}},
   
  (err, result)=> {
  
   if(err)throw err;
   
   console.log(result);
   res.send('');
   }             
  );
 
});



app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
if (err) throw err;
 client.close();
});

});


   //////////////////////////////////////////////////////////Upload_Equipment/////////////////////////////////////////////////////////////



 var upload8=multer({storage:storage});
 var multi=upload8.fields([{name:'E_image'}]);


app.post("/api/upload_equipment",multi,(req,resp)=>{
    
    if(req.files){
        console.log("Equipment");
    var a = req.body.E_title;
    var b = req.body.E_description;
    var bb= req.body.E_extradescription;
    const c = req.files.E_image[0];
    var fn=c.filename;
    var d = req.body.upload_date;
    var e = req.body.type;
    var f = req.body.E_price;
    console.log(fn);

              const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:bb,post_file:fn,post_upload_date:d,post_type:e,post_price:f});
     
          insert.save(function (err) {
            if (err) return handleError(err);
            resp.send({message:"Done!!!!"});
            // saved!
             })
       
      }
    });
//////////////////////////////////////////////////////////Manage_Equipment/////////////////////////////////////////////////////////////



app.get('/api/equipment_fetch', (req,resp)=>{
 
    create_post.find({post_type:7})
    .then(data => {
       
        resp.send(data);
     })
     
});



app.post('/api/get_equipment_fetch', (req, res) => {
  const ObjectID = require('mongodb').ObjectId;
  console.log("equipment");
  var id = req.body.id;
  console.log(id);
  create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
    console.log(data);
    console.log("1");
    res.json(data);
  }).catch(error => {
      console.log("exit");
      console.log(error);
    
    res.status(500).send('Error retrieving data from database');
  });
});



app.post('/api/updated_equipment', (req, res) => {
  
  const ObjectID = require('mongodb').ObjectId;
  var id = req.body.id;
  var post_title1 = req.body.post_title1;
  var post_description1 = req.body.post_description1;
  var post_price1= req.body.post_price1;
  
  
  console.log(id);
  
  create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_price:post_price1}},
   
  (err, result)=> {
  
   if(err)throw err;
   
   console.log(result);
   res.send('');
   }             
  );
 
});


app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
if (err) throw err;
 client.close();
});

});



    ////////////////////////productEquipmentmain list /////////////////////////////// 




      //////////////////////////////////////////////////////////Upload_Scheme/////////////////////////////////////////////////////////////



 var upload9=multer({storage:storage});
 var multi=upload9.fields([{name:'Sc_image'},{name:'Sc_pdffile'}]);


app.post("/api/upload_scheme",multi,(req,resp)=>{
    
    if(req.files){
        console.log("Scheme");
    var a = req.body.Sc_title;
    var b = req.body.Sc_description;
    var bb= req.body.Sc_extradescription;
    const c = req.files.Sc_image[0];
    var fn=c.filename;
    const pd = req.files.Sc_pdffile[0];
    var pfi=pd.filename;
    var d = req.body.upload_date;
    var e = req.body.type;
    var f = req.body.Sc_subtitle;
    var g = req.body.Sc_subdescription;
    console.log(fn);

              const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:bb,post_file:fn,
                postpdffile:pfi,post_upload_date:d,post_type:e,post_subtitle:f,post_subdecrisption:g});
     
          insert.save(function (err) {
            if (err) return handleError(err);
            resp.send({message:"Done!!!!"});
            // saved!
             })
       
      }
    });
//////////////////////////////////////////////////////////Manage_Scheme/////////////////////////////////////////////////////////////


app.get('/api/scheme_fetch', (req,resp)=>{
 
    create_post.find({post_type:8})
    .then(data => {
       
        resp.send(data);
     })
     
});


app.post('/api/get_scheme_fetch', (req, res) => {
    const ObjectID = require('mongodb').ObjectId;
    console.log("Scheme");
    var id = req.body.id;
    console.log(id);
    create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
      console.log(data);
      console.log("1");
      res.json(data);
    }).catch(error => {
        console.log("exit");
        console.log(error);
      
      res.status(500).send('Error retrieving data from database');
    });
  });



  app.post('/api/updated_scheme', (req, res) => {
    
    const ObjectID = require('mongodb').ObjectId;
    var id = req.body.id;
    var post_title1 = req.body.post_title1;
    var post_description1 = req.body.post_description1;
    var post_description_etc= req.body.post_description_etc;
    var post_subtitle1 = req.body.post_subtitle1;
    var post_subdescription1 = req.body.post_subdescription1;
    
    console.log(id);
    
    create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_extradecrisption:post_description_etc,post_subtitle:post_subtitle1,post_subdescription:post_subdescription1}},
     
    (err, result)=> {
    
     if(err)throw err;
     
     console.log(result);
     res.send('');
     }             
    );
   
 });


app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
if (err) throw err;
 client.close();
});

});


    //////////////////////////////////////////////////////////Upload_Subside/////////////////////////////////////////////////////////////



 var upload10=multer({storage:storage});
 var multi=upload10.fields([{name:'Su_image'},{name:'Su_pdffile'} ]);



app.post("/api/upload_subside",multi,(req,resp)=>{
    
    if(req.files){
        console.log("Subside");
    var a = req.body.Su_title;
    var b = req.body.Su_description;
    var bb= req.body.Sc_extradescription;
    const c = req.files.Su_image[0];
    var fn=c.filename; 
    const pd = req.files.Su_pdffile[0];
    var pfi=pd.filename;
    var d = req.body.upload_date;
    var e = req.body.type;
    var f = req.body.Su_subtitle;
    var g = req.body.Su_subdescription;
    console.log(fn);

              const insert = new create_post({ post_title:a,post_decrisption:b,post_extradecrisption:bb,post_file:fn,postpdffile:pfi,post_upload_date:d,post_type:e,post_subtitle:f,post_subdecrisption:g});
     
          insert.save(function (err) {
            if (err) return handleError(err);
            resp.send({message:"Done!!!!"});
            // saved!
             })
       
      }
    });

//////////////////////////////////////////////////////////Manage_Subside/////////////////////////////////////////////////////////////



app.get('/api/subside_fetch', (req,resp)=>{
 
    create_post.find({post_type:9})
    .then(data => {
       
        resp.send(data);
     })
     
});



app.post('/api/get_subside_fetch', (req, res) => {
    const ObjectID = require('mongodb').ObjectId;
    console.log("subside");
    var id = req.body.id;
    console.log(id);
    create_post.find({"_id": new ObjectID(id.toString())}).then(data => {
      console.log(data);
      console.log("1");
      res.json(data);
    }).catch(error => {
        console.log("exit");
        console.log(error);
      
      res.status(500).send('Error retrieving data from database');
    });
  });



  app.post('/api/updated_subside', (req, res) => {
    
    const ObjectID = require('mongodb').ObjectId;
    var id = req.body.id;
    var post_title1 = req.body.post_title1;
    var post_description1 = req.body.post_description1;
    var post_description_etc= req.body.post_description_etc;
    var post_subtitle1 = req.body.post_subtitle1;
    var post_subdescription1 = req.body.post_subdescription1;
    
    console.log(id);
    
    create_post.updateOne({"_id": new ObjectID(id.toString())},{$set:{post_title:post_title1,post_decrisption:post_description1,post_extradecrisption:post_description_etc,post_subtitle:post_subtitle1,post_subdescription:post_subdescription1}},
     
    (err, result)=> {
    
     if(err)throw err;
     
     console.log(result);
     res.send('');
     }             
    );
   
 });

app.post('/api/delete_button', (req,resp)=>{ 
var a = req.body.id;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/grow_smart";
const mongodb=require('mongodb');
const ObjectID = require('mongodb').ObjectId;
const client= new MongoClient(url);
client.connect();

var dbo = client.db('grow_smart');
dbo.collection("create_posts").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
if (err) throw err;
 client.close();
});

});

////////////////////////////////////////////////////////////Payment/////////////////////////////////////////////////////////////////////////



app.get('/api/payment_info', (req,resp)=>{
 
    payment.find({})
    .then(data => {
       
        resp.send(data);
     })
     
});



//Forgot Password
app.post('/api/forgot_password', async (req, resp) => {
    //console.log("data aaye");
    var u_email = req.body.u_email;
    //console.log(u_email);
console.log(u_email);
    try {
        const check =await Registration.findOne({u_email:u_email});
        console.log(check.length);
       var pwd=check.u_password;
       var nam= check.u_firstname;
console.log(pwd);
           
            console.log("HIIIII");
                //  var pwd=result[0].User_Password;
                var email=check.u_email;
                // console.log(pwd);
                console.log(u_email);
                const smtpTransport = nodemailer.createTransport({
                  host: "smtp.gmail.com",
                  port: 587,
                  secure: false,
                  auth: {
                    user: "growsmartmsu@gmail.com",
                    pass: "oqbuwpswuawsnslg",
                  },
                });
                const message = {
                  from: "growsmartmsu@gmail.com",
                  to: u_email,//email id
                
                  subject: "HMS",
                  text: "Hello, Admin Your Passwors is--->>,"
                  + pwd +".",
                  //html:"<h1>hi</h1>
                };
          
               smtpTransport.sendMail(message, (error, info) => {
                  if (error) {
                    console.error(error);
                  } else {
                    console.log("Email sent:", info.response);
                    resp.send({message:"Password Send on Email Id!!!"});
                  }
                });
              
          
        
       
    } catch(e) {
           resp.json("noexists");

     }
}
);


var imgg=multer({storage:storage});
var multi=upload2.fields([{name:'post_file'}]);

app.post('/api/addtocart', multi ,async(req, resp) => {
    var _id = req.body._id;
    console.log(_id)
   var u_email= req.body.u_email;
   console.log(u_email)
    var initval = req.body.initval;
    console.log(initval)
    var num =req.body.num
    console.log(num)
    var currentval=req.body.currentval
console.log(currentval)
   var post_title =req.body.post_title
   console.log(post_title)
  var post_file = req.body.post_file
  console.log(post_file)
try{
   const check = await cart.find({product_id:_id,cartemail:u_email});
   console.log(check);
 if(check.length>0){
    resp.send({msg:"already exist"})
   // console.log("Login Sucessful");
    //console.log(Registration._id)
    console.log("already exists")    
   }
   else{

    // resp.send({check});
    //console.log(_id)
   

const insert =  new cart({ 
    cartemail: u_email, product_id: _id, productinitval: initval
    , productqty: num,productcurentval:currentval,post_title:post_title,post_file:post_file
});
insert.save(function (err, res) {
    if (err) throw err;

    resp.json();
});   
}   }   
catch{
    resp.json("noexists");
}      
});


app.get('/api/cartlist', (req,resp)=>{
    
    var u_email = req.query.u_email;
 console.log(u_email)
//   var br=cart.aggregate([{
//     $lookup:{
//         from:"create_post",
//         localField:"product_id",
//         foreignField:"_id",
//         as:"result"
//     }
//   },
//   {
//     $replaceRoot: { newRoot: { $mergeObjects: [ { $arrayElemAt: [ "$result", 0 ] }, "$$ROOT" ] } }
//  },
//  { $project: { result: 0 } }
// ])
//    console.log(br)

    cart.find({cartemail:u_email.toString()})
    .then(data => {
       console.log(data)
        resp.send(data);
     })
     
});

app.get('/api/savecart', (req,resp)=>{
    var u_email= req.body.u_email;
  var currentval= req.body.currentval
  var initval=req.body.initval
  var num =req.body.num

   
       cart.updateOne({u_email:u_email,productcurentval:currentval, productinitval: initval,productqty: num})
       .then(data => {
          
           resp.send(data);
        })
        
   });


   
app.post('/api/removecart', (req,resp)=>{
    var product_id= req.body.product_id;
   console.log(product_id)
   
       cart.deleteOne({product_id:product_id.toString()})
       .then(data => {
          
           resp.send(data);
        })
        
   });

   app.post('/api/verify', (req, resp) => {
    console.log("1");
    var _id = req.body._id;
    console.log("2");
    var currentval = req.body.currentval;
    console.log("3");
    var titl = req.body.titl;
    console.log(titl)
    var num = req.body.num;
    var upload_date = req.body.upload_date;
    var p_name =req.body.p_name;
    var p_mob = req.body.p_mob;
    var p_pincode =req.body.p_pincode;
    var p_houseno = req.body.p_houseno;
    var p_setarea = req.body.p_setarea;
    var p_setlamdmark = req.body.p_setlamdmark;
    var p_setstate = req.body.p_setstate;  
    var p_setdistrict= req.body.p_setdistrict;
    var u_email= req.body.u_email;
    var post_img = req.body.primg

    const insert = new payment({
        product_id: _id,
        product_title: titl,
        number_of_products:num,
        price_of_product:currentval,
        purchase_date:upload_date,
        p_name:p_name,
        p_mob:p_mob,
        p_pincode:p_pincode,
        p_houseno:p_houseno,
        p_setarea:p_setarea,
        p_setlamdmark:p_setlamdmark,
        p_setstate:p_setstate,
        p_setdistrict:p_setdistrict,
        u_email: u_email,
        post_img:post_img
        
    })
    insert.save(function (err, res) {
        if (err) throw err;
        resp.send({ message: "Done !!!" })
    })

})

////////////////////////////////////////////////////////////Support/////////////////////////////////////////////////////////////////////////

app.get('/api/support_fetch', (req,resp)=>{
 
  Contactus.find({})
  .then(data => {
     
      resp.send(data);
   })
   
});




app.post('/api/delete_button_support', (req,resp)=>{ 
  var a = req.body.id;
  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://127.0.0.1:27017/grow_smart";
  const mongodb=require('mongodb');
  const ObjectID = require('mongodb').ObjectId;
  const client= new MongoClient(url);
  client.connect();
  
  var dbo = client.db('grow_smart');
  dbo.collection("contactus").deleteOne({"_id":new mongodb.ObjectId(a.toString())}, function(err, obj) {
  if (err) throw err;
   client.close();
  });
  
  });
//////////////////////////ADD REVIEW///////////////////////////
app.post("/api/addreview",(req,resp)=>{
  console.log('hoiii')
  var _id =req.body._id
  console.log(_id)
 var u_email= req.body.u_email;
 var u_firstname= req.body.u_firstname;
 var reviews = req.body.reviews;
 var upload_date= req.body.upload_date;
const insert = new review({
  product_id:_id,
  u_email:u_email , u_firstname:u_firstname , reviews:reviews, upload_date:upload_date
});
insert.save(function(err){
  if (err) throw (err)
  resp.send({message:"Done!!!!!"});
})
})

app.get("/api/showreview",(req, resp)=>{
var _id = req.query._id
console.log(_id)
review.find({product_id:_id.toString()}).then(data =>{
  console.log(data)
  resp.send(data)
})
})


app.get('/api/myorders',(req,resp)=>{
  var u_email = req.query.u_email
  payment.find({u_email:u_email.toString()}).then(data =>{
   
    resp.send(data)
  } )})


app.get('/api/recipt',(req, resp)=>{
 
  var id =req.query.id
  console.log(id)
  payment.findOne({product_id:id}).then(data=> {
    console.log(data)
    resp.send(data)
  })
})


app.listen(1137);

console.log("connected");