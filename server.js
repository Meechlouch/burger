let express = require("express");

let PORT = process.env.PORT || 5000;

let app = express();

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost: ${PORT}`);
});
