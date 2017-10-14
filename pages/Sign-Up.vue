<template lang="pug">
  
  .sign-up
    .sign-up__logotype
      <icon name='logotype'></icon>
    
    .sign-up__frame
      h3.sign-up__title
        | Sign Up As

      h2.sign-up__profile
        | Patient

      form.sign-up__form(v-on:submit.prevent='formSubmit')
        .sign-up__form-field
          input(type='text', placeholder='John Snow')
          
          .sign-up__form-field-icon
            <icon name='my_profile'></icon>

        .sign-up__form-field
          input(type='tel', placeholder='Mobile Number')
          
          .sign-up__form-field-icon
            <icon name='mobile'></icon>

        .sign-up__form-field
          input(type='email', placeholder='Email (optional)')
          
          .sign-up__form-field-icon
            <icon name='my_profile'></icon>
        
        .sign-up__form-field
          .sign-up__form-field-icon.sign-up__form-field-icon--password(@click='changePasswordVisibility')
            <template v-if='password_visibility'>
              <icon name='show'></icon>
            </template>
            <template v-else>
              <icon name='hide'></icon>
            </template>

          <form-error-tooltip message='Please enter correct email'></form-error-tooltip>
          
          input(type='password', placeholder='Password', ref='passwordField')
          
          .sign-up__form-field-icon
            <icon name='password'></icon>

        label.sign-up__label
          .sign-up__form-field.sign-up__form-field--checkbox(ref='toggleCheckbox')
            input(type='checkbox', @change='toggleCheckbox')
            .sign-up__checkbox
              <icon name='check'></icon>

          | I agree to terms and conditions

        button.sign-up__form-submit(type='submit')
          | Sign Up

</template>

<script>
  import Icon from '~/components/Icon'
  import FormErrorTooltip from '~/components/FormErrorTooltip'

  const CLASS_CHECKED = 'sign-up__form-field--checkbox-checked'

  export default {
    name: 'signup-page',
    layout: 'clean',
    components: { Icon, FormErrorTooltip },
    data () {
      return {
        password_visibility: true
      }
    },
    methods: {
      changeIcon () {
        this.$data.password_visibility = !this.$data.password_visibility
      },
      changePasswordVisibility () {
        this.changeIcon()
        if (!this.$data.password_visibility) {
          this.$refs.passwordField.type = 'text'
        } else {
          this.$refs.passwordField.type = 'password'
        }
      },
      toggleCheckbox (element) {
        console.log(this.$refs.toggleCheckbox)
        this.$refs.toggleCheckbox.classList.toggle(CLASS_CHECKED)
      },
      formValidate () {

      },
      formSubmit () {
        this.formValidate()
      }
    }
  }
</script>

<style lang="sass">

  .sign-up
    background-color: $page-background-color
    height: 100vh
    padding-top: 120px
  
  .sign-up__logotype
    width: 150px
    color: $light-green
    margin: 0 auto 70px
  
  .sign-up__frame
    @extend %popup
  
  .sign-up__title
    @extend %popup-title
    margin-bottom: 10px
  
  .sign-up__profile
    text-transform: uppercase
    color: $light-green
    margin-bottom: 20px
  
  .sign-up__form-field
    position: relative
    color: $text-color
    
    &:not(:last-child)
      margin-bottom: 15px
    
    input[type='text'],
    input[type='tel'],
    input[type='email'],
    input[type='password']
      @extend %field
  
  .sign-up__form-field--checkbox
    width: 17px
    height: 17px
    display: inline-block
    border-radius: 3px
    overflow: hidden
    margin-right: 4px
  
  .sign-up__checkbox
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    background-color: #fff
    border: 1px solid $light-grey
    
    .sign-up__form-field--checkbox-checked &
      border-color: $light-green
      background-color: $light-green 
    
    svg
      width: 7px
      height: 13px
      opacity: 0
      
      .sign-up__form-field--checkbox-checked &
        color: #fff
        opacity: 1
  
  .sign-up__form-field-icon
    position: absolute
    top: calc(50% - 10px)
    left: 13px
    width: 20px
    height: 20px
    
    svg
      max-width: 100%
      max-height: 100%
  
  .sign-up__form-field-icon--password
    left: inherit
    right: -30px
    cursor: pointer
    user-select: none

  .sign-up__form-submit
    @extend %addons-btn
    display: block
    width: 300px
    height: 46px
    margin: 55px auto 25px

  .sign-up__note
    font-size: 14px
    color: $text-color
    display: block
  
  .sign-up__label
    @extend .sign-up__note
    display: flex
    align-items: center
    justify-content: center
    user-select: none

  .sign-up__link
    color: $light-green
    
</style>
