<template>
  <div id="dplayer" />
</template>

<script>
import 'dplayer/dist/DPlayer.min.css'
import DPlayer from 'dplayer'

export default {
  mounted() {
    const player = new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
        url: 'http://vqzone.gtimg.com/1006_3f1a793b3bbb4592b51e36ed02812ed3.f20.mp4?vkey=5F4DE53FF1D4F369B1299DE4CF2DDEA8E06BDA4F9720CB45E7D46618003FC56E4C7DE3F9860328E052AA8901796CC4294084FEE2C7EE92BA',
        pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
      }
    })
    player.on('play', () => {
      this.$emit('play')
    })
    player.on('pause', () => {
      this.$emit('pause')
    })
    player.on('canplay', () => {
      this.$emit('canplay')
    })
    player.on('playing', () => {
      this.$emit('playing')
    })
    player.on('ended', () => {
      this.$emit('ended')
    })
    player.on('error', () => {
      this.$emit('error')
    })
  }

}
</script>
