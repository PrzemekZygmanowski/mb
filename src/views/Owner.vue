<template>
  <div class="about">
    <Header
      :title="mainHeaderProps.title"
      :subtitle="mainHeaderProps.subtitle"
      :image="mainHeaderProps.image"
    ></Header>
    <TextOverview
      :title="firstTextOverviewProps.title"
      :text="firstTextOverviewProps.text"
    ></TextOverview>
    <AboutContent :content="firstAboutProps"></AboutContent>
    <TextOverview :text="secondTextOverviewProps.text"></TextOverview>
    <AboutContent :content="secondAboutProps"></AboutContent>
    <TextOverview :text="thirdTextOverviewProps.text"></TextOverview>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import TextOverview from '@/components/Text-Overview.vue';
import AboutContent from '@/components/AboutContent.vue';

import homeProps from '@/assets/data/home/home.json';

export default {
  name: 'Home',
  components: {
    Header,
    TextOverview,
    AboutContent,
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
        title: '"Executio iuris non habet iniuriam"',
        subtitle: 'Egzekwowanie prawa nie jest bezprawiem.',
        image: 'data/img/pictures/MB_team_header.jpg',
      },
      firstTextOverviewProps: {
        title: 'O Radcy',
      },
      firstAboutProps: {
        imageUrl: 'data/img/pictures/About-1.jpg',
        imageName: 'Michał Buzar',
        text: 'Radca prawny Michał Buzar – prowadzi działalność w formie swojej własnej praktyki w postaci Kancelarii prawnej. Jest absolwentem Wydziału Prawa i Administracji Uniwersytetu Łódzkiego, jak i Wydziału Nauki Politologicznych i Międzynarodowych tego samego uniwersytetu.<br> Aplikację radcowską odbywał w latach 2016-2019  i złożył egzamin radcowski w roku 2020. Wtedy też został wpisany na listę radców prawnych prowadzoną przez Okręgową Izbę Radców Prawnych w Łodzi.',
        orientation: 'right',
      },
      secondTextOverviewProps: {
        title: 'Lorem Impsum',
        text: 'Domeną każdego radcy prawnego niewątpliwie jest niesienie pomocy prawnej osobom fizycznym oraz osobom prawnym. Usługi oferowane przeze mnie nacechowane są wysoką staranności i przenikliwością. Jako radca prawny staram się każdorazowo zbadać dokładnie stan faktyczny przekazywany przez Klienta oraz zaoferować najlepsze wyjście z sytuacji, jednocześnie obiektywnie oceniając jego położenie i wskazując na rzeczywiste zagrożenia jakie na niego czekają. Wieloletnia praktyka sądowa, zarówno w sprawach cywilnych jak i karnych, umożliwia mi określenie w sposób realny Klientowi niebezpieczeństw, i przeszkód jakie będą na niego czekać w postępowaniu sądowym oraz pozwala na ustalenie najbardziej optymalnej strategii procesowej. <br><br> Jednocześnie w przypadkach, w których sprawa nie jest jeszcze na etapie spornym, każdorazowo staram się doradzić i wypracować w porozumieniu z Klientem najlepszą ścieżkę postępowania ażeby uniknąć – często niestety wieloletniego – sporu sądowego. <br> Klient każdorazowo jest informowany o wszelkich następstwach danych czynności, co pozwala mu kompleksowo ocenić stan rzeczy, w którym się znalazł. ',
      },
      secondAboutProps: {
        imageUrl: 'data/img/pictures/About-2.jpg',
        imageName: 'Michał Buzar',
        text: 'Kieruję się trzema podstawowymi zasadami wobec Klienta: lojalność, uczciwość oraz zaangażowanie.<br>Połączenie tych cech pozwala na zrozumienie problemu Klienta oraz jego położenia, bez prowadzenia ocen moralnych, co jest bardzo istotne w wielu sprawach, głównie rodzinnych oraz karnych. ',
        orientation: 'left',
      },
      thirdTextOverviewProps: {
        title: 'Specjalności',
        text: 'W zakresie doświadczenia zawodowego od wielu lat specjalizuję się w problematyce praw konsumenta, umów cywilnoprawnych, zarówno B2C, jak i B2B, prawa pracy, a także w Prawie oświatowym. Prowadzę obsługę dużych przedsiębiorstw pod kątem prawa pracy i prawa cywilnego. Klientom indywidualnym oferuję także pomoc prawną z zakresu prawa rodzinnego, spadkowego, jak i prawa karnego, w tym ostatnim zarówno występując jako pełnomocnik pokrzywdzonego, jak i obrońca podejrzanego/oskarżonego.',
      },
    };
  },
};
</script>
