// getting-started.js
import { connect } from 'mongoose';

export const dbConnection = connect('mongodb://127.0.0.1:27017/job').then(()=>{
    console.log('database connected'); 
}).catch((err)=>{
    console.log(err);
});
