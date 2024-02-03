import app from "./app";
import "dotenv/config";

const defaultPort = 3000;
app.listen(process.env.PORT ?? defaultPort, () => {
  console.log(`Server running on port ${process.env.PORT ?? defaultPort}`);
});
