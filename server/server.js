const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({
  path: './.env'
});

const app = require('./app');
const cors = require('cors');
app.use(cors());

const DB = process.env.DATABASE_URL.replace(
    `<PASSWORD>`,
    process.env.DATABASE_PASSWORD
);
// console.log(process.env);

mongoose
    .connect(DB)
    .then(() => {
        console.log(`Connection success`);
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application running on port ${port}...`);
});
