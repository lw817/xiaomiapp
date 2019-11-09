<template>
	<!-- <h2>登录页面</h2> -->
	<div class="lllll">
		<div class="denglu">
			<img class="denglu1"  src="../../img/下载.png" alt="">
			<span class="denglu2">小米账号登录</span>
		</div>
		<van-cell-group>
		  <van-field
		     label="手机号"
		     placeholder="请输入手机号"
		   />
		  </van-cell-group>
		 <van-cell-group>
		   <van-field
		     center
		     clearable
		     label="短信验证码"
		     placeholder="请输入短信验证码"
		   >
		     <van-button slot="button" size="small" type="primary" color="orangered" >发送验证码</van-button>
		   </van-field>
		 </van-cell-group>
		 <van-button  style="position: relative; top: 30px;  " type="primary" size="large" color="orangered" >立即登录/注册</van-button>
		 <van-button  style="position: relative; top: 60px;  " type="primary" size="large"   color="orangered"><span>用户名密码登录</span></van-button>
	</div>
	
</template>

<script>
	import Vue from 'vue';
	import { Field } from 'vant';
	
	Vue.use(Field);
	export default{
		data(){
			return{
				
			}
		}
		
	}
</script>

<style>
	.denglu{
		width: 100%;
		height: 120px;
		background-color: white;
	}
	.denglu1{
		position: relative;
		float: left;
		left: 150px;
		top: 30px;
		width: 70px;
		height: 50px;

		
	}
	.denglu2{
		position: relative;
		float: left;
		left: 65px;
		top: 90px;
		
	}
	.lllll{
		padding: 20px;
	}
</style>
