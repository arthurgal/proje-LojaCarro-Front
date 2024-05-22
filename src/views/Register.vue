<script setup lang="ts">
import auth from '@/service/auth';
import { ref } from 'vue';
import router from '@/router';
import { usaurioAuth } from './services/auth';
import {registar} from '@/service/carroService'
const formulario = ref({
  login: '',
  password: '',
  role: ''
})

const dialog = ref(false)

const funcRegistrar = async () => {
  await registar(formulario.value)
}

const limpar = async () => {
  formulario.value.login = '',
  formulario.value.password = '',
  formulario.value.role = ''
}
</script>

<template>
  <div>


    <v-btn @click="dialog = true" v-if="usaurioAuth.hole == 'ADMIN'" icon>
      <v-icon>mdi-account-plus</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="auto">
      <v-container>
        <v-card class="mx-auto" width="400" title="Registrar Novo Usuário">
          <v-container>
            <v-text-field v-model="formulario.login" label="Login"></v-text-field>
            <v-text-field v-model="formulario.password" type="password" label="Senha"></v-text-field>
            <v-select :items="['ADMIN', 'USER']" v-model="formulario.role" label="Role"></v-select>
          </v-container>
          <v-container>
            <v-btn variant="tonal" color="success" block @click="funcRegistrar">
              Registrar
            </v-btn>
            <v-btn variant="tonal" color="warning" block @click="limpar" class="mt-2">
              limpar
            </v-btn>
          </v-container>
        </v-card>
      </v-container>
    </v-dialog>
  </div>
</template>