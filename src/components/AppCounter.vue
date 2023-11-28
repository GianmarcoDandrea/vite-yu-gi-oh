<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <p>Trovato {{ store.cards.length }} carte</p>
  </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.wrapper {
    padding: 1.5rem;
    background-color: $secondary_bg_color;
    color: $secondary_text_color;
    border-radius: 10px;
    
    p {
        padding: 0 1rem;
        margin: 0;
    }
}

</style>