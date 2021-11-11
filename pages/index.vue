<template>
  <main-wrapper>
    <Header />
    <Main>
      <Hero />
    </Main>
  </main-wrapper>
</template>

<script>
// Layout
import Header from '@/layout/Header.vue';
import Main from '@/layout/Main.vue';
import MainWrapper from '@/layout/MainWrapper.vue';

// Section
import Hero from '@/widget/home/Hero.vue';

export default {
  components: {
    // Layout
    Header,
    Main,
    MainWrapper,

    // Section
    Hero
  },
  data() {
    return {}
  },
}
</script>
