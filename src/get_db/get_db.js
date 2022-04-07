import * as mongo from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const MONGO_URL = process.env['MONGO_URL'];

let client = null;
let db = null;

/**
 * Connects to the database and returns connection data.
 * 
 * @returns {object} The database connection.
 */
export async function get_db() {
	if (!client) {
		client = await mongo.MongoClient.connect(MONGO_URL, {
			useUnifiedTopology: true,
			socketTimeoutMS: 5000,
			ServerSelectionTimeoutMS: 5000,
			useNewUrlParser: true
		});
		db = client.db();
	}
	return { client, db };
}
