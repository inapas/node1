const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/', function (req, res) {
    res.send('hello nobody')
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

const curses = [
    {
        id: 1,
        name: "sportas"
    },
    {
        id: 2,
        name: "maistas"
    },
    {
        id: 3,
        name: "piesimas"
    },
]
app.post('/api/curses', (req, res) => {
    res.send(curses)
})

app.put('/api/curses/:id', (req, res) => {
    const my_course = curses.find(curses => curses.id === parseInt(req.params.id));
    if (!my_course) res.status(404).send("not found")
    res.send(my_course);
})

app.get('/api/curses/name/:name', (req, res) => {
    const my_course = curses.find(curses => curses.name === req.params.name);
    if (!my_course) res.status(404).send("name is required")
    res.send(my_course);
})
app.delete('/api/curses/delete/:id', (req, res) => {
    const my_course = curses.find(curses => curses.id === parseInt(req.params.id));
    if (!my_course) return res.status(404).send("not found")
    const index = curses.indexOf(my_course);
    curses.splice(index, 1)
    res.send(curses);
})