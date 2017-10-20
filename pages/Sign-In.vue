<template lang="pug">
  
  .sign-in
    nuxt-link.sign-in__logotype(to='/')
      <icon name='logotype'></icon>
    
    .sign-in__frame
      h3.sign-in__title
        | Sign In

      form.sign-in__form
        .sign-in__form-field
          input(type='tel', placeholder='Mobile Number')
          
          .sign-in__form-field-icon
            <icon name='mobile'></icon>
        
        .sign-in__form-field
          .sign-in__form-field-icon.sign-in__form-field-icon--password(@click='changePasswordVisibility')
            <template v-if='password_visibility'>
              <icon name='show'></icon>
            </template>
            <template v-else>
              <icon name='hide'></icon>
            </template>
          
          input(type='password', placeholder='Password', ref='passwordField')
          
          .sign-in__form-field-icon
            <icon name='password'></icon>

        a.sign-in__note(href='forgotpassword')
          | Forgot Password?

        button.sign-in__form-submit(type='submit')
          | Sign In

      p.sign-in__note
        | Don't have an account? 

        nuxt-link.sign-in__link(to='/sign-up')
          | Sign Up

</template>

<script>
  import Icon from '~/components/Icon'

  export default {
    name: 'signin-page',
    layout: 'clean',
    components: { Icon },
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
      }
    }
  }
</script>

<style lang="sass">

  .sign-in
    background-color: $page-background-color
    height: 100vh
    padding-top: 120px
  
  .sign-in__logotype
    width: 150px
    color: $light-green
    margin: 0 auto 70px
    display: block
  
  .sign-in__frame
    @extend %popup
  
  .sign-in__title
    @extend %popup__title
  
  .sign-in__form-field
    position: relative
    color: $text-color
    
    &:not(:last-child)
      margin-bottom: 15px
    
    input[type='text'],
    input[type='tel'],
    input[type='email'],
    input[type='password']
      @extend %field
  
  .sign-in__form-field-icon
    position: absolute
    top: calc(50% - 10px)
    left: 13px
    width: 20px
    height: 20px
    
    svg
      max-width: 100%
      max-height: 100%
  
  .sign-in__form-field-icon--password
    left: inherit
    right: -30px
    cursor: pointer
    user-select: none

  .sign-in__form-submit
    @extend %addons-btn
    display: block
    width: 300px
    height: 46px
    margin: 55px auto 25px

  .sign-in__note
    @extend %popup__note

  .sign-in__link
    @extend %popup__link

</style>
