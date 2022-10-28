<template>
  <div class="contact">
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
    <ContactOverview
      :title="contactOverviewProps.title"
      :address="contactOverviewProps.address"
      :phoneNumbers="contactOverviewProps.phoneNumbers"
      :mails="contactOverviewProps.mails"
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

export default {
  name: "Home",
  components: {
    Header,
    TextOverview,
    ContactOverview,
  },

  data() {
    return {
      mainHeaderProps: {
        title: '"Da mihi factum, dabo tibi ius"',
        subtitle: "Podaj mi fakty, a ja dam ci prawo.",
        image: "data/img/pictures/contact.jpg",
      },
      textOverviewProps: {
        title: "Lorem Impsum",
        text: "Kancelaria mieści się koło poczty, niemalże naprzeciwko placu Reymonta w Łodzi",
      },
      contactOverviewProps: {
        title: "Lorem Impsum",
        address: { street: "ul. Piotrkowska 309 lok. 20", city: "93-004 Łódź" },
        phoneNumbers: [
          {
            id: 1,
            number: "737-337-071",
          },
        ],
        mails: [
          {
            id: 1,
            email: "michal.buzar@kancelariamb.ogicom.pl",
          },
        ],
      },
    };
  },
};
</script>
