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
        label="评论标题"
        prop="title"
      >
        <el-input v-model="temp.title" />
      </el-form-item>
      <el-form-item
        label="评价分数"
        prop="evaluateScore"
      >
        <el-input-number v-model="temp.evaluateScore" :min="1" :max="10" label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item
        label="评论简介"
        prop="classId"
      >
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="temp.simpleDesc">
        </el-input>
      </el-form-item>
      <el-form-item
        label="评论封面"
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
      <el-form-item style="padding:20px;border:1px solid gray;width:550px">
        <el-upload
          :width="450"
          class="upload-demo"
          action="http://121.41.67.146:8080/file/upload"
          :on-preview="handlePreview"
          :file-list="fileList2"
          :on-success="save2"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">文件名:{{ fileName }}</div>
        </el-upload>
      </el-form-item>
      <el-form-item
        prop="content"
        label=""
        label-width="0"
      >
        <div>文章详情</div>
        <tinymce
          v-model="temp.content"
          :height="300"
          :width="700"
        />
      </el-form-item>
    </el-form>
    <div style="margin-left:50px;">
        <el-button
        type="primary" class="center"
        @click="option==='create'?createData():updateData()"
        >
        提交
        </el-button>
    </div>
  </div>
</div>

</template>

<script>
import Tinymce from '@/components/Tinymce'

export default {
    name: 'TinymceDemo',
    components: { Tinymce },
    data () {
        return {
            option: '',
            importanceOptions: [],
            fileName: '',
            temp: {
                id: '',
                image: '',
                evaluateScore: 10,
                simpleDesc: '',
                title: '',
                detailId: '',
                content:
          `<h1 style="text-align: center;">Welcome to the TinyMCE demo!</h1><p style="text-align: center; font-size: 15px;"><img title="TinyMCE Logo" src="//www.tinymce.com/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" /><ul>
        <li>Our <a href="//www.tinymce.com/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li><li>Have a specific question? Visit the <a href="https://community.tinymce.com/forum/">Community Forum</a>.</li><li>We also offer enterprise grade support as part of <a href="https://tinymce.com/pricing">TinyMCE premium subscriptions</a>.</li>
      </ul>`
            },
            fileList: [
                {
                    url: '',
                    name: ''
                }
            ],
            fileList2: [],
            imageUrl: ''
        }
    },
    created () {
        this.init()
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
            this.option = this.$router.currentRoute.query.option
            // if (this.option === 'update') {
            //     productDetail(this.$router.currentRoute.query.id).then(response => {
            //         this.temp = response.data
            //         this.fileList[0].url = 'https://hzrtb.oss-cn-hangzhou.aliyuncs.com/' + response.data.image
            //         this.fileList[0].name = '封面'
            //     })
            // } else {
            //     this.fileList = []
            // }
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
        },
        clearImageUrl () {
            this.imageUrl = ''
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
