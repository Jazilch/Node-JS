# Node-Endpoint 

This project is how to build a simple endpoint in Node.js. What we are looking to do here is we have data that is stored locally and we want to be able to GET all of this data from an endpoint which is structured as a URL. 

By creating this endpoint we make it easier to get all of this data and with a couple different methods we can easily make requests that allow us to just get a specific contact of object back from this JSON view. 

You will see a server.js file that has been created and this is where all of node.js will be for the bulk of this project. 

In order to setup the server we can use something like the below. Since we are using express it creates a module we can use called app. If we were setting this up just on node without Express this would be set to server.listen. Once we have this app.listen takes in two parameters that we set in the above. We are setting this to localhost and then we are specifcing which port we want to run this on. In this case we want to run this application on port 3001.

const hostname = 'localhost';
const port = 3001;

app.listen(port, hostname, () => {
	console.log(`Server is running at http://${hostname}:${port}`);
});
