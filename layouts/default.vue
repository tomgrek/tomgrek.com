<template>
  <div class="container">
    <div class="top">
      <span class="header"><nuxt-link to="/">tomgrek.</nuxt-link></span>
    </div>
    <div class="content">
      <div class="main">
        <nuxt/>
      </div>
      <div class="sidebar">
        <Sidebar/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar';

export default {
  components: {
    Sidebar,
  }
}
</script>

<style>
.container
{
  margin: 0;
  font-family: 'Cabin', sans-serif;
  line-height: 1.5rem;
  font-size: 18px;
  padding: 1rem 2rem;
}
.content {
  position: relative;
  margin-top: 1rem;
}
.sidebar {
  border-left: 1px solid #35495e;
  color: #35495e;
  display: inline-block;
  width: 16vw;
  height: 90vh;
  overflow: hidden;
  text-align: left;
  padding: 0 0 1rem 1rem;
  margin-top: 1rem;
  float: right;
}
.main {
  display: inline-block;
  width: 73vw;
  padding-left: 1rem;
}
.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.top {
  color: white;
  line-height: 3rem;
  padding-left: 2rem;
  background-color: #35495e;
  border-radius: 4px;
  font-size: 1.5rem;
  font-family: 'Noto Serif', serif;
}
.header > a {
  text-decoration: none;
  color: white;
}
</style>
