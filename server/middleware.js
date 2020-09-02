import morgan from "morgan";

export const useMiddleware = (app)=>{


  app.use(morgan("dev"));
  app.get("/", (req, res) => {
    res.send("server work");
  });
}
