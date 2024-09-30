<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="nombre" type="text" placeholder="Ingrese nombre">
        <input v-model="correo" type="email" placeholder="Ingrese correo">
        <button type="submit">Agregar</button>
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { app } from '../firebaseConfig';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

export default {
    name: 'AgregarUsuario',
    // props: {
    //     msg: String
    // },\
    computed: {
    ...mapState(["usuarios"]),
    },
    methods: {
        ...mapActions(["change"]),
        async handleSubmit() {
            const fields = [ this.nombre.trim(), this.correo.trim()]
            if ( fields.includes('') ) return alert('Todos los campos son obligatorios');
    
            try {
                const db = getFirestore( app );
                const data = await addDoc( collection( db, 'usuarios' ), { nombre: this.nombre, correo: this.correo } );
                console.log(data);
                this.change([ 
                    ...this.usuarios,
                    {
                        id: data.id,
                        nombre: this.nombre,
                        correo: this.correo
                    }
                ])
                this.nombre = '';
                this.correo = '';
            } catch (error) {
                console.log(error);
            }
        }
    },
    data() {
        return {
            nombre: '',
            correo: ''
        }
    }
}
</script>

<style scoped>
</style>