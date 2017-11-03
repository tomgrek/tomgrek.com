<template>
  <div class="main-body">
    <h1>Tom Grek</h1>
  </div>
</template>

<script>
import Tweets from '~/components/Tweets';
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
    let latest = await axios.get('https://medium.com/@tomgrek/latest?format=json');
    latest = latest.data.replace("])}while(1);</x>", '');
    latest = JSON.parse(latest).payload;
    let items = latest.streamItems.reduce((acc, x) => {
      if (x.postPreview) {
        acc.push(x.postPreview.postId);
      }
      return acc;
    }, []);
    let queries = [];
    for (let post of items) {
      queries.push(axios.get(`https://medium.com/@tomgrek/${post}?format=json`));
    }
    let posts = await Promise.all(queries);
    for (let post of posts) {
      post = post.data.replace("])}while(1);</x>", '');
      post = JSON.parse(post).payload.value;
      console.log(post, post.bodyModel, post.content, post.content.bodyModel);
    }
  },
  mounted() {
  },
}
</script>

<style>

</style>
