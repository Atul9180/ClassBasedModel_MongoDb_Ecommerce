require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;

const User = require('./models/user')


app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use((req, res, next) => {
    User.findUserById("643b136b1da57bb107de039e")
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

let port = process.env.PORT;
mongoConnect(() => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
});

