<template>
	<!-- <p>{{this.$route.params.id}}</p> -->
	<div class="detail4" >
		<van-nav-bar title="分类" left-text="" left-arrow @click-left="onClickLeft">
		  <van-icon name="search" slot="right" />
		</van-nav-bar>
		<!-- <h3 class="mader">{{this.$route.params.id}}</h3> -->
		<van-swipe :autoplay="3000">
		  <van-swipe-item v-for="(item,index) in data5.data.goods_info[0].gallery_v3" >
		    <img :src="item.img_url " style="width:100%"/>
		  </van-swipe-item>
		</van-swipe>
		<div class="detail1">
			<span class="detail2">预付款￥100</span>
		<van-count-down
		class="details3"
		  :time="time"
		  style="color: red;"
		  format="DD 天 HH 时 mm 分 ss 秒"
		/>
		</div>
		<div class="detail6"><span class="detail7">小米CC9 Pro</span></div>
		<div class="detail7=8">
			<span style="color: red;  font-size: 15px;">「新品上市，订金预售中，11.11日0点开始支付尾款，支付尾款可参与抽奖，最高赢75英寸小米电视」</span>
			<span style="font-size: 15px;">1亿像素超清主摄 / 后置全场景五摄像头 / 双闪光双柔光四闪光灯 / 3200万像素超清前置相机 / 10倍混合光学变焦，50倍数字变焦 / 5260mAh大电量 / 标配30W疾速快充 / 小米首款超薄屏下指纹 / 德国莱茵低蓝光认证 / 多功能NFC / 红外万能遥控 / 1216 超线性扬声器
			</span>
		</div>
		<div style="width: 100%;  height: 50px;  color: red; font-size: 30px;" >￥3099</div>
		<br>
		<br>
		<br>
		<br>
		<br>
		<van-goods-action class="mader">
		  <van-goods-action-icon icon="chat-o" text="首页" @click="onClickIcon" />
		  <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon1" />
		  <van-goods-action-button type="warning" text="加入购物车" @click="onClickButton" />
		  <van-goods-action-button type="warning" text="立即预约" @click="onClickButton" />
		</van-goods-action>
	
		
	</div>
			
</template>

<script>
	import { CountDown } from 'vant';
	Vue.use(CountDown);
	
	import {GoodsAction} from 'vant';
	Vue.use(GoodsAction)
	
	import Vue from 'vue';
	import { Toast } from 'vant';
	Vue.use(Toast);
	import {data5} from '../data.js'
	export default{
		data(){
			return{
				data5:data5,
				 time: 60 * 60 * 60 * 1000,
				 
				 // color:red
			}
		},
	    methods: {
		  onClickLeft() {
		   // Toast('返回');
		   this.$router.go(-1)
		},
		   onClickIcon1() {
		    // Toast('点击图标');
			this.$router.push('/shoopcar')
		},
		onClickIcon(){
			this.$router.push('/')
		},
		    onClickButton() {
		     // Toast('点击按钮');
		},
		
		
	  
	}
		
		
	}
</script>

<style>
	.detail4{
		margin: 0  ;
		height: 0;
	}
	.mader{
		text-align:center ;
	}
	.detail1{
		height: 60px;
		width: 100%;
		background-color: chocolate;
	}
	.detail2{
		position: relative;
		float: left;
		left: 30px;
		top: 20px;
		color: red;
	}
	.details3{
		position: relative;
		float: right;
		right: 20px;
		top: 20px;
		 display: inline-block;
		
	}
	.detail6{
		height: 60px;
		widows: 100%;
		font-size: 24px;
		
	}
	.detail7{
		position: relative;
		float: left;
		left: 30px;
		top: 20px;
		font-size: 24px;
	}
</style>
