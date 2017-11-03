<template>
  <div>
    <ul class="sidelinks">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/TIL">TIL</nuxt-link></li>
      <li v-for="tag in hashtags" class="tag">
        <nuxt-link :to="`/tag/${tag.tag}`">{{tag.tag}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  name: 'Sidebar',
  data() {
    return {
      hashtags: [],
    };
  },
  async mounted() {
    let tags = await axios.get('/api/tags');
    this.hashtags = tags.data.tags.sort((a,b) => {
      a = a.tag.toLowerCase();
      b = b.tag.toLowerCase();
      if (a > b) return 1; if (a < b) return -1;
      return 0;
    });
  },
};
</script>

<style>
ul {
  padding-top: 0;
  -webkit-padding-start: 0;
  -webkit-margin-before: 0;
}
ul > li {
  list-style: none;
  line-height: 2rem;
}
.sidelinks li > a, .sidelinks li > a:visited {
  text-decoration: none;
  color: #1585a1;
}
.sidelinks .tag {
  font-size: 0.8rem;
  line-height: 1.2rem;
}
.sidelinks .tag a, .sidelinks.tag a:visited {
  color: #35495e !important;
}
</style>
