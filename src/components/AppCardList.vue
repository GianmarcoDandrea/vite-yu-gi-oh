<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
import AppLoader from "./AppLoader.vue";
import AppCounter from './AppCounter.vue'
import AppSearch from "./AppSearch.vue";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppCard, AppLoader, AppCounter, AppSearch},


  methods: {
    searchCard() {


        axios
        .get(this.store.apiLinkSearch, {
            params: {
                archetype:this.store.searchChoice
            }
        })
        .then((resp)=> {
            this.store.cards = [];
            console.log(resp.data.data);
            this.store.cards = resp.data.data
        })
    }
  },
}
</script>

<template>
    <main>
        <div class="container py-4">
            <AppSearch @perfomSearch="searchCard"/>
            <AppLoader class="w-100" v-if="store.loading" />
    
            <div class="row row-cols-5 g-3" v-else>
                <AppCounter class="w-100" />

                <div class="col" v-for="card in store.cards" :key="card.id">
                    <AppCard :card="card"/>
                </div>

            </div>
        </div>


    </main>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.flex-center {
    justify-content: center;
    align-items: center;
}

main {
    padding: 3rem 0;
    background-color: #d48f38;


    .container {
        background-color: white;
        .row {
            justify-content: space-between;

            margin-top: 0;
            margin-right: 0;
            margin-left: 0;

            & > * {
            padding-right: 0;
            padding-left: 0;}

            .col {
                padding: 0 0.5rem;
                margin-bottom: 0.5rem;
                align-items: stretch;
            }

        }
    }
}


</style>