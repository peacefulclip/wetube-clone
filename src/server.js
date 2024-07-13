import express from 'express'; // package
import morgan from 'morgan';

import globalRouter from './routers/globalRouter'; // file directory
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';

const PORT = 4000;
const app = express();
const logger = morgan("dev");
app.use(logger); // morgan middleware

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use("/",globalRouter);
app.use("/users",userRouter);
app.use("/videos",videoRouter);

const handleListening = () => {
    console.log(`you are watching the server http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);