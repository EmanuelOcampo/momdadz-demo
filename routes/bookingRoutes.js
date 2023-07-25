import express from "express";
const router =  express.Router()

import { 
    createBooking, 
    getAllBooking,
    acceptBooking,
    cancelledBooking,
    showStats
} from "../controllers/bookingController.js";

//creating booking for the client or customer panel
// "/" means home route of /booking
router.route("/").post(createBooking)

// this route is for admin panels
// link is ./booking/AllBookings
router.route("/AllBookings").get(getAllBooking)
router.route("/:id").patch(acceptBooking)
router.route("/cancel/:id").patch(cancelledBooking)
router.route("/stats").get(showStats)

export default router