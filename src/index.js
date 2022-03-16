import express from "express"
import mn from './lib/mn.js';

const app = express();

app.get('/mn', (req, res) => {
    const action = (req.query.action);

    const input = JSON.parse("[" + req.query.nums + "]");
    const output = Number(mn(action, input));
    const result = {
        action,
        input,
        output
    }
    res.json(result);

})

app.listen(3000);