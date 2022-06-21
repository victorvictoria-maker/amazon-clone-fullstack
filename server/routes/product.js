//this is organizing the APIs in a folder 

const router = require('express').Router();
const Product = require('../models/product.js');

// POST request which creates new products
router.post("/products", async(req, res) => {
    try {
        let product = new Product();

        product.title = req.body.title,
        product.description = req.body.description,
        product.photo = req.body.product,
        product.price = req.body.price,
        product.stockQuantity = req.body.stockQuantity,
        product.rating = req.body.rating

        await product.save();

        res.json({
            status: true,
            messsage: "Successfully saved"
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});


// GET request which gets all products


// GET request which gets just one product

// UPDATE request which updates a single product


// DELETE request which deletes a single product

module.exports = router;
