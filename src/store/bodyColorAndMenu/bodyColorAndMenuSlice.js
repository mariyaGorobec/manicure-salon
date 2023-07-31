import { createSlice } from "@reduxjs/toolkit";

const fullMenu = [
  {
    describe: "Кто мы?",
    link: "/aboutUs",
    className: "aboutUs",
  },
  {
    describe: "Сколько стоит?",
    link: "/price",
    className: "price",
  },
  {
    describe: "Фоточки наших работ",
    link: "/photos",
    className: "photos",
  },
  {
    describe: "А свободные окошки есть?",
    link: "/enroll",
    className: "enroll",
  },
  {
    describe: "На главную",
    link: "/",
    className: "home",
  },
];

const initialState = {
  menuItem: [],
};

const bodyColorAndMenuSlice = createSlice({
  name: "bodyColorAndMenu",
  initialState: initialState,
  reducers: {
    home(state) {
      const stateHome = fullMenu.filter((obj) => obj.className !== "home");
      state.menuItem = stateHome;
      document.body.style.backgroundImage = "linear-gradient(#f0e8c2, #fe8bf1)";
    },
    aboutUs(state) {
      const stateAboutUs = fullMenu.filter(
        (obj) => obj.className !== "aboutUs"
      );
      state.menuItem = stateAboutUs;
      document.body.style.backgroundImage = "linear-gradient(#4ad8d6, #8970ef)";
    },
    price(state) {
      const statePrice = fullMenu.filter((obj) => obj.className !== "price");
      state.menuItem = statePrice;
      document.body.style.backgroundImage = "linear-gradient(#f0e6c4, #54d8d3)";
    },
    photos(state) {
      const statePhotos = fullMenu.filter((obj) => obj.className !== "photos");
      state.menuItem = statePhotos;
      document.body.style.backgroundImage = "linear-gradient(#918bea, #fef6a4)";
    },
    enroll(state) {
      const stateEnroll = fullMenu.filter((obj) => obj.className !== "enroll");
      state.menuItem = stateEnroll;
      document.body.style.backgroundImage = "linear-gradient(#92daf0, #e7b4ec)";
    },
  },
});

export default bodyColorAndMenuSlice.reducer;
export const { home, aboutUs, price, photos, enroll } = bodyColorAndMenuSlice.actions;
