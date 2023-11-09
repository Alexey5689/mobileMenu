<template>
    <div class="menu1_head">
            <div class="menu1_head_left">
                    <Select
                        :options="options" 
                        :selected="selected"
                        @select="optionSelect"
                        :flag = "flag"
                    />
            </div>
            <div class="menu1_head_right">
                <div  class="menu1_head_right_content">
                    <img src="./svg/Vector33(Stroke).svg" alt="">
                </div>
            </div>
        </div>
</template>
<script>
    export default{
        name:'Header',
        data(){
            return{
                options:[
                    {img:"http://localhost:5173/@fs/D:/prog/MobileMenu/src/components/UI/svg/flags/USFlag.svg", country:'United States', id:1, short:'Us', mark:0,},
                    {img:"http://localhost:5173/@fs/D:/prog/MobileMenu/src/components/UI/svg/flags/MaskGroupNeth.svg", country:'Netherlands', id:2, short:'Nl', mark:0},
                    {img:"http://localhost:5173/@fs/D:/prog/MobileMenu/src/components/UI/svg/flags/MaskGroupBel.svg", country:'Беларусь', id:3, short:'By', mark:0},
                    {img:"http://localhost:5173/@fs/D:/prog/MobileMenu/src/components/UI/svg/flags/MaskGroupRu.svg", country:'Россия', id:4, short:'Ru', mark:1},
                    {img:"http://localhost:5173/@fs/D:/prog/MobileMenu/src/components/UI/svg/flags/KZFlag.svg", country:'Казахстан', id:5, short:'Kz', mark:0},
                    {img:"http://localhost:5173/@fs/D:/prog/MobileMenu/src/components/UI/svg/flags/TurFlag.svg", country:'Turkiye', id:6, short:'Tu', mark:0},
                ],
                selected:'Ru',
                flag:'http://localhost:5173/@fs/D:/prog/MobileMenu/src/components/UI/svg/flags/MaskGroupRu.svg',
            }
        },
        methods:{
            optionSelect(option){
                this.options.forEach((elem)=>{
                    elem.mark = 0;
                });
                this.selected = option.short;
                this.flag = option.img;
                this.options.mark = 0
                this.options[option.id -1].mark = 1;
                console.log(this.selected);
            },
           
        },
       
    }

</script>

<style  src="./style/headerStyle.css" scoped>


</style>
