<template>
  <div class="section-container">
    <v-card
      v-for="(page, index) in pages"
      :key="page.id"
      class="mb-6 page__container"
    >
      <div class="mx-auto my-5">
        <BigIcon :icon="page.imageUrl" class="logo"></BigIcon>
      </div>
      <div>
        <h3 class="icon-title card-title my-4">{{ page.title }}</h3>
        <p class="icon-text my-2">{{ page.text }}</p>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn icon @click="selectedIndex = index">
          <v-icon>{{
            index === selectedIndex ? "mdi-chevron-up" : "mdi-chevron-down"
          }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="index === selectedIndex">
          <v-divider></v-divider>
          <v-card-text class="icon-text" v-html="page.expandText">
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import BigIcon from "@/commons/BigIcon.vue";

export default {
  components: { BigIcon },

  data: () => ({
    model: 0,
    selectedIndex: null,

    show: false,
  }),
  props: {
    pages: {
      type: Array,
      default() {
        return [
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
        ];
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "styles/global/_all.scss";
.page__container {
  display: flex;
  flex-direction: column;
}
.card-title {
  text-align: center;
}
</style>
