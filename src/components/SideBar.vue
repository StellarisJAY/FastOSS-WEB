<template>
	<el-aside width="200px">
		<el-scrollbar>
			<el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
				:default-active="defaultActive" text-color="#fff" style="height:100vh">
				<el-menu-item index="1" @click="navigateTo('dashboard',null)">
					<span>控制台</span>
				</el-menu-item>
				<el-menu-item index="2" @click="navigateTo('buckets',null)">
					<span>存储桶</span>
				</el-menu-item>
				<el-menu-item index="3" @click="navigateTo('dashboard',null)">
					<span>监控</span>
				</el-menu-item>
				<el-menu-item index="4" @click="navigateTo('dashboard',null)">
					<span>设置</span>
				</el-menu-item>
			</el-menu>
		</el-scrollbar>
	</el-aside>
</template>

<script>
	export default {
		props:{
			defaultActive:{
				type:String
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			navigateTo(page, params){
				this.$router.push({name:page, params:params})
			}
		}
	}
</script>

<style>
</style>
