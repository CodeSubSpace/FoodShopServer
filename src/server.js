import express from "express"
import globalRouter from "../src/routers/globalRouter.js"
import shoppingRouter from "../src/routers/shoppingRouter.js"
import path from "path"

const PORT = 4000;
const app = express();

app.listen(PORT);
app.set("view engine", "pug");
app.set("views", path.join(process.cwd(), "src/views"));

app.use("/", globalRouter);
app.use("/shopping", shoppingRouter);