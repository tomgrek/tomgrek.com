<template>
  <div>
    <ul class="sidelinks">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><a href="https://git.tomgrek.com" target="_blank">
        <i class="fa fa-gitlab" aria-hidden="true" style="color: inherit; line-height: inherit;"></i>Private Git
      </a></li>
      <li><a href="http://tomgrek.com:8888" target="_blank">
        <i class="fa fa-database" aria-hidden="true" style="color: inherit; line-height: inherit;"></i>
        Jupyter NB</a></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/posts">Long Form</nuxt-link></li>
      <li><nuxt-link to="/posts">Notebooks</nuxt-link></li>
      <li v-for="notebook in notebooks" class="nb"><nuxt-link target="_blank" :to="`${notebook}.html`.replace(/ /g, '_')">{{notebook}}</nuxt-link></li>
      <li><nuxt-link to="/TIL">TIL</nuxt-link></li>
      <li v-for="tag in hashtags" class="tag capitalize">
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
      posttags: [],
      notebooks: [],
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
    let notebooks = await axios.get('/api/notebooks');
    this.notebooks = notebooks.data.notebooks;
    let posts = await axios.get('/api/mediumposts');
    if (!posts.data || !posts.data.map) return;
    let posttags = posts.data.map(x => {
      return x.tags;
    });
    let posttagsSet = new Set();
    posttags.map(x => {
      posttagsSet.add(x);
    });
    this.posttags = Array.from(posttagsSet);
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
.nb {
  font-size: 0.8rem;
  line-height: 1.2rem;
  text-transform: capitalize;
  color: #35495e !important;
}
.nb a {
  color: #35495e !important;
}
.sidelinks .tag a, .sidelinks.tag a:visited {
  color: #35495e !important;
}
</style>
