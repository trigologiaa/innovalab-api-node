import express from "express";

const application = express();
const port = "3000";

application.get("/", (_request, response) => {
  response.send("Hello, World!");
  console.log("Response send");
});

application.listen(port, () => {
  console.log(`Example application listening on port ${port}`);
});
