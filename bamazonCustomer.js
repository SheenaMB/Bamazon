var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "midori14",
    database: "bamazonDB"
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
    // createProduct();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.table(res);


        inquirer
            .prompt([
                // Here we create a basic text prompt.
                {
                    type: "input",
                    message: "What is the ID of the product you'd like to buy?",
                    name: "request_id"
                },
                // Here we give the user a list to choose from.
                {
                    type: "input",
                    message: "How many would you like?",
                    name: "request_units"
                }
            ])

            .then(function (inquirerResponse) {
                console.log(inquirerResponse)
                var custReqUnit = inquirerResponse.request_units;
                var custReqId = inquirerResponse.request_id;


                connection.query("SELECT * FROM products WHERE item_id=?", [custReqId], function (err, res) {
                    if (err) throw err;
                    console.log(res)
                    var currentSQ = res[0].stock_quantity;
                    console.log(custReqUnit)
                    console.log(currentSQ)
                    //if there isn't enough quantity in stock
                    if (custReqUnit > currentSQ) {
                        console.log("Insufficient Quantity!")
                        //if there IS enough
                    }
                    else {
                        var stockLeft = parseInt(currentSQ) - parseInt(custReqUnit)
                        updateProduct(stockLeft, custReqId);
                    };
                });
            });
    });
}

function updateProduct(stockLeft, custReqId) {
    console.log("Filling your order!\n Updating stock quantity...\n");
    
    console.log("---------------------------")
    console.log(stockLeft)
    var query = connection.query("UPDATE products SET ? WHERE ?",
        [{ stock_quantity: stockLeft },
            {item_id: custReqId}
        ],
        function (err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            // deleteProduct();
        });

    // logs the actual query being run
    console.log(query.sql);
    connection.end();
    }


    //     if (custReqUnit > ) {
    //       console.log("\nWelcome " + inquirerResponse.username);
    //       console.log("Your " + inquirerResponse.pokemon + " is ready for battle!\n");
    //     }
    //     else {
    //       console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    //     }
    //   });





// function createProduct() {
//   console.log("Inserting a new product...\n");
//   var query = connection.query(
//     "INSERT INTO products SET ?",
//     {
//       flavor: "Rocky Road",
//       price: 3.0,
//       quantity: 50
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " product inserted!\n");
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function updateProduct() {
//   console.log("Updating all Rocky Road quantities...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         quantity: 100
//       },
//       {
//         flavor: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products updated!\n");
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }

// function deleteProduct() {
//   console.log("Deleting all strawberry icecream...\n");
//   connection.query(
//     "DELETE FROM products WHERE ?",
//     {
//       flavor: "strawberry"
//     },
//     function(err, res) {
//       if (err) throw err;
//       console.log(res.affectedRows + " products deleted!\n");
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// }

// function readProducts() {
//   console.log("Selecting all products...\n");
//   connection.query("SELECT * FROM products", function(err, res) {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// }
