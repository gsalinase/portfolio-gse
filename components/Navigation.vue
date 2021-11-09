<template>
  <nav 
    class="navigation"
    @mouseover="showLogo = false" 
    @mouseleave="showLogo = true"
  >
    <div class="navigation__left">
      <div>
        <Icons
          width="40px"
          classes="navigation__left-logo" 
          icon-name="logo" 
          :style="[rotateImage]"
        />
      </div>
  <!--     <div 
        :class="!showLogo ? 'navigation__left_show' : 'navigation__left_hide'"
        @click="isOpen = !isOpen"
      >
        <img
          v-if="isOpen"
          class="navigation__left-hamburguer"
          src="~/assets/images/nav-hamburguer.svg"          
        >
        <img 
          v-else  
          class="navigation__left-close"
          src="~/assets/images/nav-close.svg"
        >
      </div> -->
    </div>
    <div class="navigation__bottom">
      
    </div>
  </nav>
</template>

<script>
  /* Components */
  import Icons from '@/components/Icons.vue';

  export default {
    name: 'Navigation',
    components: {
      Icons,
    },
    data() {
      return {
        scrollToDeg: 0,
        showLogo: true,
        isOpen: false,
      }
    },
    computed: {
      rotateImage() {
        return {
          transform: `rotate(${this.scrollToDeg}rad)`
        }
      }
    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        this.scrollToDeg = document.documentElement.scrollTop / 50 % Math.PI;
      },
    }
  }
</script>

<style lang="postcss">
.navigation {
  max-width: 40px;
  max-height: 40px;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 1rem;
  background-color: var(--sunset-orange);
  cursor: pointer;
}

.navigation__left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.navigation__left_hide {
  transition: opacity 200ms ease-in-out;
  opacity: 0;
}

.navigation__left_show {
  transition: opacity 200ms ease-in-out;
  opacity: 1;
}

.navigation__left-hamburguer {
  max-width: 38px;
  cursor: pointer;
  opacity: 1;
}

.navigation__left-close{
  display: block;
  max-width: 33px;
  cursor: pointer;
  opacity: 1;
}

.navigation__left-logo{
  cursor: pointer;
  max-width: 40px;
  opacity: 1;
}
</style>