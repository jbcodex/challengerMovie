<template>
    <div class="boxLogin">
       <div class="labelTopForm">
            <h3><v-icon left class="red--text">mdi-movie-open-cog</v-icon>Challenger Movie</h3>
       </div>
       
       <v-form>
           <span class="infoForm">Entre com seus dados</span>
           <v-text-field
            label="E-mail"
            color="red darken-2"
            autofocus
          ></v-text-field>
          
           <v-text-field
            label="Senha"
            color="red darken-2"
            type="password"
            
          ></v-text-field>
           <v-checkbox
           class="chk"
          v-model="allowSpaces"
          label="Lembrar senha"
          color="red darken-2"
        ></v-checkbox>
         
          <v-btn @click="register" text class="btnAccount ml-1">Criar conta</v-btn>
          <v-btn class="red darken-2 white--text btnLogin ml-2" elevation="0" rounded-0>login</v-btn>
       </v-form>
       <div class="forgotPassword" @click="forgot">Esqueci a senha</div>
       
    </div>
</template>
<script>
export default {
    methods:{
        register(){
            this.$router.push({path: '/cadastro'})
        },
        forgot(){
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
    border: 1px solid rgb(220, 220, 220);
    box-shadow: rgba(151, 151, 151, 0.067) 1px 1px 45px;
    border-radius: 7px;
    padding-bottom: 10px;
    
  
    
}

.boxLogin form{
    margin-top: 10px;
}
.labelTopForm{
    box-sizing: border-box;
    padding: 20px 45px 0 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
    color:rgb(43, 23, 23);
    
}
.labelTopForm h3{
    font-size: 1.5rem;
    color: rgb(124, 26, 26);
    
}

.btnLogin{
    text-transform: initial;
    font-weight: bold;
   
}

.btnAccount{
    text-transform: initial;
    font-weight: bold;
   
}
.btnAccount::before{
    background-color: transparent !important
   
}

.forgotPassword{
    display: flex;
    width: 62%;
    padding: 10px;
    color: red;
    font-weight: bold;
    justify-content: space-around;
    align-items: center;
    background: #fff;
    cursor: pointer;
   
}
.infoForm{
    display: flex;
    justify-content: center;
    margin:0 auto;
    font-size: 1rem;
    font-weight: bold;
}
.chk{
    margin-top:-10px;
    font-weight: bold;
}
</style>