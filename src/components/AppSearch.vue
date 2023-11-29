<script>
import { store } from "../store.js";
import { archetypeList } from "../archetypeList";
export default {


  data() {
    return {

      store,
      archetypeList,
    };
  },
};
</script>

<template>
  <select class="form-select w-25" v-model="store.searchChoice" @change="$emit('perfomSearch')">
    <option value="" disabled>Seleziona Un Archetipo</option>
    <option v-for="(archetype, index) in archetypeList" :key="index" :value="archetype.archetype_name" selected>{{ archetype.archetype_name }}</option>
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