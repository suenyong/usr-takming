import axios from 'axios';
import { Protocol } from './Protocol';
axios.defaults.withCredentials = true;

export class PartnerApi {
    static PARTNER = `${Protocol.API_URL}/Partner`;

    static GET_ALL_PARTNER = `${this.PARTNER}/allPartner`;  //取得所有國家

    static async getAllPartner(formData) {
        try {
            const response = await axios.get(this.GET_ALL_PARTNER, formData, {
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