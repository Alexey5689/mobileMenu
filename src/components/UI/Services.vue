<template>
    <div class="servisBody">
        <div class="services_wrapp">
            <div class="services" @click="$router.push('/')">
                <div class="svg">
                    <img src="./svg/Vector30(Stroke)left.svg" alt="">
                </div>
                Services
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Services',
    }

</script>

<style src="./style/servicesStyle/service.css" scoped>

</style>