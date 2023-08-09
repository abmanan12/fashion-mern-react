const express = require('express');
const router = express.Router();

const Review = require('../models/reviewsSchema');


// publish review route
router.post('/reviews', async (req, res) => {

    try {

        const review = new Review(req.body)
        await review.save()

        res.status(201).json('Uplaoded Successfully')

    }
    catch (error) {
        res.status(500).json(error);
    }

})


// get reviews route
router.get('/getReviews/:id', async (req, res) => {

    const productId = req.params.id;

    try {

        const reviews = await Review.find({ productId: productId })

        if (reviews.length === 0) {
            res.status(200).json('No reviews found')
        }
        else {
            res.status(200).json(reviews)
        }


    }
    catch (error) {
        res.status(500).json(error);
    }

})


module.exports = router;
