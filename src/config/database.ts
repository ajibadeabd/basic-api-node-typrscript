import  mongoose from 'mongoose'
export class database{
      database(){
const uri = process.env.MONGODB_URI || 'mongodb://localhost/node-typescript';
        const dbOptions = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        };
        mongoose
            .connect(uri, dbOptions)
            .then(() => console.log(":: Connected to database"))
            .catch((error) => console.log(":: Couldn't connect to database ", error));
    }
}
