import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.router.js";

const app = express();

app.set("port", 4000 || 5000);

//middlewares
app.use(express.json());
app.use(cors());

//rutas
app.use("/", indexRouter);
app.use("*", (req, res) => {
  res.send("Esta ruta no existe en la API");
});

app.listen(app.get("port"), () => {
  console.log("Servidor corriendo en puerto", app.get("port"));
});
