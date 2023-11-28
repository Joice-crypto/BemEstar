import axios from 'axios'

export const api = axios.create({
    baseURL:'https://clownfish-app-3x9ir.ondigitalocean.app/bemestar-server:8080'
})
