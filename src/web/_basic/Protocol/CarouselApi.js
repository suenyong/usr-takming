import axios from 'axios';
import { Protocol } from './Protocol';
axios.defaults.withCredentials = true;

export class CarouselApi {
    static CAROUSEL = `${Protocol.API_URL}/carousel`;

    static GET_ALL_CAROUSEL = `${this.CAROUSEL}/allCarousel`;  //取得所有輪播圖
    static GET_CAROUSEL_ID = `${this.CAROUSEL}/`; //用ID搜尋輪播圖
    static POST_CAROUSEL = `${this.CAROUSEL}/`; //新增輪播圖

    // api/carousel/allCarousel
    static async getAllCarousel() {
        // console.log("取得所有輪播圖: " + this.GET_ALL_CAROUSEL);
        try {
            const response = await axios.get(this.GET_ALL_CAROUSEL, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
    
    // static async getCarouselById(carousel_Id) {
    //     console.log(this.GET_CAROUSEL_ID);
    //     try {
    //         const response = await axios.get(`${this.GET_CAROUSEL_ID}${carousel_Id}`);
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }

    // static async postNewCarousel(formData) {
    //     console.log(this.POST_CAROUSEL);
    //     console.log(formData);
    //     try {
    //         const response = await axios.post(this.POST_CAROUSEL, formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         return response.data;
    //     } catch (error) {
    //         throw error;
    //     }
    // }
}
