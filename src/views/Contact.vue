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
    ></TextOverview>
    <ContactOverview
      :title="contactOverviewProps.title"
      :phoneNumbers="contactOverviewProps.phoneNumbers"
      :mails="contactOverviewProps.mails"
    ></ContactOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import TextOverview from '@/components/Text-Overview.vue';
import ContactOverview from '@/components/ContactOverview.vue';

export default {
  name: 'Home',
  components: {
    Header,
    TextOverview,
    ContactOverview,
  },

  data() {
    return {
      mainHeaderProps: {
        title: '"Hominum causa omne ius constitutum sit"',
        subtitle: 'Wszelkie prawo ustanawia się ze względu na ludzi.',
        image: 'data/img/pictures/MB_firm_header.jpg',
      },
      textOverviewProps: {
        title: 'Lorem Impsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
      },
      contactOverviewProps: {
        title: 'Lorem Impsum',
        phoneNumbers: [
          {
            id: 1,
            number: '123456678',
          },
        ],
        mails: [
          {
            id: 1,
            email: 'qwe@qwe.com',
          },
        ],
      },
    };
  },
};
</script>
