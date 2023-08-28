const piking_duck = require("../assets/images/food_items/Peking-duck.jpg");
const fried_noodles = require("../assets/images/food_items/fried-noodles.png");
const sushi = require("../assets/images/food_items/sushi.png");
const fried_rice = require("../assets/images/food_items/fried-rice.jpg");

const productData = [
  {
    name: "Piking Duck",
    price: 15.99,
    nationality: "Chinese",
    description:
      "A famous duck dish from Beijing[1] that has been prepared since the imperial era. The meat is prized for its thin, crisp skin, with authentic versions of the dish serving mostly the skin and little meat, sliced in front of the diners by the cook.",
    image: piking_duck,
    rating: 4.5,
    id: 1,
  },
  {
    name: "Fried Noodles",
    price: 17.99,
    nationality: "Chinese",
    description:
      "A dish of stir-fried noodles, with shredded chicken or beef and a variety of vegetables including onions, carrots, cabbage, bean sprouts, celery, and bell peppers, served over thin rice noodles. ",
    image: fried_noodles,
    rating: 4.6,
    id: 2,
  },
  {
    name: "Sushi",
    price: 14.25,
    nationality: "Japanese",
    description:
      "A dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is 'sushi rice', also referred to as shari, or sumeshi.",
    image: sushi,
    rating: 4.0,
    id: 3,
  },
  {
    name: "Fried Rice",
    price: 16.55,
    nationality: "Japanese",
    description:
      "A dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish. ",
    image: fried_rice,
    rating: 4.8,
    id: 4,
  },
];

export default productData;
