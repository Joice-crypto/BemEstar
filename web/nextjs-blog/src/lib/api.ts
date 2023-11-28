import axios from 'axios'

export const api = axios.create({
    baseURL:'http://clownfish-app-3x9ir.ondigitalocean.app/:8080'
})
