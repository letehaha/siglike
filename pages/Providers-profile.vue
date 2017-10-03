<template lang="pug">
  
  .heal-provide-profile
    section.heal-provide-profile__main
      .heal-provide-profile__tab-info
        header.heal-provide-profile__header
          .heal-provide-profile__info
            nuxt-link.heal-provide-profile__back(to='/providers')
              <Icon name='arrow_left'></Icon>

            .heal-provide-profile__photo
              img.heal-provide-profile__photo-img(src='img/users/user-doctor.jpg', alt='Doctor')
            
            .heal-provide-profile__bio
              .heal-provide-profile__bio-name
                | Dr. Williber

              .heal-provide-profile__bio-role
                .heal-provide-profile__bio-role-icon
                  <Icon name='radiologist'></Icon>
                
                | Radiologist

            ul.heal-provide-profile__files-info
              li.heal-provide-profile__files-item
                .heal-provide-profile__files-title
                  | Send files

                button.heal-provide-profile__files-btn
                  | 57

              li.heal-provide-profile__files-item
                .heal-provide-profile__files-title
                  | Received files

                button.heal-provide-profile__files-btn
                  | 113

          .heal-provide-profile__nav(v-on:click='showTab', ref='tabsList')
            button.heal-provide-profile__item
              | User Info

            button.heal-provide-profile__item
              | Report History
        
        .heal-provide-profile__body.scrollable(ref='tabsContentList')
          .heal-provide-profile__body-content
            ul.heal-provide-profile__info-list
              li.heal-provide-profile__info-item(v-for='item in provider.user_info')
                .heal-provide-profile__info-header
                  .heal-provide-profile__info-header-title
                    | {{ item.title }}

                ul.heal-provide-profile__info-body
                  li.heal-provide-profile__info-elem(v-for='info in item.items')
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        <Icon :name='info.icon'></Icon>

                      | {{ info.title }}

                    .heal-provide-profile__info-elem-info
                      | {{ info.info }}

                  li.heal-provide-profile__info-elem.heal-provide-profile__info-elem--note(v-if='item.note.status === true')
                    .heal-provide-profile__info-elem-note
                      | {{ item.note.message }}
          
          .heal-provide-profile__body-content
            .heal-provide-profile__reports
              .heal-provide-profile__reports-elem.heal-provide-profile__reports-elem--folders
                .heal-provide-profile__reports-title
                  | Folders
                
                ul.heal-provide-profile__reports-list
                  li.heal-provide-profile__reports-item(v-for='folder in provider.report_history.folders')
                    .heal-provide-profile__reports-item-icon
                      <Icon :name='folder.icon'></Icon>

                    .heal-provide-profile__reports-item-name
                      | {{ folder.name }}

                    .heal-provide-profile__reports-item-date
                      | {{ folder.date }}
              
              .heal-provide-profile__reports-elem.heal-provide-profile__reports-elem--files
                .heal-provide-profile__reports-title
                  | Files

                ul.heal-provide-profile__reports-list
                  li.heal-provide-profile__reports-item(v-for='file in provider.report_history.files')
                    .heal-provide-profile__reports-item-icon
                      <Icon :name='file.icon'></Icon>

                    .heal-provide-profile__reports-item-name
                      | {{ file.name }}

                    .heal-provide-profile__reports-item-date
                      | {{ file.date }}

    aside.heal-provide-profile__addons
      button.heal-provide-profile__share.js-share-open-btn(type='button', title='Share')
        | Share

      button.heal-provide-profile__user-delete(type='button', title='Delete Provider')
        .heal-provide-profile__user-delete-icon
          <Icon name='basket'></Icon>

        | Delete Provider

</template>

<script>
  import Icon from '~/components/Icon'

  function HTMLCollectionToArray (array) {
    return Array.prototype.slice.call(array)
  }

  let provider = {
    user_info: {
      basic_info: {
        title: 'Basic Info',
        items: [
          { icon: 'my_profile', title: 'Facility Name', info: 'Sadbhav Hospital' }
        ],
        note: {
          status: false,
          message: ''
        }
      },
      experiance: {
        title: 'Work and Education',
        items: [
          { icon: 'my_profile', title: 'Education', info: 'MBBS , MD (Medicine)' },
          { icon: 'my_profile', title: 'Specialty', info: 'Radiologist' },
          { icon: 'my_profile', title: 'Experiance', info: '30 Year' }
        ],
        note: {
          status: false,
          message: ''
        }
      },
      address: {
        title: 'Address',
        items: [
          { icon: 'my_profile', title: 'Address', info: '156 – O Block' },
          { icon: 'my_profile', title: 'Area', info: 'Patel State' },
          { icon: 'my_profile', title: 'City', info: 'Naranpura' }
        ],
        note: {
          status: false,
          message: ''
        }
      },
      persons: {
        title: 'Contact Persons',
        items: [
          { icon: 'my_profile', title: 'Reception', info: '+91 021 1234567' }
        ],
        note: {
          status: false,
          message: ''
        }
      },
      contact: {
        title: 'Personal Contact',
        items: [
          { icon: 'my_profile', title: 'Dr. Williber', info: '+91 021 1234567' }
        ],
        note: {
          status: true,
          message: 'Call in emergency only'
        }
      }
    },
    report_history: {
      files: [
        { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
        { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
        { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' },
        { icon: 'file', name: 'Dr. Juhaid Doc.', date: '19/07/17 , 9:38 PM' }
      ],
      folders: [
        { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
        { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
        { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
        { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
        { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
        { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
        { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' },
        { icon: 'folder', name: 'Blood Pressure Reports', date: '19/07/17 , 9:38 PM' }
      ]
    }
  }

  export default {
    name: 'providers-profile-page',
    data () {
      return {
        provider: provider
      }
    },
    components: { Icon },
    methods: {
      activeTab () {
        let tabsBtns = this.$refs.tabsList
        let childrens = tabsBtns.children

        function checkChildClass (childrens, className) {
          let i = 0

          while (i < childrens.length) {
            let item = childrens[i]

            if (item.classList.contains(className.toString())) {
              return i
            }
            i++
          }
        };

        if (checkChildClass(childrens, 'active') === undefined) {
          let child = childrens[0]

          child.classList.add('active')
          return 0
        } else {
          return checkChildClass(childrens, 'active')
        }
      },
      showCurrentTab () {
        let tab = this.activeTab()
        let tabs = this.$refs.tabsContentList.children
        let activeTabBtn = tabs[tab]

        activeTabBtn.classList.add('visible')
      },
      showTab (e) {
        let target = e.target
        let tabs = HTMLCollectionToArray(e.currentTarget.children)
        let contentList = this.$refs.tabsContentList
        let tabsContent = HTMLCollectionToArray(contentList.children)

        tabs.forEach(function (item) {
          item.classList.remove('active')
        })

        tabsContent.forEach(function (item) {
          item.classList.remove('visible')
        })

        target.classList.add('active')

        this.showCurrentTab()
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.showCurrentTab()
      })
    }
  }
</script>

<style lang="sass">

  .heal-provide-profile
    display: flex
    height: 100%

  .heal-provide-profile__main
    width: calc(100% - 300px)

  .heal-provide-profile__header
    @extend %profile-header

  .heal-provide-profile__info
    @extend %profile-info

  .heal-provide-profile__back
    width: 42px // 22px + 20px
    height: 65px // 15px + 20px
    background-color: transparent
    border: none
    font-size: 20px
    padding: 20px 0 20px 20px
    color: $text-color

    svg
      height: 100%
      width: 100%

  .heal-provide-profile__photo
    @extend %profile-photo

  .heal-provide-profile__photo-img
    @extend %profile-photo-img

  .heal-provide-profile__bio
    @extend %profile-bio

  .heal-provide-profile__bio-name
    @extend %profile-bio-name

  .heal-provide-profile__bio-role
    @extend %profile-bio-role

  .heal-provide-profile__bio-role-icon
    @extend %profile-bio-role-icon

  .heal-provide-profile__files-info
    margin-left: auto
    text-align: right

  .heal-provide-profile__files-item
    &:not(:first-child)
      margin-top: 10px

  .heal-provide-profile__files-title
    font-size: 12px
    color: $text-color
    margin-bottom: 5px

  .heal-provide-profile__files-btn
    padding: 5px 25px
    border: 1px solid $light-green
    color: $light-green
    background-color: transparent
    border-radius: 30px
    transition: .15s ease-out

    &:hover
      background-color: $light-green
      color: #fff

  .heal-provide-profile__nav
    display: flex

  .heal-provide-profile__item
    @extend %tab

    &.active
      @extend %tab-active

  .heal-provide-profile__addons
    @extend %addons

  .heal-provide-profile__share
    width: 200px
    height: 40px
    @extend %addons-btn

  .heal-provide-profile__user-delete
    @extend %addons-btn-link

  .heal-provide-profile__user-delete-icon
    @extend %addons-btn-link-icon

  .heal-provide-profile__share-inner
    @extend %share

  .heal-provide-profile__share-title
    @extend %share-title

  .heal-provide-profile__share-list
    @extend %share-list

  .heal-provide-profile__share-item
    @extend %share-item

  .heal-provide-profile__share-link
    width: 100%
    height: 100%
    @extend %flex-center

    .heal-provide-profile__share-item--twitter &
      color: $twitter-color

      svg
        width: 33px
        height: 26px

    .heal-provide-profile__share-item--facebook &
      color: $facebook-color

      svg
        width: 15px
        height: 33px

    .heal-provide-profile__share-item--google &
      color: $google-plus-color

      svg
        width: 30px
        height: 30px

  .heal-provide-profile__share-copy
    margin-top: 30px

  .heal-provide-profile__share-copy-title
    font-size: 16px
    color: $text-color
    font-weight: 500
    margin-bottom: 20px

  .heal-provide-profile__share-copy-field
    display: flex

  $heal-provide-profile__share-copy-btn-width: 35px

  .heal-provide-profile__share-copy-input
    width: calc(100% - #{$heal-provide-profile__share-copy-btn-width})
    @extend %share-input

  .heal-provide-profile__share-copy-btn
    width: $heal-provide-profile__share-copy-btn-width
    @extend %share-copy

  .heal-provide-profile__share-copy-tooltip
    @extend %share-copy-tooltip
    opacity: 0
    visibility: hidden
    transition: .3s ease-out
    
    .heal-provide-profile__share-copy-btn.active &
      opacity: 1
      visibility: visible

  .heal-provide-profile__share-cancel
    margin-top: 30px
    text-align: right

  .heal-provide-profile__share-cancel-btn
    font-size: 15px
    color: #a0a0a0
    background-color: transparent
    border: none
    transition: .2s ease-out

    &:active
      color: $light-green

  .heal-provide-profile__body
    padding: 20px 10px
    height: calc(100vh - 255px)

  .heal-provide-profile__info-list
    display: inline-flex
    flex-direction: column
    width: 100%

  .heal-provide-profile__info-item
    @extend %table-item

  .heal-provide-profile__info-header
    @extend %table-header

  .heal-provide-profile__info-header-title
    @extend %table-header-title

  .heal-provide-profile__info-body
    @extend %table-body

  .heal-provide-profile__info-elem
    @extend %table-body-item

  .heal-provide-profile__info-elem--note
    padding: 10px 20px

  .heal-provide-profile__info-elem-title
    @extend %table-body-item-title

  .heal-provide-profile__info-elem-title-icon
    @extend %table-body-item-title-icon

  .heal-provide-profile__info-elem-info
    width: 350px

  .heal-provide-profile__info-elem-note
    display: block
    width: 100%
    text-align: center
    font-size: 14px
    color: #ccc

  .heal-provide-profile__body-content
    display: none
    
    &.visible
      display: block

  .heal-provide-profile__reports
    text-align: left

  .heal-provide-profile__reports-elem
    &:not(:first-child)
      margin-top: 15px

  .heal-provide-profile__reports-title
    font-size: 14px
    color: #999
    margin-bottom: 15px
    padding-left: 40px

  .heal-provide-profile__reports-list
    display: flex
    flex-wrap: wrap

  .heal-provide-profile__reports-item
    width: calc(50% - 10px)
    background-color: #fff
    border: 1px solid $light-grey
    border-radius: 5px
    padding: 10px 40px 10px 50px
    display: flex
    align-items: center
    height: 55px
    font-size: 14px
    color: #4d4d4d

    &:nth-child(odd)
      margin-right: 10px

    &:nth-child(n + 3)
      margin-top: 6px

  .heal-provide-profile__reports-item-icon
    margin-right: 20px
    flex: none
    width: 35px
    color: $text-color

    .heal-provide-profile__reports-elem--folders &
      color: $light-green

    svg
      height: 100%

  .heal-provide-profile__reports-item-date
    margin-left: auto

</style>
