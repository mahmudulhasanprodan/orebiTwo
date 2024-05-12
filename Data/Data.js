
// Arrival Image part Here

import ImageOne from "../src/assets/HomeComponentPic/ArrivalPicone.png"
import ImageTwo from "../src/assets/HomeComponentPic/ArrivalPictwo.png"
import ImageThree from "../src/assets/HomeComponentPic/ArrivalPicthree.png"
import ImageFour from "../src/assets/HomeComponentPic/ArrivalPicfour.png"

// Bestseller Image part Here
import Imgone from "../src/assets/HomeComponentPic/Bestsellerone.png"
import Imatwo from "../src/assets/HomeComponentPic/Bestsellertwo.png"
import Imgthree from "../src/assets/HomeComponentPic/Bestsellerthree.png"
import Imgfour from "../src/assets/HomeComponentPic/Bestsellertfour.png"

//Special Offers Image Part Here
import Img1 from "../src/assets/HomeComponentPic/Speacialone.png"
import Img2 from "../src/assets/HomeComponentPic/Speacialtwo.png"
import Img3 from "../src/assets/HomeComponentPic/Speacialthree.png"
import Img4 from "../src/assets/HomeComponentPic/Speacialfour.png"


export const ArrivalData = [
  {
    id: 1,
    img: ImageOne,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: "Black",
    bazeitem: false,
    discount: "10%",
  },

  {
    id: 2,
    img: ImageTwo,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: "Black",
    bazeitem: true,
    discount: "10%",
  },

  {
    id: 3,
    img: ImageThree,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: "Black",
    bazeitem: true,
    discount: "10%",
  },

  {
    id: 4,
    img: ImageFour,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: "Black",
    bazeitem: true,
    discount: "10%",
  },
];

export const BestSellerData = [
  {
    id: 1,
    img: Imgone,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: true,
    bazeitem: true,
    discount: "10%",
  },

  {
    id: 2,
    img: Imatwo,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: true,
    bazeitem: true,
    discount: "10%",
  },

  {
    id: 3,
    img: Imgthree,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: true,
    bazeitem: true,
    discount: "10%",
  },

  {
    id: 4,
    img: Imgfour,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: true,
    bazeitem: true,
    discount: "10%",
  },
];

export const SpecialOffersData = [
  {
    id: 1,
    img: Img1,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: true,
    bazeitem: true,
    discount: "10%",
  },

  {
    id: 2,
    img: Img2,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: true,
    bazeitem: true,
    discount: "10%",
  },

  {
    id: 3,
    img: Img3,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: true,
    bazeitem: true,
    discount: "10%",
  },

  {
    id: 4,
    img: Img4,
    baze: true,
    title: "Basic Crew Neck Tee",
    price: "$44.00",
    color: true,
    bazeitem: true,
    discount: "10%",
  },
];

export const CategoriesData = [
  {
    id: 1,
    title: "Mobile",
    subcategoris: [
      { id: 1, title: "Oppo" },
      { id: 2, title: "Vivo" },
      { id: 3, title: "Realme" },
      { id: 4, title: "Samsung" },
      { id: 5, title: "Techno" },
      { id: 6, title: "Nokia" },
    ],
  },
  {
    id: 2,
    title: "Accesories",
    subcategoris: [],
  },
  {
    id: 3,
    title: "Electronic",
    subcategoris: [
      { id: 1, title: "Television" },
      { id: 2, title: "Radio" },
      { id: 3, title: "Freze" },
    ],
  },
  {
    id: 4,
    title: "Cloths",
    subcategoris: [],
  },
  {
    id: 4,
    title: "Men Fasion",
    subcategoris: [],
  },
];

export const ShopColorData = [
  { id: 1, color: "#000000", title: "Black" },
  { id: 2, color: "#FF8686", title: "Pink" },
  { id: 3, color: "#7ED321", title: "Green" },
  { id: 4, color: "#B6B6B6", title: "Offwhite" },
  { id: 5, color: "#15CBA5", title: "Blue" },
];

export const ShopBrandData = [
  { id: 1, title: "HP" },
  { id: 2, title: "Dell" },
  { id: 3, title: "Asus" },
  { id: 4, title: "Lenevo" },
  { id: 5, title: "Tushiba" },
];

export const ShopPriceData = [
  { id: 1, title: "$0.00 - $9.99" },
  { id: 2, title: "$10.00 - $19.99" },
  { id: 3, title: "$20.00 - $29.99" },
  { id: 4, title: "$30.00 - $39.99" },
  { id: 5, title: "$40.00 - $69.99" },
];

export const DropdownData = [
  { id: 1, product: "Feature" },
  { id: 1, product: "Cloths" },
  { id: 1, product: "Sunglass" },
  { id: 1, product: "Fasion" },
  { id: 1, product: "Men Fasion" },

];

export const DropdownShowData = [
  { id: 1, product: 30 },
  { id: 1, product: 10 },
  { id: 1, product: 20 },
  { id: 1, product: 40 },
  { id: 1, product: 25 },

];




