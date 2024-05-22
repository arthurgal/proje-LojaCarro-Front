<!-- Home.vue -->
<template>
    <v-container class="d-flex align-center flex-column">
        <h1>Movlife</h1>
        <v-card color="indigo" class="d-flex align-center flex-column" height="100" width="300">
            <v-btn @click="prox" variant="tonal" block>Acessar Conta</v-btn>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import router from '@/router';

const prox = async () => {
    await router.push('/login')
}
</script>
