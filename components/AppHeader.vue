<template lang="pug">
  
  header.header
    .header__wrapper
      nuxt-link.logotype(to='/')
        | logotype

      .header__search
        form.header__search-form
          .header__search-form-icon
            | search
          
          input.header__search-field(type='text', placeholder='Search')
          button.header__search-submit(type='submit', title='Search')
      
      .header__notifications.header__notifications--present#js-header-notifications
        button.header__notifications-btn#js-header__notifications-btn(title='Show Notifications')
          | notifications
        
        .header__notifications-panel#js-header__notifications-panel
          ul.header__notifications-list#js-header__notifications-list
            li.header__notifications-item
              .header__notifications-photo
                img.header__notifications-photo-img(src='images/users/user-doctor.jpg', alt='Doctor')

              .header__notifications-message
                a.header__notifications-link(href='#')
                  | Dr. Shiley 
                
                | send a file.
              
              button.header__notifications-close(type='button', title='Delete')
                | close

            li.header__notifications-item
              .header__notifications-photo
                img.header__notifications-photo-img(src='images/users/user-doctor.jpg', alt='Doctor')

              .header__notifications-message
                a.header__notifications-link(href='#')
                  | Dr. Shiley 
                
                | send a file.
              
              button.header__notifications-close(type='button', title='Delete')
                | close

          .header__notifications-footer
            | Don't have any notification

</template>

<script>
  
  export default {

  }
</script>

<style lang="sass">

  .header
    height: 77px

  .header__wrapper
    display: flex
    align-items: center
    padding: 15px 45px
    background-color: #fff

  .logotype
    margin-right: auto
    color: $light-green
    height: 45px
    font-size: 40px

    svg
      height: 100%
      width: auto

  .header__notifications
    margin-left: 40px

  .header__search-form
    position: relative

  .header__search-form-icon
    position: absolute
    left: 10px
    top: 10px
    width: 18px
    height: 18px

    svg
      width: 100%
      height: 100%

  .header__search-field
    padding: 8px 20px 8px 40px
    border-radius: 30px
    border: 1px solid #ccc
    color: $text-color
    +font-smoothing

  .header__notifications
    position: relative

  .header__notifications-btn
    width: 23px
    height: 25px
    position: relative
    background-color: transparent
    border: none

    svg
      width: 100%
      height: 100%

    .header__notifications--present &:after
      content: ''
      position: absolute
      width: 13px
      height: 13px
      bottom: -3px
      right: -4px
      border: 2px solid #fff
      border-radius: 50%
      background-color: $light_green

  .header__notifications-panel
    position: absolute
    top: 100%
    z-index: 5
    right: 0
    width: 350px
    background-color: #fff
    border: 1px solid $light-grey
    border-radius: 5px
    opacity: 0
    visibility: hidden
    transition: .1s ease-out

    &.header__notifications-panel--active
      transform: translateY(10px)
      opacity: 1
      visibility: visible

  .header__notifications-item
    display: flex
    align-items: center
    border-bottom: 1px solid $light-grey
    padding: 5px 20px 5px 8px
    color: $text-color

  .header__notifications-photo
    width: 35px
    height: 35px
    border-radius: 50%
    overflow: hidden
    margin-right: 6px

    img
      display: block
      width: 100%
      height: 100%

  .header__notifications-message
    font-size: 16px
    width: 250px
    margin-right: 10px

  .header__notifications-link
    color: $light-green

  .header__notifications-close
    width: 13px
    height: 13px
    background-color: transparent
    border: none
    margin-left: auto
    color: $text-color
    
    svg
      width: 100%
      height: 100%

  .header__notifications-footer
    padding: 10px
    text-align: center
    background-color: #f9f9f9
    color: #999
    font-size: 12px

</style>
