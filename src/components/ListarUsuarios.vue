<template>
    <li v-if="data">
        {{ data.nombre }} - {{ data.correo }}
        <button @click="deleteProducto( data.id )"> Eliminar </button>
    </li>
</template>

<script>
    import { mapActions, mapState } from "vuex";
    import { app } from '../firebaseConfig';
    import { getFirestore, collection, deleteDoc, doc } from 'firebase/firestore';

    export default {
        name: 'ListarUsuarios',
        props: {
            data: Object
        },
        computed: {
            ...mapState(["usuarios"]),
        },
        methods: {
            ...mapActions(["change"]),
            async deleteProducto( id ) {
                try {
                    const db = getFirestore( app );
                    await deleteDoc( doc( collection( db, 'usuarios' ), id  ) );
                    this.change(this.usuarios.filter( usuario => usuario.id !== id ))
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>