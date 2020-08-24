export function descriptionChange(event){
    return{
        type: 'DESCRIPTION_CHANGED',
        payload: event.target.value
    }
}

import axios from "axios"
const url = 'http://localhost:3003/api/todos'
export function search(){
    const request = axios.get(`${url}?sort=-createdAt`)
    return{
        type: 'SEARCH',
        payload: request
    }
}