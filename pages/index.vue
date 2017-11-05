<template>
  <div class="main-body">
    <h1>Tom Grek</h1>
  </div>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'index',
  components: {
  },
  data() {
    return {

    };
  },
  head() {
    return {
      title: "tomgrek.",
    };
  },
  async asyncData(context) {
    let posts = await axios.get(`/api/collatemediumposts`);
    posts = posts.data;
    return {
      posts,
    };
  },
  mounted() {
  },
}
</script>

<style>

</style>
