<template>
  <div class="home">
    <MainHeader></MainHeader>
    <BigIconsOverview></BigIconsOverview>
    <TextOverview></TextOverview>
    <IconsOverview></IconsOverview>
    <AboutOverview></AboutOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import TextOverview from '@/components/Text-Overview.vue';
import IconsOverview from '@/components/IconsOverview.vue';
import BigIconsOverview from '@/components/BigIconsOverview.vue';
import AboutOverview from '@/components/Small-About-Overview.vue';

export default {
  name: 'Home',
  components: {
    MainHeader,
    BigIconsOverview,
    TextOverview,
    IconsOverview,
    AboutOverview,
  },
};
</script>
