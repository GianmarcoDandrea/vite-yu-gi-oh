<script>
import { store } from "../store.js";
export default {

  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <select class="form-select w-25" v-model="store.searchChoice" @change="$emit('perfomSearch')">
    <option value="" disabled>Seleziona Un Archetipo</option>
    <option value="Alien" selected>Alien</option>
    <option value="Ally of Justice">Ally of Justice</option>
    <option value="Ancient Gear">Ancient Gear</option>
  </select>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.form-select:focus {
    border-color: unset;
    outline: unset;
    box-shadow: unset;
    border: none;
}
</style>