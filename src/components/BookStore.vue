<template>
  <div>
  <b-card no-body v-if="chapters">
    <b-tabs card>

      <b-tab v-for="chapter in chapters" :key="chapter.id" no-body :title="chapter.title">
        <b-card-img bottom src="https://media.gettyimages.com/photos/stack-of-chapters-in-home-interior-picture-id532852345?s=2048x2048" alt="Image 21"></b-card-img>
        <b-card-footer>Picture 1 footer</b-card-footer>
      </b-tab>

    </b-tabs>
  </b-card>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      chapters: null
    }
  },
  mounted(){
      const api = 'http://18.179.108.80:8080/chapters/';
      this.axios.get(api).then((response) => {
            this.chapters = response.data
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
