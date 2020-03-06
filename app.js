var express = require("express"),
    app = express(),
    http = require("http").Server(app),
    io = require("socket.io")(http)

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

io.on("connection", function(socket){
    socket.on("result-signal", function(obj) {
        io.emit("result-display", obj);
    });
});

http.listen(3000, function(){
    console.log("Server has started!!!");
});