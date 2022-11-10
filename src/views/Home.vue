<template>
  <div class="home">
    <MainHeader
      :mainHeader="this.$data.response.data[0].attributes.mainHeader"
    ></MainHeader>
    <TextOverview
      :textOverview="this.$data.response.data[0].attributes.textOverview"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></TextOverview>
    <BigIconOverview
      :icons="this.$data.response.data[0].attributes.bigIcons.Icon"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></BigIconOverview>
    <SpecOverview
      :cards="this.$data.response.data[0].attributes.specOverview.card"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></SpecOverview>
    <AboutOverview
      :owner="this.$data.response.data[0].attributes.ownerOwerview[0]"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></AboutOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import TextOverview from "@/components/Text-Overview.vue";
import SpecOverview from "@/components/Spec-Overview.vue";
import AboutOverview from "@/components/Small-About-Overview.vue";
import BigIconOverview from "@/components/BigIconsOverview.vue";
import getDataMixin from "../mixins/getDataMixin";

export default {
  name: "Home",
  components: {
    MainHeader,
    TextOverview,
    SpecOverview,
    AboutOverview,
    BigIconOverview,
  },
  mixins: [getDataMixin],

  data() {
    return {
      urlSuffix: "/api/homes?",
    };
  },
};
</script>
