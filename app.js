import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import route from "./server/route";

const app = express();

app.use(logger('dev'));

//middlewares - app middlewares, 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('*', (req, res) => {
    res.status(200).send({message: 'welcome to the '})
})

route(app);


export default app;
