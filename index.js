import express from 'express';
import riderRouter from './routes/rider.js';
import storeRouter from './routes/store.js';
import userRouter from './routes/users.js';

const app  = express();
const port = 3000;

app.use('/user', userRouter);
app.use('/store', storeRouter);
app.use('/rider', riderRouter);

app.get('/', (req, res) => {
    res.json({msg: 'my api v.1.xxx'})
})

app.listen(port, () => {
    console.log('api sever on http://localhost:' + port);
    
})