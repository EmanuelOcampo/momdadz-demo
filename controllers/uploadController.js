import Upload from "../models/Upload.js";
import fs from "fs"
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// get Photos request per eventTypes
const getPhotos = async (req, res) => {
  const allPhotos = await Upload.find({eventType:null}).sort({ createdAt: "descending" })  
  res.send(allPhotos)
}

const getWedding = async (req, res)=>{
  const allWedding = await Upload.find({eventType:'wedding'}).sort({ createdAt: "descending" }) 
  res.send(allWedding)
}

const getCorporate = async (req, res)=>{
  const allCorporate = await Upload.find({eventType:'corporate'}).sort({ createdAt: "descending" }) 
  res.send(allCorporate)
}

const getBaptismal = async (req, res)=>{
  const allBaptismal = await Upload.find({eventType:'baptismal'}).sort({ createdAt: "descending" }) 
  res.send(allBaptismal)
}

const getBirthday = async (req, res)=>{
  const allBirthday = await Upload.find({eventType:'bDayParty'}).sort({ createdAt: "descending" }) 
  res.send(allBirthday)
}

const getKiddie = async (req, res)=>{
  const allKiddie = await Upload.find({eventType:'kiddieParty'}).sort({ createdAt: "descending" }) 
  res.send(allKiddie)
}

const getDebut = async (req, res)=>{
  const allDebut = await Upload.find({eventType:'debut'}).sort({ createdAt: "descending" }) 
  res.send(allDebut)
}

const getGender = async (req, res)=>{
  const allGender = await Upload.find({eventType:'gReveal'}).sort({ createdAt: "descending" }) 
  res.send(allGender)
}

const deletePhoto = async (req, res) => {
  try {
    const { id, photo } = req.body;

    //delete file in the public folder
    const filePath = path.join(__dirname, "../public/uploads/", photo);
    fs.unlinkSync(filePath);

    //delete in database
    await Upload.findByIdAndDelete(id);
    res.send("Photo deleted successfully");

  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting photo");
  }
}

const submitPhotos = async (req, res) => {
  try {
    const { photos, eventType, clientName } = req.body
    const result = await Upload.updateMany({ eventType: { $eq: null } }, { $set: { eventType: eventType } });

    // Check if any documents were updated
    if (result.nModified === 0) {
      return res.status(404).json({ message: 'No photos found' });
    }

    // Return success response
    res.status(200).json({ message: 'Photos updated successfully' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }

}

export { 
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
}