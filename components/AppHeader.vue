<template lang="pug">
  
  header.header
    .header__wrapper
      <logotype class-name='header__logotype'></logotype>

      .header__search
        form.header__search-form
          .header__search-form-icon
            <icon name='search'></icon>
          
          input.header__search-field(type='text', placeholder='Search')
      
      .header__notifications.header__notifications--present(ref='headerNotifications')
        button.header__notifications-btn#js-header__notifications-btn(title='Show Notifications', v-on:click='showNotifications')
          <icon name='notifications'></icon>
        
        .header__notifications-panel(ref='notificationsPanel')
          ul.header__notifications-list(ref='notificationsList')
            li.header__notifications-item(v-for='item in notifications')
              .header__notifications-photo
                img.header__notifications-photo-img(:src="`img/${item.photo}`", :alt='item.author')

              .header__notifications-message
                a.header__notifications-link(:href='item.href')
                  | {{ item.author }} 
                
                | {{ item.action }}.
              
              button.header__notifications-close(type='button', title='Delete', v-on:click='hideNotifications')
                <icon name='close'></icon>

          .header__notifications-footer
            | Don't have any notification

</template>

<script>
  import Icon from './Icon'
  import Logotype from './Logotype'

  let notifications = [
    { photo: 'users/user-doctor.jpg', href: '#', author: 'Dr. Shiley', action: 'send a file.' },
    { photo: 'users/user-doctor.jpg', href: '#', author: 'Dr. Shiley', action: 'send a file.' },
    { photo: 'users/user-doctor.jpg', href: '#', author: 'Kadamb Diagonitics', action: 'deleted his profile.' },
    { photo: 'users/user-doctor.jpg', href: '#', author: 'Kadamb Diagonitics', action: 'viewed your profile.' },
    { photo: 'users/user-doctor.jpg', href: '#', author: 'Dr. Shiley', action: 'type an message.' }
  ]

  const CLASS_PRESENT = 'header__notifications--present'
  const CLASS_ACTIVE = 'header__notifications-panel--active'
  const CLASS_CLOSE = 'header__notifications-close'

  export default {
    name: 'app-header',
    data () {
      return {
        notifications: notifications
      }
    },
    components: { Icon, Logotype },
    methods: {
      checkHeaderNotifications () {
        let headerNotificationsPanel = this.$refs.notificationsPanel
        let headerNotifications = this.$refs.headerNotifications
        if (this.$refs.notificationsList.children.length === 0) {
          headerNotificationsPanel.classList.remove(CLASS_ACTIVE)
          headerNotifications.classList.remove(CLASS_PRESENT)
        }
      },
      showNotifications () {
        let headerNotificationsPanel = this.$refs.notificationsPanel
        let headerNotifications = this.$refs.headerNotifications

        if (!headerNotifications.classList.contains(CLASS_PRESENT)) {
          return false
        }

        headerNotificationsPanel.classList.toggle(CLASS_ACTIVE)
      },
      hideNotifications () {
        let target = event.target
        while (target !== this) {
          if (target.classList.contains(CLASS_CLOSE)) {
            target.parentNode.parentNode.removeChild(target.parentNode)
            this.checkHeaderNotifications()
            return false
          }

          target = target.parentNode
        }
      }
    }
  }
</script>

<style lang="sass"> 
  // TODO: fix excess rules
  
  .header__logotype
    height: 45px
    margin-right: auto

  .header__wrapper
    display: flex
    align-items: center
    padding: 15px 45px
    background-color: #fff

  .header__notifications
    margin-left: 40px

  .header__search-form
    position: relative

  .header__search-form-icon
    position: absolute
    left: 10px
    top: calc(50% - 9px)
    width: 18px
    height: 18px

    svg
      width: 100%
      height: 100%

  .header__search-field
    @extend %field
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
