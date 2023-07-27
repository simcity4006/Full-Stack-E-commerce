const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
const PORT = 3005;
const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  } else {
    return res.status(401).json({ message: 'please login in first' });
  }
  next();
};
app.get('/test', (req, res) => {
  res.status(200).json({
    message: 'Welcome To foysal Server',
  });
});
app.get('/api/user', isLoggedIn, (req, res) => {
  console.log(req.body.id);
  res.status(200).json({
    message: 'user profile is returned',
  });
});
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
