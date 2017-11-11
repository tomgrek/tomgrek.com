<template>
  <div class="main-body">
    <img src="/tom.png" width="300" style="float: left; padding-right: 2rem;"></img>
    <h1>Tom Grek</h1>
    <h2>Oh.</h2>
    <h2>You wanted to know more.</h2>
    <h2>The rabbit hole goes deep...</h2>
    <h1 style="margin-top: 3rem;">tomgrek, can you describe your good self please.</h1>
    <p>
      I'd like to call myself an engineer's engineer; learned programming on the legendary
      C64, then various BASICs on the Amiga, then C on PC, then ASM (on embedded platforms
      (PIC!) and x86) then CPP then Matlab and VHDL (oof!). Then later, Java, PHP, Javascript and Python.
    </p>
    <p>
      That sucks as a description of me, I'll try harder. I didn't want to study computer
      science at university because I need to know the basics from the ground up,
      beginning with how transistors are made to handle high-frequency signals. I remain,
      relentlessly, a hardware guy, maker, and advocate for that. I love
      making crazy, useless inventions with Arduino, ESP8266/32, Raspberry Pi, etc.
    </p>
    <p>
      After getting my Masters in electronic engineering I took an alternate career path
      for a while. But as much good as I tried to do for the little guy as a patent lawyer,
      combatting stupid (in particular software or process) patents, and promoting the virtue
      of good patents, I ultimately recognized that making and creating and inventing is how
      we advance, as humanity. Innovation has won or will win vs <i>the system</i>.
    </p>
    <p>
      My particular interests in software are: logic and reasoning in AI (combined
      with natural language processing). I want to bring about the singularity. But I also
      like making fun, pretty things.
    </p>
    <p>
      At home, I live a very silly life with my wonderful wife Shamala and her three-legged cat.
      (I'm a dog person and used to have a pug, which I think would be my spirit animal too.)
    </p>
    <h1 style="margin-top: 1rem;">Interests outside tech</h1>
    <ul>
      <li>Nature walks. Slow, mindful ones, not hiking! Also camping.</li>
      <li>Coffee, wine, beer</li>
      <li>Electronic music (I used to DJ... badly)</li>
      <li>Fantasy literature and film (favorite book: Jonathan Strange & Mr Norrell)</li>
      <li>RPG video games</li>
    </ul>
    <h1 style="margin-top: 1rem;">Places I've lived</h1>
      <p>I enjoy traveling and new experiences!</p>
      <ul>
        <li>Liverpool, UK (born)</li>
        <li>London, UK (college and work)</li>
        <li>The English countryside (worked for the real-life James Bond "Q" organization)</li>
        <li>Hong Kong</li>
        <li>Bangkok, Thailand</li>
        <li>Silicon Valley (now settled!)</li>
      </ul>
      <p>Honorable mentions to!</p>
      <ul>
        <li>China - visited often; while in Hong Kong, Shenzhen was my second home.</li>
        <li>Vietnam. Never lived, but spent many weeks off-and-on with work.</li>
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
