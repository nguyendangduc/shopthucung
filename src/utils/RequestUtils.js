import {GATEWAY} from 'const';
import axios from 'axios';

class RequestUtils {

    static encodeQueryData(data) {
        if(!data) //bao gom typeof data === 'undefined' va data- undefined cas thu nhat ko lo bi loi bien dich neu data chua dk khia bao
            return '';
        const ret = [];
        if(data.id) {
            return '/'+ data.id
        }
        for (let d in data)
            ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        return '?' + ret.join('&');
    }

    static httpRequest( input, service, method = 'GET', params = '') {
        const _uri = GATEWAY + service;
        let rq;
        if (method === 'GET') {
            rq = axios.get(_uri + this.encodeQueryData(params));
        } else if(method === 'POST') {
            rq = axios.post(_uri + this.encodeQueryData(params), input);//jwtService.Post()
            // post(http://127.0.0.1:8000/api/products?id=2, {id:324,name:"choGogy",category:"cho"})// gửi lên 1 con chó đồng thời lấy dl 1 con chó khác( post là lên chứ ko có nghĩa là thêm)
        } else if(method === 'PUT') {
            rq = axios.put(_uri + this.encodeQueryData(params), input);
        } else if(method === 'DELETE') {
            rq = axios.delete(_uri + this.encodeQueryData(params));
        }
        return rq.then(responseJson => {
            return responseJson.data;
        }).catch(error => {
            console.log("Request Err")
            throw error; // ví dụ muốn promiseAll thì ko cần phải map(d ->d.data)
        });
    }

    static Get(
        service,
        params = ''
    ) {
        return this.httpRequest( '', service, 'GET', params );
    }

    static Post(
        service,
        input = '',
        params = ''
    ) {
        return this.httpRequest( input, service, 'POST', params );
    }
    static Put(
        service,
        id,
        input = ''
    ) {
        return this.httpRequest( input, service, 'PUT', id );
    }
    static Delete(
        service,
        id = '',
       
    ) {
        return this.httpRequest( '', service, 'DELETE', id );
    }
    //viet them vai method put delete
}

export default RequestUtils;
// function test(data) {
//     if( data === undefined) {
//         console.log(123)
//         console.log(typeof data)
//     }
// }
// test(undefined)
