<template>
  <div class="firm">
    <Header
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
    ></Header>
    <TextOverview
      :title="textOverviewProps.title"
      :text="textOverviewProps.text"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></TextOverview>
    <SpecCarousel
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></SpecCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TextOverview from "@/components/Text-Overview.vue";
import SpecCarousel from "@/components/Spec-Carousel.vue";

import homeProps from "@/assets/data/home/home.json";

export default {
  name: "Home",
  components: {
    Header,
    TextOverview,
    SpecCarousel,
  },
  methods: {
    log() {
      console.log(JSON.stringify(JSON.parse(homeProps)));
    },
  },
  mounted() {
    this.log();
  },
  data() {
    return {
      mainHeaderProps: {
        title: '"Hominum causa omne ius constitutum sit"',
        subtitle: "Wszelkie prawo ustanawia się ze względu na ludzi.",
        image: "data/img/pictures/MB_firm_header.jpg",
      },
      textOverviewProps: {
        title: "Lorem Impsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    };
  },
};
</script>
