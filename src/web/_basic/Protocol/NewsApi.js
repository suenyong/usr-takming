import axios from 'axios';
import { Protocol } from './Protocol';

export class NewsApi {
    static NEWS = `${Protocol.API_URL}/news`;

    static GET_ALL_NEWS = `${this.NEWS}/allNews`;  //取得所有成果展現

    static async getAllNews(formData) {
        console.log(this.GET_ALL_NEWS);
        try {
            const response = await axios.get(this.GET_ALL_NEWS, formData, {
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