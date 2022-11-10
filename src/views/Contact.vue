<template>
  <div>
    <div v-if="loading" class="loading">
      <Loader></Loader>
    </div>
    <div v-if="error" class="error"><Error></Error></div>
    <div class="contact">
      <Header :header="this.$data.response.data[0].attributes.header"></Header>
      <TextOverview
        :textOverview="this.$data.response.data[0].attributes.textOverview"
        data-aos="opacity-on"
        data-aos-ease="ease-in-out"
        data-aos-duration="1500"
      ></TextOverview>
      <ContactOverview
        :address="this.$data.response.data[0].attributes.address"
        :phoneNumbers="
          this.$data.response.data[0].attributes.phoneNumbers.phoneNumber
        "
        :mails="this.$data.response.data[0].attributes.mails.mail"
        data-aos="opacity-on"
        data-aos-ease="ease-in-out"
        data-aos-duration="1500"
      ></ContactOverview>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TextOverview from "@/components/Text-Overview.vue";
import ContactOverview from "@/components/ContactOverview.vue";
import getDataMixin from "../mixins/getDataMixin";
import Loader from "@/commons/Loader.vue";
import Error from "@/commons/Error.vue";

export default {
  name: "Contact",
  components: {
    Header,
    TextOverview,
    ContactOverview,
    Loader,
    Error,
  },
  mixins: [getDataMixin],

  data() {
    return {
      urlSuffix: "/api/contacts?",
    };
  },
};
</script>
