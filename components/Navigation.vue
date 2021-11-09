<template>
  <nav class="navigation">
    <div class="navigation__left">
      <div></div>
      <!-- <img class="navigation__left-hamburguer" src="./images/nav-hamburguer.svg"> -->
      <img class="navigation__left-logo" src="~/assets/images/logo.svg">
    </div>
<!--     <div class="navigation__container">
      <ul class="navigation__list">
        <li class="navigation__item">Acerca de mi</li>
        <li class="navigation__item">Portafolio</li>
        <li class="navigation__item">Contacto</li>
      </ul>
    </div> -->
<!--     <div class="navigation__bottom">
      <img class="navigation__top-close" src="~/assets/images/nav-close.svg">
    </div> -->
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style lang="postcss">
.navigation {
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 1rem;
  background-color: var(--sunset-orange);
}

.navigation__left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.navigation__left-hamburguer {
  max-width: 30px;
  cursor: pointer;
}

.navigation__left-close{
  max-width: 20px;
  cursor: pointer;
}

.navigation__left-logo{
  max-width: 40px;
}
</style>