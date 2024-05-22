import { http } from "./config"
import { tokenJWTString } from "@/views/services/auth"

const cadastrarCarro = (formualario: any) => {
    return http.post('/produto', formualario, {
        headers: {
            Authorization: `Bearer ${JSON.parse(tokenJWTString.value)}`
        }
    })
}
const listar = () => {
    return http.get('/produto', {
        headers: {
            Authorization: `Bearer ${JSON.parse(tokenJWTString.value)}`
        }
    })
}

const registar = (formualario:any) => {
    return http.post('/auth/register', formualario, {
        headers: {
            Authorization: `Bearer ${JSON.parse(tokenJWTString.value)}`
        }
    })
}

export {cadastrarCarro, listar, registar}