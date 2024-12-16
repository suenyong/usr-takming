import axios from 'axios';
import { Protocol } from './Protocol';

export class CountryApi {
    static COUNTRY = `${Protocol.API_URL}/countries`;

    static GET_ALL_COUNTRY = `${this.COUNTRY}/allCountry`;  //取得所有國家

    static async getAllCountry(formData) {
        try {
            const response = await axios.get(this.GET_ALL_COUNTRY, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    
}