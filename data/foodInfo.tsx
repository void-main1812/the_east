const piking_duck = require("../assets/images/food_items/Peking-duck.jpg");
const fried_noodles = require("../assets/images/food_items/fried-noodles.png");
const sushi = require("../assets/images/food_items/sushi.png");
const fried_rice = require("../assets/images/food_items/fried-rice.jpg");

export const PikingDuck = {
  name: "Piking Duck",
  nationality: "Chinese",
  price: 15.99,
  image: piking_duck,
  rating: "4.5",
  description:
    "Peking duck is a dish from Beijing that has been prepared since the Imperial era. The meat is characterized by its thin, crisp skin, with authentic versions of the dish serving mostly the skin and little meat, sliced in front of the diners by the cook. Ducks bred specially for the dish are slaughtered after 65 days and seasoned before being roasted in a closed or hung oven. The meat is often eaten with pancakes, spring onions, and hoisin sauce or sweet bean sauce. Peking duck was originally created for the imperial elite and was first mentioned in the Complete Recipes for Dishes and Beverages manual in 1330 by Hu Sihui, an inspector of the imperial kitchen. The dish is prized for the thin, crisp skin, with authentic versions of the dish serving mostly the skin and little meat, sliced in front of the diners by the cook.",
  ingredients: [
    "Duck",
    "Pancakes",
    "Spring Onions",
    "Hoisin Sauce",
    "Sweet Bean Sauce",
  ],
  _id: "1",
  suggestions: [
    {
      image: fried_noodles,
      name: "Fried Noodles",
      id: 2,
    },
    {
      image: sushi,
      name: "Sushi",
      id: 3,
    },
  ],
};
export const FriedNoodles = {
  name: "Fried Noodles",
  nationality: "Chinese",
  price: 17.99,
  image: fried_noodles,
  rating: "4.6",
  description:
    "Chow mein are Chinese stir-fried noodles with vegetables and sometimes meat or tofu; the name is a romanization of the Taishanese chāu-mèn. The dish is popular throughout the Chinese diaspora and appears on the menus of most Chinese restaurants abroad. It is particularly popular in India, Nepal, the UK and the US. The pronunciation chow mein is an English corruption of the Taishanese pronunciation chāu-mèn. The lightly pronounced Taishanese, resembling the end of a Portuguese nasal vowel, was taken to be /n/ by English speakers. The Taishan dialect was spoken by migrants to North America from Taishan. In American Chinese cuisine, it is a stir-fried dish consisting of noodles, meat (chicken being most common but pork, beef, shrimp or tofu sometimes being substituted), onions and celery. It is often served as a specific dish at westernized Chinese restaurants.",
  ingredients: ["Noodles", "Chicken", "Onions", "Celery", "Soy Sauce"],
  _id: "2",
  suggestions: [
    {
      image: fried_rice,
      name: "Fried Rice",
      id: 4,
    },
    {
      image: sushi,
      name: "Sushi",
      id: 3,
    },
  ],
};
export const Sushi = {
  name: "Sushi",
  nationality: "Japanese",
  price: 14.25,
  image: sushi,
  rating: "4",
  description:
    "Sushi is a traditional Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables. Styles of sushi and its presentation vary widely, but the one key ingredient is sushi rice, also referred to as shari, or sumeshi. Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat. Many types of sushi are vegetarian. It is often served with pickled ginger, wasabi, and soy sauce. Daikon radish or pickled daikon (takuan) are popular garnishes for the dish.",
  ingredients: ["Rice", "Seafood", "Vegetables", "Pickled Ginger", "Wasabi"],
  _id: "3",
  suggestions: [
    {
      image: fried_noodles,
      name: "Fried Noodles",
      id: 2,
    },
    {
      image: piking_duck,
      name: "Pickling Duck",
      id: 1,
    },
  ],
};
export const FriedRice = {
  name: "Fried Rice",
  nationality: "Japanese",
  price: 16.55,
  image: fried_rice,
  rating: "4.5",
  description:
    "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish. Fried rice is a popular component of East Asian, Southeast Asian and certain South Asian cuisines. As a homemade dish, fried rice is typically made with ingredients left over from other dishes, leading to countless variations. Fried rice first developed during the Sui Dynasty in China and as such all fried rice dishes can trace their origins to Chinese fried rice.",
  ingredients: ["Rice", "Eggs", "Vegetables", "Seafood", "Meat"],
  _id: "4",
  suggestions: [
    {
      image: sushi,
      name: "Sushi",
      id: 3,
    },
    {
      image: piking_duck,
      name: "Pickling Duck",
      id: 1,
    },
  ],
};
