const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('./build'));
app.use('*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(process.cwd(), 'build'),
    });
});

app.listen(8080, () => {
    console.log('Example app listening on port 3000!\n');
});
