<template>
	<div>
		<van-nav-bar title="购物车" left-text="" left-arrow @click-left="onClickLeft">
				  <van-icon name="search" slot="right" />
		</van-nav-bar>
	<!-- 	<div class="shoop">
			<h3 class="deta">登录后享受更多优惠</h3>    
		</div> -->
		<div class="shoop">
			<van-cell is-link  class="deta"  @click="fff">登录后享受更多优惠<span class="lift2" >	去登录</span></van-cell>
		</div>
		<div class="lll"></div>
		<div class="shoop">
			<span class="deta1"  @click="kkk">购物车还是空的</span><span class="lift" >	<button @click="ppp">去逛逛</button></span>
			<!-- <van-cell is-link  class="deta1"  @click="kkk">购物车还是空的<span class="lift" >	<button>去逛逛</button></span></van-cell> -->
		</div>
		<div class="lll"></div>
		<van-col span="24"  v-for="(image,index) in data6.data.header.body.items" >
				  <img  class="full"   :src="image.img_url" /> 
		</van-col>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[0].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[0].name}}
					<br>
					<span class="price">{{data6.data.recom_list[0].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[1].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[1].name}}
					<br>
					<span class="price">{{data6.data.recom_list[1].price}}</span>
					</p>
					<br>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[2].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[2].name}}
					<br>
					<span class="price">{{data6.data.recom_list[2].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[3].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[3].name}}
					<br>
					<span class="price">{{data6.data.recom_list[3].price}}</span>
					</p>
					<br>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[4].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[4].name}}
					<br>
					<span class="price">{{data6.data.recom_list[4].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[5].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[5].name}}
					<br>
					<span class="price">{{data6.data.recom_list[5].price}}</span>
					</p>
					<br>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[6].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[6].name}}
					<br>
					<span class="price">{{data6.data.recom_list[6].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[7].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[7].name}}
					<br>
					<span class="price">{{data6.data.recom_list[7].price}}</span>
					</p>
					<br>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[8].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[8].name}}
					<br>
					<span class="price">{{data6.data.recom_list[8].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[9].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[9].name}}
					<br>
					<span class="price">{{data6.data.recom_list[9].price}}</span>
					</p>
					<br>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[10].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[10].name}}
					<br>
					<span class="price">{{data6.data.recom_list[10].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[11].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[11].name}}
					<br>
					<span class="price">{{data6.data.recom_list[11].price}}</span>
					</p>
					<br>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[12].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[12].name}}
					<br>
					<span class="price">{{data6.data.recom_list[12].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[13].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[13].name}}
					<br>
					<span class="price">{{data6.data.recom_list[13].price}}</span>
					</p>
					<br>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[12].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[12].name}}
					<br>
					<span class="price">{{data6.data.recom_list[12].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[13].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[13].name}}
					<br>
					<span class="price">{{data6.data.recom_list[13].price}}</span>
					</p>
					<br>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[14].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[14].name}}
					<br>
					<span class="price">{{data6.data.recom_list[14].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[15].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[15].name}}
					<br>
					<span class="price">{{data6.data.recom_list[15].price}}</span>
					</p>
					<br>
			</van-col>
		</van-row>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[16].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[16].name}}
					<br>
					<span class="price">{{data6.data.recom_list[16].price}}</span>
					</p>
					<br>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data6.data.recom_list[17].image_url" alt="">
					<p class="myde">{{data6.data.recom_list[17].name}}
					<br>
					<span class="price">{{data6.data.recom_list[17].price}}</span>
					</p>
					<br>
					<br>
					<br>
					<br>
					<br>
			</van-col>
		</van-row>
	</div>
	
	
	
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
import {data6} from '../data.js'

export default{
		data(){
			return{
				data6:data6
			}
		},
	    methods: {
		  onClickLeft() {
		   // Toast('返回');
		   this.$router.go(-1)
		},
		fff(){
			alert("登录页面还未完成")
		},
		kkk(){
			this.$router.push('/')
		},
		ppp(){
			this.$router.push(`/`)
		}
		
		// gwc(){
		// 	this.$router.push(Home)
		// }
		}
	}
</script>

<style>
	.shoop{
		height: 80px;
		width: 370px;
		border: 2px solid white;
	}
	.deta{
		text-align: center;
	}
	.deta1{
		position: relative;
		float: left;
		left: 80px;
		top: 22px;
		/* text-align: center; */
	}
	.full{
		width: 100%;
	}
	.price{
		color: red;
	}
	.lift{
		position: relative;
		float: right;
		right: 100px;
		top: 20px;
	}

	.lll{
		height: 10px;
		width: 100%;
		background-color: wheat;
	}
</style>
