<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      {{post.title}}{{post.wordCount}}{{post.totalClapCount}}
      {{post.virtuals.recommends}}
      {{post}}
      <!-- <PostPreview :post="post" /> -->
    </div>
  </div>
</template>

<script>
// import PostPreview from './PostPreview';

export default {
  name: 'MediumPosts',
  props: ['posts'],
  components: {
    // PostPreview,
  },
  mounted() {
    console.log(this.$props.posts);
  },
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
