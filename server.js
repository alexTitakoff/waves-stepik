const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));
app.get('/', (req, res) => {
	res.sendFile('./build/index.html', { root : __dirname});
});



let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(__dirname);
	console.log("Listening Port " + port);
});