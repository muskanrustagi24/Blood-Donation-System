const express = require('express')
const path = require('path')
const session = require('express-session')

const { db, Users } = require('./models')
const { passport } = require('./passport-setup') 

const app = express()

app.set('view engine', 'hbs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: '24knb6k247b2k7b2k7bk247hb2kh7b2',
    })
)
    
app.use(passport.initialize())
app.use(passport.session())
    
app.get('/signup', (req, res) => {
     res.render('signup')
})
    
app.post('/signup', async (req, res) => {
    const user = await Users.create({
        username: req.body.username,
        password: req.body.password, // NOTE: in production we save hash of password
        email: req.body.email,
    })
        
    res.status(201).send(`User ${user.id} created`)
})
    
app.get('/login', (req, res) => {
    res.render('login')
})
    
app.post('/login',
    passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/login',
    })
)
        
app.get('/profile', async (req, res) => {
    const user = req.user
    res.render('profile', { user })
})
        
app.get('/logout', (req, res) => {
    res.redirect('/login')
})


app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api').route)

app.listen(3232, ()=> {
    console.log('Server started at http://localhost:3232')
})