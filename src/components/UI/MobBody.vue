<template>
    <div class="mobBody">
        <div class="body_select"  @click="$router.push('/services')">
            Services
            <div class="svg">
                <img src="./svg/Vector31(Stroke)right.svg" alt="">
            </div>
        </div>
        <div class="body_select">
            Managed IT
            <div class="svg">
                <img src="./svg/Vector31(Stroke)right.svg" alt="">
            </div>
        </div>
        <div class="body_select">
            Telecom Solutions
            <div class="svg">
                <img src="./svg/Vector31(Stroke)right.svg" alt="">
            </div>
        </div>
        <div class="body_select">
            About
            <div class="svg">
                <img src="./svg/Vector31(Stroke)right.svg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'MobBody',
    }

</script>

<style src="./style/mobBodyStyle.css" scoped>

</style>