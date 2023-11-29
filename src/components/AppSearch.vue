<script>
import { store } from "../store.js";
export default {


  data() {
    return {
      archetypes: [
        "Alien",
        "Ally of Justice",
        "Ancient Gear",
        "Destiny HERO",
        "Elemental HERO",
        "Magician",
      ],

      store,
    };
  },
};
</script>

<template>
  <select class="form-select w-25" v-model="store.searchChoice" @change="$emit('perfomSearch')">
    <option value="" disabled>Seleziona Un Archetipo</option>
    <option v-for="(archetype, index) in archetypes" :key="index" :value="archetype" selected>{{ archetype }}</option>
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