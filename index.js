const express = require("express");

const server = require("./api/server.js")

const port = process.env.PORT || 4444;

server.listen(port, () => console.log(`server listening on port ${port}`));