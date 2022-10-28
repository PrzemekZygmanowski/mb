<template>
  <div class="home">
    <MainHeader
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
    ></MainHeader>
    <TextOverview
      :title="textOverviewProps.title"
      :text="textOverviewProps.text"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></TextOverview>
    <BigIconOverview
      :icons="bigIconOverviewProps.icons"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></BigIconOverview>
    <SpecOverview
      :cards="specOverviewProps.cards"
      data-aos="opacity-on"
      data-aos-ease="ease-in-out"
      data-aos-duration="1500"
    ></SpecOverview>
    <AboutOverview
      :owner="aboutOverviewProps.owner"
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
import homeProps from "@/assets/data/home/home.json";

export default {
  name: "Home",
  components: {
    MainHeader,
    TextOverview,
    SpecOverview,
    AboutOverview,
    BigIconOverview,
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
        title: "Michał Buzar",
        subtitle: "Radca prawny",
        image: "data/img/pictures/header.jpg",
      },
      textOverviewProps: {
        title: "Lorem Impsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      bigIconOverviewProps: {
        icons: [
          {
            id: 1,
            title: "Profesjonalizm",
            icon: "fa-solid fa-certificate",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            id: 2,
            title: "Empatia",
            icon: "fa-solid fa-dove",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
          {
            id: 3,
            title: "Doświadczenie",
            icon: "fa-solid fa-shield",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          },
        ],
      },
      specOverviewProps: {
        cards: [
          {
            id: 1,
            title: "Prawo karne",
            imageUrl: "data/img/logo/icons8-law-64.png",
            imageTitle: "Prawo Karne",
            text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!",
          },
          {
            id: 2,
            title: "Prawo cywilne",
            imageUrl: "data/img/logo/icons8-justice-64.png",
            imageTitle: "Prawo cywilne",
            text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!",
          },
          {
            id: 3,
            title: "Prawo pracy",
            imageUrl: "data/img/logo/icons8-workers-64.png",
            imageTitle: "Prawo pracy",
            text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!",
          },
          {
            id: 4,
            title: "Prawo rodzinne",
            imageUrl: "data/img/logo/icons8-family-50.png",
            imageTitle: "Prawo pracy",
            text: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum      voluptates totam iure, neque cumque temporibus obcaecati placeat quidem      nemo suscipit sequi nihil sed eveniet odit, tempora sunt, ipsam dolores!",
          },
        ],
      },
      aboutOverviewProps: {
        owner: {
          imageUrl: "data/img/pictures/MB_header.jpg",
          imageName: "Michał_Buzar",
          title: "Michał Buzar",
          subtitle: "Radca Prawny",
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        },
      },
    };
  },
};
</script>
