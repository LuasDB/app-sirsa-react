import api from "./apiService";

export const calibrationsService = {
    getService:(query)=> api.get(`services/?${query}`)
    
}
