const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const errorController = require('./controllers/error');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRouter = require('./routers/admin');
const shopRouter = require('./routers/shop');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRouter);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(3000);
