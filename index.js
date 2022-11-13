const PORT = 5000;

const app = require('./app')
// Server

app.listen(PORT, () => {
  console.log("App running on port: " + PORT);
});
