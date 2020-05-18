var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Password1!",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");
    displayProducts();
});

function startOrder() {
    inquirer
        .prompt({
            name: "prodID",
            type: "input",
            message: "Please enter the ID of the product you would like to buy."
        }, {
            name: "units",
            type: "input",
            message: "How much of the product would you like to buy?"
        }) .then(function(answer) {
        connection.query("SELECT * FROM products WHERE item_id", function(err, res) {
            if (err) throw err;
            
            for (var i = 0; i < res.length; i++) {
                console(res)
                if (res[i].item_id === answer.prodID) {
                    console.log(answer.prodID)
                }
                
            }
        })
     })
}

function sellProd() {
    console.log("Hi.")
}

function displayProducts() {
    console.log("Displaying all available products... \n");
    connection.query("SELECT * FROM products", function(err,res) {
        if (err) throw err;
        console.table(res);
        connection.end();
        startOrder();
    });
}