<template>
  <div>
    <div v-if="loading" class="loading">
      <Loader></Loader>
    </div>
    <div v-if="error" class="error"><Error></Error></div>
    <div class="firm">
      <Header :header="this.$data.response.data[0].attributes.header"></Header>
      <TextOverview
        :textOverview="this.$data.response.data[0].attributes.textOverview"
        data-aos="opacity-on"
        data-aos-ease="ease-in-out"
        data-aos-duration="1500"
      ></TextOverview>
      <SpecCarousel
        :pages="this.$data.response.data[0].attributes.specializations.specCard"
        data-aos="opacity-on"
        data-aos-ease="ease-in-out"
        data-aos-duration="1500"
      ></SpecCarousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TextOverview from "@/components/Text-Overview.vue";
import SpecCarousel from "@/components/Spec-Carousel.vue";
import getDataMixin from "../mixins/getDataMixin";
import Loader from "@/commons/Loader.vue";
import Error from "@/commons/Error.vue";

export default {
  name: "Firm",
  components: {
    Header,
    TextOverview,
    SpecCarousel,
    Loader,
    Error,
  },
  mixins: [getDataMixin],

  data() {
    return {
      urlSuffix: "/api/firms?",
    };
  },
};
</script>
