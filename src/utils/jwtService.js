import EventEmitter from './EventEmitter'
import axios from 'axios'
import { GATEWAY2, API } from 'const/api'
class JwtService extends EventEmitter {
   
    loginWithToken() {
        const token = window.localStorage.getItem('token')
        return axios.post(GATEWAY2 + API.TOKEN, { token: token })
        .then(res => {
            return res.data
        }).catch(err => console.log(err))
       //return 1 promise, dung async cung return promise, RequestUtils cung retrun 1promise 
    }
}
const instance = new JwtService()
export default instance
// const dataUser = this.on("TOKEN", async (token) => {
//     const userData = await axios.post(GATEWAY2 + API.AUTH, { token: token })
//     console.log(userData.data.data)
//     return userData.data.data

// })
// const tokenStorage = [...JSON.stringify(window.localStorage.getItem('token'))]
// this.emit("TOKEN", tokenStorage)
// return dataUser