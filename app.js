const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const OpenApi = require("express-openapi");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authsRouter = require("./routes/auth");
const brandsRouter = require('./routes/brands');
const presetsRouter = require('./routes/presets');
const uploadsRouter = require('./routes/uploads')
const amplifiersRouter = require('./routes/amplifiers')
const passport = require('passport');
const passportMiddleware = require("./middlewares/passport")();
const User = require("./models/User");
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(passportMiddleware.initialize())
passport.use(User.createStrategy());


app.use('/', indexRouter /* #swagger.ignore = true */);
app.use("/auth",authsRouter /* #swagger.ignore = true */)
app.use('/users', usersRouter/* #swagger.tags = ["users"]*/);
app.use('/brands', brandsRouter /* #swagger.tags = ["brands"]*/);
app.use('/presets', presetsRouter/* #swagger.tags = ["presets"]*/);
app.use('/amplifiers', amplifiersRouter/* #swagger.tags = ["amplifiers"]*/);
app.use('/uploads', uploadsRouter/* #swagger.tags = ["uploads"]*/);
app.use(function(req, res, next) {
  next(createError(404));
});
console.info(`OpenAPI documentation available in http://localhost:${3002}`)
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
