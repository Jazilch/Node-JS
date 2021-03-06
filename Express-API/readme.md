# Node-Endpoint 

This project is how to build a simple endpoint in Node.js. What we are looking to do here is we have data that is stored locally and we want to be able to GET all of this data from an endpoint which is structured as a URL. 

By creating this endpoint we make it easier to get all of this data and with a couple different methods we can easily make requests that allow us to just get a specific contact of object back from this JSON view. 

You will see a server.js file that has been created and this is where all of node.js will be for the bulk of this project. 

In order to setup the server we can use something like the below. Since we are using express it creates a module we can use called app. If we were setting this up just on node without Express this would be set to server.listen. Once we have this app.listen takes in two parameters that we set in the above. We are setting this to localhost and then we are specifcing which port we want to run this on. In this case we want to run this application on port 3001.

```javascript
const hostname = 'localhost';
const port = 3001;

app.listen(port, hostname, () => {
	console.log(`Server is running at http://${hostname}:${port}`);
});
```

This is the bulk of our app below. With any projects in Node we are requiring our dependencies and requiring them within these modules to make sure that we are able then use them within this application. A quick note on the cors package is mostly for when you're setting up API as it allows access from items aren't available on the same port or domain. If you look back at our data.js file you now see that we are requiring this JSON data into a contacts module on line 27.

The below you're calling your app with app.get (this can be exchanged with other requests such as POST, PUT and Delete). Then we are setting the URL that we want to make this data availble on. This is why when you type in a URL you are getting the data back. From there we are setting the response to send back our contacts module in JSON format. 

Now if you open http://localhost:3001/api/contacts/ you should now see all of the contacts that were in the data.js file. 

```javascript
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
```

For full course details go to https://scotch.io/courses/build-a-restful-nodejs-api/introduction
