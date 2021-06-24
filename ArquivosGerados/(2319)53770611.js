    const express = require("express");&#xD;&#xA;    const path = require("path");&#xD;&#xA;    const router = express.Router();&#xD;&#xA;    const app = express();&#xD;&#xA;    const port = 5000;&#xD;&#xA;    // Serve static files on server&#xD;&#xA;    app.use("/public", express.static(__dirname + "/../public"));&#xD;&#xA;    app.get("*", function(request, response) {&#xD;&#xA;      response.sendFile(path.join(__dirname + "/../public/index.html"));&#xD;&#xA;    });&#xD;&#xA;    if (app.get("env") === "development") {&#xD;&#xA;      app.listen(port, () => {&#xD;&#xA;        console.log(`Server started on port ${port}`);&#xD;&#xA;      });&#xD;&#xA;    } else {&#xD;&#xA;      app.listen(port, "171.33.4.126", () => {&#xD;&#xA;        console.log(`Server started on port ${port}`);&#xD;&#xA;      });&#xD;&#xA;    }