<template>
  <div class="main-body">
    <img src="/tom.png" width="300" style="float: left; padding-right: 2rem;"></img>
    <h1>Tom Grek</h1>
    <h2>Oh.</h2>
    <h2>You wanted to know more.</h2>
    <h2>You took the red pill.</h2>
    <h2>The rabbit hole goes deep...</h2>
    <h1 style="margin-top: 1rem;">tomgrek, can you describe your good self please.</h1>
    <p>
      I'd like to call myself an engineer's engineer; learned programming on the legendary
      C64, then various BASICs on the Amiga, then C on PC, then ASM (on embedded platforms
      (PIC!) and x86) then CPP then Matlab. Then later, Java, Javascript and Python.
    </p>
    <p>
      That sucks as a description of me, I'll try harder. I didn't want to study coding
      at university because I have always wanted to know the whole shizzness, from
      how logic gates are made from transistors, to what a Bloom filter is.
    </p>
    <p>
      I remain, relentlessly, a hardware guy. It's fact that HW peeps are more fun.
    </p>
    <p>
      After getting my Masters in electronic engineering I took an alternate career path
      for a while. But as much good as I tried to do for the little guy as a patent lawyer,
      combatting stupid (in particular software or process) patents, and promoting the virtue
      of good patents, I ultimately recognized that making and creating and inventing is how
      we advance, as humanity. Innovation has won or will win vs <i>the system</i>.
    </p>
    <p>
      My particular interests in engineering are: logic and reasoning in AI (combined
      with natural language processing). I want to bring about the singularity.
    </p>

    <h1 style="margin-top: 1rem;">Random</h1>

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
      title: "tomgrek.about",
    };
  },
  async asyncData(context) {
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
