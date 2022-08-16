import axios from 'axios'

const request = axios.create( {
    baseURL: 'http://music.zllhyy.cn/',
    
})

export default request