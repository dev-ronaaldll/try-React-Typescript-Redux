import { connect } from "mongoose";
export async function connectDB(){
    try {
        const db = await connect("mongodb://localhost:27017/test");
        console.log(`Database is connected to ${db.connection.db.databaseName}`);
    }catch(err){
        console.log(err);
    }
}

