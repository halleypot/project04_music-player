import request from '@/utils/request'

export const hotSong = request( { url: '/search/hot'} )

export const keywords = (params) => {
   return request ( {
        url: '/search/suggest',
        type: 'mobile',
        params,
    })
    
}