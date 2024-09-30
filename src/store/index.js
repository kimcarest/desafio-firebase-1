import { createStore } from 'vuex'
import { app } from '../firebaseConfig';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default createStore({
  state: {
    usuarios: []
  },
  getters: {
  },
  mutations: {
    changeUsuarios( state, data ) {
      state.usuarios = data
    },
    getUsuarios( state, data ) {
      state.usuarios = data
    },
  },
  actions: {
    async change( context, data ) {
      context.commit("changeUsuarios", data)
    },
    async getUsuarios( context ) {
      try {
        const db = getFirestore(app);
        const usuariosSnapshot = await getDocs(collection(db, "usuarios"));
        
        const data = usuariosSnapshot.docs.map( doc => ({
            id: doc.id,
            ...doc.data()
        }))
        console.log({data});
        context.commit("getUsuarios", data)
      } catch (error) {
        
      }
    }
  },
  modules: {
  }
})