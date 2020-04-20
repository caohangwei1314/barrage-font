<template>
  <div class="hello">
    <d-player ref="player" :video="video" :contextmenu="contextmenu" :danmaku="danmaku" @play="play" />
  </div>
</template>

<script>
import VueDplayerHls from '@/components/common/VueDplayerHls'
// import * as animeSeries from '@/api/animeSeries'
export default {
    name: 'HelloWorld',
    components: {
        'd-player': VueDplayerHls
    },
    props: [
        'video'
    ],
    data () {
        return {
            msg: 'Welcome to Your Vue.js App',
            // video: {
            //     url: 'https://csrc.vcloud.dogecdn.com/vcloud/17/v/20190424/1556036075_818c4125ec9c8cbc7a7a8a7cc1601512/1037/7d515b22c4958598c0fbd1e6290a5ca5.mp4?vkey=C532D8DC8D9F229619F263DAF1142B5894AD3DA08581C98F32C077E5D319CF6667B229847737881E268ED04191E2F2247D1B7181AF9CBFC23CC6B2E37C293FA98726099D5A46F29634181358222338A936C4E24F9992264EB0CCD9F632747879A718561653543A8571B1BC95A8B815481FED07492D33B41E285D7F75F50A2546BF076F9E6CC70CBC8BA2CAA4A26C1322&tkey=1586532705d397c389f2'
            // },
            danmaku: {
                // ...
                id: '1',
                api: 'http://localhost:8090/',
                user: '1'
            },
            autoplay: false,
            player: null,
            contextmenu: [
                {
                    text: 'GitHub',
                    link: 'https://github.com/MoePlayer/vue-dplayer'
                }
            ]
        }
    },
    mounted () {
        this.player = this.$refs.player.dp

    // console.log(this.player);
    // var hls = new Hls();
    // hls.loadSource('https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/chunklist_w630020335.m3u8');
    // hls.attachMedia(this.player);
    },
    created () {
        this.init()
    },
    methods: {
        play () {
            console.log('play callback')
        },
        init () {
            // animeSeries.detail(this.$router.currentRoute.query.id).then(result => {
            //     debugger
            //     this.video.url = this.GLOBAL.oss + result.data.videoUrl
            //     console.log(this.video.url)
            // })
            console.log(this.video)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
