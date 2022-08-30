import express from 'express';
import {inOrderMagicNumber} from "./dehash";
const app = express();
const port = 3000;

export let dehashList: string[] = [];

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/de-hash",(req, res) => {
    dehashList = [];
    console.log('Body: ', req.body);
    res.send(inOrderMagicNumber(req.body.hash));
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
