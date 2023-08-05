import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log('MongoDB connected successfully');
        })
        connection.on('error', (e)=>{
            console.log('MongoDB not connected successfully', e);
            process.exit();
        })
    } catch (e) {
        console.log(e);
    }
}