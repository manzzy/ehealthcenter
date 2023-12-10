const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Pool = require('pg').Pool
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'ehealthcenter',
    user: 'postgres',
    password: 'pass',
})
app.get('/', async (req, resp) => {

    pool.query('select * from patient_registration pr', (error, results) => {
        if (error) {
            throw error
        }
        resp.status(200).json(results.rows)
    })

})



app.listen(8000, () => {
    console.log('SERVER STARTED AT 8000')
})