const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    // due to using docker compose we are specifying the redis server compose will create, otherwise this should be some url or ip
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);
// root route handler:
app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of Website visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('listening on port 8081')
});