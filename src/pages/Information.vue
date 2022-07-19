<template>
  <div>

    <v-row no-gutters>
      <v-col cols="1">
        <Toolbar/>
      </v-col>
      <v-col cols="11">
        <Banner/>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="10">
        <div class="card">
          <Card/>
        </div>
      </v-col>
      <v-col cols="2" :align-self="end">
        <v-card>
          <v-card-text class="card-pag"><p style="color:#006A36">Página 1 de 20</p></v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>

      <v-col cols="1">
        <router-link to="/">
          <v-img height="15%" width="53%" src="../assets/back-arrow.png" class="v-img-back-arrow"></v-img>
        </router-link>
      </v-col>

      <v-col cols="10">
        <div class="img-group">
          <svg version="1.1" id="svg15232" width="758" height="413" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
            <g id="g15238">
              <g id="g15351">
                <image width="758" height="413" preserveAspectRatio="none" xlink:href="../assets/group.png" id="image15240"/>
                <ellipse style="opacity:.99;fill:#006b39" class="img-person animated flash" @click="mostrarDialog1" id="person5" cx="365.828" cy="99.424" rx="13.172" ry="11.897"/>
                <ellipse style="opacity:.99;fill:#006b39" class="img-person animated flash" @click="mostrarDialog2" id="person3" cx="118.119" cy="237.937" rx="13.172" ry="11.897"/>
                <ellipse style="opacity:.99;fill:#006b39" class="img-person animated flash" @click="mostrarDialog3" id="person2" cx="93.475" cy="150.41" rx="13.172" ry="11.897"/>
                <ellipse style="opacity:.99;fill:#006b39" class="img-person animated flash" @click="mostrarDialog4" id="person4" cx="357.756" cy="263.431" rx="13.172" ry="11.897"/>
              </g>
            </g>
          </svg>
        </div>
      </v-col>

      <v-col cols="1">
        <router-link to="/test">
          <v-img height="13%" width="53%" src="../assets/front-arrow.png" class="v-img-front-arrow"></v-img>
        </router-link>
      </v-col>

    </v-row>

    <v-row justify="center">
        <v-dialog v-model="dialog1" persistent max-width="290" v-if="dialog1">
          <v-card>
            <v-card-text>El desarrollo de los emprendimientos dinámicos no depende únicamente de la disposición de capital sino de un conjunto de “nutrientes” tangibles e intangibles, provistos por diferentes agentes o actores que son a su vez parte del ecosistema.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog1 = false"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialog2" persistent max-width="290" v-if="dialog2">
          <v-card>
            <v-card-text>Es posible, mediante intervenciones en el ecosistema de negocios, crear un contexto que sea fértil o propicio para el desarrollo de emprendimientos dinámicos.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog2 = false"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialog3" persistent max-width="290" v-if="dialog3">
          <v-card>
            <v-card-text>El ecosistema emprendedor es una comunidad de negocios, apoyada por un contexto público de leyes y prácticas de negocios y formada por una base de organizaciones e individuos interactuantes que producen y asocian ideas de negocios, habilidades, recursos financieros y no financieros y que dan como resultado empresas dinámicas.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog3 = false"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row justify="center">
        <v-dialog v-model="dialog4" persistent max-width="290" v-if="dialog4">
          <v-card>
            <v-card-text>Los estudios previos de negocios, estudios de mercado, nichos y targets son fundamentos importantes para que los emprendedores se informen antes de lanzar su negocio. No hay que empezar de cero.</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog4 = false"
              >
                Cerrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
  </div>
</template>

<script>
  import Banner from '../components/Banner'
  import Toolbar from '../components/Toolbar'
  import Card from '../components/Card'
  export default {
    components:{
      Banner,
      Toolbar,
      Card
    },
    data(){
      return{
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
      }
    },
    methods: {
    mostrarDialog1(e) {
      // disable anchor tag
      e.preventDefault();
      this.dialog1 = true;
    },
    mostrarDialog2(e) {
      // disable anchor tag
      e.preventDefault();
      this.dialog2 = true;
    },
    mostrarDialog3(e) {
      // disable anchor tag
      e.preventDefault();
      this.dialog3 = true;
    },
    mostrarDialog4(e) {
      // disable anchor tag
      e.preventDefault();
      this.dialog4 = true;
    }
  }
  }

</script>

<style>
.img-group{
    width: 70%;
    height: 60%;
    margin: auto;
}

.img-person path{
  fill:#006A36;
}

.img-person :hover{
  fill:#006A36;
}

.animated {
 -webkit-animation-duration: 4s;
 animation-duration: 4s;
 -webkit-animation-fill-mode: both;
 animation-fill-mode: both;

 animation-iteration-count: infinite;
}
@-webkit-keyframes flash {
 0%, 50%, 100% {
 opacity: 1;
 }
25%, 75% {
 opacity: 0;
 }
}
@keyframes flash {
 0%, 50%, 100% {
 opacity: 1;
 }
25%, 75% {
 opacity: 0;
 }
}
.flash {
 -webkit-animation-name: flash;
 animation-name: flash;
}

.card-pag{
  width:100%;			
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  border-width: 3px;
  border-style: solid;
  border-color: #C9E14B;
}

.v-img-back-arrow{
    margin: 96% auto auto 10%;
    align-items: center;
  }

.v-img-front-arrow{
    margin: 93% 5% auto auto;
    align-items: center;
}

.card{
  float: left;
  margin: 2% auto 2% 10%;
}
</style>