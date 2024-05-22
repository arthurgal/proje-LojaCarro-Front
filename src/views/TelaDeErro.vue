<script setup>
import router from '@/router';
const voltar = async () => {
    await router.back()
}
</script>
<template>
    <div>
        <v-btn variant="tonal" block @click="voltar" class="mt-2">
            Voltar
        </v-btn>
        <h1>ERRO</h1>
    </div>

</template>