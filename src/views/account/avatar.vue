<template>
    <div>
        <div data-v-4cbad597="" data-v-6c79fef7="" class="security-right-title"><span data-v-4cbad597="" class="security-right-title-icon"></span> <span data-v-4cbad597="" class="security-right-title-text">我的头像</span> <!----></div>
        <div class="avatar-container clearfixs">
            <div class="fl upload">
                <el-upload
                    class="avatar-uploader"
                    action="http://localhost:8090/file/upload"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <div class="reset-img" v-if="imageUrl !== ''">
                    <label data-v-15325571="" for="file_input" @click="clearImageUrl()"><i data-v-15325571=""></i>&nbsp;重新选择</label>
                </div>
            </div>
            <div data-v-15325571="" class="border-line fl"></div>
            <div class="fr" style="padding-top:40px">
                <el-avatar :size="98" :src="userInfo.avatar"></el-avatar>
                <div data-v-15325571="" class="pre-info">当前头像</div>
            </div>
        </div>
        <p style="" data-v-15325571="" class="descript">请选择图片上传：大小180 * 180像素支持JPG、PNG等格式，图片需小于2M</p>
        <div data-v-15325571="" class="modal-footer">
            <el-button @click="updateImage()" type="primary" :class="{btn_confirm_disabled:imageUrl === ''}" :disabled="imageUrl === ''">更新</el-button>
        </div>
    </div>
</template>

<script>
import * as user from '@/api/user'
export default {
    data () {
        return {
            userInfo: {},
            imageUrl: '',
            image: ''
        }
    },
    created () {
        this.init()
    },
    methods: {
        init () {
            user.detail().then(result => {
                this.userInfo = result.data
                this.userInfo.avatar = this.GLOBAL.oss + this.userInfo.avatar
            })
        },
        clearImageUrl () {
            this.imageUrl = ''
        },
        updateImage () {
            const data = {
                avatar: this.image
            }
            user.updateImage(data).then(result => {
                if (result.code === 0) {
                    this.$message({
                        type: 'success',
                        message: '更新成功'
                    })
                    setTimeout(() => {
                        this.$router.go(0)
                    }, 1000)
                } else {
                    this.$message({
                        type: 'error',
                        message: '更新失败'
                    })
                }
            })
        },
        handleAvatarSuccess (res, file) {
            this.imageUrl = this.GLOBAL.oss + res.data
            this.image = res.data
        },
        beforeAvatarUpload (file) {
            const isJPG = file.type === 'image/jpeg'
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        }
    }
}
</script>

<style lang="scss">
.btn_confirm_disabled {
    background: #f4f5f7 !important;
    border-color: #f4f5f7 !important;
    cursor: auto !important;
    span{
        color: #ccd0d7 !important;
    }
}
.modal-footer{
    text-align: center;
    margin-top: 40px;
}
.reset-img{
    text-align: center;
}
.reset-img label i {
    display: inline-block;
    width: 18px;
    height: 18px;
    vertical-align: bottom;
    background-image: url(https://s1.hdslb.com/bfs/static/account-fe/static/img/icons_m_2.57e5263.png);
    background-position: -23px -1303px;
    cursor: pointer;
}
.reset-img label {
    font-size: 12px;
    color: #6d757a;
    cursor: pointer;
}
.descript {
    line-height: 16px;
    color: #99a2aa;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    text-align:center
}
.pre-info {
    margin-top: 20px;
    font-size: 12px;
    color: #99a2aa;
    text-align: center;
}
.upload{
    margin-right: 40px;
}
.avatar{

}
.avatar-container{
    width: 361px;
    margin: 0 auto;
    padding: 80px 20px 56px;
}
.border-line {
    height: 182px;
    width: 1px;
    background: #e5e9ef;
    float: left;
}
.security-right-title-text {
    float: left;
    margin: 15px 0 0 5px;
    color: #00a1d6;
    font-size: 14px;
    cursor: default;
}
.security-right-title-icon {
    float: left;
    width: 4px;
    height: 16px;
    margin-top: 18px;
    background-color: #00a1d6;
    border-radius: 4px;
}
.security-right-title {
    height: 50px;
    padding-left: 30px;
    border-bottom: 1px solid #ddd;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
