<template lang="pug">
  
  .sign-up
    .sign-up__logotype
      <icon name='logotype'></icon>
    
    .sign-up__frame
      h3.sign-up__title
        | Sign Up As

      h2.sign-up__profile
        | Patient

      .sign-up__account-picture
        img(src='img/users/patient.png', alt='Patient')

      form.sign-up__form(v-on:submit.prevent='formSubmit', data-vv-scope='formPatient')
        .sign-up__form-field.validation-required
          input.sign-up__form-field-input(type='text', placeholder='John Snow', name='name')
          
          .sign-up__form-field-icon
            <icon name='my_profile'></icon>

          <form-error-tooltip message='Please enter correct name'></form-error-tooltip>

        .sign-up__form-field.validation-required
          input.sign-up__form-field-input(type='tel', placeholder='Mobile Number')
          
          .sign-up__form-field-icon
            <icon name='mobile'></icon>

          <form-error-tooltip message='Please enter correct mobile number'></form-error-tooltip>

        .sign-up__form-field.validation-required
          input.sign-up__form-field-input(v-validate="'required|email'",
                                         v-model='email_value',
                                         name='email',
                                         type='email',
                                         placeholder='Email (optional)',
                                         :rules="(!errors.first('email')) ? [true] : [errors.first('email')]")
          
          .sign-up__form-field-icon
            <icon name='my_profile'></icon>

          <form-error-tooltip :message="errors.first('formPatient.email')"></form-error-tooltip>
        
        .sign-up__form-field.validation-required
          .sign-up__form-field-icon.sign-up__form-field-icon--password(@click='changePasswordVisibility')
            <template v-if='password_visibility'>
              <icon name='show'></icon>
            </template>
            <template v-else>
              <icon name='hide'></icon>
            </template>

          input.sign-up__form-field-input(type='password', placeholder='Password', ref='passwordField')
          
          .sign-up__form-field-icon
            <icon name='password'></icon>
          
          <form-error-tooltip message='Please enter correct passwod'></form-error-tooltip>

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
  const CLASS_REQUIRED = 'validation-required'
  const CLASS_VALIDATION = 'validation-error'
  const CLASS_FIELD_VALIDATION_ERROR = 'sign-up__form-field-input--invalid'

  function HTMLCollectionToArray (array) {
    return Array.prototype.slice.call(array)
  }

  export default {
    name: 'signup-page',
    layout: 'clean',
    components: { Icon, FormErrorTooltip },
    data () {
      return {
        password_visibility: true,
        field_validation_error: CLASS_FIELD_VALIDATION_ERROR,
        email_value: ''
      }
    },
    watch: { // TODO: fix it
      'email_value': function () {
        let _this = event.target
        let target = _this
        while (true) {
          if (target.classList.contains(CLASS_REQUIRED)) {
            if (_this.getAttribute('aria-invalid') === 'false') {
              target.classList.remove(CLASS_VALIDATION)
            } else {
              target.classList.add(CLASS_VALIDATION)
            }
            return false
          }
          target = target.parentNode
        }
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
        this.$refs.toggleCheckbox.classList.toggle(CLASS_CHECKED)
      },
      formValidate () {
        let form = event.target
        let formItems = HTMLCollectionToArray(form.getElementsByClassName(CLASS_REQUIRED))

        formItems.forEach(function (item, i) {
          let input = item.querySelector('input')
          let target = input
          while (true) {
            if (target.classList.contains(CLASS_REQUIRED)) {
              if (input.classList.contains(CLASS_FIELD_VALIDATION_ERROR)) {
                target.classList.add(CLASS_VALIDATION)
              } else {
                target.classList.remove(CLASS_VALIDATION)
              }
              return false
            }

            target = target.parentNode
          }
        })
      },
      formSubmit () {
        // this.formValidate()
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
    font-size: 26px
  
  .sign-up__form-field
    position: relative
    color: $text-color
    
    &:not(:last-child)
      margin-bottom: 15px
    
  .sign-up__form-field-input
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
  
  .sign-up__account-picture
    width: 100%
    text-align: center
    margin-bottom: 20px
    
    img
      max-width: 66px
    
</style>
