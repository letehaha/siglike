<template lang="pug">

  section.about
    .about__wrapper
      .about__logotype
        | Logotype

      .about__descr
        p 
          | We believe that digital access to medician reports would make patient proactive and engaged in self-care. <br> It also boost the doctor's confidence in making clinical decisions. <br> Altogether, it improves sigma level in medical services.

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

  .about
    display: flex
    justify-content: center
    align-items: center
    height: 100%

  .about__wrapper
    text-align: center
    margin-top: -275px

  .about__logotype
    width: 200px
    color: $light_green
    margin: 0 auto 70px

    svg
      width: 100%

</style>
