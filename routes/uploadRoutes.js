import express from "express";
import {   
  getPhotos, 
  deletePhoto, 
  submitPhotos, 
  getWedding,
  getBaptismal,
  getBirthday,
  getDebut,
  getKiddie,
  getGender,
  getCorporate,
} from "../controllers/uploadController.js";
import uploadMulter from "../middleware/multer.js";
import Upload from "../models/Upload.js";

const router = express.Router()


router.post("/save", uploadMulter.single("photo"), (req, res) => {
  try {
    const photo = req.file.filename
    if(photo){
      Upload.create({ photo })
      .then((data) => {
        console.log("uploaded successfully");
        console.log(data);
        res.send(data)
      })
    }  
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.route("/:id").delete(deletePhoto)
router.route('/submit').post(submitPhotos)

// get photos of event 
router.route('/photos').get(getPhotos)
router.route('/wedding').get(getWedding)
router.route('/corporate').get(getCorporate)
router.route('/gender').get(getGender)
router.route('/baptismal').get(getBaptismal)
router.route('/birthday').get(getBirthday)
router.route('/kiddie').get(getKiddie)
router.route('/debut').get(getDebut)

export default router