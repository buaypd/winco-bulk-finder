const products = [
  {
    "id": 1,
    "name": "Rolled Oats",
    "category": "Grains",
    "section": 1,
    "pricePerPound": 0.88
  },
  {
    "id": 2,
    "name": "Long Grain White Rice",
    "category": "Rice",
    "section": 1,
    "pricePerPound": 1.19
  },
  {
    "id": 3,
    "name": "Black Beans",
    "category": "Beans",
    "section": 2,
    "pricePerPound": 1.39
  },
  {
    "id": 4,
    "name": "Red Lentils",
    "category": "Legumes",
    "section": 2,
    "pricePerPound": 1.59
  },
  {
    "id": 5,
    "name": "Raw Almonds",
    "category": "Nuts",
    "section": 3,
    "pricePerPound": 5.99
  },
  {
    "id": 6,
    "name": "Dried Cranberries",
    "category": "Dried Fruit",
    "section": 4,
    "pricePerPound": 4.49
  },
  {
    "id": 7,
    "name": "Ground Cinnamon",
    "category": "Spices",
    "section": 5,
    "pricePerPound": 7.99
  },
  {
    "id": 8,
    "name": "Trail Mix",
    "category": "Snacks",
    "section": 6,
    "pricePerPound": 6.49
  },
  {
    "id": 9,
    "name": "Dark Chocolate Covered Almonds",
    "category": "Candy",
    "section": 7,
    "pricePerPound": 8.99
  },
  {
    "id": 10,
    "name": "Gummy Bears",
    "category": "Candy",
    "section": 8,
    "pricePerPound": 3.49
  }
];

export const getAllProducts = () =>{
  return products;
}

export const getProductById = (id) => {
  return products.find(product => product.id ===id);
}

export const createProduct = (newProduct) => {
  const productIds = products.map(product => product.id);
const maxId = Math.max(...productIds);
const nextId = maxId + 1;
newProduct.id = nextId;
products.push(newProduct);
  return newProduct;
}
