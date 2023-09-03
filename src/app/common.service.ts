import { Injectable } from '@angular/core';
interface listItem{
  itemName:string,
  count: number,
  price: number,
  imageUrl:string
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  groceryList:Array<listItem> = [
    {
      itemName: "Dairy milk",
      count: 0,
      price: 30,
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPaPxnEDQtPHUl8n74r5QYSZmSoVnZWX27bQ&usqp=CAU"
    },
    {
      itemName: "Ketchup",
      count: 0,
      price: 20,
      imageUrl: "https://m.media-amazon.com/images/I/51Kghh1CZeL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
      itemName: "Almonds",
      count: 0,
      price: 300,
      imageUrl: "https://m.media-amazon.com/images/I/713D1eLsaqL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
      itemName: "Maggi",
      count: 0,
      price: 158,
      imageUrl: "https://m.media-amazon.com/images/I/81G0iD2cvDL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
      itemName: "Vedaka Popular Toor",
      count: 0,
      price: 60,
      imageUrl: "https://m.media-amazon.com/images/I/91yQ36gHYuL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
      itemName: "jira",
      count: 0,
      price: 500,
      imageUrl: "https://m.media-amazon.com/images/I/91jx9jfekrL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
      itemName: "Dates",
      count: 0,
      price: 299,
      imageUrl: "https://m.media-amazon.com/images/I/817o567rioL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
      itemName: "Nutrela SOYA Chunks",
      count: 0,
      price: 500,
      imageUrl: "https://m.media-amazon.com/images/I/41s5Oe7vU3L._AC_UL800_FMwebp_QL65_.jpg"
    },
    
  ];
  vegetableList:Array<listItem> = [
    {
    itemName: "Caret",
    count: 0,
    price: 10,
    imageUrl: "https://t4.ftcdn.net/jpg/00/53/09/51/360_F_53095132_RYsAcP3cQ72jM84ibY2FGCCAe9K14CiM.jpg"
    },
    {
    itemName: "Fresh Coriander",
    count: 0,
    price: 10,
    imageUrl: "https://m.media-amazon.com/images/I/71pbtRs3UQL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
    itemName: "Fresh Chilli - Green",
    count: 0,
    price: 9,
    imageUrl: "https://m.media-amazon.com/images/I/81dnQAFzn-L._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
    itemName: "Fresh Bottle Gourd ",
    count: 0,
    price: 31,
    imageUrl: "https://m.media-amazon.com/images/I/51mSuAwCtkL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
    itemName: "Fresh Spinach, 250g",
    count: 0,
    price: 11,
    imageUrl: "https://m.media-amazon.com/images/I/71J4gpncRhL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
    itemName: "Fresh Sweet Corn",
    count: 0,
    price: 31,
    imageUrl: "https://m.media-amazon.com/images/I/71kb4tUZALL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
    itemName: "Fresh Cauliflower small",
    count: 0,
    price: 41,
    imageUrl: "https://m.media-amazon.com/images/I/71T7VuoA+XL._AC_UL800_FMwebp_QL65_.jpg"
    },
    {
    itemName: "Caret",
    count: 0,
    price: 10,
    imageUrl: "https://t4.ftcdn.net/jpg/00/53/09/51/360_F_53095132_RYsAcP3cQ72jM84ibY2FGCCAe9K14CiM.jpg"
    },
    {
    itemName: "Caret",
    count: 0,
    price: 10,
    imageUrl: "https://t4.ftcdn.net/jpg/00/53/09/51/360_F_53095132_RYsAcP3cQ72jM84ibY2FGCCAe9K14CiM.jpg"
    },
    {
    itemName: "Caret",
    count: 0,
    price: 10,
    imageUrl: "https://t4.ftcdn.net/jpg/00/53/09/51/360_F_53095132_RYsAcP3cQ72jM84ibY2FGCCAe9K14CiM.jpg"
    },
];
  fruitList:Array<listItem> = [
    {
    itemName: "Apple",
    count: 0,
    price: 100,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgQkhNPr65sZ39DiaeBA3wFMqYFknJJzJQBvsdB2Z&s"
  },
    {
    itemName: "Lemon",
    count: 0,
    price: 30,
    imageUrl: "https://m.media-amazon.com/images/I/71ptno4aB1L._AC_UL800_FMwebp_QL65_.jpg"
  },
    {
    itemName: "orange",
    count: 0,
    price: 109,
    imageUrl: "https://m.media-amazon.com/images/I/41tRTl-dSjL._AC_UL800_FMwebp_QL65_.jpg"
  },
    {
    itemName: " Water Melon",
    count: 0,
    price: 85,
    imageUrl: "https://m.media-amazon.com/images/I/71ZaS7W9dYL._AC_UL800_FMwebp_QL65_.jpg"
  },
    {
    itemName: "Banana",
    count: 0,
    price: 41,
    imageUrl: "https://m.media-amazon.com/images/I/41pwb2ce+lL._AC_UL800_FMwebp_QL65_.jpg"
  },
];
  cardList:Array<listItem | {}>=[] 

  constructor() { }
}
