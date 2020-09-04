import {GATEWAY} from 'const';
import axios from 'axios';

class RequestUtils {

    static encodeQueryData(data) {
        if(!data || typeof data === undefined)
            return '';
        const ret = [];
        for (let d in data)
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return '?' + ret.join('&');
    }

    static httpRequest( input, service, method = 'GET', params = '') {
        const _uri = GATEWAY + service;
        let getOrPost;
        if (method === 'GET') {
            getOrPost = axios.get(_uri + this.encodeQueryData(input));
        } else {
            getOrPost = axios.post(_uri + this.encodeQueryData(params), input);
        }
        return getOrPost.then(responseJson => {
            return responseJson.data;
        }).catch(error => {
            throw error;
        });
    }

    static Get(
        service,
        input = ''
    ) {
        return this.httpRequest( input, service, 'GET' );
    }

    static Post(
        service,
        input = '',
        params = ''
    ) {
        return this.httpRequest( input, service, 'POST', params );
    }
}

export default RequestUtils;
