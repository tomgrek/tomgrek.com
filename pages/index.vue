<template>
  <div class="main-body">
    <img src="/tom.png" width="300" style="float: left; padding-right: 2rem;"></img>
    <h1>Tom Grek</h1>
    <h2>What: Engineer</h2>
    <h2>Why: Likes to make things</h2>
    <h2>Where: SF, CA; via Asia & UK</h2>
    <h2>When: Since the 80s. Updated: 2017</h2>
    <h1 style="margin-top: 1rem;">Welcome to my website!</h1>
    <p>
      I'm Tom, an engineer living in San Francisco, California.
      If you're interested, you can find out more about me <a href="/about">here</a>.
    </p>
    <h1 style="margin-top: 1rem;">There are various things on my website!</h1>
    <ul>
      <li>I put some stuff about me <a href="/about">here</a>.</li>
      <li>I made this website because I want to write more (not just code but English too!).
        If that sort of thing interests you, look <a href="/posts"> here</a>.</li>
      <li><a href="/projects">Here</a> are some projects I've worked on.</li>
      <li>I really love Jupyter Notebook and think it's the TI-85 of the modern era.
        Look in the sidebar, I make some notebooks available (I mean at time of writing
        I haven't, but it's my intention :)</li>
      <li>And then there's <a href="/til">this</a> mish-mash of boo-boo which is all of my tweets that are
        tagged with #TIL. I haven't tweeted much historically, but since moving to America it's been a great
        way to connect with people in real life, and I hope this helps me tweet more.</li>
    </ul>
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

<style scoped>
.main-body {
  padding-top: 1rem;
}
h2 {
  padding: 1.2rem 0;
}
p {
  padding: 0.5rem 0;
}
p > a {
  text-decoration: underline;
}
li > a {
  text-decoration: underline;
}
</style>
