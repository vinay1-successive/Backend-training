import Server from "./server";

const server = new Server();
server
  .setup()
  .then(() => {
    console.log("Server setup complete");
  })
  .catch((error) => {
    console.error("Error setting up the server:", error);
    process.exit(1);
  });
