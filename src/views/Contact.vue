<template>
  <div class="contact">
    <Header :header="this.$data.response.data[0].attributes.header"></Header>
    <TextOverview
      :textOverview="this.$data.response.data[0].attributes.textOverview"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></TextOverview>
    <ContactOverview
      :title="contactOverviewProps.title"
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
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TextOverview from "@/components/Text-Overview.vue";
import ContactOverview from "@/components/ContactOverview.vue";
import getDataMixin from "../mixins/getDataMixin";

export default {
  name: "Contact",
  components: {
    Header,
    TextOverview,
    ContactOverview,
  },
  mixins: [getDataMixin],

  data() {
    return {
      urlSuffix: "/api/contacts?",
    };
  },
};
</script>
