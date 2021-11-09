<template>
  <a class="button button_primary" :href="link">
    <slot />
  </a>
</template>

<script>
  export default {
    props: {
      link: {
        type: String,
        default: '#'
      },
      classes: {
        type: String,
        default: 'button button_primary'
      },
    },
  }
</script>

<style lang="postcss" scoped>
.button {
  padding: 1rem 1.5rem;
}

.button_primary {
  text-decoration: none;
  font-family: var(--montserrat);
  background-color: var(--sunset-orange);
  color: var(--white); 
}

.button_primary:hover {
  background-color: #b14040;
}
</style>