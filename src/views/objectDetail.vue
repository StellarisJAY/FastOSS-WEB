<template>
	<div>
		<el-container>
			<!--侧边栏-->
			<SideBar :defaultActive="'2'"></SideBar>
			<el-container>
				<el-header>
					<Header></Header>
				</el-header>
				<el-main>
					<el-breadcrumb :separator-icon="ArrowRight">
					    <el-breadcrumb-item @click="this.$router.back()">返回对象列表</el-breadcrumb-item>
					    <el-breadcrumb-item>{{objectMetaData.filename}}</el-breadcrumb-item>
					    <el-breadcrumb-item>{{objectMetaData.versionId}}</el-breadcrumb-item>
					  </el-breadcrumb>
					<el-card class="object-detail-card">
						<el-row>
							<el-col :span="12">
								<el-descriptions direction="horizontal" :column="1">
									<el-descriptions-item label="文件名:">{{objectMetaData.filename}}</el-descriptions-item>
									<el-descriptions-item label="文件大小:">{{formatSpace(objectMetaData.size)}}
									</el-descriptions-item>
									<el-descriptions-item label="创建时间:">{{objectMetaData.createTime}}
									</el-descriptions-item>
									<el-descriptions-item label="版本号:">{{objectMetaData.versionId}}
									</el-descriptions-item>
									<el-descriptions-item label="对象地址:">{{objectMetaData.url}}
										<el-button size="mini" type="text">复制</el-button>
									</el-descriptions-item>
									<el-descriptions-item label="">
										<span class="hint-text">使用对象地址下载需要获得存储桶访问权限</span>
									</el-descriptions-item>
									<el-descriptions-item label="操作:">
										<el-button size="mini" type="text">复制临时地址</el-button>
										<el-button size="mini" type="text">预览</el-button>
										<el-button size="mini" type="text">下载</el-button>
										<el-button size="mini" type="text">删除</el-button>
									</el-descriptions-item>
									<el-descriptions-item label="">
										<span class="hint-text">临时地址携带访问Token，在Token有效期内可以随意访问对象，有效期30分钟。请妥善保管避免泄漏</span>
									</el-descriptions-item>
								</el-descriptions>
							</el-col>
							<el-col :span="12" align="right">
								<el-image style="width:300px;height:300px;">
									
								</el-image>
							</el-col>
						</el-row>
					</el-card>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import SideBar from "../components/SideBar.vue"
	import Header from "../components/Header.vue"
	import { Picture as IconPicture } from '@element-plus/icons-vue'
	import { ArrowRight } from '@element-plus/icons-vue'
	export default {
		components: {
			SideBar: SideBar,
			Header: Header
		},
		data() {
			return {
				objectMetaData: {
					filename: 'test.png',
					size: 1024 * 981,
					versionId: '1a2b3c4d5e6g',
					createTime: '2022.03.24 19:00',
					url: 'http://fastoss.cloud/images-19871264312/test.png/1a2b3c4d5e6g'
				},
				targetObject: null
			}
		},
		mounted(){
			console.log(this.$router)
		},
		methods: {
			formatSpace(space) {
				if (space < 1024 * 1024) {
					return space / 1024 + "KB"
				} else if (space < 1024 * 1024 * 1024) {
					return space / (1024 * 1024) + "MB"
				} else if (space < 1024 * 1024 * 1024 * 1024) {
					return space / (1024 * 1024 * 1024) + "GB"
				} else {
					return space / (1024 * 1024 * 1024 * 1024) + "TB"
				}
			}
		}
	}
</script>

<style>
	.object-detail-card {
		margin: 10px;
		width: 100%;
		height: 75vh;
	}
	.hint-text{
		color: #a1a1a1
	}
</style>
