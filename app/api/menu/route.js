export default function handler(req, res) {
  const { category } = req.query;

  const menu = {
    Starters: [
      {
        id: 1,
        name: "Spring Rolls",
        price: 500,
        ingredients: "Cabbage, Carrots, Green Onions",
        photo: "/images/spring-rolls.jpg",
      },
      // Add more starters
    ],
    // Define other categories similarly
  };

  res.status(200).json(menu[category] || []);
}
