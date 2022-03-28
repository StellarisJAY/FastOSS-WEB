import {
	createWebHistory,
	createRouter
} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Dashboard from "../views/dashboard.vue";
import BucketList from "../views/bucketList.vue";
import BucketDetail from "../views/bucket.vue";
import ObjectDetail from "../views/objectDetail.vue";
import AdminLogin from "../views/adminLogin.vue"
const routes = [
	{
		// 控制台页面
		path: "/dashboard",
		name: "dashboard",
		component: Dashboard,
	},
	{
		// 存储桶列表
		path: "/buckets",
		name: "buckets",
		component: BucketList
	},
	{
		// 对象列表
		path: "/bucket",
		name: "bucket",
		component: BucketDetail
	},
	{
		path: "/object",
		name: "object",
		component: ObjectDetail
	},
	{
		path: "/login",
		name: "login",
		component: AdminLogin
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
