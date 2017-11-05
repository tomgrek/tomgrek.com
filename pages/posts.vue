<template>
  <div>
    <h1>Long-form posts</h1>
    <p>This is a collection of articles I wrote on Medium, and curated here.
    I think Medium is fantastic as a writing and distribution platform.</p>
    <MediumPosts :posts="mediumPosts"/>
  </div>
</template>

<script>
import MediumPosts from '~/components/MediumPosts';
import axios from '~/plugins/axios';

export default {
  name: 'posts',
  components: {
    MediumPosts,
  },
  data() {
    return {
      mediumPosts: [],
    };
  },
  head() {
    return {
      title: "tomgrek.longform",
    };
  },
  mounted() {
  },
  async asyncData(context) {
    let posts = await axios.get(`/api/mediumposts`);
    return {
      mediumPosts: posts.data.posts,
    };

  },
}
</script>

<style>
p {
  margin: 1rem 0;
}
</style>
