import Main from "../components/MainMenu.vue";
import Services from "../components/menuServices.vue";
import Cloud from "../components/menuCloud.vue";

export const routes=[
    {
        path:'/',
        component: Main,
    },
    {
        path:'/services/',
        component: Services,
       
    },
    {
        path:'/services/cloud',
        component: Cloud,
    }
   

   
]