const mongoose = require('mongoose')

const ReviewModel = mongoose.Schema(
    {
        rating: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        review: {
            type: String,
            required: true
        },
        productId: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)


const Review = mongoose.model('Review', ReviewModel)

module.exports = Review