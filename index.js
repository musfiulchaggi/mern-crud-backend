const express = require('express');
const mongoose = require('mongoose');
const app = express()
const Product = require("./models/product.model");
const productRoutes = require("./routes/product.route");
const cors = require('cors');

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));// for form data

// Cors
app.use(cors({
    origin: '*',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));


// routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Hello World')
})

// app.post('/api/products', async (req, res) => {
//     // console.log(req.body);
//     // res.send(req.body);

//     try{
//        const product = await Product.create(req.body);
//        res.status(201).json({data: product});
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/products', async (req, res) => {
//     try{
//         const products = await Product.find();
//         res.status(200).json({data: products});
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/products/:id', async (req, res) => {
//     try{
//         const product = await Product.findById(req.params.id);
//         if(!product){
//             return res.status(404).json({message: "Product not found"});
//         }
//         res.status(200).json({data: product});
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// // update product
// app.put('/api/products/:id', async (req, res) => {
//     try{

//         const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true
//         });

//         if(!product){
//             return res.status(404).json({message: "Product not found"});
//         }

//         res.status(200).json({data: product});
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }   
// }
// );

// // delete product
// app.delete('/api/products/:id', async (req, res) => {
//     try{
//         await Product.findByIdAndDelete(req.params.id);
//         if(!product){
//             return res.status(404).json({message: "Product not found"});
//         }
//         res.status(200).json({message: "Product deleted successfully"});
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

mongoose.connect("mongodb+srv://musfiulchaggi:ZL!VGFVBDV8Pkyz@backenddb.8lbwan7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDBnp")
.then(() => {   
    console.log("Connected to database!");
    app.listen(3000, () => console.log('Server running on port 3000'));
    })
.catch(() => {  
    console.log("Connection failed!");
    });
