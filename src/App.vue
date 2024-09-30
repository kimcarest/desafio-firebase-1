<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <AgregarUsuario />
   <ul >
     <ListarUsuarios v-for="usuario in usuarios" :key="usuario.id" :data="usuario"/>
   </ul>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import AgregarUsuario from './components/AgregarUsuario.vue'
import ListarUsuarios from './components/ListarUsuarios.vue'

export default {
  name: 'App',
  components: {
    AgregarUsuario,
    ListarUsuarios
  },
  data() {
    return {
      listaUsuarios: []
    }
  },
  computed: {
    ...mapState(["usuarios"]),
  },
  methods: {
    ...mapActions(["getUsuarios"])
  },
  async mounted() {
    await this.getUsuarios()
    
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>