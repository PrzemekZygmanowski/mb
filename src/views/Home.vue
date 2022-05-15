<template>
  <div class="home">
    <MainHeader></MainHeader>
    <!-- <Header></Header> -->
    <TextOverview ref="section"></TextOverview>
    <BigIconsOverview ref="section"></BigIconsOverview>
    <IconsOverview ref="section"></IconsOverview>
    <AboutOverview ref="section"></AboutOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
// import Header from '@/components/Header.vue';

import TextOverview from '@/components/Text-Overview.vue';
import IconsOverview from '@/components/IconsOverview.vue';
import BigIconsOverview from '@/components/BigIconsOverview.vue';
import AboutOverview from '@/components/Small-About-Overview.vue';
import { gsap, timeline, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: 'Home',
  components: {
    MainHeader,
    BigIconsOverview,
    TextOverview,
    IconsOverview,
    AboutOverview,
    // Header,
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    const { section } = this.$refs;

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      pin: true,
      pinSpacing: false,
    });

    ScrollTrigger.create({
      snap: 1 / 4, // snap whole page to the closest section!
    });
  },
  methods: {
    enter(el, done) {
      const tl = timeline({
        onComplete: done,
      });

      tl.set(el, {
        y: window.innerWidth * 1.5,
        scale: 0.8,
        transformOrigin: '50% 50%',
      });

      tl.to(el, {
        duration: 1,
        y: 0,
        ease: Power4.easeOut,
      });

      tl.to(el, {
        duration: 1,
        scale: 1,
        ease: Power4.easeOut,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        duration: 1,
        y: window.innerHeight * -1.5,
        ease: Power4.easeOut,
        onComplete: done,
      });
    },
  },
};
</script>
