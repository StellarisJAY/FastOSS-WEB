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
					<el-card class="bucket-tool-card">
						<el-row>
							<el-col :span="8">
								<el-row>
									<p>images</p>
								</el-row>
								<el-row>
									<el-col :span="7">
										<el-tag type="primary">AppID:1983746112</el-tag>
									</el-col>
									<el-col :span="7">
										<el-tag type="success">公共读写</el-tag>
									</el-col>
									<el-col :span="7">
										<el-tag type="primary">开启版本控制</el-tag>
									</el-col>
								</el-row>
							</el-col>
							<el-col :span="12"></el-col>
							<el-col :span="2">
								<el-button type="primary">上传文件</el-button>
							</el-col>
							<el-col :span="2">
								<el-button type="primary">修改权限</el-button>
							</el-col>
						</el-row>
					</el-card>
					<el-card class="object-list-card">
						<el-row>
							<el-table :data="objectList" height="400" style="width: 100%">
								<el-table-column prop="name" label="文件名">
									<template #default="scope">
										<router-link :to="{path:'/object',query:{objectKey:scope.row.objectKey}}">{{scope.row.name}}</router-link>
									</template>
								</el-table-column>
								<el-table-column prop="size" label="大小">
									<template #default="scope">
										{{formatSpace(scope.row.size)}}
									</template>
								</el-table-column>
								<el-table-column prop="createTime" label="创建时间"></el-table-column>
								<el-table-column label="操作">
									<template #default="scope">
										<el-button type="text">详情</el-button>
										<el-button type="text">删除</el-button>
									</template>
								</el-table-column>
							</el-table>
							<el-pagination background layout="prev, pager, next" :total="1000" />
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
	export default {
		components: {
			SideBar: SideBar,
			Header: Header
		},
		data() {
			return {
				objectList: [{
						objectKey:"image-1847162321/object1911.png/1a2b3c4d5e",
						name: "object1911.png",
						size: 102400,
						createTime: "2022.03.24 19:00"
					},
					{
						objectKey:"image-1847162321/object1911.png/1a2b3c4d5e",
						name: "object1911.png",
						size: 102400,
						createTime: "2022.03.24 19:00"
					},
					{
						objectKey:"image-1847162321/object1911.png/1a2b3c4d5e",
						name: "object1911.png",
						size: 102400,
						createTime: "2022.03.24 19:00"
					},
					{
						objectKey:"image-1847162321/object1911.png/1a2b3c4d5e",
						name: "object1911.png",
						size: 102400,
						createTime: "2022.03.24 19:00"
					},
					{
						objectKey:"image-1847162321/object1911.png/1a2b3c4d5e",
						name: "object1911.png",
						size: 102400,
						createTime: "2022.03.24 19:00"
					},
					{
						objectKey:"image-1847162321/object1911.png/1a2b3c4d5e",
						name: "object1911.png",
						size: 102400,
						createTime: "2022.03.24 19:00"
					},
					{
						objectKey:"image-1847162321/object1911.png/1a2b3c4d5e",
						name: "object1911.png",
						size: 102400,
						createTime: "2022.03.24 19:00"
					},
				]
			}
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
			},
			navigateTo(path, params){
				this.$router.push({name:path,params:params})
			}
		}
	}
</script>

<style>
	bucket-tool-card {
		margin: 10px;
		width: 100%;
		height: 15vh;
	}
	
	object-list-card {
		margin: 10px;
		width: 100%;
		height: 85vh;
	}
</style>
