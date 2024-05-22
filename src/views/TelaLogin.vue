<template>
  <v-container>
    <v-card color="indigo" class="mx-auto" width="400" title="Tela de Acesso">
      <v-container>
        <v-text-field v-model="formulario
        .login" label="Login"></v-text-field>
        <v-text-field v-model="formulario.password" type="password" label="Senha"></v-text-field>
      </v-container>
      <v-container>
        <v-btn variant="tonal" block @click="fazerLogin">
          Entrar
        </v-btn>
        <v-btn variant="tonal" block @click="voltar" class="mt-2">
          Voltar
        </v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import auth from '@/service/auth'
import router from '@/router';
import {salvarNoStorage} from '@/views/services/auth'

  const formulario = ref({
    login: '',
    password: ''
  })



  const fazerLogin = async () => {
    try{
      await auth.login(formulario.value).then((resp) => {
        salvarNoStorage(resp)
  
      })
      await router.push('/catalogo')
    }catch(e){
      await router.push('/erro')
    }
  }

  const voltar = async () => {
    await router.push('/')
  }
</script>
