import express from 'express';
import { json } from 'body-parser';

const app = express()
const PORT = 3000

app.use(json());

app.get('/api/users/currentUser', (req, res) => {
    res.send('Hi there')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

