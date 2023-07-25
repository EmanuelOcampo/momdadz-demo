import express from "express";
const router =  express.Router()

import { register, login, updateUser,registerStaff } from "../controllers/authController.js";
import { createBooking } from "../controllers/bookingController.js";
import {auth, isAdmin} from "../middleware/auth.js";


router.route("/register").post(register)
router.route("/login", isAdmin).post(login)
router.route("/registerStaff").post(registerStaff)


// router.route("/landing").post(landing)
router.route("/updateUser").patch(auth, updateUser)

//auth is added to avoid booking without login or registering an account
router.route("/createBooking").post(auth, createBooking)

export default router

