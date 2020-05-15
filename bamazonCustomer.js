var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Password1!",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayProducts();
});

function displayProducts() {
    console.log("Displaying all available products... \n");
    connection.query("SELECT * FROM products", function(err,res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}