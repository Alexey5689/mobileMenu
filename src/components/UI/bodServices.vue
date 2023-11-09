<template>
    <div class="servBod_wrapp">
        <div class="serBod">
            <div class="serBod_select" @click="$router.push('/services/cloud')">
               Облачные вычесления
                <div class="svg">
                    <img src="./svg/Vector31(Stroke)right.svg" alt="">
                </div>  
            </div>
            <div class="serBod_select">
                Выделенные серверы
                <div class="svg">
                    <img src="./svg/Vector31(Stroke)right.svg" alt="">
                </div>  
            </div>
            <div class="serBod_select">
                Платформенные сервисы
                <div class="svg">
                    <img src="./svg/Vector31(Stroke)right.svg" alt="">
                </div>  
            </div>
            <div class="serBod_select2">
                <div class="serBod_select2_warapp">
                    <div>
                        Информационная 
                    </div>
                    <div>
                        безопасность
                    </div> 
                </div>
                <div class="svg">
                    <img src="./svg/Vector31(Stroke)right.svg" alt="">
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'bodyServ',
    }

</script>

<style src="./style/servicesStyle/bodServStyle.css" scoped>

</style>