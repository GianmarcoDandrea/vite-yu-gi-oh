import { reactive } from "vue";

export const store = reactive({
  cards: [],
  apiLink: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  apiLinkSearch:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
  loading: false,
  searchChoice: "",
});