<template>
    <div class="servisBody">
        <div class="services_wrapp">
            <div class="services" @click="$router.push('/services')">
                <div class="svg">
                    <img src="./svg/Vector30(Stroke)left.svg" alt="">
                </div>
                Облачные вычесления
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'cloudHead',
    }
</script>
<style src="./style/servicesStyle/service.css"  scoped>
   
</style>