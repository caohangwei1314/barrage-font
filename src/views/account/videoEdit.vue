<template>
<div class="wp" style="padding:25px;">
    <div class="components-container">
    <!-- <aside>
      Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.
      <a target="_blank" class="link-type" href="https://panjiachen.github.io/vue-element-admin-site/component/rich-editor.html">Documentation</a>
    </aside> -->
    <el-form
      ref="dataForm"
      :model="temp"
      label-position="left"
      label-width="70px"
      style="width: 400px; margin-left:50px;"
    >
      <!-- <el-form-item
        label="Type"
        prop="type"
      >
        <el-select
          v-model="temp.type"
          class="filter-item"
          placeholder="Please select"
        >
          <el-option
            v-for="item in calendarTypeOptions"
            :key="item.key"
            :label="item.display_name"
            :value="item.key"
          />
        </el-select>
      </el-form-item> -->
      <el-form-item
        label="视频标题"
        prop="title"
      >
        <el-input v-model="temp.title" />
      </el-form-item>
      <el-form-item
        label="视频介绍"
        prop="description"
      >
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="temp.description">
        </el-input>
      </el-form-item>
      <el-form-item
        label="视频内容"
      >
        <el-upload
            class="upload-demo"
            drag
            action="http://localhost:8090/file/upload"
            :on-success="videoHandleAvatarSuccess"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
        <div class="reset-img" v-if="videoUrl !== ''">
            <label data-v-15325571="" for="file_input" @click="clearVideo()"><i data-v-15325571=""></i>&nbsp;重新选择</label>
        </div>
      </el-form-item>
      <el-form-item
        label="视频封面"
      >
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
      </el-form-item>
    </el-form>
    <div style="margin-left:50px;">
        <el-button
        type="primary" class="center"
        @click="option === 'create' ? insert() : update()"
        >
        提交
        </el-button>
    </div>
  </div>
</div>

</template>

<script>
import * as contribution from '@/api/contribution'
export default {
    name: 'TinymceDemo',
    data () {
        return {
            option: '',
            importanceOptions: [],
            fileName: '',
            temp: {
                id: '',
                image: '',
                evaluateScore: 10,
                description: '',
                title: '',
                detailId: '',
                videoUrl: ''
            },
            fileList2: [],
            imageUrl: '',
            videoUrl: '',
            video: ''
        }
    },
    created () {
        this.option = this.$router.currentRoute.query.option
        if (this.option === 'update') {
            this.init()
        }
        this.getClass()
    },
    methods: {
        save (response, file, fileList) {
            this.temp.image = response.data
            this.fileList[0].url = response.data
        },
        save2 (response, file, fileList) {
            const files = {
                name: response.data,
                url: 'https://hzrtb.oss-cn-hangzhou.aliyuncs.com/' + response.data
            }
            this.fileList2.push(files)
        },
        updateData () {
            // updateProduct(this.temp).then(response => {
            //     if (response.code === 0) {
            //         this.$router.push({ name: 'products' })
            //     }
            // })
        },
        createData () {
            // createProduct(this.temp).then(response => {
            //     if (response.code === 0) {
            //         this.$router.push({ name: 'products' })
            //     }
            // })
        },
        init () {
            contribution.detail(this.$router.currentRoute.query.id).then(result => {
                this.temp = result.data
                this.video = result.data.videoUrl
                this.videoUrl = result.data.videoUrl
                this.imageUrl = this.GLOBAL.oss + result.data.image
            })
        },
        getClass () {
            // fetchProductsClassList().then(response => {
            //     this.importanceOptions = response.data
            // })
        },
        handlePreview (file) {
            this.fileName = 'https://hzrtb.oss-cn-hangzhou.aliyuncs.com/' + file.name
        },
        handleAvatarSuccess (res, file) {
            this.imageUrl = this.GLOBAL.oss + res.data
            this.temp.image = res.data
        },
        videoHandleAvatarSuccess (res, file) {
            this.video = this.GLOBAL.oss + res.data
            this.temp.videoUrl = res.data
        },
        beforeAvatarUpload (file) {
            return true
        },
        clearImageUrl () {
            this.imageUrl = ''
        },
        clearVideo () {
            this.video = ''
        },
        insert () {
            contribution.create(this.temp).then(result => {
                this.$router.push({ path: '/account/video' })
            })
        },
        update () {
            contribution.update(this.temp).then(result => {
                this.$router.push({ path: '/account/video' })
            })
        }
    }
}
</script>

<style scoped>
.center{
    margin:0 auto
}
.editor-content {
  margin-top: 20px;
}
</style>

<style>
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
