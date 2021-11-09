<template>
  <main-wrapper>
    <Header />
    <Main>
      <!-- Hero -->
      <section class="hero">
        <article class="hero__container">
          <hr>
          <span class="hero__subtitle">Desarrollador</span>
          <h1 class="hero__title">
            <span>Front</span>
            <span>End</span>
          </h1>
          <hr>
          <div class="hero__button">
            <Button>
              Ver Portafolio
            </Button>
          </div>
        </article>
      </section>
    </Main>
  </main-wrapper>
</template>

<script>
// Layout
import Header from '@/layout/Header.vue';
import Main from '@/layout/Main.vue';
import MainWrapper from '@/layout/MainWrapper.vue';

// Component
import Button from '@/components/Button.vue';

export default {
  components: {
    // Layout
    Header,
    Main,
    MainWrapper,

    // Components
    Button
  },
  data() {
    return {
      hero: {
        title: 'Front Developer'
      }
    }
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  position: relative;
  height: 741px;
  margin-top: -2px;
  background-image: url('../assets/images/hero@2x.png');
  background-position: top left;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero__container {
  width: 250px;
  position: absolute;
  top: 104px;
  left: 83px;
  text-align: right;
  color: var(--white);
}

.hero__container hr {
  border: 1px solid var(--white);
}

.hero__title {
  margin: 0;
  font-size: 5rem;
  line-height: 1;
  font-family: var(--playfair);
  font-weight: 900;
}

.hero__subtitle {
  font-family: var(--montserrat);
  font-weight: 200;
  font-size: 2.3rem;
}

.hero__button {
  padding-top: 2rem;
}

@media (max-width: 576px) {
  .hero__container {
    width: 200px;
  }

  .hero__title  {
    font-size: 5rem;
  }

  .hero__subtitle {
    font-size: 1.6rem;
  }
}

@media (min-width: 1200px) {
  .hero__container {
    width: 300px;
  }

  .hero__title {
    font-size: 5.8125rem;
  }

  .hero__subtitle {
    font-size: 1.8125rem;
  }
}
</style>
