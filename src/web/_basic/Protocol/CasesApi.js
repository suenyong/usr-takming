import axios from 'axios';
import { Protocol } from './Protocol';
axios.defaults.withCredentials = true;

export class CasesApi {
    static CASES = `${Protocol.API_URL}/cases`;

    static GET_ALL_CASES = `${this.CASES}/allCases`;  //取得所有國家

    static async getAllCases(formData) {
        try {
            const response = await axios.get(this.GET_ALL_CASES, formData, {
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