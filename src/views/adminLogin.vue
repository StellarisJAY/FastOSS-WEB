<template>
	<el-container>
		<el-main>
			<el-row>
				<el-col :span="8">

				</el-col>
				<el-col :span="8">
					<el-card class="login-card">
						<template #header>
							<div class="card-header">
								<span>管理员登录</span>
							</div>
						</template>
						<el-form :model="loginForm" label-width="120px" label-position="left">
							<el-form-item label="用户名">
								<el-input v-model="loginForm.username" placeholder="请输入用户名"/>
							</el-form-item>
							<el-form-item label="密码">
								<el-input type="password" v-model="loginForm.password" show-password placeholder="请输入密码" />
							</el-form-item>
							<el-button type="primary" style="width:100%" size="large">登录</el-button>
						</el-form>
					</el-card>
				</el-col>
			</el-row>
		</el-main>
	</el-container>
</template>

<script>
	export default{
		data(){
			return {
				loginForm: {
					username: "",
					password: ""
				}
			}
		},
		mounted(){
			
		},
		methods:{
			
		}
	}
</script>

<style>
	.login-card {
		margin-top: 20vh;
		height: 40vh;
		padding: 40px;
	}
</style>
