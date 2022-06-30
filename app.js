const express = require('express')
const path = require('path')
const fs = require('fs')
const { render } = require('ejs')
const app = express()

const memoFilePath = path.join(__dirname, 'data', 'memos.json')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))



app.get('/', function (req, res) {
    res.render('index')
})
app.get('/todolist', function (req, res) {
    res.render('todolist')
})
app.get('/memo', function (req, res) {
    const memo = req.body
    const memoData = fs.readFileSync(memoFilePath)
    const saveMemo = JSON.parse(memoData)
    res.render('memo', { memos: saveMemo })
})
app.post('/memo', function (req, res) {
    const memo = req.body
    const memoData = fs.readFileSync(memoFilePath)
    const saveMemo = JSON.parse(memoData)
    saveMemo.push(memo)
    fs.writeFileSync(memoFilePath, JSON.stringify(saveMemo))
    res.redirect('/memo')
})











app.listen(2222)