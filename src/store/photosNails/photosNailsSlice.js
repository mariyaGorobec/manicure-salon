import { createSlice } from "@reduxjs/toolkit";

const fullPhotosItem = [
  {
    src: "./img/nails/nails1.png",
    name: "Евгении",
    alt: "nailsPhoto1",
    categoryID: "0",
  },
  {
    src: "./img/nails/nails2.png",
    name: "Евгении",
    alt: "nailsPhoto2",
    categoryID: "0",
  },
  {
    src: "./img/nails/nails3.png",
    name: "Евгении",
    alt: "nailsPhoto3",
    categoryID: "0",
  },
  {
    src: "./img/nails/nails4.png",
    name: "Евгении",
    alt: "nailsPhoto4",
    categoryID: "0",
  },
  {
    src: "./img/nails/nails5.png",
    name: "Крис",
    alt: "nailsPhoto5",
    categoryID: "1",
  },
  {
    src: "./img/nails/nails6.png",
    name: "Крис",
    alt: "nailsPhoto6",
    categoryID: "1",
  },
  {
    src: "./img/nails/nails7.png",
    name: "Марго",
    alt: "nailsPhoto7",
    categoryID: "2",
  },
  {
    src: "./img/nails/nails8.png",
    name: "Марго",
    alt: "nailsPhoto8",
    categoryID: "2",
  },
  {
    src: "./img/nails/nails9.png",
    name: "Марго",
    alt: "nailsPhoto9",
    categoryID: "2",
  },
  {
    src: "./img/nails/nails10.png",
    name: "Крис",
    alt: "nailsPhoto10",
    categoryID: "1",
  },
  {
    src: "./img/nails/nails11.png",
    name: "Марго",
    alt: "nailsPhoto11",
    categoryID: "2",
  },
  {
    src: "./img/nails/nails12.png",
    name: "Крис",
    alt: "nailsPhoto12",
    categoryID: "1",
  },
];

const initialState = {
  categories: [
    {
      categoryID: "0",
      category: "Работы Евгении",
    },
    {
      categoryID: "1",
      category: "Работы Крис",
    },
    {
      categoryID: "2",
      category: "Работы Марго",
    },
  ],
  photosItem: fullPhotosItem,
  activeCategoryID: "",
};

const photosNailsSlice = createSlice({
  name: "photosNails",
  initialState: initialState,
  reducers: {
    tags(state, action) {
      state.photosItem = fullPhotosItem.filter(
        (obj) => obj.categoryID === action.payload
      );
    },
    setActiveCatecory(state, action) {
      state.activeCategoryID = action.payload;
    },
  },
});

export default photosNailsSlice.reducer;
export const { tags, setActiveCatecory } = photosNailsSlice.actions;
