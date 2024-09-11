"use client";
import { useState } from "react";
import Image from "next/image";
import irieBackGround from "@/public/images/irieBackGround.jpg";
import placeholder from "@/public/images/placeholder.png";

const categories = [
  "All",
  "Starters",
  "Entrees",
  "Desserts",
  "Sides",
  "Beverages",
  "Alcoholic Beverages",
];

const menuData = {
  Entrees: [
    {
      id: 1,
      name: "Peppered goat meat",
      price: 8500,
      description: "Tender goat meat cooked with spicy peppers and seasonings",
      photo:
        "https://res.cloudinary.com/dkaqnhs2i/image/upload/v1726059013/s6oodznmhhfgfzozt3pq.jpg",
    },
    {
      id: 2,
      name: "Peppered chicken",
      price: 7600,
      description:
        "Spicy chicken dish with a blend of Nigerian peppers and spices",
      photo: placeholder,
    },
    {
      id: 3,
      name: "Peppered Gizzard",
      price: 10000,
      description: "Chicken gizzards cooked in a spicy pepper sauce",
      photo:
        "https://res.cloudinary.com/dkaqnhs2i/image/upload/v1726059641/i97nxd7gkqoxwopuul2w.jpg",
    },
    {
      id: 4,
      name: "Grilled whole fish with fries",
      price: 28500,
      description:
        "Whole fish grilled to perfection, served with a side of crispy fries",
      photo: placeholder,
    },
    {
      id: 5,
      name: "Seafood okra",
      price: 12500,
      description:
        "A delicious mix of seafood cooked with okra in Nigerian style",
      photo: placeholder,
    },
    {
      id: 6,
      name: "Peppered snail",
      price: 14700,
      description: "Snails cooked in a spicy pepper sauce, a Nigerian delicacy",
      photo: placeholder,
    },
    {
      id: 7,
      name: "SMALL CHOPS ( BUILD YOUR PLATTER )",
      price: 32000,
      description:
        "A tray with spring rolls, samosa, puff puff, sausage rolls, peppered chicken, and more",
      photo: placeholder,
    },
    {
      id: 8,
      name: "Mini small chops Tray",
      price: 16000,
      description:
        "Mini small chops Tray (8 Spring rolls, 8 Samosa, 8 chicken or Beef, 15 puff puff)",
      photo: placeholder,
    },
    {
      id: 9,
      name: "Medium chops Tray",
      price: 19000,
      description:
        "Medium Chops Tray (12 Spring rolls, 12 Samosa, 10 Chicken or Beef, 20 puff puff)",
      photo: placeholder,
    },
    {
      id: 10,
      name: "Large Chops Tray",
      price: 29500,
      description:
        "Large Chops Tray (20 Spring rolls, 20 Samosa, 15 Chicken or Beef, 30 puff puff)",
      photo: placeholder,
    },
  ],
  Starters: [
    {
      id: 11,
      name: "Goat Meat Pepper Soup",
      price: 10300,
      description:
        "Goat Meat Cooked with Hot Pepper, Fresh Scent Leaf & Seasonings Served with Rice",
      photo: placeholder,
    },
    {
      id: 12,
      name: "Chicken Pepper Soup",
      price: 9300,
      description:
        "Chicken Cooked with Hot Pepper, Fresh Scent Leaf & Seasonings Served with Rice",
      photo: placeholder,
    },
    {
      id: 13,
      name: "Fish Pepper Soup",
      price: 12300,
      description:
        "Fish Cooked with Hot Pepper, Fresh Scent Leaf & Seasonings Served with Rice",
      photo: placeholder,
    },
    {
      id: 14,
      name: "Coleslaw Salad",
      price: 3500,
      description: "Shredded Fresh Cabbage and Carrot with cream",
      photo: placeholder,
    },
    {
      id: 15,
      name: "Samosa",
      price: 7000,
      description: "Triangular pastry filled with spiced vegetables or meat",
      photo: placeholder,
    },
    {
      id: 16,
      name: "White rice",
      price: 4000,
      description: "Steamed white rice",
      photo: placeholder,
    },
  ],
  Dessert: [
    {
      id: 17,
      name: "Carrot Cake with Cream Cheese Sauce",
      price: 10800,
      description: "Moist carrot cake topped with rich cream cheese frosting",
      photo: placeholder,
    },
    {
      id: 18,
      name: "Bread Pudding with Creamy Rum Sauce",
      price: 9800,
      description: "Warm bread pudding drizzled with a creamy rum sauce",
      photo: placeholder,
    },
    {
      id: 19,
      name: "Pineapple Upside Down Cake",
      price: 10300,
      description: "Classic cake with caramelized pineapple topping",
      photo: placeholder,
    },
    {
      id: 20,
      name: "Chocolate Cake",
      price: 9800,
      description: "Rich, moist chocolate cake with chocolate frosting",
      photo: placeholder,
    },
    {
      id: 21,
      name: "Ice Cream Meadeay",
      price: 8500,
      description: "Assorted ice cream flavors with toppings",
      photo: placeholder,
    },
    {
      id: 22,
      name: "Cheese Cake",
      price: 11000,
      description: "Creamy cheesecake with a graham cracker crust",
      photo: placeholder,
    },
  ],
  Sides: [
    {
      id: 23,
      name: "Jollof Rice",
      price: 4000,
      description: "Spicy and flavorful West African rice dish",
      photo: placeholder,
    },
    {
      id: 24,
      name: "Fried Rice",
      price: 4000,
      description: "Stir-fried rice with vegetables and choice of protein",
      photo: placeholder,
    },
    {
      id: 25,
      name: "Candied Sweet Potatoes",
      price: 4500,
      description: "Sweet potatoes glazed with a sweet syrup",
      photo: placeholder,
    },
    {
      id: 26,
      name: "Green Plantain",
      price: 4000,
      description: "Fried green plantains, a popular Caribbean side dish",
      photo: placeholder,
    },
    {
      id: 27,
      name: "Caribbean Coleslaw",
      price: 5000,
      description: "Creamy coleslaw with a Caribbean twist",
      photo: placeholder,
    },
    {
      id: 28,
      name: "Fries",
      price: 4500,
      description: "Crispy golden french fries",
      photo: placeholder,
    },
  ],
  "Alcoholic Beverages": [
    {
      id: 33,
      name: "Heineken",
      price: 2500,
      description: "Cold Heineken beer",
      photo: placeholder,
    },
    {
      id: 34,
      name: "Guinness Stout",
      price: 3000,
      description: "Cold Guinness stout",
      photo: placeholder,
    },
    {
      id: 35,
      name: "Red Wine",
      price: 15000,
      description: "Bottle of red wine",
      photo: placeholder,
    },
    {
      id: 36,
      name: "White Wine",
      price: 15000,
      description: "Bottle of white wine",
      photo: placeholder,
    },
  ],
  Beverages: [
    {
      id: 29,
      name: "Coke",
      price: 1500,
      description: "Chilled Coca-Cola",
      photo: placeholder,
    },
    {
      id: 30,
      name: "Sprite",
      price: 1500,
      description: "Chilled Sprite",
      photo: placeholder,
    },
    {
      id: 31,
      name: "Fanta",
      price: 1500,
      description: "Chilled Fanta",
      photo: placeholder,
    },
    {
      id: 32,
      name: "Water",
      price: 500,
      description: "Bottled water",
      photo: placeholder,
    },
  ],
  Desserts: [
    {
      id: 17,
      name: "Carrot Cake with Cream Cheese Sauce",
      price: 10800,
      description: "Moist carrot cake topped with rich cream cheese frosting",
      photo: placeholder,
    },
    {
      id: 18,
      name: "Bread Pudding with Creamy Rum Sauce",
      price: 9800,
      description: "Warm bread pudding drizzled with a creamy rum sauce",
      photo: placeholder,
    },
  ],
};

const getAllMenuItems = () => {
  return Object.values(menuData).flat();
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuItems, setMenuItems] = useState(getAllMenuItems());
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
            <p className="font-alexBrush text-amber-600 text-5xl">
              Check out our
            </p>
            <h1 className="text-sky-950 text-4xl sm:text-5xl lg:text-[122px] tracking-[50px] font-bold">
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
