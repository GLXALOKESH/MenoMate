import cookieParser from 'cookie-parser'
import express from 'express'   
import cors from 'cors';
import morgan from 'morgan'
import userRoutes from './routes/user.routes.js';
import {ApiError} from './utils/ApiError.js';

const app = express()
// this will parse parse the body information in json....
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// this will allow to request or hit the another url from different origin...
//console.log(`cors link:-${process.env.FRONTEND_URL}`); // when you excessing then you get undefine
app.use(cors({
   origin:'http://localhost:5173',
//  origin: [process.env.FRONTEND_URL],
    credentials:true
}))

// app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use('/ping',(req,res)=>{
    res.send('pong');
});

// define router here......
app.use('/api/user',userRoutes);


app.use((err, req, res, next) => {
    console.log(err)
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
        });
    }

    // For other types of errors, send a generic JSON response
    return res.status(500).json({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
    });
}
);
export default app;