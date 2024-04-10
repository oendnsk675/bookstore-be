import express from "express";
import setupRoutes from "./routes";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./utils/swagger";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

setupRoutes(app, "/api/v1");

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  swaggerDocs(app, 3000);
});
