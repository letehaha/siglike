<template lang="pug">
  
  .sign-up
    .sign-up__logotype
      <icon name='logotype'></icon>
    
    .sign-up__frame
      .sign-up__step.sign-up__step--type(v-show='!nextStep')
        h3.sign-up__title
          | Choose account type

        ul.sign-up__type-list
          li.sign-up__type-item(@click='chooseAccountType', :data-type='account_type.doctor.type')
            .sign-up__type-picture
              img(src='img/users/doctor.png', alt='Doctor')

            .sign-up__type-name
              | Sign up as Patient

              span.sign-up__type-name-description
                | (Doctor, Pathology, Radiology etc.)

            .sign-up__type-check
              <icon name='check'></icon>

          li.sign-up__type-item(@click='chooseAccountType', :data-type='account_type.patient.type')
            .sign-up__type-picture
              img(src='img/users/patient.png', alt='Patient')

            .sign-up__type-name
              | Sign up as Patient

            .sign-up__type-check
              <icon name='check'></icon>

        button.sign-up__type-submit(type='button', @click='doNextStep', :disabled='canNextStep === false')
          | Next
      
      .sign-up__account(v-show='nextStep')
        h3.sign-up__title
          | Sign Up As

        .sign-up__account-name(ref='accountName')

        .sign-up__account-picture
          img(src='img/users/patient.png', alt='Patient', ref='accountPicture')

        form.sign-up__form(v-on:submit.prevent='formSubmit')
          .sign-up__form-field.validation-required
            input.sign-up__form-field-input(type='text', placeholder='John Snow')
            
            .sign-up__form-field-icon
              <icon name='my_profile'></icon>

            <form-error-tooltip message='Please enter correct name'></form-error-tooltip>

          .sign-up__form-field.validation-required
            input.sign-up__form-field-input(type='tel', placeholder='Mobile Number')
            
            .sign-up__form-field-icon
              <icon name='mobile'></icon>

            <form-error-tooltip message='Please enter correct mobile number'></form-error-tooltip>

          .sign-up__form-field.validation-required
            input.sign-up__form-field-input(type='email', placeholder='Email (optional)')
            
            .sign-up__form-field-icon
              <icon name='my_profile'></icon>

            <form-error-tooltip message='Please enter correct email'></form-error-tooltip>
          
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

          button.sign-up__form-submit(type='submit', :data-type='data_type', :disabled='formValid === false')
            | Sign Up

      p.sign-up__note
        | Already have an account? 

        nuxt-link.sign-up__link(to='/sign-in')
          | Sign In
      

</template>

<script>
  import Icon from '~/components/Icon'
  import FormErrorTooltip from '~/components/FormErrorTooltip'

  const CLASS_CHECKED = 'sign-up__form-field--checkbox-checked'
  const CLASS_REQUIRED = 'validation-required'
  const CLASS_VALIDATION = 'validation-error'

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
        formValid: false,
        canNextStep: false,
        nextStep: false,
        data_type: null,
        account_type: {
          patient: {
            type: 'patient',
            title: 'Patient',
            picture_src: 'img/users/patient.png'
          },
          doctor: {
            type: 'doctor',
            title: 'Heal Professional',
            picture_src: 'img/users/doctor.png'
          }
        }
      }
    },
    methods: {
      doNextStep () {
        this.$data.nextStep = true

        if (this.$data.data_type === this.$data.account_type.patient.type) {
          this.$refs.accountName.textContent = this.$data.account_type.patient.title
          this.$refs.accountName.alt = this.$data.account_type.patient.title
          this.$refs.accountPicture.src = this.$data.account_type.patient.picture_src
        } else if (this.$data.data_type === this.$data.account_type.doctor.type) {
          this.$refs.accountName.textContent = this.$data.account_type.doctor.title
          this.$refs.accountName.alt = this.$data.account_type.doctor.title
          this.$refs.accountPicture.src = this.$data.account_type.doctor.picture_src
        }
      },
      activeNextStep () {
        this.$data.canNextStep = true // make 'Next' button not disabled
      },
      chooseAccountType (event) {
        let target = event.target

        while (true) {
          if (target.classList.contains('sign-up__type-item')) {
            let targets = HTMLCollectionToArray(document.getElementsByClassName('sign-up__type-item'))

            this.$data.data_type = target.dataset.type

            targets.map(function (elem, index) {
              elem.classList.remove('sign-up__type-item--checked')
            })

            this.activeNextStep()
            target.classList.add('sign-up__type-item--checked')

            return false
          }

          target = target.parentNode
        }
      },
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
              if (input.value === '') {
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
  
  .sign-up__step
    margin-bottom: 25px
  
  .sign-up__type-list
    display: flex
    justify-content: space-between
    margin-bottom: 75px
  
  .sign-up__type
    width: 100%
  
  .sign-up__type-item
    width: 220px
    background-color: #fff
    border: 1px solid $light-grey
    border-radius: 10px
    padding: 15px 10px 20px
    cursor: pointer
    position: relative
    transition: box-shadow .3s ease-out
    
    &:hover,
    &.sign-up__type-item--checked
      box-shadow: 0 9px 46px -6px rgba(0, 0, 0, .1)
  
  .sign-up__type-picture
    width: 70px
    height: 75px
    margin: auto auto 10px
    
    img
      max-widht: 100%
      height: 100%
      margin: auto
  
  .sign-up__type-name
    font-size: 14px
    height: 36px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center
  
  .sign-up__type-name-description
    font-size: 12px
  
  .sign-up__type-check
    width: 34px
    height: 34px
    position: absolute
    bottom: -17px
    left: calc(50% - 17px)
    border-radius: 50%
    background-color: $light-green
    color: #fff
    opacity: 0
    visibility: hidden
    transition: opacity .15s ease-out, visibility .15s ease-out
    
    .sign-up__type-item--checked &
      opacity: 1
      visibility: visible
    
    svg
      width: 20px
      height: 20px
      margin: 7px
  
  .sign-up__type-submit
    @extend %addons-btn
    height: 45px
    width: 300px
    font-size: 16px
    letter-spacing: 1px

  .sign-up__title
    @extend %popup__title
    font-size: 16px 
    margin-bottom: 30px
  
  .sign-up__account-name
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
  
  .sign-up__note
    @extend %popup__note

  .sign-up__link
    @extend %popup__link
    
</style>
