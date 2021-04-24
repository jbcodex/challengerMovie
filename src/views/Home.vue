<template>
  <div class="box">
      <div class="title">
         <h3> <v-icon class="white--text">mdi-movie-open-cog</v-icon> Challenger Movie</h3>
      </div>
      <div class="optionBox">
         <div class="infoOption">
             <span>Selecione opção desejada</span>
         </div>
         <div class="buttons">
             <v-btn class="red white--text" @click="login">
                 <v-icon small left class="white--text">mdi-login</v-icon>
                 login
                 </v-btn> 
                 
            <v-btn class="red darken-4 white--text" @click="register">
                <v-icon small left>mdi-account-plus-outline</v-icon>
                cadastre-se
                </v-btn>
         </div>
         <span class="pwrd">©PoweredBy Challenger Movie</span>
      </div>
  </div>
</template>
<script>
export default {
    methods:{
        login(){
            this.$router.push({path: '/login'});
        },
        register(){
            this.$router.push({path: '/cadastro'});
        }
    }
}
</script>
<style scoped>
    .box{
        width:20%;
       
    }
     .title{
         width: 100%;
         height: 40px;
     }

    .title h3{
        color: #fff;
        font-size: 1.5rem;
        font-family: 'Lato', sans-serif;
        user-select: none;
        text-shadow: #0008 1px 1px 1px;
    }   
     
     .optionBox{
         box-sizing: border-box;
         width:100%;
         height:105px;
         color: rgb(0, 0, 0);
         background-color: #fff;
         font-family: 'Lato', sans-serif;
         border-bottom-left-radius:20px;
         border-top-right-radius:20px;
         box-shadow: #0005 1px 1px 15px;
         padding: 5px;
     }

     .infoOption{
         display: flex;
         justify-content: center;
         border-bottom: 1px dotted #0003;
         width: 100%;
         
     }
     .buttons{
        box-sizing: border-box;
         width:90%;
         margin: 0 auto;
         display: flex;
         align-items: center;
         justify-content: space-around;
         padding: 15px;
     }
     .infoOption span{
         user-select: none;
     }
     .pwrd{
         color:#fff;
         font-size: .9rem;
         float: right;
         margin-top: 8px;
         text-shadow: #0008 1px 1px 1px;
     }

     
</style>