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
  background-color: #fff;
 
}
.content{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
 
}
</style>