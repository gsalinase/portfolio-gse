<template>
  <section class="hero">
    <div class="hero-bg__left"></div>

    <article class="hero__container">
      <hr>
      <span class="hero__subtitle">{{ $t('index.hero.developer') }}</span>
      <h1 class="hero__title">
        <span>Front</span>
        <span>End</span>
      </h1>
      <hr>
      <div class="hero__button">
        <Button>
          {{ $t('index.hero.ctaButton') }}
        </Button>
      </div>
    </article>

    <div class="hero-bg__center"></div>
    <div class="hero-bg__right-top"></div>
    <div class="hero-bg__right-bottom"></div>
  </section>
</template>

<script>
// Component
import Button from '@/components/Button.vue';

export default {
  components: {
    // Components
    Button
  },
  data() {
    return {}
  },
}
</script>

<style lang="postcss" scoped>
.hero {
  position: relative;
  height: 741px;
  margin-top: -2px;
  overflow: hidden;
  background-image: url('../../assets/images/hero-bg.jpg');
  background-size: contain;
}

.hero-bg__left,
.hero-bg__center,
.hero-bg__right-top,
.hero-bg__right-bottom {
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
}

.hero-bg__left {
  width: 30vw;
  height: 741px;
  background-image: url('../../assets/images/hero-bg-left.jpg');
}

.hero-bg__center {
  z-index: 3;
  width: 50vw;
  height: 650px;
  left: 300px;
  background-image: url('../../assets/images/hero-bg-center.jpg');
}

.hero-bg__right-top {
  z-index: 2;
  background-image: url('../../assets/images/hero-bg-right-top.jpg');
}

.hero-bg__right-bottom {
  z-index: 2;
  background-image: url('../../assets/images/hero-bg-right-bottom.jpg');
}

.hero__container {
  z-index: 5;
  width: 200px;
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
  font-size: 4rem;
  line-height: 1;
  font-family: var(--playfair);
  font-weight: 900;
}

.hero__subtitle {
  font-family: var(--montserrat);
  font-weight: 200;
  font-size: 1.6rem;
}

.hero__button {
  padding-top: 2rem;
}

@media (min-width: 576px) {
  .hero-bg__left {
    width: 20vw;
  }

  .hero-bg__center {
    width: 40vh;
  }

  .hero-bg__right-top {
    width: 30vh;
    height: 172px;
    left: 700px;
  }

  .hero-bg__right-bottom {
    width: 45vh;
    height: 600px;
    left: 800px;
    bottom: 1px;
  }

  .hero__container {
    width: 250px;
  }

  .hero__title {
    font-size: 5rem;
  }

  .hero__subtitle {
    font-size: 2.3rem;
  }
}

@media (min-width: 1200px) {
  .hero-bg__left {
    width: 40vh;
    height: 741px;
  }

  .hero-bg__center {
    width: 45vh;
    height: 650px;
    left: 410px;
  }

  .hero-bg__right-top {
    width: 30vh;
    height: 172px;
    left: 860px;
  }

  .hero-bg__right-bottom {
    width: 45vh;
    height: 600px;
    left: 1000px;
    bottom: 1px;
  }

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
