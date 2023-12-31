import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function main() {
 try {
   await mongoose.connect(config.dburl as string);
   app.listen(config.port,()=>{
    console.log(`My server is running on port ${config.port}`)
   })
 } catch (error) {
  console.error(error)
 }
}

main()
