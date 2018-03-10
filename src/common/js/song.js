// import {getLyric} from 'api/song'
// import {ERR_OK} from 'api/config'
// import {Base64} from 'js-base64'

// 设置成类的好处，1、代码集中到一个地方维护，2、类的扩展性比对象强很多，而且是一种面向对象编程方式
export default class Song {
  constructor({id, mid, singer, name, album, duration, image, url}) {
    this.id = id // id
    this.mid = mid // mid
    this.singer = singer // 歌手
    this.name = name // 名称
    this.album = album // 专辑名称
    this.duration = duration // 长度
    this.image = image // 歌曲图片
    this.url = url // 歌曲请求路径
  }

  /* getLyric() {
    if (this.lyric) {
      return Promise.resolve(this.lyric)
    }

    return new Promise((resolve, reject) => {
      getLyric(this.mid).then((res) => {
        if (res.retcode === ERR_OK) {
          this.lyric = Base64.decode(res.lyric)
          resolve(this.lyric)
        } else {
          reject('no lyric')
        }
      })
    })
  } */
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://isure.stream.qqmusic.qq.com/C100${musicData.songmid}.m4a?fromtag=32`
  })
}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
