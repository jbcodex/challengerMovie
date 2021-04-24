<template>
  <v-app id="app">
  <div class="content">
     <router-view />
  </div>
    
  </v-app>
</template>

<script>

export default {
  
}
</script>
<style scoped>
#app{
  background-image: linear-gradient( to right, #EB5757,#000000);
 
}
.content{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
 
}
</style>