<template lang="pug">
  
  .sign-in
    .sign-in__logotype
      <Icon name='logotype'></Icon>
    
    .sign-in__frame
      h3.sign-in__title
        | Sign In

      form.sign-in__form
        .sign-in__form-field
          input(type='tel', placeholder='Mobile Number')
          
          .sign-in__form-field-icon
            <Icon name='mobile'></Icon>
        
        .sign-in__form-field
          .sign-in__form-field-icon.sign-in__form-field-icon--password(@click='changePasswordVisibility')
            <template v-if='password_visibility'>
              <Icon name='show'></Icon>
            </template>
            <template v-else>
              <Icon name='hide'></Icon>
            </template>
          
          input(type='password', placeholder='Password', ref='passwordField')
          
          .sign-in__form-field-icon
            <Icon name='password'></Icon>

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
  
  .sign-in__frame
    @extend %air
    padding: 25px 100px
    max-width: 600px
    margin: 0 auto
    text-align: center
  
  .sign-in__title
    color: $text-color
    text-transform: uppercase
    margin-bottom: 25px
  
  .sign-in__form-field
    position: relative
    color: $text-color
    
    &:not(:last-child)
      margin-bottom: 15px
    
    input[type='text'],
    input[type='tel'],
    input[type='email'],
    input[type='password']
      @extend %input
  
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
    font-size: 14px
    color: $text-color

  .sign-in__link
    color: $light-green

</style>
