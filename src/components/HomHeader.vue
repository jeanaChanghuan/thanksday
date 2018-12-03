<template>
	<div class="home-content">
		 <img :class="[imgAnimate]" :src="logoSrc" />
        <p :class="[title1Animate]" >感恩是一种生活态度</p>
       	<p :class="[title2Animate]" >是一种品德，是一片肺腑之言</p>
       <audio loop="loop" autoplay="autoplay">
                <source :src="audioSrc" type="audio/mpeg">
        </audio>
</div>
</template>
<script>
	export default {
		name:"HomeHeader",
		props:{
			index:Number
		},
		data (){
			return{
				imgAnimate:"",
				title1Animate:"",
				title2Animate:"",
				logoSrc:"./static/img/img1.jpg",
				audioSrc:"./static/img/ing.mp3"
			}
		},
		watch:{
			index (){

				if(this.index == 0){
					this.imgAnimate = "imgAnimate"
					this.title1Animate = "title1Animate"
					this.title2Animate = "title2Animate"
				}
				else if(this.index !=0 ){
					this.imgAnimate = ""
					this.title1Animate = ""
					this.title2Animate = ""
				}
			}
		},
		created (){
			this.imgAnimate = "imgAnimate"
			this.title1Animate = "title1Animate"
			this.title2Animate = "title2Animate"
		}
	}
</script>
<style lang="scss" scoped>
@import '~styles/global.scss';

.home-content{
    @extend %swiper-bg;
    img{
        width:100%;
        //height:98%;
     	opacity:0.8;
     }
      P:&:nth-child(2){
         @include home-title();
         bottom:-32rem;
       
      }
      p:&:nth-child(3){
         @include home-title();
         bottom:-32rem;
      }
      audio{
      	position:absolute;
      	top:0.5rem;
      	left:0.5rem;
      }
  }
 .imgAnimate{
	animation: imgfade 3s ease 1 forwards;
   -webkit-animation:imgfade 3s ease 1 forwards;
 }
 .title1Animate{
 	animation: move1 1s ease-in-out 3s 1 forwards;
    -webkit-animation: move1 1s ease-in-out 3s 1 forwards;
 }
  .title2Animate{
 	animation: move2 1s ease-in-out 3s 1 forwards;
    -webkit-animation:  move2 1s ease-in-out 3s 1 forwards;
 }
@keyframes imgfade{
	0%  {opacity: 0 ;}
	40% {opacity: 0.2 ;}
	80% {opacity: 0.8 ;}
	100% {opacity: 1 ;}
}  
@keyframes move1{
	0%{
		bottom:5rem;
	}
	
	100%{
		bottom:10rem;
	}
}
@keyframes move2{
	0%{
		bottom:5rem;
	}
	
	100%{
		bottom:2rem;
	}
}

</style>
