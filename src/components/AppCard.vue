<script>
export default {

    props: {
        card: Object,
    },
};
</script>

<template>

    <div class="card text-center d-flex flex-column">
        <img :src="card.card_images[0].image_url_small" alt="data[0].name"/>
        <div class="info-text">
            <p class="name">{{ card.name }}</p>
            <p class="type"> {{ card.frameType }}</p>

        </div>
        
    </div>

</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.card {
    margin-bottom: 0.5rem;

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