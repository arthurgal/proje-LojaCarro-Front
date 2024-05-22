import { http } from "./config"

export default {

    login: (autenticao: Object) => {
        return http.post('auth/login', autenticao)
    },
    register: (formulario: Object) => {
        return http.post('auth/register', formulario)
    }
}