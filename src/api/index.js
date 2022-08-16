import {recomSong, latestSong} from './home.js'
import {hotSong, keywords} from './search.js'
import {getSongById, getLyricById} from './play'


export const recomSongAPI = recomSong
export const latestSongAPI = latestSong

export const hotSongAPI = hotSong
// @params keywords :歌曲搜索关键字
export const keywordsAPI = keywords

export const getSongByIdAPI = getSongById
export const getLyricByIdAPI = getLyricById

