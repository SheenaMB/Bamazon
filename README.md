# Bamazon

Bamazon is an app that uses a MySQL Database called bamazon to track orders and update the database, much like Amazon!

In this app, we have a table in MySQL that holds products, their names, the store names, their prices, and their stock quantities.

When a client uses the Bamazon app, it will show them a table of all the products and ask which product they would like, and to identify it with the item ID. 

Next, it will prompt the client to input the number of that product they'd like.

Finally, if there is enough of that product left in stock, they will be shown the total price of their purchase while the database is simultaneously updated to account for the depleated stock.



This app requires mysql and inquirer to be installed and to run. If you'd like to work on it yourself please make sure these packages are installed as well as the standard node modules.