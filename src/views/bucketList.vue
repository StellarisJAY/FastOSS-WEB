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
					<el-row>
						<el-col :span="24">
							<el-card class="bottom-card">
								<template #header>
									<div class="card-header">
										<span>存储桶列表</span>
									</div>
								</template>
								<el-table :data="bucketList" height="400" style="width: 100%">
									<el-table-column prop="bucketName" label="存储桶名称">
										<template #default="scope">
											<router-link :to="{path:'/object',query:{objectKey:'object-1234'}}">{{scope.row.bucketName}}</router-link>
										</template>
									</el-table-column>
									<el-table-column prop="appId" label="AppID">
										<template #default="scope">
											<el-tag type="warning">{{scope.row.appId}}</el-tag>
										</template>
									</el-table-column>
									<el-table-column prop="acl" label="访问权限" sortable>
										<template #default="scope">
											<el-tag v-if="scope.row.acl==='PRIVATE'" type="primary">私有读写</el-tag>
											<el-tag v-else-if="scope.row.acl==='PUBLIC_READ'" type="primary">公共读</el-tag>
											<el-tag v-else type="primary">公共读写</el-tag>
										</template>
									</el-table-column>
									<el-table-column prop="versioning" label="版本控制" sortable>
										<template #default="scope">
											<el-tag v-if="scope.row.versioning===true" type="success">开启</el-tag>
											<el-tag v-else type="primary">关闭</el-tag>
										</template>
									</el-table-column>
								</el-table>
								<el-pagination background layout="prev, pager, next" :total="1000" />
							</el-card>
						</el-col>
					</el-row>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import SideBar from "../components/SideBar.vue"
	import Header from "../components/Header.vue"
	import * as echarts from 'echarts'
	import service from '../utils/request.js'
	export default {
		components: {
			SideBar: SideBar,
			Header: Header
		},
		data() {
			return {
				bucketList: null
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				let that = this
				service.request({
					url: '/',
					methd:'get',
					params:{pageNum:1,pageSize:10},
					headers: {'Bucket': 'service'}
				}).then((response)=>{
					that.bucketList = response.data.buckets
				})
			}
		}
	}
</script>

<style>
	.box-card {
		margin: 10px;
		width: 95%;
		height: 300px;
	}
	
	bottom-card {
		margin: 10px;
		width: 95%;
		height: 200px;
	}
	
	.card-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
