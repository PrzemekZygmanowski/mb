<template>
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
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import TextOverview from "@/components/Text-Overview.vue";
import SpecCarousel from "@/components/Spec-Carousel.vue";
import getDataMixin from "../mixins/getDataMixin";

export default {
  name: "Home",
  components: {
    Header,
    TextOverview,
    SpecCarousel,
  },
  mixins: [getDataMixin],

  data() {
    return {
      urlSuffix: "/api/firms?",

      mainHeaderProps: {
        title: '"Hominum causa omne ius constitutum sit"',
        subtitle: "Wszelkie prawo ustanawia się ze względu na ludzi.",
        image: "data/img/pictures/MB_firm_header.jpg",
      },
      textOverviewProps: {
        title: "Lorem Impsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      page: [
        {
          id: 1,
          title: "Prawo karne",
          imageUrl: "data/img/svg/scale-balance.svg",
          text: "Zarówno reprezentacja przed organami postępowania przygotowawczego, jak i na etapie postępowania sądowego. Pomoc prawna oferowana jest zarówno pokrzywdzonym, jak i podejrzanym/oskarżonym. ",
          expandText:
            "Realizowana pomoc obejmuje czyny ścigane zarówno z oskarżenia publicznego, jak i z oskarżenia prywatnego, czyny zabronione powszechne jak i karnoskarbowe, a także wszelkie instytucje związane z problematyką karną jak stosowanie środków zapobiegawczych (głównie tymczasowego aresztowania), orzekanie środków karnych, w tym środków kompensacyjnych, wyroki łączne, czy też wnioski w zakresie prawa karnego wykonawczego (przedterminowe warunkowe zwolnienie, zamiana kary na dozór elektroniczny). Pomoc prawna również jest realizowana w zakresie wykroczeń – także pokrzywdzonym, jak i obwinionym.",
        },
        {
          id: 2,
          title: "Prawo cywilne",
          imageUrl: "data/img/logo/icons8-justice-64.png",
          imageTitle: "Prawo cywilne",
          text: "sprawy z zakresu stosunków cywilnoprawnych, zarówno między przedsiębiorcami, jak i przedsiębiorcą i konsumentem, a także między osobami fizycznymi nieprowadzącymi działalności gospodarczej.",
          expandText:
            "Pomoc prawna oferowana jest w zakresie sporządzania umów, badania ich treści, wspierania procesu negocjacji umów i korzystnego stanowiska Klienta. W zakresie procesowym oferowane są usługi w zakresie windykacyjnym a także w zakresie dochodzenia odszkodowania i zadośćuczynienia poszkodowanym czynami niedozwolonymi; gdy chodzi o roszczenia majątkowe. W szczególności oferowana jest pomoc w zakresie umów najmu. Pomagam również przy sprawach spadkowych (otworzenie testamentów, przyjęcia spadków, dział spadku, roszczenia o zachowek)",
        },
        {
          id: 3,
          title: "Prawo pracy",
          imageUrl: "data/img/logo/icons8-workers-64.png",
          imageTitle: "Prawo pracy",
          text: "oferuję usługi związane z obsługą podmiotów będących pracodawcami dla pracowników.",
          expandText:
            "załatwianie roszczeń pracowniczych, dokumenty kadrowe, regulaminy pracy i wynagrodzenia, sposoby rozwiązań stosunków pracy, w tym zwolnienia grupowe, obowiązki pracodawców i pracowników, umowy szkoleniowe, lojalnościowe, zakazy konkurencji, odszkodowania od pracownika itd. Oferuję też pomoc pracownikom, którzy wystąpili bądź chcą wystąpić przeciwko Pracodawcy (wadliwe wypowiedzenie umowy o pracę, złamania zakazu równego traktowania, mobbing, itp.)*. *pomoc prawna nie może być przeze mnie udzielona pracownikom podmiotów, które obsługuję.",
        },
        {
          id: 4,
          title: "Prawo rodzinne",
          imageUrl: "data/img/logo/icons8-family-50.png",
          imageTitle: "Prawo pracy",
          text: "oferuję także pomoc w sprawach rozwodowych, związanych z działem majątku dorobkowego, alimentacyjnych oraz związanych z władzą rodzicielską nad małoletnim i kontaktami z nim.",
          expandText: "",
        },
      ],
    };
  },
};
</script>
