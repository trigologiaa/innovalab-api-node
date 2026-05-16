import express from "express";

const application = express();
const port: string = "3000";

application.get("/", (_request, response): void => {
  response.send("Hello, World!");
  console.log("Response send");
});

application.listen(port, (): void => {
  console.log(`Example application listening on port ${port}`);
});
