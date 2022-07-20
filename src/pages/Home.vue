<template>
  <div class="home-background">
    <v-container class="lighten-5">
      <v-row :align="align" no-gutters>
        <v-col cols="12" sm="6" md="8">
          <h2 class="animate__animated animate__bounceInLeft">Bienvenido al curso:</h2>
          <h1 class="animate__animated animate__bounceInLeft animate__delay-1s">Emprendedores y emprendimiento</h1>
          <h1 class="animate__animated animate__bounceInLeft animate__delay-1s">de El Salvador y la región</h1>
        </v-col>
        <v-col cols="6" md="4">
          <router-link to="/information">
            <v-img height="70%" width="70%" src="../assets/home_btn.png" class="v-img-home animate__animated animate__heartBeat animate__repeat-2">
            </v-img>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>
  .home-background{
    background-image: url('../assets/home_background.png');
    width:100%;			
    height:100%;			
    position:fixed;
    background-size:100% 100%;
  }

  h2{
    color: #5BD341;
    margin: 20% auto auto 14%;
    font-weight: normal;
  }

  h1{
    color: #FFFFFF;
    margin: -1% auto auto 14%;
    font-weight: bold;
  }

  .v-img-home{
    margin: 32% auto auto 10%;
    align-items: center;
  }
</style>