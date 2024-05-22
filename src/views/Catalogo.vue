<script setup lang="ts">
import router from '@/router';
import { usaurioAuth, usuarioString, sairDologinService } from '@/views/services/auth'
import { ref } from 'vue';
import CadastroNovoCarro from './CadastroNovoCarro.vue';
import {listar} from '@/service/carroService'
import { onMounted } from 'vue';
import Register from './Register.vue';

const sairDoLogin = async () => {
    await router.push('/login')
    sairDologinService()
}

const listaDeCarros = ref()

const listarCarros = async () => {
    listaDeCarros.value = (await listar()).data
}

onMounted(() => {
    listarCarros()
})

</script>
<template>
    <div>
        <v-toolbar color="indigo">
            <div class="ml-16">
                <v-toolbar-title >Bem Vindo {{ usuarioString.slice(1, usuarioString.length - 1).toUpperCase() }}</v-toolbar-title>
            </div>
            <v-spacer></v-spacer>

            <Register></Register>

            <div class="mr-16">
                <v-btn @click="sairDoLogin" icon>
                    <v-icon>mdi-export</v-icon>
                </v-btn>
            </div>

        </v-toolbar>
    </div>
    <v-container>
        <VCard theme="dark" min-height="80vh">
            <v-row no-gutters>
                <v-col v-for="carro in listaDeCarros" :key="carro.id"   >
                    <v-card  color="indigo" class="mx-auto my-5" max-width="344">
                        <v-img
                            :src="carro.urlImagem"
                            height="200px" cover></v-img>
    
                        <v-card-title>
                            {{ carro.nome }}
                        </v-card-title>
    
                        <v-card-subtitle>
                            {{ carro.marca }} - {{ carro.preco }}
                        </v-card-subtitle>
    
                        <v-card-actions>
                            <v-btn v-if="usaurioAuth.hole !== 'ADMIN'" variant="text">
                                ALUGAR
                            </v-btn>
    
                            <v-btn v-if="usaurioAuth.hole === 'ADMIN'" variant="text">
                                CANCELAR ALUGUEL
                            </v-btn>
    
                            <v-spacer></v-spacer>
    
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </VCard>
        <v-row v-if="usaurioAuth.hole === 'ADMIN'">
            <cadastro-novo-carro></cadastro-novo-carro>
        </v-row>
    </v-container></template>