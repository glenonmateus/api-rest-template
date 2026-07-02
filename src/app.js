import express from "express";
import morgan from "morgan";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares = () => {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      morgan(process.env.NODE_ENV === "development" ? "dev" : "combined"),
    );
  };

  routes = () => {};
}

export default new App().app;
