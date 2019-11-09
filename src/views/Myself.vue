<template>
	<div class="quanbu">
		<div class="myself">
			<img  class="image" src="https://m.mi.com/static/img/avatar.76a75b8f17.png" alt="">
			<span class="imagess" @click="hhhh">登录/注册</span>
		</div>
		<div class="wode">
			<van-cell is-link @click="showPopup">我的订单<span class="sss" >全部订单</span></van-cell>
		</div>
		<br>
		<hr>
		<div class="sfk">
			<van-row>
					<van-col span="8"> 
						 <van-icon   name="credit-pay"  size="25"/><div  class="dsh">待付款</div>
					</van-col>	
					<van-col span="8">
						 <van-icon   name="logistics"  size="25"/><div  class="dsh">待收货</div>
					</van-col>	
					<van-col span="8">		 
						 <van-icon   name="brush-o"  size="25"/><div  class="dsh">退换修</div>
					</van-col>
			
				
				
			</van-row>
			
		
		</div>
		<br>
		<br>
		<div class="kuai"></div>
		<div  class="div">
			<van-icon  class="tutu"  name="gem-o"  size="25"/><div class="zt">会员中心</div><van-icon  class="tubiao"  @click="dianji"  name="arrow"  size="20"/>
		</div>
		<div  class="div">
			<van-icon  class="tutu"  name="vip-card-o"  size="25"/><div class="zt">我的优惠</div><van-icon   @click="dianji" class="tubiao"  name="arrow"  size="20"/>
		</div>
		<div class="kuai"></div>
		<div  class="div">
			<van-icon  class="tutu"  name="like-o"  size="25"/><div class="zt">服务中心</div><van-icon  class="tubiao"  @click="dianji"  name="arrow"  size="20"/>
		</div>
		<div  class="div">
			<van-icon  class="tutu"  name="shop-collect-o"  size="25"/><div class="zt">小米之家</div><van-icon  class="tubiao"  @click="dianji"  name="arrow"  size="20"/>
		</div>
		<div class="kuai"></div>
		<div  class="div">
			<van-icon  class="tutu"  name="ecard-pay"  size="25"/><div class="zt">我的F码</div><van-icon  class="tubiao"   @click="dianji" name="arrow"  size="20"/>
		</div>
		<div  class="div">
			<van-icon  class="tutu"  name="failure"  size="25"/><div class="zt">礼物码兑换</div><van-icon  class="tubiao"  name="arrow"  @click="dianji"  size="20"/>
		</div>
		<div class="kuai"></div>
		<br>
		<div  class="div">
			<van-icon  class="tutu"  name="discount"  size="25"/><div class="zt">设置</div><van-icon  class="tubiao"   @click="dianji" name="arrow"  size="20"/>
		</div>
		
		
		
		
	</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
	  active:0
	  
    }
  },

  methods: {
    showPopup() {
      this.show = true;
	  this.$router.push('/shoopcar')
    },
	dianji(){
		alert("目前还不能实现该功能")
	},
	hhhh(){
		this.$router.push('/submit')
	}
	
  }
};



</script>

<style>
	.quanbu{
		margin: 0;
	}
	.myself{
		height: 80px;
		width: 100%;
		background-color: chocolate;
	}

	.image{
		height: 50px;
		position: relative;
		float: left;
		left: 20px;
		top: 15px;
		
	}
	.image1{
		height: 50px;
		width: 100%;
		background-color: wheat;
	}
	.imagess{
		position: relative;
		float: left;
		left: 30px;
		top: 30px;
		font-size: 13px;
		color: white;
	}
	.sss{
		margin-left: 200px;
	}
	.dsh{
		position: relative;
		float: left;
		left: 35px;
		top: 30px;
	}
	.dst{
		height: 70px;
		width: 100%;
		background-color: wheat;
	}
	.wode{
		height: 30px;
		width: 100%;
	}
	.skf{
		height: 70px;
		width: 100%;
		background-color: wheat;
	}
	.div{
		height: 50px;
		width: 100%;
	}
	.tutu{
		position: relative;
		float: left;
		left: 20px;
		top: 10px;
	}
	.zt{
		position: relative;
		float: left;
		left: 40px;
		top: 10px;
	}
	.tubiao{
		position: relative;
		float: right;
		right: 20px;
		top: 10px;
	}
	.kuai{
		height: 10px;
		width: 100%;
		background-color: wheat;
	}
		
</style>
