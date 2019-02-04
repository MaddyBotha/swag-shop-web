import 'whatwg-fetch';

// Http Service
class HttpService {
    getProducts = () => {
        // new promise
        let promise = new Promise((resolve, reject) => {
            fetch('http://localhost:3004/product')
            .then(response => { 
                resolve(response.json());
            });
        });
        return promise;
    }
}

export default HttpService;
