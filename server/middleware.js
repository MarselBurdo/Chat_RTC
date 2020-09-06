import morgan from "morgan";
import cors from "cors";

// all app middleware here
export const useMiddleware = (app) => {
  app.use(morgan("dev"));
  app.use(cors());

  app.get("/", (req, res) => {
    res.send("server work");
  });
};
