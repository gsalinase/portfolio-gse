<template>
  <img 
    :width="width" 
    :height="height"
    :style="styles"
    :class="classes" 
    :src="require(`~/assets/images/${iconName}.svg`)" 
    :alt="alt"
  >
</template>

<script>
  export default {
    props: {
      iconName: {
        type: String,
        default: 'logo'
      },
      alt: {
        type: String,
        default: null
      },
      width: {
        type: [String, Number],
        default: null
      },
      height: {
        type: [String, Number],
        default: null
      },
      classes: {
        type: [String, Array, Object],
        default: ''
      },
      styles: {
        type: [String, Array, Object],
        default: ''
      },
    },
  }
</script>