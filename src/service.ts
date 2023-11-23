import express , { Response, Requeste} from 'express'
import path from 'path';

const app = express();
const serverPort = 3000;

app.listen(serverPort, () =>
    console.log('Server running on port: ' + serverPort)
    );

app.get('/', function(req: Request, res: Response){
    res.sendFile(path.join(__dirname, "../src/views/index.html"))
})

app.post("/", async function (req: Request, res: Response) {
    res.send("POST")
})

app.put("/", async function (req: Request, res: Response) {
    res.send("PUT")
})

app.delete("/", async function (req: Request, res: Response) {
    res.send("DELETE")
})