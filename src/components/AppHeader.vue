<script>
export default {

}
</script>


<template >
    <header class="flex flex-row w-100">
        <div class="container-fluid d-flex flex-row align-items-center">
            <div class="logo">
                <img src="../assets/img/Yu-Gi-Oh!-logo.svg" alt="">
            </div>

            <div class="title ms-5 fs-2 fw-bold">
                Yu Gi Oh API
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../src/style/partials/variables" as *;

.container-fluid{
    width: 80%;
    padding: 1rem 0;
    .logo {
        width: 15%;
    }

}


    
</style>