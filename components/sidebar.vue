<template lang="pug">
  
  aside.sidebar.sidebar--left
    .sidebar__user
      .sidebar__user-photo
        img(src='images/users/user-doctor.jpg', alt='Doctor')

      .sidebar__user-name
        | Dr. John Wisley

      .sidebar__user-bio
        | Physician

    nav.sidebar__nav
      nuxt-link.sidebar__link.sidebar__nav-link(v-for='link in links', :to='link.href')
        .sidebar__nav-link-icon

        | {{ link.name }}

    .sidebar__sign-out
      a.sidebar__link(href='#')
        .sidebar__sign-out-link-icon
        
        | Sign Out

</template>

<script>
  let links = [
    { href: 'reports', name: 'Reports' },
    { href: 'patients', name: 'Patients' },
    { href: 'providers', name: 'Health Providers' },
    { href: 'profile', name: 'My Profile' },
    { href: 'notifications', name: 'Notifications' },
    { href: 'staff', name: 'Staff' },
    { href: 'trash', name: 'Deleted Files' },
    { href: 'feature', name: 'Request Feature' },
    { href: 'about', name: 'About' }
  ]

  export default {
    name: 'sidebar',
    data () {
      return {
        links
      }
    }
  }
</script>

<style lang="sass">

  .sidebar
    width: $sidebar-width
    border-right: 1px solid $light-grey
    min-height: 100vh
    display: flex
    flex-direction: column

  .sidebar__user
    padding: 15px 25px 10px 25px
    border-bottom: 1px solid $light-grey

  .sidebar__user-photo
    width: 65px
    height: 65px
    border-radius: 50%
    overflow: hidden
    margin-bottom: 15px

    img
      width: 100%
      height: 100%
      display: block

  .sidebar__user-name
    font-size: 20px
    font-weight: 400
    color: #000
    margin-bottom: 5px

  .sidebar__user-bio
    font-size: 16px
    color: #cecece
    +font-smoothing

  .sidebar__nav
    display: flex
    flex-direction: column

  .sidebar__link
    width: 100%
    display: flex
    align-items: center
    padding: 15px 14px
    font-size: 16px
    color: $text-color

  .sidebar__nav-link
    border-left: 5px solid transparent
    
    &.global-active-link,
    &:hover
      color: $light-green
      border-left-color: $light-green
      background-color: #f9f9f9

  .sidebar__nav-link-icon
    width: 20px
    height: 20px
    margin-right: 15px

    svg
      max-width: 100%
      max-height: 100%

  .sidebar__sign-out
    margin-top: auto
    border-top: 1px solid $light-grey

  .sidebar__sign-out-link-icon
    width: 20px
    height: 20px
    margin-right: 15px

    svg
      max-width: 100%
      max-height: 100%

</style>
