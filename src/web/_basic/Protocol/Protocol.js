export class Protocol {
    static API_URL = 'http://localhost:8081/api';

    static get config() {
        return {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
    }
}

export default Protocol;