<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import { store } from "./store.js";
import AppCardList from "./components/AppCardList.vue";


export default {
  data() {
    return {
      store
    };
  },

  created() {
    this.store.loading = true;
    axios.get(this.store.apiLink).then((resp) => {
      this.store.cards = resp.data.data;
      this.store.loading = false;
      console.log(resp.data.data)
    });
  },
  components : {AppHeader, AppCardList}

  
}
</script>

<template>
  <AppHeader />

  <AppCardList />
</template>

<style lang="scss">
@use "../src/style/general.scss" as *;
@use "../src/style/partials/variables" as *;




</style>
