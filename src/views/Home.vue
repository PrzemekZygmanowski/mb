<template>
  <div class="home">
    <MainHeader></MainHeader>
    <!-- <Header></Header> -->
    <TextOverview ref="section"></TextOverview>
    <BigIconsOverview></BigIconsOverview>
    <IconsOverview></IconsOverview>
    <AboutOverview></AboutOverview>
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
import { gsap } from 'gsap';

import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);

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
    const { section } = this.$refs;
    gsap.fromTo(section, { duration: 1, opacity: 0.3 });
  },
};
</script>
