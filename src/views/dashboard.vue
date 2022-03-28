<template>
	<div>
		<el-container>
			<!--侧边栏-->
			<SideBar :defaultActive="'1'"></SideBar>
			<el-container>
				<el-header>
					<Header></Header>
				</el-header>
				<el-main>
					<el-row>
						<el-col :span="8">
							<el-card class="box-card">
								<template #header>
									<div class="card-header">
										<span align="left">存储容量</span>
										<el-button class="button" type="text">刷新</el-button>
									</div>
								</template>
								<div style="width: 100%; height: 100%" id="storageChart"></div>
								<div class="card-content">
									<el-descriptions direction="horizontal" :column="2"
										>
										<el-descriptions-item>
											<el-tag size="big" type="success">空闲</el-tag>
										</el-descriptions-item>
										<el-descriptions-item>
											<text>200 GB</text>
										</el-descriptions-item>
										<el-descriptions-item>
											<el-tag size="big" type="warning">使用</el-tag>
										</el-descriptions-item>
										<el-descriptions-item>
											<text>129 GB</text>
										</el-descriptions-item>
									</el-descriptions>
								</div>
							</el-card>
						</el-col>
						<el-col :span="8">
							<el-card class="box-card" align="left">
								<template #header>
									<div class="card-header">
										<span>存储桶 对象统计</span>
									</div>
								</template>
								<el-row>
									<el-col :span="12"><h4>存储桶数量：</h4></el-col>
									<el-col :span="12"><h2>3 个</h2></el-col>
								</el-row>
								<el-row>
									<el-col :span="12"><h4>对象数量：</h4></el-col>
									<el-col :span="12"><h2>500 个</h2></el-col>
								</el-row>
								<el-row>
									<el-col :span="12"><h4>请求数量：</h4></el-col>
									<el-col :span="12"><h2>1133 次</h2></el-col>
								</el-row>
							</el-card>
						</el-col>
						<el-col :span="8">
							<el-card class="box-card" align="left">
								<template #header>
									<div class="card-header">
										<span>流量统计</span>
									</div>
								</template>
								<div style="width: 350px; height: 200px" id="trafficChart"></div>
							</el-card>
						</el-col>
					</el-row>
					<el-row>
						<el-col :span="24">
							<el-card class="bottom-card">
								<template #header>
									<div class="card-header">
										<span>集群状态</span>
									</div>
								</template>
								<el-table :data="storageList" height="220" style="width: 100%">
								    <el-table-column prop="address" label="地址"  />
									<el-table-column prop="type" label="类型" sortable>
										<template #default="scope">
											<el-tag v-if="scope.row.type===0" type="warning">代理</el-tag>
											<el-tag v-else type="primary">存储</el-tag>
										</template>
									</el-table-column>
								    <el-table-column prop="status" label="状态" sortable>
										<template #default="scope">
											<el-tag v-if="scope.row.status===0" type="danger">停用</el-tag>
											<el-tag v-else type="success">可用</el-tag>
										</template>
									</el-table-column>
								    <el-table-column prop="space" label="容量" sortable>
										<template #default="scope">
											<span>{{formatSpace(scope.row.space)}}</span>
										</template>
									</el-table-column>
								</el-table>
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
	import {generateBucketToken} from '../utils/auth.js'
	export default {
		components: {
			SideBar: SideBar,
			Header: Header
		},
		data() {
			return {
				storageList: [
					{address: '192.168.154.128:9099', status: 0, space: 1024 * 1024 * 1024 * 2048, type:1},
					{address: '192.168.154.128:9099', status: 1, space: 1024 * 1024 * 1024 * 200, type:1},
					{address: '192.168.154.128:9099', status: 0, space: 1024 * 1024 * 1024 * 200, type:1},
					{address: '192.168.154.128:9099', status: 1, space: 1024 * 1024 * 1024 * 200, type:1},
					{address: '192.168.154.128:9099', status: 1, space: 1024 * 1024 * 1024 * 200, type:0},
					{address: '192.168.154.128:9099', status: 0, space: 1024 * 1024 * 1024 * 20, type:0}
				]
			}
		},
		mounted() {
			this.init()
		},
		methods: {
			init() {
				this.initStorageSpaceChart()
				this.initTrafficChart()
				this.initRequest()
			},
			initRequest(){
				console.log(generateBucketToken("6bb34543-63af-452c-ba02-c85cb005b490","d9a0a9d0-839e-4496-88e9-9bbca8fc97cd"))
			},
			initStorageSpaceChart() {
				let storageChart = echarts.init(document.getElementById('storageChart'))
				let option = {
					series: [{
						name: '访问来源',
					 type: 'pie',
						radius: '100%',
						roseType: 'angle',
						data: [{
								value: 235,
								name: '已使用'
							},
							{
								value: 274,
								name: '空闲'
							},
						]
					}]
				}
				storageChart.setOption(option)
			},
			initTrafficChart(){
				let trafficChart = echarts.init(document.getElementById('trafficChart'))
				let option = {
					xAxis: {
						name: "时间",
						data: ["12:00", "13:00","14:00","15:00","16:00","17:00","18:00","19:00"]
					},
					yAxis: {
						name: "流量"
					},
					series: [{
						type: "line",
						data: [100, 200, 104, 40, 99, 194, 103, 80]
					}]
				}
				trafficChart.setOption(option)
			},
			formatSpace(space){
				if(space < 1024 * 1024) {
					return space / 1024 + "KB"
				}
				else if(space < 1024 * 1024 * 1024){
					return space / (1024 * 1024) + "MB"
				}
				else if(space < 1024 * 1024 * 1024 * 1024){
					return space / (1024 * 1024 * 1024) + "GB"
				}
				else{
					return space / (1024 * 1024 * 1024 * 1024) + "TB"
				}
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
