<template>
  <div class="wrapper" >
    <swiper :options="swiperOption" ref="swiperRef">
        <swiper-slide>
          <home-header :index="index"></home-header>
        </swiper-slide>
        <swiper-slide v-for="(item,index) of list" :key="index">
         <div class="swiper-content">
            <img  :src="item.imgUrl" :class="imgAnimate">
            <p :class="[titleAnimate]">{{item.title}}<br>
            {{item.title1}}<br>
            {{item.title2}}<br>
            {{item.title3}}</p>
         </div>
        </swiper-slide>
    </swiper>
  </div>
</template>
<script type="text/javascript">
import HomeHeader from './HomHeader'
import axios from 'axios'
  export default{
    name:"HelloSwiper",
     data() {
       return{
        list:[],
        imgAnimate:"",
        titleAnimate:"",
        index:100,
        swiperOption: {
          direction: 'vertical',
          autoHeight: true,////自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
          height: window.innerHeight,
        //  speed:1000,
          autoplay:4000,
          loop : true

        }
       }
      },
      components:{
        HomeHeader
      },
      watch:{
        index (){
            if(this.index !=0){
               this.imgAnimate="imgAnimate"
               this.titleAnimate="titleAnimate"
              setTimeout(()=>{this.imgAnimate="",this.titleAnimate=""},2000)
            }
            
          }
      },
      methods:{
        getQueryData (){
          axios.get("/api/homedata.json").then(this.getQueryDataInfo)
        },
        getQueryDataInfo (res) {
           res =res.data
           if(res.ret && res.data){
               let data = res.data;
               this.list = data.list;
           }
        }
      },
      mounted (){
        this.getQueryData();
        let _this = this;
        this.$refs.swiperRef.swiper.on("slideChangeEnd", (e) => {
            _this.index = e.activeIndex;
          })
      }

  }
</script>
<style lang="scss" scoped>
@import '~styles/global.scss';
  .wrapper{
    width: 100%;
    height:100%;
    box-shadow: 0.1rem 0.4rem 1.5rem #A39F9F;
  }

  .swiper-content{
     @extend %swiper-bg;
     img{
         padding:2rem;
         width:90%;
         position: absolute;
     }
     p {
        position:absolute;
        bottom:15rem;
        &:nth-child(2){
         font-size:2rem;
         color:#FFE159;
         text-shadow:0.1rem 0.2rem 0.4rem #6B361B;
         font-weight: bold;
         padding-left:2rem;
       }
       &:nth-child(3),
       &:nth-child(4),
       &:nth-child(5)
       {
         font-size:2rem;
         color:white;
         font-weight: bold;
         padding-left:2rem;
       }
     }
  }

  .imgAnimate{
    animation: imgmove 2s ease 1 forwards;
   -webkit-animation:imgmove 2s ease 1 forwards;
   -o-animation:imgmove 2s ease 1 forwards;
  }
  .titleAnimate{
   animation: titlemove 2s ease 1 forwards;
   -webkit-animation:titlemove 2s  ease 1 forwards;
   -o-animation:titlemove 2s ease 1 forwards;
  }
 
  @keyframes imgmove{
    0%{
     top:-40rem;
      opacity: 0;
    }
    20%{
      
      top:-30rem;
    }
   60%{
       top:-15rem;
    }
    80%{
       top:-10rem;
    }
    90%{
       top:-5rem;
    }
  }
  @keyframes titlemove{
    0%{
      left:20rem;
      bottom:2rem;
    }
    40%{
        right:-20rem;
        bottom:45rem;
    }
    60%{
        left:0rem;
        bottom:30rem;
    }



  }
</style>