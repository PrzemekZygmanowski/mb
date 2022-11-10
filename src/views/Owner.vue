<template>
  <div class="about">
    <Header :header="this.$data.response.data[0].attributes.header"></Header>
    <TextOverview
      :textOverview="this.$data.response.data[0].attributes.firstTextOverview"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></TextOverview>
    <AboutContent
      :content="this.$data.response.data[0].attributes.firstAboutContent"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></AboutContent>
    <TextOverview
      :textOverview="this.$data.response.data[0].attributes.secondTextOverview"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></TextOverview>
    <AboutContent
      :content="this.$data.response.data[0].attributes.secondAboutContent"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></AboutContent>
    <TextOverview
      :textOverview="this.$data.response.data[0].attributes.thirdTextOverview"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></TextOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TextOverview from "@/components/Text-Overview.vue";
import AboutContent from "@/components/AboutContent.vue";
import getDataMixin from "../mixins/getDataMixin";

export default {
  name: "Owner",
  components: {
    Header,
    TextOverview,
    AboutContent,
  },
  mixins: [getDataMixin],

  data() {
    return {
      urlSuffix: "/api/owners?",
    };
  },
};
</script>
