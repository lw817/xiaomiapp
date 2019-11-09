<template>
  <div id="app">
    <router-view/>
	
	<van-tabbar v-model="active" v-show="$route.meta.resit==true"  >
	  <van-tabbar-item to="/"    icon="wap-home-o">首页</van-tabbar-item>
	  <van-tabbar-item  to="/capacity"  icon="search">分类</van-tabbar-item>
	  <van-tabbar-item to="/shoopcar"   icon="shopping-cart-o">购物车</van-tabbar-item>
	  <van-tabbar-item to="/Myself"   icon="friends-o">我的</van-tabbar-item>
	</van-tabbar>
	
  </div>
</template>



<script>
	export default{
		data(){
			return{
				active:0
			}
		}
	}
</script>
	