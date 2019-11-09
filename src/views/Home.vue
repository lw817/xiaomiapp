<template>
  <div class="home"  v-if="data.data">
	 <div class="cd">
		 <div >
			 <img class="tupian" src="../../img/下载.png" >
			 <van-search  class="sousuo"  placeholder="请输入搜索关键词"  />
			 <div class="mede">
				 <van-icon  @click="show" name="manager-o"  size="25"/>
			 </div>
		 </div>
	  
			  
	  </div>
	
		<van-tabs  v-model="active">
			<van-tab  v-for="item in data.data.tabs" :title="item.name" ></van-tab>  
		</van-tabs>
		<van-dropdown-menu>
		  <van-dropdown-item v-model="value1" :options="option1" />
		</van-dropdown-menu>
		<div  v-show="active==0">
		<van-swipe :autoplay="3000">
			  <van-swipe-item    v-for="(image, index) in  data.data.data.sections[0].body.items" >
			    <img  class="full"   :src="image.img_url_webp" />
			  </van-swipe-item>
		</van-swipe>
			
		<van-grid   icon-size="70px" :column-num="5">
		  <van-grid-item
			v-for="item in  data.data.data.sections[1].body.items"
			:key="item.value"
			:icon="item.img_url_webp"
		  />
		</van-grid>
		
		<van-grid   icon-size="72px" :column-num="5">
		  <van-grid-item
			v-for="item in  data.data.data.sections[2].body.items"
			:key="item.value"
			:icon="item.img_url_webp"
		  />
		</van-grid>
		
		<div class="fenge"></div>
		<van-row>
		   <van-col span="12"  v-for="(image,index) in data.data.data.sections[4].body.items" >
			  <img  class="full"   :src="image.img_url_webp" /> 
		   </van-col>
		</van-row>
		
		
		<!-- <div class="fenge"></div> -->
		<van-row>
			<van-col span="24"  v-for="(image,index) in data.data.data.sections[6].body.items" >
					  <img  class="full"   :src="image.img_url_webp" /> 
			</van-col>
			
			<div class="fenge"></div>
			<van-col span="24"  v-for="(image,index) in data.data.data.sections[8].body.items" >
					  <img  class="full"   :src="image.img_url_webp" /> 
			</van-col>
			
		
		</van-row>
		<div class="fenge"></div>
		<van-row>
			<van-col span="12">
				<img class="full" :src="data.data.data.sections[10].body.items[0].img_url_webp" alt="">
					<p class="myde">{{data.data.data.sections[10].body.items[0].product_name}}
					<br>
					<span>{{data.data.data.sections[10].body.items[0].product_brief}}</span>
					<br>
					<span class="myself1">{{data.data.data.sections[10].body.items[0].product_org_price}}</span>
					<br>
					<van-button color="#F75c5c" size="small">立即购买</van-button></p>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data.data.data.sections[10].body.items[1].img_url_webp" alt="">
					<p class="myde">{{data.data.data.sections[10].body.items[1].product_name}}
					<br>
					<span>{{data.data.data.sections[10].body.items[1].product_brief}}</span>
					<br>
					<span class="myself1">{{data.data.data.sections[10].body.items[1].product_org_price}}</span>
					<br>
					<van-button color="#F75c5c" size="small">立即购买</van-button></p>
			</van-col>
		</van-row>
		
		<van-row>
			<div class="fenge"></div>
			<van-col span="12">
				<img class="full" :src="data.data.data.sections[12].body.items[0].img_url_webp" alt="">
					<p  class="myde">{{data.data.data.sections[12].body.items[0].product_name}}</span>	
					<br>
					<span>{{data.data.data.sections[12].body.items[1].product_brief}}</span>
					<br>
					<span class="myself1">{{data.data.data.sections[12].body.items[0].product_org_price}}</span>
					<br>
					<van-button color="#F75c5c" size="small">立即购买</van-button></p>
			</van-col>
					
			<van-col span="12">
				<img class="full" :src="data.data.data.sections[12].body.items[1].img_url_webp" alt="">
					<p  class="myde">{{data.data.data.sections[12].body.items[1].product_name}}
					<br>
					<span>{{data.data.data.sections[12].body.items[1].product_brief}}</span>
					<br>
					<span class="myself1">{{data.data.data.sections[12].body.items[1].product_org_price}}</span>
					<br>
					<van-button color="#F75c5c" size="small">立即购买</van-button></p>
			</van-col>
					
		</van-row>
		<div class="myself4">更多小米手机产品></div>
		<div class="fenge"></div>
		<van-col span="24"  v-for="(image,index) in data.data.data.sections[16].body.items" >
				  <img  class="full"   :src="image.img_url_webp" /> 
		</van-col>
		
		<van-col span="24"  v-for="(image,index) in data.data.data.sections[18].body.items" >
				  <img  class="full"   :src="image.img_url_webp" /> 
		</van-col>
		<van-row>
			<van-col span="12">
			  <img class="full"  :src="data.data.data.sections[20].body.items[0].img_url_webp">
			  <p class="myde">{{data.data.data.sections[20].body.items[0].product_name}}
			  <br>
			  <span>{{data.data.data.sections[20].body.items[0].product_brief}}</span>
			  <br>
			  <span class="myself1" >{{data.data.data.sections[20].body.items[0].product_org_price}}</span>
			  <br>
			  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
			</van-col>
			<van-col span="12">
		  		  <img  class="full"  :src="data.data.data.sections[20].body.items[1].img_url_webp">
		  		  <p class="myde">{{data.data.data.sections[20].body.items[1].product_name}}</span>
		  		  <br>
				  <span>{{data.data.data.sections[20].body.items[0].product_brief}}</span>
				  <br>
		  		  <span  class="myself1">{{data.data.data.sections[20].body.items[1].product_org_price}}</span>
		  		  <br>
		  		  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
			</van-col> 
		</van-row> 
		<van-row>
			<van-col span="12">
			  <img class="full"  :src="data.data.data.sections[22].body.items[0].img_url_webp">
			  <p class="myde">{{data.data.data.sections[22].body.items[0].product_name}}</span>
			  <br>
			  <span>{{data.data.data.sections[22].body.items[0].product_brief}}</span>
			  <br>
			  <span class="myself1" >{{data.data.data.sections[22].body.items[0].product_org_price}}</span>
			  <br>
			  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
			</van-col>
			<van-col span="12">
		  		  <img  class="full"  :src="data.data.data.sections[22].body.items[1].img_url_webp">
		  		  <p class="myde">{{data.data.data.sections[22].body.items[1].product_name}}</span>
		  		  <br>
		  		  <span>{{data.data.data.sections[22].body.items[1].product_brief}}</span>
		  		  <br>
		  		  <span  class="myself1">{{data.data.data.sections[22].body.items[1].product_org_price}}</span>
		  		  <br>
		  		  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
			</van-col> 
		</van-row> 
		<van-row>
			<van-col span="12">
					  <img class="full"  :src="data.data.data.sections[24].body.items[0].img_url_webp">
					  <p class="myde">{{data.data.data.sections[24].body.items[0].product_name}}</span>
					  <br>
					  <span>{{data.data.data.sections[24].body.items[0].product_brief}}</span>
					  <br>
					  <span class="myself1" >{{data.data.data.sections[24].body.items[0].product_org_price}}</span>
					  <br>
					  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
				<van-col span="12">
					  <img  class="full"  :src="data.data.data.sections[24].body.items[1].img_url_webp">
					  <p class="myde">{{data.data.data.sections[24].body.items[1].product_name}}</span>
					  <br>
					  <span>{{data.data.data.sections[24].body.items[0].product_brief}}</span>
					  <br>
					  <span  class="myself1">{{data.data.data.sections[24].body.items[1].product_org_price}}</span>
					  <br>
					  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
		</van-row>
		<div class="myself4">更多小米手机产品></div>
		<van-col span="24"  v-for="(image,index) in data.data.data.sections[28].body.items" >
				  <img  class="full"   :src="image.img_url_webp" /> 
		</van-col>
		<van-col span="24"  v-for="(image,index) in data.data.data.sections[30].body.items" >
				  <img  class="full"   :src="image.img_url_webp" /> 
		</van-col>
		<van-row>
			<van-row>
				<van-col span="12">
				  <img class="full"  :src="data.data.data.sections[32].body.items[0].img_url_webp">
				  <p class="myde">{{data.data.data.sections[32].body.items[0].product_name}}</span>
				  <br>
				  <span>{{data.data.data.sections[32].body.items[0].product_brief}}</span>
				  <br>
				  <span class="myself1" >{{data.data.data.sections[32].body.items[0].product_org_price}}</span>
				  <br>
				  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
				<van-col span="12">
					  <img  class="full"  :src="data.data.data.sections[32].body.items[1].img_url_webp">
					  <p  class="myde">{{data.data.data.sections[32].body.items[1].product_name}}</span>
					  <br>
					  <span>{{data.data.data.sections[32].body.items[1].product_brief}}</span>
					  <br>
					  <span  class="myself1">{{data.data.data.sections[32].body.items[1].product_org_price}}</span>
					  <br>
					  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
			</van-row>
		</van-row>
		<van-row>
			<van-row>
				<van-col span="12">
				  <img class="full"  :src="data.data.data.sections[34].body.items[0].img_url_webp">
				  <p class="myde">{{data.data.data.sections[34].body.items[0].product_name}}</span>
				  <br>
				  <span>{{data.data.data.sections[34].body.items[0].product_brief}}</span>
				  <br>
				  <span class="myself1" >{{data.data.data.sections[34].body.items[0].product_org_price}}</span>
				  <br>
				  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
				<van-col span="12">
					  <img  class="full"  :src="data.data.data.sections[34].body.items[1].img_url_webp">
					  <p  class="myde">{{data.data.data.sections[34].body.items[1].product_name}}</span>
					  <br>
					  <span>{{data.data.data.sections[34].body.items[1].product_brief}}</span>
					  <br>
					  <span  class="myself1">{{data.data.data.sections[34].body.items[1].product_org_price}}</span>
					  <br>
					  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
			</van-row>
		</van-row>
		<van-row>
			<van-row>
				<van-col span="12">
				  <img class="full"  :src="data.data.data.sections[36].body.items[0].img_url_webp">
				  <p class="myde">{{data.data.data.sections[36].body.items[0].product_name}}</span>
				  <br>
				  <span>{{data.data.data.sections[36].body.items[0].product_brief}}</span>
				  <br>
				  <span class="myself1" >{{data.data.data.sections[36].body.items[0].product_org_price}}</span>
				  <br>
				  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
				<van-col span="12">
					  <img  class="full"  :src="data.data.data.sections[36].body.items[1].img_url_webp">
					  <p  class="myde">{{data.data.data.sections[36].body.items[1].product_name}}</span>
					  <br>
					  <span>{{data.data.data.sections[36].body.items[1].product_brief}}</span>
					  <br>
					  <span  class="myself1">{{data.data.data.sections[36].body.items[1].product_org_price}}</span>
					  <br>
					  <van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
			</van-row>
		</van-row>
		<div class="myself4">更多小米手机产品></div>
		<van-col span="24"  v-for="(image,index) in data.data.data.sections[38].body.items" >
				  <img  class="full"   :src="image.img_url_webp" /> 
		</van-col>
		<van-col span="24"  v-for="(image,index) in data.data.data.sections[40].body.items" >
				  <img  class="full"   :src="image.img_url_webp" /> 
		</van-col>
		<van-col span="24"  v-for="(image,index) in data.data.data.sections[42].body.items" >
				  <img  class="full"   :src="image.img_url_webp" /> 
		</van-col>
	</div>
	<div v-show="active==1" style="font-size: 0;" class="div1">
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[0].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[4].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			<van-swipe :autoplay="3000">
				  <van-swipe-item    v-for="(image, index) in  data2.data.data.sections[6].body.items" >
				    <img  class="full"   :src="image.img_url_webp" />
				  </van-swipe-item>
			</van-swipe>
			
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[8].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			
			<van-row>
				<van-col span="8"  v-for="(image,index) in data2.data.data.sections[9].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
						
			<van-row>
				<van-col span="8"  v-for="(image,index) in data2.data.data.sections[10].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			
			<van-row>
				<van-col span="8"  v-for="(image,index) in data2.data.data.sections[11].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[12].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[14].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[16].body.items" >
				  		<img  class="full"   :src="image.img_url_webp" />
				  		<div class="mysed">
				  		 						  
							<span class="mysed1">{{data2.data.data.sections[16].body.items[0].product_name}}</span> 
							<br>
					  
							<span class="mysed2">{{data2.data.data.sections[16].body.items[0].product_brief}}</span>
						<br>
						</div>
						<div  class="mysed5">
							<span class="mysed3">{{data2.data.data.sections[16].body.items[0].product_price}}</span>
							<br>
							 <van-button class="mysed4"   color="#F75c5c" size="small">立即购买</van-button>
						</div>
				  		 						
						  
				</van-col>
				
			</van-row>
			  		 
			
			<div class="divider_line"></div>
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[18].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
						  <div class="mysed">
							  
							<span class="mysed1">{{data2.data.data.sections[18].body.items[0].product_name}}</span> 
							<br>
					  
							<span class="mysed2">{{data2.data.data.sections[18].body.items[0].product_brief}}</span>
							<br>
							</div>
							<div  class="mysed5">
								<span class="mysed3">{{data2.data.data.sections[18].body.items[0].product_price}}</span>
								<br>
								 <van-button class="mysed4"   color="#F75c5c" size="small">立即购买</van-button>
							</div>
							
						  
						  
				</van-col>
				
			</van-row>
			<div class="divider_line"></div>
			<van-row  gutter="5">
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[20].body.items[0].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[20].body.items[0].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[20].body.items[0].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[20].body.items[0].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
						
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[20].body.items[1].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[20].body.items[1].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[20].body.items[1].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[20].body.items[1].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
			</van-row>
			<div class="divider_line"></div>
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[22].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			<div class="divider_line"></div>
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[24].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			<van-row>
				<van-col span="24"  v-for="(image,index) in data2.data.data.sections[26].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
						  <div class="mysed">
							  
							<span class="mysed1">{{data2.data.data.sections[26].body.items[0].product_name}}</span> 
							<br>
					  
							<span class="mysed2">{{data2.data.data.sections[26].body.items[0].product_brief}}</span>
							<br>
							</div>
							<div  class="mysed5">
								<span class="mysed3">{{data2.data.data.sections[26].body.items[0].product_price}}</span>
								<br>
								 <van-button class="mysed4"   color="#F75c5c" size="small">立即购买</van-button>
							</div>
							
						  
						  
				</van-col>
				
			</van-row>
			<div class="divider_line"></div>
			<van-row  gutter="5">
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[28].body.items[0].img_url_webp" >
						<p class="myde" >{{data2.data.data.sections[28].body.items[0].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[28].body.items[0].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[28].body.items[0].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
						
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[28].body.items[1].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[28].body.items[1].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[28].body.items[1].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[28].body.items[1].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
			</van-row>
			<div class="divider_line"></div>
			<van-row  gutter="5">
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[30].body.items[0].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[30].body.items[0].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[30].body.items[0].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[30].body.items[0].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
						
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[30].body.items[1].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[30].body.items[1].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[30].body.items[1].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[30].body.items[1].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
			</van-row>
			<div class="divider_line"></div>
			<van-row  gutter="5">
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[32].body.items[0].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[32].body.items[0].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[32].body.items[0].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[32].body.items[0].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
						
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[32].body.items[1].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[32].body.items[1].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[32].body.items[1].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[32].body.items[1].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
			</van-row>
			<div class="divider_line"></div>
			<van-row  gutter="5">
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[34].body.items[0].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[34].body.items[0].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[34].body.items[0].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[34].body.items[0].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
						
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[34].body.items[1].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[34].body.items[1].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[34].body.items[1].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[34].body.items[1].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
			</van-row>
			<div class="divider_line"></div>
			<van-row  gutter="5">
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[36].body.items[0].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[36].body.items[0].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[36].body.items[0].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[36].body.items[0].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
						
				<van-col span="12">
					<img class="full" :src="data2.data.data.sections[36].body.items[1].img_url_webp" >
						<p class="myde">{{data2.data.data.sections[36].body.items[1].product_name}}
						<br>
						<span class="list2">{{data2.data.data.sections[36].body.items[1].product_brief}}</span>
						<br>
						<span class="list3">{{data2.data.data.sections[36].body.items[1].product_price}}</span>
						<br>
						<van-button color="#F75c5c" size="small">立即购买</van-button></p>
				</van-col>
			</van-row>
		</div>
		<div v-show="active==2" class="div2" style="font-size: 0;">
			<van-row>
				<van-col span="24"  v-for="(image,index) in data3.data.data.sections[0].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
				<div class="divider_line"></div>
				<van-col span="24"  v-for="(image,index) in data3.data.data.sections[1].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			<van-row>
				<van-col span="8"  v-for="(image,index) in data3.data.data.sections[2].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			<van-row>
				<van-col span="24"  v-for="(image,index) in data3.data.data.sections[3].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			<van-row>
				<van-col span="6"  v-for="(image,index) in data3.data.data.sections[4].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			<van-row>
				<van-col span="24"  v-for="(image,index) in data3.data.data.sections[5].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			<van-row>
				<van-col span="24"  v-for="(image,index) in data3.data.data.sections[7].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
			<van-row>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[8].body.items[0].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[8].body.items[0].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[8].body.items[0].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[8].body.items[0].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[8].body.items[1].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[8].body.items[1].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[8].body.items[1].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[8].body.items[1].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8">
					<img class="full"  :src="data3.data.data.sections[8].body.items[2].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[8].body.items[2].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[8].body.items[2].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[8].body.items[2].product_price}}</span>
						
						<br>
						</p>
				</van-col>	
			</van-row>
			<div class="divider_line1"></div>
			<van-row>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[10].body.items[0].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[10].body.items[0].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[10].body.items[0].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[10].body.items[0].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[10].body.items[1].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[10].body.items[1].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[10].body.items[1].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[10].body.items[1].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8">
					<img class="full"  :src="data3.data.data.sections[10].body.items[2].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[10].body.items[2].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[10].body.items[2].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[10].body.items[2].product_price}}</span>
						
						<br>
						</p> 
				</van-col>	
			</van-row>
			<div class="divider_line1"></div>
			<van-row>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[12].body.items[0].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[12].body.items[0].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[12].body.items[0].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[12].body.items[0].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[12].body.items[1].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[12].body.items[1].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[12].body.items[1].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[12].body.items[1].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8">
					<img class="full"  :src="data3.data.data.sections[12].body.items[2].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[12].body.items[2].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[12].body.items[2].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[12].body.items[2].product_price}}</span>
						
						<br>
						</p> 
				</van-col>	
			</van-row>
			<div class="divider_line1"></div>
			<van-row>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[14].body.items[0].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[14].body.items[0].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[14].body.items[0].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[14].body.items[0].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[14].body.items[1].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[14].body.items[1].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[14].body.items[1].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[14].body.items[1].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8">
					<img class="full"  :src="data3.data.data.sections[14].body.items[2].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[14].body.items[2].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[14].body.items[2].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[14].body.items[2].product_price}}</span>
						
						<br>
						</p> 
				</van-col>	
			</van-row>
			<div class="divider_line1"></div>
			<van-row>
				<van-col span="24"  v-for="(image,index) in data3.data.data.sections[16].body.items" >
				  		  <img  class="full"   :src="image.img_url_webp" /> 
				</van-col>
			</van-row>
		
			<div class="divider_line1"></div>
			<van-row>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[17].body.items[0].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[17].body.items[0].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[17].body.items[0].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[17].body.items[0].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[17].body.items[1].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[17].body.items[1].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[17].body.items[1].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[17].body.items[1].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8">
					<img class="full"  :src="data3.data.data.sections[17].body.items[2].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[17].body.items[2].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[17].body.items[2].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[17].body.items[2].product_price}}</span>
						
						<br>
						</p> 
				</van-col>	
			</van-row>
			<div class="divider_line1"></div>
			<van-row>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[19].body.items[0].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[19].body.items[0].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[19].body.items[0].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[19].body.items[0].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[19].body.items[1].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[19].body.items[1].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[19].body.items[1].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[19].body.items[1].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8">
					<img class="full"  :src="data3.data.data.sections[19].body.items[2].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[19].body.items[2].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[19].body.items[2].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[19].body.items[2].product_price}}</span>
						
						<br>
						</p> 
				</van-col>	
			</van-row>
			<div class="divider_line1"></div>
			<van-row>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[21].body.items[0].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[21].body.items[0].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[21].body.items[0].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[21].body.items[0].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[21].body.items[1].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[21].body.items[1].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[21].body.items[1].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[21].body.items[1].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8">
					<img class="full"  :src="data3.data.data.sections[21].body.items[2].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[21].body.items[2].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[21].body.items[2].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[21].body.items[2].product_price}}</span>
						
						<br>
						</p> 
				</van-col>	
			</van-row>
			<div class="divider_line1"></div>
			<van-row>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[23].body.items[0].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[23].body.items[0].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[23].body.items[0].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[23].body.items[0].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[23].body.items[1].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[23].body.items[1].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[23].body.items[1].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[23].body.items[1].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8">
					<img class="full"  :src="data3.data.data.sections[23].body.items[2].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[23].body.items[2].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[23].body.items[2].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[23].body.items[2].product_price}}</span>
						
						<br>
						</p> 
				</van-col>	
			</van-row>
			<div class="divider_line1"></div>
			<van-row>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[25].body.items[0].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[25].body.items[0].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[25].body.items[0].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[25].body.items[0].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8" >
					<img class="full"  :src="data3.data.data.sections[25].body.items[1].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[25].body.items[1].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[25].body.items[1].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[25].body.items[1].product_price}}</span>
						
						<br>
						</p>
				</van-col>
				<van-col span="8">
					<img class="full"  :src="data3.data.data.sections[25].body.items[2].img_url_webp" >
						<p class="myde">{{data3.data.data.sections[25].body.items[2].product_name}}
						<br>
						<span class="list5">{{data3.data.data.sections[25].body.items[2].product_brief}}</span>
						<br>
						<span class="list6">￥{{data3.data.data.sections[25].body.items[2].product_price}}</span>
						
						<br>
						</p> 
			
				</van-col>
			</van-row>
			<div class="divider_line1"></div>
			<div class="divider_line1"></div>
			<div class="divider_line1"></div>
			<div class="divider_line1"></div>
			<div class="divider_line1"></div>
		</div>
	
	
</div>
</template>
<script>
// @ is an alias to /src
import {data1,data2,data3} from '../data.js'
export default {
	  data() {
	    return {
	      active: 0,
		  data:{},
		       value1: 0,
		       option1: [
		         { text: '全部商品', value: 0 },
		         { text: '手机', value: 1 },
		         { text: '智能', value: 2 },
				 { text: '电视', value: 3 },
				 { text: '笔记本', value: 4 },
				 { text: '家电', value: 5 },
				 { text: '生活周边', value: 6 }
		       ],
	    }
		
	  },
	  methods:{
		  show(){
			  this.$router.push('/myself')
		  }
	  },
	  created(){
		  this.data={},
		  this.$http({
			  url:'http://biger.applinzi.com/page.php',
			  method:'get'
		  }).then(res=>{
			  console.log(res.data)
			  this.data=res.data;
		  }),
		  this.data1=data1;
		  this.data2=data2;
		  this.data3=data3
				  
				  
		
		  
	  },
	  }
</script>
<style scoped="scoped">
	.cd{
		height: 50px;
		background-color: white;
	}
	.full{
		width: 100%;
	}
.myself3{
	font-size:14px
}
.myself5{
	font-size: 15px;
}
</style>
