<template>   
   <div class="menu1_head_left_content"
        @click="optionVisible = !optionVisible"
        @mouseover="over"
        @mouseleave="leave"
    >
        <div class="flag">
            <img :src="flag" alt="">
        </div>
        <div class="lang">
           {{selected}}
            <div class="svg">
                <img v-if="active" src="../svg/Vector31Blue.svg" alt="">
                <img v-else  src="../svg/Vector31(Stroke).svg" alt="">
            </div>
        </div>
    </div>
    <transition name="fade">
        <div class="options" 
            v-if="optionVisible"
        >
            <div class="options_option_head"
            >
                Страна
            </div>
            <div class="options_option"
                v-for="option in options"
                @click="select(option)"
                :key="option.id"
            >
                <div class="options_option_img">
                    <img :src="option.img" alt="">
                </div>
                <div class="options_option_country">
                    {{ option.country }}
                </div>
                <div v-if="option.mark" class="options_option_select">
                    <img src="../svg/(checkMark).svg" alt="">
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default{
        name:'Select',
        props:{
            options:{
                type:Array,
                default: () => [],
            },
            selected:{
                type:String,
                default:'',
            },
            flag:{
                type:String,
                default:'',
            },
        },
        data(){
            return{
                optionVisible:false,
                active:false,
            }
        },
        methods:{
            select(option){
                this.optionVisible = false;
                this.$emit('select', option);
            },
            hightSelect(){
                this.optionVisible = false;
            },
            over(){
                this.active = true;
            },
            leave(){
                this.active = false;
            }
        },
        mounted(){
            document.addEventListener('click', this.hightSelect.bind(this),true)
        },
        beforeDestroy(){
            document.removeEventListener('click', this.hightSelect)
        },
        computed:{
        }
    }
</script>
<style src="./styleSelect/selectStyle.css">
</style>