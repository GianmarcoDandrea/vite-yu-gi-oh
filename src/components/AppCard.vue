<script>
import { store } from "../store";
export default {

    data() {
        return {
         store,
        };
    },

    mounted() {
        console.log()
    },

    
};
</script>

<template>

    <div v-for="card in store.cards" class="info-card text-center d-flex flex-column">
        <img :src="card.card_images[0].image_url" alt="data[0].name"/>
        <div class="info-text">
            <p class="name">{{ card.name }}</p>
            <p class="type"> {{ card.frameType }}</p>

        </div>
        
    </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.info-card {
    width: calc(100% / 5);
    margin-bottom: 0.5rem;
    align-self: stretch;
    .info-text {
        background-color: $main_bg_color;
        padding: 0 0.5rem;

        .name {
            text-transform: uppercase;
            color: $secondary_text_color;
        }
        .type {
            text-transform: uppercase;
        }
    }
}


</style>