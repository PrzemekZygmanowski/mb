<template>
  <div class="home">
    <MainHeader></MainHeader>
    <TextOverview ref="section"></TextOverview>
    <IconsOverview ref="section"></IconsOverview>
    <AboutOverview ref="section"></AboutOverview>
    <BigIconOverview></BigIconOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import TextOverview from '@/components/Text-Overview.vue';
import IconsOverview from '@/components/IconsOverview.vue';
import AboutOverview from '@/components/Small-About-Overview.vue';
import BigIconOverview from '@/components/BigIconsOverview.vue';

export default {
  name: 'Home',
  components: {
    MainHeader,
    TextOverview,
    IconsOverview,
    AboutOverview,
    BigIconOverview,
  },
};
</script>
