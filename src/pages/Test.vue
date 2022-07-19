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
          <v-card class="mx-auto" outlined tile="true">
    <v-list-item three-line>
        <v-list-item-avatar>
            <v-img alt="" src="../assets/perfil.png"
          ></v-img>
        </v-list-item-avatar>
      <v-list-item-content>
        <div class="text-overline mb-4">
          ¿Qué aprendiste durante este recorrido?
        </div>
        <v-list-item-title class="text-wrap">
          Para saberlo, te proponemos un breve ejercicio que te permitirá revisar los conceptos básicos vistos durante el curso. Arrastra las imágenes-concepto de la izquierda a la frase correspondiente de la derecha. ¡Buena suerte!
        </v-list-item-title>
      </v-list-item-content>

      
    </v-list-item>
  </v-card>
        </div>
      </v-col>
      <v-col cols="2">
        <v-card>
          <v-card-text class="card-pag"><p style="color:#006A36">Página 1 de 20</p></v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>

      <v-col cols="1">
        <router-link to="/information">
          <v-img height="15%" width="53%" src="../assets/back-arrow.png" class="v-img-back-arrow"></v-img>
        </router-link>
      </v-col>

      <v-col cols="10">
        <v-container class="grey lighten-5">
        <v-row no-gutters>
        <template>

            <v-col>
            <v-card
                class="pa-2"
                outlined
                tile
            >
                 <div class="row">
    <div class="col-9">
      <draggable class="list-group" :list="list1" group="people" @change="log">
        <div
          class="list-group-item"
          v-for="element in list1"
          :key="element.name"
        >
        <v-card  outlined tile="true">
        <v-list-item>
            <v-list-item-avatar>
                <v-img :src="require(`../assets/${element.src}`)">
                </v-img>
            </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ element.name }}
            </v-list-item-title>
          </v-list-item-content>

      
            </v-list-item>
          </v-card>
        </div>
      </draggable>
    </div>

    <rawDisplayer class="col-3" :value="list1" title="List 1" />
  </div>
            </v-card>
            </v-col>
            <v-responsive
            v-if="n === 2"
            :key="`width-${n}`"
            width="80%"
            ></v-responsive>
            <v-col>
            <v-card
                class="pa-2"
                outlined
                tile
            >
                <v-list
      flat
      subheader
      three-line
    >

      <v-list-item-group
        v-model="settings"
        multiple
        active-class=""
      >
        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="cb[0]" :input-value="active" on v-if="cb[0]"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="text-wrap">Financiación que se emplea para necesidades específicas del negocio (prototipos, investigación de mercado, producción inicial, etc.)</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="cb[1]" :input-value="active" on v-if="cb[1]"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="text-wrap">Proyecto con potencial de crecer de manera rentable, rápida y sostenible, que genera valor agregado y tiene ventajas competitivas.</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>

        <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="cb[2]" :input-value="active" on v-if="cb[2]"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="text-wrap">Comunidad conformada por individuos y organizaciones con el objetivo de producir bienes y servicios de valor a quienes hacen parte de ella.
</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>

         <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="cb[3]" :input-value="active" on v-if="cb[3]"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="text-wrap">Red de contactos que se conforma con el objetivo de iniciar una relación de negocios o de intercambio de conocimiento.
</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>

         <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="cb[4]" :input-value="active" on v-if="cb[4]"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="text-wrap">Organización que impulsa a los negocios a convertirse en empresas dinámicas y de alto crecimiento.</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>

         <v-list-item>
          <template v-slot:default="{ active }">
            <v-list-item-action>
              <v-checkbox v-model="cb[5]" :input-value="active" on v-if="cb[5]"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title class="text-wrap">Un colectivo de individuos con recursos y de probada experiencia empresarial que colaboran, como grupo, en la selección, inversión, involucramiento y apoyo de emprendimientos dinámicos en alianza con el emprendedor.
</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
            </v-card>
            </v-col>
            <v-responsive
            v-if="n === 2"
            :key="`width-${n}`"
            width="100%"
            ></v-responsive>
        </template>
        </v-row>
    </v-container>
      </v-col>

      <v-col cols="1">
        <router-link to="/">
          <v-img height="13%" width="53%" src="../assets/front-arrow.png" class="v-img-front-arrow"></v-img>
        </router-link>
      </v-col>

    </v-row>
    
   <v-row
    justify="space-around"
  >
    
    <v-btn
      depressed
      color="success" @click="validate"
    >
      Verificar
    </v-btn>
    <v-btn
      depressed
      color="primary"
    >
      Intentar nuevamente
    </v-btn>
  </v-row>
    </div>
</template>

<script>
  import Toolbar from '../components/Toolbar'
  import Banner from '../components/Banner'
  import draggable from 'vuedraggable'
  export default {
    name: "two-lists",
  display: "Two Lists",
  order: 1,
    components:{
      Toolbar,
      Banner,
      draggable
    },
  data() {
    return {
      list1: [
        { name: "Capital Semilla", id: 1 ,src:'1.semilla.png', id_correct: 1},
        { name: "Emprendimiento dinámico", id: 2 ,src:'2.emprendimiento.png', id_correct: 2},
        { name: "Ecosistema de negocios", id: 3 , src:'3.ecosistema.png', id_correct: 3},
        { name: "Networking", id: 4 , src:'4.networking.png', id_correct: 4},
        { name: "Aceleradora de negocios", id: 5 , src:'5.aceleradora.png', id_correct: 5},
        { name: "Red de ángeles inversores", id: 6 , src:'6.red_angeles.png', id_correct: 6}
      ],
      cb: [false,false, false, false, false, false],
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    },
    validate: function (){
        let flag = true;
        console.log(this.list1)
        for (var i=0; i<6; i++){
            if((i+1) != this.list1[i].id_correct){
              flag = false;
            }else{
              this.cb[i] = true;
            }
                
            
        }

        if(!flag){
            alert('No está en orden')
        }else{
            alert('Está en orden')
        }
        flag = true;
    }
  }
  }
</script>