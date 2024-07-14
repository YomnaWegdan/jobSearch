import { connect } from 'mongoose';

export const dbConnection = connect('mongodb+srv://yomna:123654@cluster0.djymrmz.mongodb.net/jobSearch').then(()=>{
    console.log('database connected'); 
}).catch((err)=>{
    console.log(err);
});
mongodb+srv://yomna:123654@cluster0.djymrmz.mongodb.net/

/*
export const dbConnection = connect('mongodb://127.0.0.1:27017/jobSearch').then(()=>{
    console.log('database connected'); 
}).catch((err)=>{
    console.log(err);
});
*/
