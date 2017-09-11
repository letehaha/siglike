<template lang="pug">
  
  h1
    | About page

</template>

<script>
  export default {
    data () {
      return {
        title: 'About Siglike!'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    }
  }
</script>

<style lang="sass">


</style>
