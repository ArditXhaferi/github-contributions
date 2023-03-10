const express = require("express");
const app = express();
const contributions = require("./api/contributions");
const fetch = require("node-fetch");
var cors = require('cors')

app.use(cors())

app.use(express.json({ extended: false }));

app.use("/api/contributions", contributions);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
