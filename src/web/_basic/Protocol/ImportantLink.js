import axios from 'axios';
import { Protocol } from './Protocol';

export class ImportantLinkApi {
    static IMPORT_LINK = `${Protocol.API_URL}/importLink`;

    static GET_ALL_IMPORT_LINK = `${this.IMPORT_LINK}/allImportLink`;  //取得所有成果展現

    static async getAllImportLinks(formData) {
        try {
            const response = await axios.get(this.GET_ALL_IMPORT_LINK, formData, {
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