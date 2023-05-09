
const express = require('express');
var mysql      = require('mysql');
app =express()
app.use(express.json())
 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Dream@123',
  database : 'Portfolio'
});

connection.connect();
 app.get('/',(req,res)=>{
     connection.query('SELECT * from contactdetails', function (error, results) {
  if (error) {
      console.log(error);
  }
  console.log('The solution is: ', results);
  res.json(results)
});
 })
//  app.get('/:id',(req,res)=>{
    //  let id=req.params.id
    // connection.query('select * from contactdetails where id=?',[id],function (error, results) {
    //    if (error) {
    //        console.log(error);
    //    }
    //    res.json(results)
    //  });
// })
 app.get('/:contactname',(req,res)=>{
     connection.query('select * from contactdetails where contactname=?',[req.params.contactname],function (error, results) {
        if (error) {
            console.log(error);
        }
        res.json(results)
      });
 })

//===================================== post ================================

// ==========================correct syntax===============================

 app.post('/',(req,res)=>{
    connection.query('insert into contactdetails (contactname,email,message) values(?,?,?)',[req.body.contactname,req.body.email,req.body.message],function (error, results) {
       if (error) {
           console.log(error);
       }
       res.json(results)
     });
})
// app.post('/',(req,res)=>{
//     connection.query(`insert into contactdetails (contactname,email,message) values ('${req.body.contactname}','${req.body.email}','${req.body.message}')`,function (error, results) {
//        if (error) {
//            console.log(error);
//        }
//        res.json(results)
//      });
// })

// ===========================put=======================
app.put('/',(req,res)=>{
    connection.query('update contactdetails set contactname=?,email=?,message=? where id=?',[req.body.contactname,req.body.email,req.body.message,req.body.id],function (error, results) {
       if (error) {
           console.log(error);
       }
       res.json(results)
     });
})
app.listen(4000,()=>{

    console.log("listening port 3000")
    
    }) 

// connection.end();
