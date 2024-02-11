const { MongoClient } = require('mongodb')

// Connection URI
const uri =
  'mongodb+srv://<username>:<password>@<clustername>/<dbname>?retryWrites=true&w=majority'

// Create a new MongoClient
const client = new MongoClient(uri)

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    // Connect the client to the server
    await client.connect()
    console.log('Connected to MongoDB Atlas')

    // Specify the database to be used
    const database = client.db('<dbname>')

    // Perform operations with the client
    // For example, insert documents, update documents, etc.
  } catch (err) {
    console.error('Error connecting to MongoDB Atlas', err)
  } finally {
    // Close the connection when you're done
    await client.close()
  }
}

// Call the function to connect to MongoDB
connectToMongoDB()
