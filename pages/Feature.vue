<template lang="pug">
  
  .feature
    .feature__wrapper
      h2.feature__title
        | How can we improve Siglike?
      
      form.feature__form
        .feature__form-field
          input.feature__form-field-input(type='text', placeholder='Type your request here')
        
        button.feature__form-submit(type='submit')
          | Submit request

</template>

<script>
  export default {
    name: 'feature-page'
  }
</script>

<style lang="sass">
  
  .feature
    display: flex
    align-items: center
    justify-content: center
    height: 100%
  
  .feature__wrapper
    text-align: center
    margin-top: -275px
  
  .feature__title
    font-size: 30px
    color: $text-color
    margin-bottom: 75px
  
  .feature__form-field
    width: 700px
    height: 60px
    margin-bottom: 70px
  
  .feature__form-field-input
    border-radius: 30px
    border: 1px solid $light-grey
    background-color: #fff
    width: 100%
    height: 100%
    padding: 0 38px
    font-size: 18px
  
  .feature__form-submit
    @extend %addons-btn
    width: 350px
    height: 60px
    font-size: 18px
    letter-spacing: 1px
    box-shadow: 0 16px 55px 8px rgba($light-green, .4)

</style>
