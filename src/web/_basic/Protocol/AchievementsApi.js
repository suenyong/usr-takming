import axios from 'axios';
import { Protocol } from './Protocol';
axios.defaults.withCredentials = true;

export class AchievementsApi {
    static ACHIEVEMENTS = `${Protocol.API_URL}/achievements`;

    static GET_ALL_ACHIEVEMENTS = `${this.ACHIEVEMENTS}/allAchievements`;  //取得所有成果展現

    static async getAllAchievements(formData) {
        // console.log(this.GET_ALL_ACHIEVEMENTS);
        try {
            const response = await axios.get(this.GET_ALL_ACHIEVEMENTS, formData, {
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