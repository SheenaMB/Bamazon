# Bamazon CLI

## Overview

Bamazon-CLI is a node command line interface that interacts with the Bamazon SQL Database. A SQL table holds products, their names, the store names, their prices, and their stock quantities. It allows the users to view and purchase items from this inventory and then update the inventory accordingly. 


## Customer

The Customer View is where customers can order from Bamazon. It will ask the user which item they wish to purchase and how many they would like to buy. Next, it will check the current inventory to see if the item is in stock and place the order for the user if it is.

* Customer View - Lets the user scroll through available products to select one to purchase or e) to return to the main menu;

* Customer Order - Once user selects an item they will be prompted how many they would like to purchase and the app will check the current stock. If there is stock available their order will be completed.

## Dependencies

Bamazon requires mysql and inquirer to be installed and to run. Please make sure these packages are installed as well as the standard node modules.
