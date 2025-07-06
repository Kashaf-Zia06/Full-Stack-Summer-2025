import express from 'express'
const app = express();
import dotenv from 'dotenv'


app.use((express.json()))

dotenv.config()


const port = process.env.PORT || 3000

app.get('/api/country', (req, res) => {
    const obj = [
        {
            id:1,
            country:"Pakistan",
            capital:"Islamabad"

        },
        {
            id:2,
            country:"Turkey",
            capital:"Istanbul"
        },
        {
            id:3,
            country:"China",
            capital:"Beijing"
        }
    ]

    res.send(obj)
})

app.listen(port, () => {
    console.log("Server started")
})