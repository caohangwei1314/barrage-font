<template>
  <div class="dplayer" />
</template>

<script>
import DPlayer from 'dplayer'
require('../../../node_modules/dplayer/dist/DPlayer.min.css')
export default {
    props: {
        autoplay: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: '#FADFA3'
        },
        loop: {
            type: Boolean,
            default: true
        },
        lang: {
            type: String,
            default: 'zh'
        },
        screenshot: {
            type: Boolean,
            default: false
        },
        hotkey: {
            type: Boolean,
            default: true
        },
        preload: {
            type: String,
            default: 'auto'
        },
        contextmenu: {
            type: Array
        },
        logo: {
            type: String
        },
        video: {
            type: Object,
            required: true,
            validator (value) {
                return typeof value.url === 'string'
            }
        },
        danmaku: {
            type: Object
        }
    },
    data () {
        return {
            dp: null
        }
    },
    mounted () {
        const player = this.dp = new DPlayer({
            element: this.$el,
            autoplay: this.autoplay,
            theme: this.theme,
            loop: this.loop,
            lang: this.lang,
            screenshot: this.screenshot,
            hotkey: this.hotkey,
            preload: this.preload,
            contextmenu: this.contextmenu,
            logo: this.logo,
            video: {
                url: this.video.url,
                pic: this.video.pic,
                type: this.video.type
            },
            danmaku: {
                id: this.danmaku.id,
                api: this.danmaku.api,
                user: this.danmaku.user
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
