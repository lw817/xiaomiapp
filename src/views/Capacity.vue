<template>
	<div>
		<div>
			<van-nav-bar title="分类" left-text="" left-arrow @click-left="onClickLeft"
			@click-right="onClickRight">
			  <van-icon name="search" slot="right" />
			</van-nav-bar>
		</div>
		<van-row>
			<van-col span="6">
				<van-sidebar v-model="activeKey">
				  <van-sidebar-item :title="item.category_name"  v-for="item in cartere.data "/>
				</van-sidebar>
			</van-col>
				
		<van-col span="18">
			<div v-for="(item,index) in cartere.data" v-show="activeKey==index">
				<div v-for="item1 in item.category_list">
				<div v-if="item1.view_type=='cells_auto_fill'">
					<img :src="item1.body.items[0].img_url_webp" alt="" style="width: 100%;">
				</div>
				<div v-else-if="item1.view_type=='category_title'"  style="width: 50%; margin: 0 auto;">
					<van-divider>{{item1.body.category_name}}</van-divider>
				</div>
				<div v-else-if="item1.view_type=='category_group'">
					<van-grid :column-num="3" icon-size="57">
					  <van-grid-item
					    v-for="item2 in item1.body.items"
					    :icon="item2.img_url_webp"
					    :text="item2.product_name"
						@click="goToProduct(item2.action.path)"
					  />
					</van-grid>
				</div>	
			</div>
		</div>
		</van-col>
	</van-row>		
	</div>
</template>
<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import {data4} from '../data.js'

	export default{
		data() {
		  return {
		    activeKey: 0,
			cartere:data4
		  };
		},
		  methods: {
			goToProduct(path){
				this.$router.push(`/Details/${path}`)
			},
		    onClickLeft() {
		      // Toast('返回');
			  this.$router.go(-1)
		    },
		    onClickRight() {
		      // Toast('按钮');
		    }
		  }
	}
</script>

<style>
</style>
