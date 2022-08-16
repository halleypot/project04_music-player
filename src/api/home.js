import request from '@/utils/request'

// get recommended songs
export const recomSong = params => {
    return request( {
        url: '/personalized',
        params
    })
}

export const latestSong = params => {
    return request( {
        url: '/personalized/newsong',
        params,
    })
}
