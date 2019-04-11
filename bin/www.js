import Debug from 'debug';
import app from '../app';
import dotenv from "dotenv";

dotenv.config();

const debug = Debug('http');
const port = process.env.PORT || 5000;

app.listen(port, () => {
    debug(`Server is listening to port ${port}`);
});