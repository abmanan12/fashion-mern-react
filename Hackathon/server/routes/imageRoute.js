const express = require('express')

const router = express.Router()
const multer = require('multer')
const fs = require('fs')


const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },

    filename: (req, file, cb) => {
        cb(null, req.body.filename)
    }

})

const upload = multer({ storage: storage })


// upload image route
router.post('/uploadImage', upload.single('file'), (req, res) => {
    try {
        res.status(200).json('Image uploaded successfully')
    } catch (error) {
        res.status(500).json(error)
    }
})

// delete image route
router.post('/deleteImage', (req, res) => {

    const filename = req.body.image

    try {

        // Delete the image file
        fs.unlink(`public/images/${filename}`, (err) => {

            if (err) {
                res.status(500).json(err)
            }
            else {
                res.status(200).json('Image deleted successfully')
            }
        })

    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;
