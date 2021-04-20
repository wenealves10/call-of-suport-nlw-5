import express from 'express';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
    // res.send('Hello World, NLW#5');
    res.json({message: "Wene Alves, Deus é Fiel"});
});


app.post("/post", (req, res) => {
    const name = req.body.name;
    const message = "Deus é fiel";

    res.json({name,message});
});

app.listen(3000, () => console.log("server is running on port 3000"));
