<script setup lang="ts">
import { cadastrarCarro } from '@/service/carroService';
import { ref } from 'vue';
const novoCarro = ref({
    nome: '',
    urlImagem: '',
    marca: '',
    preco: ''
})
</script>
<template>
    <v-dialog width="500">
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-plus" color="green"></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card title="Cadastrar novo Carro">
                <v-card-text>
                    <VRow>
                        <VCol cols="12">
                            <VTextField v-model="novoCarro.nome" label="Nome"></VTextField>
                        </VCol>
                        <VCol cols="12">
                            <VTextField v-model="novoCarro.urlImagem" label="Url Da Imagem"></VTextField>
                        </VCol>
                        <VCol cols="12">
                            <VTextField v-model="novoCarro.marca" label="Marca"></VTextField>
                        </VCol>
                        <VCol cols="12">
                            <VTextField v-model="novoCarro.preco" label="Preço"></VTextField>
                        </VCol>
                    </VRow>
                </v-card-text>

                <v-spacer></v-spacer>

                <v-card-text>
                    <div>
                        <v-btn block text="Cadastrar" color="success"
                            @click="isActive.value = false, cadastrarCarro(novoCarro)">
                        </v-btn>
                    </div>
                </v-card-text>

            </v-card>
        </template>
    </v-dialog>
</template>