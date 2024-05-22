import { ref } from "vue";

const usaurioAuth = ref({
    login: '',
    token: '',
    hole: ''
})

const usuarioString = ref('');
const tokenJWTString = ref('');
const holeString = ref('');

const salvarNoStorage = (resp: any) => {

    usaurioAuth.value.login = resp.data.login
    usaurioAuth.value.token = resp.data.token
    usaurioAuth.value.hole = resp.data.hole

    usuarioString.value = JSON.stringify(usaurioAuth.value.login);
    tokenJWTString.value = JSON.stringify(usaurioAuth.value.token);
    holeString.value = JSON.stringify(usaurioAuth.value.hole);
    sessionStorage.setItem("usuario", usuarioString.value);
    sessionStorage.setItem("tokenJWT", tokenJWTString.value);
    sessionStorage.setItem("hole", holeString.value);
}

const sairDologinService = () => {
    usaurioAuth.value.login = ''
    usaurioAuth.value.token = ''
    usaurioAuth.value.hole = ''

    usuarioString.value = JSON.stringify(usaurioAuth.value.login);
    tokenJWTString.value = JSON.stringify(usaurioAuth.value.token);
    holeString.value = JSON.stringify(usaurioAuth.value.hole);
    sessionStorage.setItem("usuario", usuarioString.value);
    sessionStorage.setItem("tokenJWT", tokenJWTString.value);
    sessionStorage.setItem("hole", holeString.value);
}


export { usaurioAuth, salvarNoStorage, usuarioString, tokenJWTString, sairDologinService }