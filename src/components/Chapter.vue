<template>
  <div class="container">

    <div class="tabs">
      <button v-for="chap in chapter_ids" @click="getChapters(chap)" :key="chap+'chap'+chap"
      v-on:click="activetab=chap" v-bind:class="[ activetab === chap ? 'active' : '' ]">{{chap}}</button>
    </div>
    <div class="pt-2">
        <div v-for="chap in chapter_ids" :key="chap+'chap'+chap">
          <div v-if="activetab === chap" class="tabcontent">
              <swiper class="swiper mt-2">
                <swiper-slide v-for="page in chapter.pages" :key="page.id">
                  <img :src="page.image.file"/>
                </swiper-slide>
              </swiper>
              <p>{{totalpages}}</p>
          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Chapter',
  components:{
    Swiper, 
    SwiperSlide
  },
  props: {
    chapter_ids: {
      type: Array
    }
  },
  data () {
    return {
      chapter: null,
      activetab: null,
      totalpages: null,
    }
  },
  mounted(){
      // const api = 'http://18.179.108.80:8080/chapters/';
      // this.axios.get(api).then((response) => {
      //       this.chapters = response.data
      //   })
      this.getChapters(this.chapter_ids[0]);

  },
  methods:{
    
    getChapters: function(id){
        this.activetab = id;
        const api = 'http://18.179.108.80:8080/chapters/' + id + '/';
        this.axios.get(api).then((response) => {
            this.chapter = response.data
        })
        this.totalpages = this.chapter.pages.length;
        console.log(this.totalpages);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active {
    background-color: rgb(1 91 92);
    color: white;
    border-color: goldenrod;
  }

img{
  height: 530px;
}
</style>
