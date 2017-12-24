'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let contacts = require('./data');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/contacts', (req, res) => {
	if(!contacts) {
		res.status(404).json({ message: 'No contacts found' });
	}
	res.json(contacts);
});

app.get('/api/contacts/:id', (request, response) => {

	const requestId = request.params.id;

	let contact = contacts.filter(contact => {
		return contact.id == requestId;
	});
	response.json(contact[0]);
});

const hostname = 'localhost';
const port = 3001;



app.listen(port, hostname, () => {
	console.log(`Server is running at http://${hostname}:${port}`);
});
