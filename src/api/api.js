import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:5000"
})

export const buscar = async (url, setData) => {
    const resposta = await api.get(url);
    setData(respuesta.data);
}

export const criar = async (url, data) => {
    const resposta = await api.post(url, data);
}

export const atualizar = async (url, data) => {
    const resposta = await api.put(url, data);
}

export const apagar = async (url) => {
    const resposta = await api.delete(url);
}