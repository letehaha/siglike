<template lang="pug">
  
  nuxt-link.logotype(to='/', :class='className')
    <icon name='logotype'></icon>

</template>

<script>
  import Icon from './Icon'

  export default {
    name: 'logotype',
    props: ['className'],
    components: { Icon }
  }
</script>

<style lang="sass"> 
  // TODO: fix excess rules

  .logotype
    color: $light-green

    svg
      height: 100%
      width: auto

</style>
