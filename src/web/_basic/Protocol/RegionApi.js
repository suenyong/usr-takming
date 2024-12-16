import axios from 'axios';
import { Protocol } from './Protocol';

export class RegionApi {
    static REGION = `${Protocol.API_URL}/regions`;

    static GET_ALL_REGION = `${this.REGION}/allRegions`;  //取得所有國家

    static async getAllRegion(formData) {
        try {
            const response = await axios.get(this.GET_ALL_REGION, formData, {
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