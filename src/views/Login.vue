<template>
    <div class="boxLogin">
       <div class="labelTopForm">
            <v-icon @click="back" left class="white--text">mdi-arrow-left</v-icon>
            <h3>Challenger Movie</h3>
            <v-icon right class="white--text">mdi-account-circle-outline</v-icon>
       </div>
       <v-form>
           <span>Insira seus dados de acesso</span>
           <v-text-field
            outlined
            label="E-mail"
            prepend-inner-icon="mdi-at"
          ></v-text-field>
           <v-text-field
            outlined
            label="Senha"
            type="password"
            prepend-inner-icon="mdi-lock-outline"
          ></v-text-field>
          <v-btn class="red darken-4 white--text btnLarge" xLarge>acessar conta</v-btn>
       </v-form>
       <div class="okFailed"><v-icon class="orange--text">mdi-alert</v-icon><span>Dados incorretos!</span></div>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            this.$router.push({path: '/'})
        }
    }
}
</script>
<style scoped>
.boxLogin{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    font-family: 'Lato', sans-serif;
    border-bottom-left-radius:10px;
    border-top-right-radius:15px;
    box-shadow: #0005 1px 1px 15px;
    
}

.boxLogin form{
    margin-top: 25px;

}
.labelTopForm{
    box-sizing: border-box;
    padding: 10px 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    background-color: brown;
    color:#fff;
    border-top-right-radius:10px
}
.labelTopForm h3{
    font-size: 1.5rem;
    
}

.btnLarge{
    width: 100%;
    margin-top: -10px;
}
.okFailed{
    display: flex;
    width: 62%;
    padding: 10px;
    color: red;
    font-weight: bold;
    justify-content: space-around;
    align-items: center;
   
}
</style>