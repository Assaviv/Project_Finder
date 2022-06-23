const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const User_Schema = require('./schema/user');

const app = express();
const dbURI = 'mongodb+srv://Assaviv:326446259@cluster0.wma9u.mongodb.net/project_finder?retryWrites=true&w=majority'

// Connect to MongoDB's DBaaS
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3004, () => console.log("Listening on port 3004!")))
    .catch((error) => console.log(error));

const Schema = mongoose.Schema;

const UserSchema = new Schema(User_Schema)

const User = mongoose.model('User', UserSchema)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/add-user', (req, res) => {
    const body = req.body;
    console.log(body);
    const user = User({
        username: body.username,
        password: body.password,
        email:    body.email
    })
    user.save()
        .then((result) => {
            res.status(200).send({ success: true});
        })
        .catch((err) => {
            res.status(500).send({ success: false});
        });
})

app.post('/api/change-password', (req, res) => {
    // change password
})

app.post('/api/delete-user', (req, res) => {
    // delete user
})
