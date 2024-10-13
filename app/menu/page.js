"use client";
import { useState } from "react";
import Image from "next/image";
import irieBackGround from "@/public/images/irieBackGround.jpg";
import placeholder from "@/public/images/placeholder.png";

const categories = [
  // "All",
    "Starters",
    "Salad",
    "Carribean Menu Entrees",
    "Nigerian Menu Entries",
    "Nigerian Menu Starter",
    "Desert",
    "Shawarma",
    "Hookah (shisha)",
    "Pizza",
    "Carribean Menu starter",
    "Mocktail",
    "Whiskey",
    "Tequila",
    "Rum",
    "Vodka",
    "Cognac",
    "Sides",
    "Italian Menu Entrees",
    "Thai Menu Starter",
    "Thai Menu Entrees",
    "Champagne",
    "Red Wine",
    "Rose",
    "Sparkling Wine",
    "Beer",
    "Energy Drink",
    "Water",
    "Coffeetea",
    "Soft Drinks Juices",
    "Shakes",
    "Cocktails",
    "Soups",
  ];

const menuData = {
  Starters: [
    {
      id: 1,
      name: "Moroccan Lamb Cigars",
      price: 13000,
      description:
        "Moroccan Lamb Cigars Ground lamb Raselhanout, Raisons, Mint, Pine Nuts in a Crisp Phyllo Pastry Serve.",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Club Sandwich",
      price: 7000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Takeaway pack (double)",
      price: 1200,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Takeaway pack (Single)",
      price: 1000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Englsih Breakfast",
      price: 9500,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Plain Omlette",
      price: 3500,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Special Engilsh Breakfast, Sweet Poatato or Sweet Corn",
      price: 11500,
      description:
        "English Breakfast With  Sweet Potato  Or Sweet Corn Sauteed.With Fruit Salad",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Fried Yam with Eggs",
      price: 9500,
      description: "Seasoned Yam Fried To Taste With Eggs",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Meat Pie",
      price: 2500,
      description: "Crusty Rich Pie With Meat,  Potato And Carrot Filling.",
      photo: placeholder,
    },
  ],
  Salad: [
    {
      id: 1,
      name: "Jamaican Cobbs Salad",
      price: 10500,
      description:
        "Mixed Greens, Avocado, Corn,  Plantain, Tomato, Red Onion,  Cucumbers, Egg, Topped With  Jerk Chicken Breast",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Thai Beef Salad",
      price: 8500,
      description:
        "Grilled Beef Steak Is Tossed With  Cucumber, Tomato, Shallot,  Fresh Chili, Fragrant Herbs,  And A Fish Sauce And Lime Juice  Dressing",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Jamaican Pineapple Salad",
      price: 7500,
      description: "Pineapple, Jerk Seasoning,  Fresh Ginger",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Jamaican Confetti Rice Salad",
      price: 8500,
      description: "Long Grain Rice, Pineapple,  Coconut, Coriander",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Jamaican Jerk Pasta Salad",
      price: 8000,
      description:
        "Pasta, Chicken Sausage,  Balsamic Vinaigrette,  Jamaican Jerk Seasoning",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Tangy Coleslaw",
      price: 4500,
      description:
        "Dijon Mustard, Pepper,  Green Cabbage, Carrot,  Green Onions And Garlic",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Garden Salad",
      price: 5500,
      description: "Mix Vegetable",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Full Nigerian Salad",
      price: 9500,
      description:
        "Prepared With Cabbage,  Carrot, Onion Slice,  Lettuce, Laced With  Sliced Fruit Tomatoes  And Boiled Egg",
      photo: placeholder,
    },
  ],
  "Carribean Menu Entrees": [
    {
      id: 1,
      name: "Rasta Pasta Linguini (Chicken)",
      price: 12300,
      description:
        "Al Dente Linguini Is  A Rich Cream Sauce,  With Peppers, And Onions,  Topped With Jerk (Chicken)",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Rasta Pasta Linguini (Beef)",
      price: 13000,
      description:
        "Al Dente Linguini Is A  Rich Cream Sauce, With  Peppers, And Onions,  Topped With Jerk (Beef)",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Rasta Pasta Linguini (Prawns)",
      price: 13800,
      description:
        "Al Dente Linguini Is A  Rich Cream Sauce, With  Peppers, And Onions,  Topped With Jerk (Prawns)",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Ground Chuck Burger",
      price: 9800,
      description:
        "Grilled Premium Ground Beef,  Caramel And Onions, Lettuce,  Tomato, Plantain Served  With Fries And Jerk Aioli",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Baked Lobster Marcaroni and Cheese",
      price: 46500,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Beef Patty Burger",
      price: 10200,
      description:
        "Jerk Beef Party Wedge  Between Patty, Topped  With Lettuce, Tomato,  Onion And Ripe Plantains,  Served With Fries And Jerk",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Curry Goat",
      price: 11600,
      description:
        "Slow Cooked Goat Meat  With Caribbean Curry,  Fresh Thyme, And Scotch  Bonnet Peppers,  Served On Basmati Rice",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Iris Jerk Chicken Burger",
      price: 10800,
      description: "",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Blackened Salmon",
      price: 40000,
      description:
        "Atlantic Salmon,  Mackened Spice,  Served With Candied Yams,  Market Vegetables  And A Fresh Mango Lime Salsa",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Jamaican Braised Oxtail",
      price: 11500,
      description:
        "Slowly Cooked Braised  Oxtail In A Rich Beef Broth,  With Mini Dumplings,  And Butter Beans,  Served With Rice And  Peas, And Creamy Coleslaw",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Curry Chicken",
      price: 11700,
      description:
        "Slow Cooked With Caribbean  Curry, Fresh Thyme, And  Scotch Bonnet Peppers,  Served On Basmatic Rice",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Stew Peas (Beef)",
      price: 10700,
      description:
        "Kidney Bean, Beef,  Coconut Sauce, Local Spices,  Herbs. Served With White Rice.",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Escovitch Red Snapper",
      price: 23500,
      description:
        "Fried Red Snapper,  With Chiffonade Of Carrots,  Onions, Scotch Bonnet  Peppers And Fresh Thyme.  Served On Basmati Rice Or  Jamaican Rice And Peas.",
      photo: placeholder,
    },
    {
      id: 14,
      name: "Roasted Rack of Lambs",
      price: 46500,
      description:
        "Herb Rubbed Lamb,  With Market Vegetables,  Breadfruit Croquette In  Red Wine Reduction.",
      photo: placeholder,
    },
    {
      id: 15,
      name: "Steak and Fritters",
      price: 39500,
      description:
        "New York Striploin  Topped With Chimichurri,  Served With  Hand Cut Yukon Gold Potatoes.",
      photo: placeholder,
    },
    {
      id: 16,
      name: "Half Jerked Chicken",
      price: 15500,
      description: "Roasted Chicken,  Brushed With Jerk Sauce.",
      photo: placeholder,
    },
    {
      id: 17,
      name: "Quarter Jerked Chicken",
      price: 9000,
      description: "",
      photo: placeholder,
    },
    {
      id: 18,
      name: "Seafood Tomato Linguini",
      price: 21500,
      description: "",
      photo: placeholder,
    },
    {
      id: 19,
      name: "Pan Seared Chicken",
      price: 21500,
      description: "Pan Seared With White Sauce",
      photo: placeholder,
    },
    {
      id: 20,
      name: "Baked Fish",
      price: 26500,
      description: "Baked Fish In With French Sauce",
      photo: placeholder,
    },
    {
      id: 21,
      name: "Whole Barbecue Fish",
      price: 31000,
      description:
        "Whole Fish Marinated In  Barbeque Sauce With  Choice Of Fries Or Rice & Peas.",
      photo: placeholder,
    },
    {
      id: 22,
      name: "Stew Chicken",
      price: 11500,
      description: "Jamaican Brown Stew Chicken  With Rice & Peas",
      photo: placeholder,
    },
  ],
  "Nigerian Menu Entries": [
    {
      id: 1,
      name: "Peppered Goat Meat",
      price: 8500,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Peppered Chicken",
      price: 7600,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Peppered Gizzard",
      price: 10000,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Grilled Whole Fish with Fries",
      price: 28500,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Seafood Okra",
      price: 12500,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Peppered Snail",
      price: 14700,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Small Chops (Build your Platter)",
      price: 32000,
      description:
        "A Tray With Spring Rolls,  Samosa, Puff Puff, Sausage Rolls,  Peppered Chicken, Peppered Beef,  Peppered Gizzard,  Sweet Yam And Pepper Sauce",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Mini Small Chops Tray",
      price: 16000,
      description:
        "Mini Small Chops Tray  (8 Spring Rolls, 8 Samosa,  8 Chicken Or Beef, 15 Puff Puff).",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Medium Chops Tray",
      price: 19000,
      description:
        "Medium Chops Tray  (12 Spring Rolls, 12 Samosa,  10 Chicken Or Beef, 20 Puff Puff.)",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Large Chops Tray",
      price: 29500,
      description:
        "Large Chops Tray  (20 Spring Rolls, 20 Samosa,  15 Chicken Or Beef, 30 Puff Puff,  5 Kebabs. ) Feeds 10 Or More",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Swallow",
      price: 3000,
      description: "",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Peppered Fried Fish",
      price: 10600,
      description: "",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Extra Poundo",
      price: 3000,
      description: "",
      photo: placeholder,
    },
    {
      id: 14,
      name: "Seafood Jollof Rice",
      price: 15000,
      description: "Jollof Rice Made With Seafood/Fish.",
      photo: placeholder,
    },
  ],
  "Nigerian Menu Starter": [
    {
      id: 1,
      name: "Goat Meat Pepper Soup",
      price: 10300,
      description:
        "Goat Meat Cooked  With Hot Pepper,  Fresh Scent Leaf &  Seasonings Served With Rice",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Chicken Pepper Soup",
      price: 9300,
      description:
        "Chicken Cooked With  Hot Pepper, Fresh Scent Leaf &  Seasonings Served With Rice",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Fish Pepper Soup",
      price: 12300,
      description:
        "Fish Cooked With Hot  Pepper, Fresh Scent Leaf &  Seasonings Served With Rice",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Coleslaw Salad",
      price: 3500,
      description: "Shredded Fresh Cabbage  And Carrot With Cream",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Samosa",
      price: 7000,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "White Rice",
      price: 4000,
      description: "",
      photo: placeholder,
    },
  ],
  Desert: [
    {
      id: 1,
      name: "Carrot Cake with Cream Cheese Sauce",
      price: 10800,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Bread Pudding with Cream Rum Sauce",
      price: 9800,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Pineapple Upside down cake",
      price: 10300,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Chocolate cake",
      price: 9800,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Ice Cream Meadeay",
      price: 8500,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Cheese Cake",
      price: 11000,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Biscuit Platter",
      price: 5500,
      description: "",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Prawns and Shrimps Platter",
      price: 17000,
      description: "",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Fruit Salad",
      price: 5000,
      description: "",
      photo: placeholder,
    },
  ],
  Shawarma: [
    {
      id: 1,
      name: "Jerk Chicken Sharwama",
      price: 4700,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Jerk Shrimp Sharwama",
      price: 7000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Jerk Beef Sharwama",
      price: 4900,
      description: "",
      photo: placeholder,
    },
  ],
  "Hookah (shisha)": [
    {
      id: 1,
      name: "Mixed Fruit Flavor",
      price: 8000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Mint Flavor Shisha",
      price: 8000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Cappuccino Flavor Shisha",
      price: 8000,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Strewberry Flavor Shisha",
      price: 8000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Banana Flavor Shisha",
      price: 9000,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Chocolate Flavor Shisha",
      price: 9000,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Vanilla Flavor Shisha",
      price: 8000,
      description: "",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Love 66 Flavor Shisha",
      price: 9000,
      description: "",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Gum Flavor Shisha",
      price: 7500,
      description: "",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Double Apple Flavor Shisha",
      price: 8500,
      description: "",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Mint with Cream Flavor Shisha",
      price: 8000,
      description: "",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Apple Flavor Shisha",
      price: 9000,
      description: "",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Mango Flavor Shisha",
      price: 8000,
      description: "",
      photo: placeholder,
    },
    {
      id: 14,
      name: "Pineapple Flavor Shisha",
      price: 8000,
      description: "",
      photo: placeholder,
    },
    {
      id: 15,
      name: "Extra Charcoal",
      price: 2500,
      description: "Extra Charcoal For Shisha",
      photo: placeholder,
    },
    {
      id: 16,
      name: "Charcoal (Shisha)",
      price: 2500,
      description: "Extra Charcoal For Shisha",
      photo: placeholder,
    },
  ],
  Pizza: [
    {
      id: 1,
      name: "Seafood Pizza (Large)",
      price: 19500,
      description:
        "Shrimps, Crab, Meat Or  Scallops, Mozzarella Cheese,  Parmesan Cheese, Garlic, Parsley",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Seafood Pizza (Medium)",
      price: 16000,
      description:
        "Shrimps, Crab, Meat Or Scallops,  Mozzarella Cheese, Parmesan Cheese,  Garlic, Parsley",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Seafood Pizza (Small)",
      price: 13500,
      description:
        "Shrimps, Crab, Meat Or  Scallops, Mozzarella Cheese,  Parmesan Cheese, Garlic, Parsley",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Jerk Chicken Pizza (Large)",
      price: 16000,
      description: "Jerk Chicken, Mozzarella Cheese, Tomato, Garlic, Parsley",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Jerk Chicken Pizza (Medium)",
      price: 14000,
      description: "Jerk Chicken, Mozzarella Cheese, Tomato, Garlic, Parsley",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Jerk Chicken Pizza (Small)",
      price: 11000,
      description: "Jerk Chicken, Mozzarella Cheese, Tomato, Garlic, Parsley",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Pepperoni Pizza (Large)",
      price: 17000,
      description: "Pepperoni, Mozzarella Cheese,  Garlic, Tomato",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Pepperoni Pizza (Medium)",
      price: 15000,
      description: "Pepperoni, Mozzarella Cheese,  Garlic, Tomato",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Pepperoni Pizza (Small)",
      price: 12000,
      description: "Pepperoni, Mozzarella Cheese,  Garlic, Tomato",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Mix Grill Pizza (Large)",
      price: 16500,
      description:
        "Jerk Chicken, Grilled Beef,  Mozzarella Cheese, Garlic,  Tomato",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Mix Grill Pizza (Medium)",
      price: 14500,
      description:
        "Jerk Chicken, Grilled Beef,  Mozzarella Cheese, Garlic,  Tomato",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Mix Grill Pizza (Small)",
      price: 12000,
      description:
        "Jerk Chicken, Grilled Beef,  Mozzarella Cheese, Garlic,  Tomato",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Pizza Margherit",
      price: 13500,
      description: "Vegetarian Pizza",
      photo: placeholder,
    },
    {
      id: 14,
      name: "Hawaiian Pizza",
      price: 18500,
      description:
        "Topped With Tomato Sauce,  Mozzarella Cheese,  Sliced Ham, And Pineapple",
      photo: placeholder,
    },
  ],
  "Carribean Menu starter": [
    {
      id: 1,
      name: "Jamaican Red Paes Soup",
      price: 8500,
      description:
        "Red Kidney Beans,  Scotch Bonnet Peppers,  Sweet Yam And Dumplings.",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Macaroni and Cheese Poppers",
      price: 8700,
      description:
        "Creamy Cheese Sauce,  Al Dente Macaroni, Panko Bread Crumbs,  Served With A Spicy Ketchup.",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Buttermilk Popcorn Bites",
      price: 8500,
      description:
        "Cubed Chicken Breast  Drenched In Buttermilk And  Seasoned Flour. Served With Jerk Aioli.",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Runaway Bay Crab Croquettes",
      price: 11000,
      description:
        "Fresh Lump Crab, Potato,  Red Onion, Peppers, With  A Panko Crust. Served With  Charred Corn Salsa.",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Ackee and Saltfish Dumpling",
      price: 15600,
      description:
        "Salted Atlantic Cod,  Jamaican Ackee, Onions,  Scotch Bonnet Peppers,  Wrapped In A Flour Dough.",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Coconut Shrimp Coctail",
      price: 15000,
      description:
        "Coconut Crusted Tiger Shrimp,  Served In A Cocktail Glass  With Signature Honey Chili Sauce.",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Jerk Chicken Spring Rolls",
      price: 7500,
      description:
        "Jerk Chicken Breast,  Rice Sticks, Chiffonade Vegetables,  Hoisin And Ginger,  In A Crisp Rice Paper.  Served With A Spiced Plum Sauce.",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Jumbo Black Tiger Pepper Prawn",
      price: 15500,
      description:
        "Tiger Shrimp Sauteed In A  Ginger Scotch Bonnet Pepper  And Ketchup Glaze.",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Chicken Wings",
      price: 8000,
      description: "",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Chicken Tenders",
      price: 8500,
      description: "",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Chicken Sticks",
      price: 7000,
      description: "",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Beef Sticks",
      price: 7500,
      description: "",
      photo: placeholder,
    },
  ],
  Mocktail: [
    {
      id: 1,
      name: "Taquila Sunrise Virgin",
      price: 7000,
      description: "",
      photo: placeholder,
    },
  ],
  Whiskey: [
    {
      id: 1,
      name: "Amarula",
      price: 25000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "La Favori",
      price: 28000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Pina Colada",
      price: 27500,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Bailey",
      price: 35000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Beefeater",
      price: 41000,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Beefeater (Shot)",
      price: 4500,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Bailey (Shot)",
      price: 5500,
      description: "",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Cointreau",
      price: 56000,
      description: "",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Cointreau (Shot)",
      price: 5500,
      description: "",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Campari",
      price: 52000,
      description: "",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Campari (Shot)",
      price: 5500,
      description: "",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Chivas Regal XV",
      price: 95000,
      description: "",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Chivas Regal 12",
      price: 49000,
      description: "",
      photo: placeholder,
    },
    {
      id: 14,
      name: "Jack Daniels",
      price: 75000,
      description: "",
      photo: placeholder,
    },
    {
      id: 15,
      name: "Jack Daniels (Shot)",
      price: 7000,
      description: "",
      photo: placeholder,
    },
    {
      id: 16,
      name: "Jager Master",
      price: 50000,
      description: "",
      photo: placeholder,
    },
    {
      id: 17,
      name: "Jager Master (Shot)",
      price: 5500,
      description: "",
      photo: placeholder,
    },
    {
      id: 18,
      name: "Jameson Black",
      price: 68000,
      description: "",
      photo: placeholder,
    },
    {
      id: 19,
      name: "Jameson Green",
      price: 75000,
      description: "",
      photo: placeholder,
    },
    {
      id: 20,
      name: "Black Label",
      price: 93000,
      description: "",
      photo: placeholder,
    },
    {
      id: 21,
      name: "Double Black",
      price: 87000,
      description: "",
      photo: placeholder,
    },
    {
      id: 22,
      name: "Macallan 12yrs",
      price: 100000,
      description: "",
      photo: placeholder,
    },
    {
      id: 23,
      name: "Glenfiddich 12yrs",
      price: 95000,
      description: "",
      photo: placeholder,
    },
    {
      id: 24,
      name: "Glenfiddich 15yrs",
      price: 140000,
      description: "",
      photo: placeholder,
    },
    {
      id: 25,
      name: "Glenfiddich 21yrs",
      price: 610000,
      description: "",
      photo: placeholder,
    },
    {
      id: 26,
      name: "Glenfiddich 18yrs Reserves",
      price: 185000,
      description: "",
      photo: placeholder,
    },
    {
      id: 27,
      name: "Wiskey Sour",
      price: 8000,
      description: "",
      photo: placeholder,
    },
  ],
  Tequila: [
    {
      id: 1,
      name: "Sierra Tequila",
      price: 36500,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Sierra Tequila (Shot)",
      price: 5000,
      description: "",
      photo: placeholder,
    },
  ],
  Rum: [
    {
      id: 1,
      name: "Bacardi",
      price: 50000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Bacardi (shot)",
      price: 5000,
      description: "",
      photo: placeholder,
    },
  ],
  Vodka: [
    {
      id: 1,
      name: "Smirnoff Vodka",
      price: 35000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Smirnoff Vodka (shot)",
      price: 4000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Grey Goose",
      price: 75000,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Grey Goose (shot)",
      price: 7000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Absolute Vodka",
      price: 47000,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Absolute Vodka (shot)",
      price: 5000,
      description: "",
      photo: placeholder,
    },
  ],
  Cognac: [
    {
      id: 1,
      name: "Remy Martin Champagne.",
      price: 130000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Remy Martin XO",
      price: 550000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Hennessy VSOP",
      price: 185000,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Hennessy XO",
      price: 770000,
      description: "",
      photo: placeholder,
    },
  ],
  Sides: [
    {
      id: 1,
      name: "Jollof Rice",
      price: 4000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Fried Rice",
      price: 4000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Candied Sweet Potatoes",
      price: 4500,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Festival",
      price: 4000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Green Plantain",
      price: 4000,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Jamaican Rice and Peas",
      price: 3500,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Caribbean Coleslaw",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Truffle Parmesan Fries",
      price: 5500,
      description: "",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Fries",
      price: 4500,
      description: "",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Mashed Potato",
      price: 6500,
      description: "",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Special Jollof Rice",
      price: 5500,
      description: "",
      photo: placeholder,
    },
  ],
  "Italian Menu Entrees": [
    {
      id: 1,
      name: "Beef Braciole",
      price: 12000,
      description:
        "Thin Individual Slices Of  Beef Filled With Cheese,  Breadcrumbs, Fresh Herbs,  Prosciutto Or Salami  Then Slowly Braised In A  Wine Infused Sauce",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Arancini",
      price: 11200,
      description:
        "Risotto Rice Balls Stuffed  With Al Ragù,  Mozzarella Cheese, Peas And  Other Vegetables Coated",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Melanzane di Parmigiana",
      price: 11500,
      description:
        "Grilled Eggplant Layered  With Marinara Sauce  And Parmesan Cheese  Baked In The Oven",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Chicken Cacciatore",
      price: 12500,
      description:
        "Braised Chicken Thighs  Prepared Hunter Style With  Onions, Herbs, Tomatoes,  Bell Peppers And Sometimes Wine.",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Risotto Nero",
      price: 13100,
      description: "Risotto rice with nero ink.",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Frutto Misto",
      price: 22500,
      description:
        "Breaded Assorted Seafood (Prawns, Calamari, Fish) With Tartar Sauce.",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Smoked Salmon Fettuccine Alfredo",
      price: 20500,
      description: "Creamy Fettuccine  Pasta With Smoked Salmon.",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Spaghetti Bolognese",
      price: 12300,
      description:
        "Al Dente Spaghetti Served  In A Rich Bolognese Sauce  Topped With Parmesan Cheese",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Spaghetti Bolognese with Meat Ball",
      price: 14500,
      description:
        "Al Dente Spaghetti Served  In A Rich Bolognese Sauce  Topped With Parmesan Cheese",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Macaronni In Chicken Maranara",
      price: 10500,
      description: "Tomato Sauce, Chicken.",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Chicken Alfredo Pasta",
      price: 15000,
      description: "Al dente Pasta In Rich Cream Sauce",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Alfredo Spacial",
      price: 17000,
      description: "Alfredo Pasta With Chicken& Shrimp",
      photo: placeholder,
    },
  ],
  "Thai Menu Starter": [
    {
      id: 1,
      name: "Thai Stir Fry Sauce",
      price: 4500.0,
      description:
        "Oyster Sauce, Soy Sauce,  Fish Sauce, Maggi Seasoning Or Bragg's Liquid Amino.",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Thai Fish Cakes",
      price: 9700.0,
      description:
        "Fish Patties Seasoned  In Red Curry Paste, Eggs,  Rice Flour,  Fish Sauce Pan Seared.",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Thai Spring Rolls",
      price: 8000.0,
      description:
        "Ground Chicken,  Matchstick Cut Carrots,  Sliced Cabbage And  Thinly Sliced Onion All Wrapped And  Fried Until Golden.",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Thai Chicken Satay  &  Peanut Sauce  With Mango Salsa",
      price: 0,
      description:
        "Chicken Satay,  Brushed With Thai Marinate,  Served With Peanut Sauce And  Mango Salsa.",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Sizzling Thai Short Ribs",
      price: 14000.0,
      description:
        "Miami Cut Beef Short Ribs,  Marinated With Gochujang,  Grilled And Brushed With  A Korean BBQ Sauce.",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Thai Chicken Lettuce Cup",
      price: 8600.0,
      description:
        "Minced Chicken,  Fish Sauce, Lime Juice,  Chilies And Fresh Herbs",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Shrimp Spring Rolls",
      price: 10000.0,
      description: "",
      photo: placeholder,
    },
  ],
  "Thai Menu Entrees": [
    {
      id: 1,
      name: "Pad Thai",
      price: 10400,
      description:
        "Stir-Fried Rice Noodles  With Eggs, Vegetables  And Tofu, Flavored With  Tamarind Juice, Fish Sauce,  Dried Shrimp, Garlic  Or Shallots, Red Chili Pepper,  Palm Sugar With Fime  Wedges And Peanuts",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Thai Fried Rice (Beef)",
      price: 10500,
      description:
        "Jasmine Or Basmati Rice,  Fried In Chili Pepper Fish Sauce,  Eggs, Onion,  Oyster With Lime Wedge (Beef)",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Thai Fried Rice (Chicken)",
      price: 11500,
      description:
        "Jasmine Or Basmati Rice,  Fried In Chili Pepper Fish Sauce,  Eggs, Onion, Oyster  With Lime Wedge (Chicken).",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Thai Fried Rice (Shrimp)",
      price: 13500,
      description:
        "Jasmine Or Basmati Rice,  Fried In Chili Pepper Fish Sauce,  Eggs, Onion, Oyster  With Lime Wedge (Shrimp).",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Thai Drunken Noodles (Pad Kee Mao)",
      price: 9600,
      description:
        "Golden Mountain Sauce,  Oyster Sauce, Fish Sauce,  Soy Sauce, Sugar Thai Broccoli,  Carrot, Young Peppercorns,  Fingerroot (Grachai),  Holy Basil Or Regular Basil,  Garlic, Thai Chines",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Thai Teriyaki Chicken",
      price: 11500,
      description:
        "Chicken Breasts,  Olive Oil, Low-Sodium Soy Sauce,  Honey, Brown Sugar,  Rice Vinegar, Sesame Oil,  Ginger, Garlic, Cornstarch,  Sesame Seeds And  Green Onions",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Thai Chili Garlic Prawns",
      price: 13800,
      description:
        "Sesame Oil, Garlic,  Ginger, Chili Flakes,  Sriracha, Shallots/Scallions,  Soy Sauce, Sugar",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Thai Beef with Honey and  Black Pepper Sauce",
      price: 12200,
      description:
        "Thai Wine Or Mirin, Beet,  Honey, Pepper, Oyster Sauce,  Soy Sauce, Onion & Garlic",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Thai Chilli Basil Chicken",
      price: 11900,
      description:
        "7oz Chicken Thigh Fillets,  Green Onion, Cup Thai Basil Leaves,  Garlic Cloves,  Birds Eye Or Thai Chilli,  Oyster Sauce,  Light Soy Sauce,  Dark Soy Sauce, Sugar, Water",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Thai Drunken Noodles With Shrimps",
      price: 12500,
      description:
        "Shrimp, Golden Mountain Sauce,  Oyster Sauce, Fish Sauce, Soy Sauce,  Sugar Thai Broccoli, Carrot,  Young Peppercorns,  Fingerroot (Grachai),  Holy Basil Or Regular Basil,  Garlic, Thai Chines",
      photo: placeholder,
    },
  ],
  Champagne: [
    {
      id: 1,
      name: "Moet & Chandon White",
      price: 150000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Velve & Cliequot Ponsardin",
      price: 160000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Moet & Chandon",
      price: 350000,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Don Perignon",
      price: 640000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Pierre Grandet Saint Demi-Sec",
      price: 110000,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Pierre Grandet (Baut)",
      price: 103000,
      description: "",
      photo: placeholder,
    },
  ],
  "Red Wine": [
    {
      id: 1,
      name: "House Red Merlot (Glass)",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Carlo Rossi",
      price: 34000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Maison & Grandnet (Sweet)",
      price: 34000,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "B&G Cuvée Speciale (Sweet)",
      price: 35000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Frontera",
      price: 31000,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Escudo Rojo",
      price: 37000,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Nederburg",
      price: 28000,
      description: "",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Yellow Tail",
      price: 34000,
      description: "",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Ocean Beach",
      price: 30000,
      description: "",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Castillo Grande",
      price: 27000,
      description: "",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Mouton Cadet Bacchus",
      price: 34000,
      description: "",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Bacchus",
      price: 37500,
      description: "",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Tavernello Sangiovese (Glass)",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 14,
      name: "La Fiole (Cotes Du Rhone)",
      price: 37000,
      description: "",
      photo: placeholder,
    },
    {
      id: 15,
      name: "Cote De Roses (Pinot Noir)",
      price: 35000,
      description: "",
      photo: placeholder,
    },
    {
      id: 16,
      name: "Escudo Rojo (Glass)",
      price: 7000,
      description: "",
      photo: placeholder,
    },
    {
      id: 17,
      name: "Mouton Cadet (Glass)",
      price: 8500,
      description: "",
      photo: placeholder,
    },
    {
      id: 18,
      name: "Bacchus (Glass)",
      price: 10000,
      description: "",
      photo: placeholder,
    },
    {
      id: 19,
      name: "Yellow Tail (shot)",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 20,
      name: "B & G Cuvee Speciale",
      price: 27000,
      description: "Soft Red Wine",
      photo: placeholder,
    },
  ],
  Rose: [
    {
      id: 1,
      name: "Classic Rose",
      price: 27000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Cote De Roses",
      price: 33000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Pierre Grandet Rose",
      price: 140000,
      description: "",
      photo: placeholder,
    },
  ],
  "Sparkling Wine": [
    {
      id: 1,
      name: "White Wine Classic White (Glass)",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Pascal",
      price: 19000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Maison J. Grandnet (Sweet White)",
      price: 34000,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Cote Des Roses (Sauvignon Blanc)",
      price: 35000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Cote Des Roses (Chardonnay)",
      price: 38000,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Classic Rose (Glass)",
      price: 7500,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Eisberg Non-Alcohol",
      price: 27000,
      description: "",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Classic wine",
      price: 19500,
      description: "",
      photo: placeholder,
    },
  ],
  Beer: [
    {
      id: 1,
      name: "Heineken",
      price: 3800,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Budweiser",
      price: 3800,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Desperados",
      price: 3000,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Star Radler",
      price: 3500,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Guiness Stout",
      price: 3500,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Heineken Draft (Small)",
      price: 3000,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Heineken Draft (Medium)",
      price: 4000,
      description: "",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Heineken Draft (Large)",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Smirnoff Ice",
      price: 3500,
      description: "",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Goldberg",
      price: 3200,
      description: "",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Legend",
      price: 3500,
      description: "",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Orijin bitters",
      price: 3700,
      description: "",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Pepper beef",
      price: 8500,
      description: "",
      photo: placeholder,
    },
    {
      id: 14,
      name: "Trophy",
      price: 3500,
      description: "Premium Lager Beer",
      photo: placeholder,
    },
  ],
  "Energy Drink": [
    {
      id: 1,
      name: "Red Bull",
      price: 4500,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Blue Bullet",
      price: 3000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Black Bullet",
      price: 4000,
      description: "",
      photo: placeholder,
    },
  ],
  Water: [
    {
      id: 1,
      name: "Water 60cl",
      price: 1200,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Water 1.5L",
      price: 2500,
      description: "",
      photo: placeholder,
    },
  ],
  Coffeetea: [
    {
      id: 1,
      name: "Irie Special Tea",
      price: 3000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Regular Tea",
      price: 3500,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Cappucino",
      price: 3500,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Irish Coffee (Coffee)",
      price: 7500,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Black Coffee",
      price: 2800,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Espresso",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Hot Chocolate",
      price: 4500,
      description: "Hot Chocolate With Whipped Cream",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Caffe Latte",
      price: 6000,
      description: "Espresso and Steamed Milk",
      photo: placeholder,
    },
  ],
  "Soft Drinks Juices": [
    {
      id: 1,
      name: "Jamaica Soda",
      price: 3500,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Freshly Squeezed Juices",
      price: 4500,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Pineapple Freshly Squeezed",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Club Soda",
      price: 2000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Fanta",
      price: 2000,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Sprite",
      price: 2000,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Sorrel (Zobo)",
      price: 4000,
      description: "",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Ginger Pineapple Beer",
      price: 4500,
      description: "",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Lemonade",
      price: 4000,
      description: "",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Fruit Punch",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Smoothie",
      price: 6500,
      description: "",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Chapman",
      price: 5000,
      description: "",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Malt",
      price: 2500,
      description: "",
      photo: placeholder,
    },
    {
      id: 14,
      name: "Schweppes Tonic",
      price: 2000,
      description: "",
      photo: placeholder,
    },
    {
      id: 15,
      name: "Chivita (Large)",
      price: 5500,
      description: "",
      photo: placeholder,
    },
    {
      id: 16,
      name: "Coke",
      price: 2000,
      description: "",
      photo: placeholder,
    },
    {
      id: 17,
      name: "Hollandia Yoghurt",
      price: 5500,
      description: "",
      photo: placeholder,
    },
    {
      id: 18,
      name: "Broken Glass",
      price: 1800,
      description: "",
      photo: placeholder,
    },
    {
      id: 19,
      name: "Schweppes",
      price: 1200,
      description: "",
      photo: placeholder,
    },
  ],
  Shakes: [
    {
      id: 1,
      name: "Vanilla Milkshake",
      price: 6000,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Strawberry Milkshake",
      price: 6000,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Chocolate Milkshake",
      price: 6500,
      description: "",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Banana Milkshake",
      price: 7000,
      description: "",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Yoghurt Shake",
      price: 6500,
      description: "",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Pineapple Shake",
      price: 4500,
      description: "",
      photo: placeholder,
    },
    {
      id: 7,
      name: "Pineapple milkshake",
      price: 5500,
      description: "",
      photo: placeholder,
    },
  ],
  Cocktails: [
    {
      id: 1,
      name: "Negroni",
      price: 7500,
      description: "Gin, Campari, Sweet Vermouth",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Gin Martini",
      price: 7500,
      description: "Gin, Dry Vermouth, Lemon",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Strawberry Daiquiri",
      price: 7500,
      description: "White Rum, Lime Juice,  Simple Syrup, Strawberry Wedge",
      photo: placeholder,
    },
    {
      id: 4,
      name: "Mojito",
      price: 7500,
      description: "White Rum, Lime,  Simple Syrup Mint Leaves",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Moscow Mule",
      price: 8700,
      description: "Vodka, Ginger Beer Lime Juice,",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Bloody Mary",
      price: 7500,
      description:
        "Vodka, Tomato Juice,  Fresh Lemon Juice Worcestershire,  Pepper, Celery, Salt",
      photo: placeholder,
    },
    {
      id: 7,
      name: "French 75",
      price: 9000,
      description: "Gin, Lemon,  Simple Syrup, Champagne",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Clover Club",
      price: 7500,
      description: "Gin, Lemon,  Raspberry Syrup, Egg White",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Gin Fizz",
      price: 7500,
      description: "Gin, Lemon, Simple Syrup, Soda",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Pina Colada (Cocktail)",
      price: 8500,
      description: "White Rum, Coconut Cream,  Pineapple Juice",
      photo: placeholder,
    },
    {
      id: 11,
      name: "Old Fashioned",
      price: 7500,
      description: "Bourbon (Or Rye Whiskey)  Simple Syrup, Angostura Bitters",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Margarita",
      price: 7500,
      description: "Blanco Tequila,  Lime Juice, Triple Sec",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Manhattan",
      price: 7500,
      description: "Rye, Sweet Vermouth, Angostura",
      photo: placeholder,
    },
    {
      id: 14,
      name: "Penicillin",
      price: 7500,
      description:
        "Blended Scotch,  Fresh Lemon Juice,  Honey Simple Syrup Ginger,  Smoky Islay Scotch",
      photo: placeholder,
    },
    {
      id: 15,
      name: "Paloma",
      price: 7500,
      description:
        "Reposado or  Blanco Tequila Lime,  Pinch of Salt Grapefruit Soda",
      photo: placeholder,
    },
    {
      id: 16,
      name: "Americano",
      price: 8000,
      description: "Campari, Sweet Vermouth, Soda",
      photo: placeholder,
    },
    {
      id: 17,
      name: "Mai Tai",
      price: 7500,
      description:
        "Blended Rum, Lime Juice,  Orgeat Syrup, Orange Liqueur,  Mint Sprig",
      photo: placeholder,
    },
    {
      id: 18,
      name: "Dark 'N' Stormy",
      price: 7500,
      description: "Goslings Black Seal Rum, Ginger Beer",
      photo: placeholder,
    },
    {
      id: 19,
      name: "Caipirinha",
      price: 7500,
      description: "Cachaça, Whole Lime,  In Wedges,  Extra Fine White Sugar",
      photo: placeholder,
    },
    {
      id: 20,
      name: "Amaretto Sour",
      price: 8000,
      description:
        "Lazzaroni Amaretto,  Cask-Strength Bourbon  Fresh Lemon Juice,  Simple Syrup, Egg White",
      photo: placeholder,
    },
    {
      id: 21,
      name: "Vieux Carre",
      price: 13500,
      description:
        "Rye, Cognac Sweet Vermouth,  Benedictine Angostura Bitters,  Peychaud's Bitters",
      photo: placeholder,
    },
    {
      id: 22,
      name: "Sazerac",
      price: 9000,
      description:
        "Rye or Brandy Demerara Syrup,  Peychaud's Bitters Lemon Twist,  Absinthe",
      photo: placeholder,
    },
    {
      id: 23,
      name: "Vesper",
      price: 7500,
      description: "Gin, Vodka, Lillet",
      photo: placeholder,
    },
    {
      id: 24,
      name: "Irie Knees",
      price: 7500,
      description: "Gin, freshly squeezed Lemon juice honey syrup",
      photo: placeholder,
    },
    {
      id: 25,
      name: "Cosmopolitan",
      price: 7500,
      description: "Vodka, Cranberry juice,  Lime Juice,  Cointreau L'unique",
      photo: placeholder,
    },
    {
      id: 26,
      name: "Painkiller",
      price: 7500,
      description:
        "Pusser's Navy Rum, Unsweetened Pineapple Juice,  Freshly Squeezed Orange Juice,  Cream Of Coconut",
      photo: placeholder,
    },
    {
      id: 27,
      name: "Irish Coffee",
      price: 7500,
      description:
        "Slane Irish Whiskey,  Demerara Simple Syrup Hot Coffee,  Cream Float",
      photo: placeholder,
    },
    {
      id: 28,
      name: "Side C",
      price: 7500,
      description: "Brandy, Lemon, Triple sec",
      photo: placeholder,
    },
    {
      id: 29,
      name: "Irie Spritz",
      price: 7500,
      description: "Aperol, Prosecco, Club soda",
      photo: placeholder,
    },
    {
      id: 30,
      name: "Sex on the Beach",
      price: 7500,
      description: "Vodka, Peach Schnapps,  Orange Juice & Cranberry Juice",
      photo: placeholder,
    },
    {
      id: 31,
      name: "Zombie",
      price: 9500,
      description:
        "Light Rum, Dark Rum,  Apricot Brandy Falernum Liqueur,  Freshly Squeezed Lime Juice,  Pineapple Juice, Grenadine,  Overproof Rum",
      photo: placeholder,
    },
    {
      id: 32,
      name: "Vodka Martini",
      price: 7000,
      description: "Vodka, Dry Vermouth, lemon Twist",
      photo: placeholder,
    },
    {
      id: 33,
      name: "Long Island",
      price: 9500,
      description:
        "Vodka, Rum,  Tequila, Gin, Triple Sec,  Simple Syrup,  Lemon Juice, Cola",
      photo: placeholder,
    },
    {
      id: 34,
      name: "Bellini",
      price: 7500,
      description: "White Peach Puree, Prosecco",
      photo: placeholder,
    },
    {
      id: 35,
      name: "Hanky-Panky",
      price: 7500,
      description: "Gin, Sweet Vermouth,  Dashes Fernet Branca",
      photo: placeholder,
    },
    {
      id: 36,
      name: "Last Word",
      price: 8000,
      description:
        "Gin, Green Chartreuse  Maraschino Liqueur,  Fresh Lime Juice",
      photo: placeholder,
    },
    {
      id: 37,
      name: "Blood and Sand",
      price: 8000,
      description:
        "Scotch, Cherry Heering,  Sweet Vermouth,  Orange Juice Lemon",
      photo: placeholder,
    },
    {
      id: 38,
      name: "Expresso Martini",
      price: 7500,
      description: "Vodka, Coffee Liqueur,  Fresh Espresso, Simple Syrup",
      photo: placeholder,
    },
    {
      id: 39,
      name: "Rum Punch",
      price: 7500,
      description: "Rum & fruit punch",
      photo: placeholder,
    },
    {
      id: 40,
      name: "The Blue Hawaiian",
      price: 8000,
      description: "Rum, Cream Of Coconut,  Pineapple Juice & Blue Caracao",
      photo: placeholder,
    },
    {
      id: 41,
      name: "Tequila Sunrise",
      price: 7500,
      description: "",
      photo: placeholder,
    },
  ],
  Soups: [
    {
      id: 1,
      name: "Vegetable soup",
      price: 10600,
      description: "",
      photo: placeholder,
    },
    {
      id: 2,
      name: "Afang",
      price: 11500,
      description: "",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Egusi soup",
      price: 10200,
      description: "",
      photo: placeholder,
    },
  ],
};

const getAllMenuItems = () => {
  return Object.values(menuData).flat();
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("Starters");
  // const [menuItems, setMenuItems] = useState(getAllMenuItems());
  const [menuItems, setMenuItems] = useState(menuData["Starters"]);
  const [isFading, setIsFading] = useState(false);

  const handleCategoryChange = (category) => {
    setIsFading(true);
    setTimeout(() => {
      setSelectedCategory(category);
      if (category === "All") {
        setMenuItems(getAllMenuItems());
      } else {
        setMenuItems(menuData[category]);
      }
      setIsFading(false);
    }, 300);
  };

  return (
    <div className="w-full h-full bg-gray-100 px-3">
      <div className="border-x border-gray-300">
        <div
          className="bg-fixed top-0 left-0 w-full min-h-[440px] bg-cover bg-center"
          style={{ backgroundImage: `url(${irieBackGround.src})` }}
        >
          <div className="h-[65vh] min-h-[440px] flex flex-col gap-5 items-center justify-center">
            <p className="font-alexBrush text-amber-600 text-2xl lg:text-5xl">
              Check out our
            </p>
            <h1 className="text-sky-950 text-6xl lg:text-[122px] tracking-[50px] font-bold">
              Menu
            </h1>
          </div>
          <div className="flex flex-col items-center p-4 sm:p-8 bg-gray-100 ">
            <div className=" flex flex-wrap justify-center space-x-4 mb-8 font-noto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 text-sm sm:text-base ${
                    selectedCategory === category
                      ? "border-b-2 border-amber-800 text-amber-700 font-semibold"
                      : "border-b-2 border-transparent"
                  } transition-border duration-300 ease-in-out`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div
              className={`h-full grid grid-cols-1 py-5 gap-6 px-0 sm:px-8 container ease-in-out lg:grid-cols-2 transition-opacity duration-300 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="px-2 font-noto flex flex-row items-center w-full gap-3 md:gap-6"
                >
                  <div className="relative flex-shrink-0 rounded-full md:h-32 md:w-32 h-20 w-20 overflow-hidden">
                    <Image
                      src={item.photo}
                      alt={item.name}
                      className="object-cover rounded-full w-full h-full"
                      fill
                    />
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between items-center gap-2 md:gap-4">
                      <h2 className="text-lg sm:text-xl font-semibold max-w-28 md:max-w-52 lg:max-w-40 flex-shrink-0 text-amber-800">
                        {item.name}
                      </h2>
                      <div className="border-dotted border-b-2 border-amber-800 h-1 w-full"></div>
                      <p className="text-sky-950 font-bold md:text-lg sm:text-xl">
                        ₦{item.price}
                      </p>
                    </div>
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
