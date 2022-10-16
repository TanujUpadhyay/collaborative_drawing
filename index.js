const express = require('express');
const http = require('http');


const app = express();
app.use('/static', express.static(`${__dirname}/static`));
app.use(express.json());

const server = http.createServer(app);


app.get('/', (req, res) => {
    res.send("index.html")
});


server.listen(process.env.PORT || 5500, () => {
    console.log(`Started server on port ${server.address().port}`);
});
