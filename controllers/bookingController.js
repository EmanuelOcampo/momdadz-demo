import Booking from "../models/Booking.js"
import { StatusCodes } from 'http-status-codes'
import { BadRequestError, NotFoundError } from '../errors/index.js'
import moment from "moment"
import nodemailer from 'nodemailer'
import dotenv from "dotenv"

dotenv.config();

const createBooking = async (req, res) => {
    const {
        fName,
        lName,
        MI,
        venue,
        contactNumber,
        date,
        email,
    } = req.body

    const currentDate = new Date().getTime()
    const bookDate = new Date(date).getTime()
    console.log(currentDate);
    console.log(bookDate);


    if (!fName || !lName || !contactNumber || !email || !venue || !date) {
        throw new BadRequestError("Please provide all values.")
    }

    if (currentDate > bookDate) {
        throw new BadRequestError("Entered date is behind the current date.")
    }

    const existingBookingsCount = await Booking.countDocuments({ start: date });

    if (existingBookingsCount >= 3) {
      throw new BadRequestError("Maximum bookings per day reached.");
    }

    // get the id of creator booking and save in database
    // req.body.createdBy = req.user.userId
    req.body.title = fName + " " + lName;
    req.body.start = date;
    console.log(req.body);
    const booking = await Booking.create(req.body)
    res.status(StatusCodes.CREATED).json({ booking })
    console.log(booking.title);
}

// link is ./booking/AllBookings
const getAllBooking = async (req, res) => {
    const {status,eventType,search,sort} = req.query 

    const queryObject = {}

    if (status && status !== "all") {  
        queryObject.status = status
    }

    if (status && eventType !== "all") {
        queryObject.eventType= eventType
    }

    if(search){
        queryObject.fName = {$regex: search, $options: 'i'}
    }
    
    // console.log(queryObject);

    let result =  Booking.find(queryObject)

    if (sort === 'latest'){
        result = result.sort('-createdAt')
    }

    if (sort === 'oldest'){
        result = result.sort('createdAt')
    }

    if (sort === 'a-z'){
        result = result.sort('fName')
    }

    if (sort === 'z-a'){
        result = result.sort('-fName')
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page -1) * limit

    result = result.skip(skip).limit(limit)


    const bookings = await result

    const totalBookings = await Booking.countDocuments(queryObject)
    const numOfPages = Math.ceil(totalBookings / limit)



    res
        .status(StatusCodes.OK)
        .json({ bookings, totalBookings , numOfPages })
}
 
const acceptBooking = async (req, res) => {
    const { id: bookingId } = req.params

    const {
        fName,
        email,
        lName,
        venue,
        contactNumber,
    } = req.body


    if (!fName || !lName || !email || !contactNumber || !venue) {
        throw new BadRequestError("Please provide all values")
    }

    const booking = await Booking.findOne({ _id: bookingId })

    if (!booking) {
        throw new NotFoundError(`No Booking with id: ${bookingId}`)
    }

    // checking permision

    const acceptBooking = await Booking.findOneAndUpdate({ _id: bookingId }, req.body, {
        new: true,
        runValidators: true
    })
    try {
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EMAIL,
                pass:process.env.PASS,
            }
        })
        const mailOptions = {
            from:process.env.EMAIL,
            to: email,
            subject: "Momdadz booking management system",
            html:`
            <div style="font-family: Arial, sans-serif; padding: 20px;">
              <h1 style="color: #333333; margin-bottom: 20px;">Hello!</h1>
              <p style="color: #333333; font-size: 16px; line-height: 1.5;">
                We're excited to have you! Your booking in MomDadz has been accepted and successfully processed.
                We'll be in touch soon with further details.
              </p>
              <hr style="border: none; border-top: 1px solid #CCCCCC; margin: 30px 0;">
              <p style="color: #777777; font-size: 14px;">
                If you have any questions or need assistance, please don't hesitate to contact us.
              </p>
              <p style="color: #777777; font-size: 14px;">
                Thank you for choosing MomDadz! We look forward to serving you.
              </p>
            </div>
          `,
        }   
        transporter.sendMail(mailOptions,(error,info) => {
            if(error){
                console.log(error);
            }
            console.log("Email sent" );
            res.status(201).json({status:201,info})
        })
    } catch (error) {
        console.log(error);
    }
    booking.status = 'accepted'

    await booking.save()
    res.status(StatusCodes.OK).json({ acceptBooking, booking })
}

const cancelledBooking = async (req, res) => {
    const { id: bookingId } = req.params

    const booking = await Booking.findOne({ _id: bookingId })

    // checking permision
    // const acceptBooking = await Booking.findOneAndUpdate({_id:bookingId}, req.body,{
    //     new:true,
    //     runValidators:true
    // })

    booking.status = 'cancelled'
 
    await booking.save()

    res.status(StatusCodes.OK).json({ booking })
}

const showStats = async (req, res) => {
    let stats = await Booking.aggregate([
        // { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },

        //look for everything
        {$match:{}},

        //counts use to count the status had the same value like pending 2 bookings 
        { $group: { _id: '$status', count: { $sum: 1 } } }



        //can be string to find and make it dynamic where anything search or find 
        // {$match:{status:'cancelled'}}
    ])

    stats = stats.reduce((acc, curr) => {
        const { _id: title, count } = curr
        acc[title] = count
        return acc
        //return it into object means of {} at the end 
    }, {})

    //defeault values for the stats
    const defaultStats = {
        pending: stats.pending || 0,
        accepted: stats.accepted || 0,
        cancelled: stats.cancelled || 0,
    }

    let monthlyBookings = await Booking.aggregate([
         { $match: { } },
        // { $match: { createdBy: mongoose.Types.ObjectId(req.user.userId) } },
        {
            $group: {
                _id: {
                    year: { $year: '$createdAt' },
                    month: { $month: '$createdAt' }
                },
                count: { $sum: 1 },
            },
        },
        { $sort: { '_id.year': -1, '_id.month': -1 } },
        { $limit: 6 }
    ])
    console.log(monthlyBookings);
    monthlyBookings = monthlyBookings.map((item) => {
        const { 
            _id: { year, month },
             count 
            } = item

        const date = moment()
        .month(month - 1)
        .year(year)
        .format('MMM Y')
        return {date,count}
    })
    .reverse()
    
    res.status(StatusCodes.OK).json({ defaultStats, monthlyBookings });
}


export { createBooking, getAllBooking, acceptBooking, cancelledBooking, showStats }