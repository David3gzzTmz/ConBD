const express = require('express');
const bodyP = require('body-parser');
const cors = require('cors');
const customerRoutes = require('connection')

app.use(bodyP.urlencoded( { extended: true}));
app.use(body.json());
app.use(cors());

app.listen(5000);

app.use(userRoutes);
app.use(customerRoutes);
