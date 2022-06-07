<template>
  <div class="home">
    <MainHeader></MainHeader>
    <TextOverview></TextOverview>
    <BigIconOverview></BigIconOverview>
    <!-- <IconsOverview></IconsOverview> -->
    <AboutOverview></AboutOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import TextOverview from '@/components/Text-Overview.vue';
// import IconsOverview from '@/components/IconsOverview.vue';
import AboutOverview from '@/components/Small-About-Overview.vue';
import BigIconOverview from '@/components/BigIconsOverview.vue';

export default {
  name: 'Home',
  components: {
    MainHeader,
    TextOverview,
    // IconsOverview,
    AboutOverview,
    BigIconOverview,
  },
};
</script>
