const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())


app.get('/', (req, res)=> {
    res.json({message: 'Get Here'})
})

//mongodb+srv://klimapsyteck:Wttn46aI6Hn1f9a8@cluster0.y2tsd.mongodb.net/apirestful?retryWrites=true&w=majority

app.listen(3000, () => {
    console.log('Running')
})