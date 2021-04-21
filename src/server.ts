import express from 'express';
import "./database";
import { routes } from './routes';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);


app.listen(3000, () => console.log("server is running on port 3000"));
