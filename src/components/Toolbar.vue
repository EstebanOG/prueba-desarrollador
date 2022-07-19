<template>
  <div>
    <v-app-bar-nav-icon @click="drawer = !drawer" class="nav-icon-new"></v-app-bar-nav-icon>
    <v-navigation-drawer app v-model="drawer" temporary color = "#C3C4CB">
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Menú
        </v-list-item-title>
      </v-list-item-content>
      
      <v-divider></v-divider>
      
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :href="item.route">

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item-content>
            <v-row justify="space-around">
    <v-icon
      large
      color="green darken-2"
    >
      mdi-domain
    </v-icon>

    <v-icon
      large
      color="blue darken-2"
    >
      mdi-message-text
    </v-icon>

    <v-icon
      large
      color="purple darken-2"
    >
      mdi-dialpad
    </v-icon>
  </v-row>
        </v-list-item-content>
      </v-list>

    </v-navigation-drawer>


  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        drawer: false,
        items: [
          { title: 'Inicio', route: '/' },
          { title: 'Información', route: '/information' },
          { title: 'Prueba', route: '/test' },
        ],
        right: null
      };
    }
  }
</script>

<style>
.nav-icon-new{
  margin: 10% auto 1% 25%;
  font-size: 25px;
}
</style>