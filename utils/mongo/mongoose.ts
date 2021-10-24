import mongoose, { ConnectionStates } from "mongoose"

export interface IConnection {
    isConnected?: ConnectionStates;
}

const connection:IConnection = {}

const dbConnect = async () => {

    const { MONGODB_URL } = process.env

    if(!MONGODB_URL) throw new Error("ENV.MONGODB_URL IS NOT DEFINED")
    if(connection.isConnected) return

    const db = await mongoose.connect(MONGODB_URL)
    connection.isConnected = db.connection.readyState

}

export default dbConnect