<template lang="pug">
  
  .heal-provide-profile
    section.heal-provide-profile__main
      .heal-provide-profile__tab-info
        header.heal-provide-profile__header
          .heal-provide-profile__info
            button.heal-provide-profile__back
              | arrow_left

            .heal-provide-profile__photo
              img.heal-provide-profile__photo-img(src='images/users/user-doctor.jpg', alt='Doctor')
            
            .heal-provide-profile__bio
              .heal-provide-profile__bio-name
                | Dr. Williber

              .heal-provide-profile__bio-role
                .heal-provide-profile__bio-role-icon
                  | radiologist
                
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

          .heal-provide-profile__nav#tabs__btns-list(v-on:click='showTab')
            button.heal-provide-profile__item
              | User Info

            button.heal-provide-profile__item
              | Report History
        
        #tabs__content-list.heal-provide-profile__body.scrollable
          .heal-provide-profile__body-content
            ul.heal-provide-profile__info-list
              li.heal-provide-profile__info-item
                .heal-provide-profile__info-header
                  .heal-provide-profile__info-header-title
                    | Basic Info

                ul.heal-provide-profile__info-body
                  li.heal-provide-profile__info-elem
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        | my_profile

                      | Facility Name

                    .heal-provide-profile__info-elem-info
                      | Sadbhav Hospital

              li.heal-provide-profile__info-item
                .heal-provide-profile__info-header
                  .heal-provide-profile__info-header-title
                    | Work and Education

                ul.heal-provide-profile__info-body
                  li.heal-provide-profile__info-elem
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        | my_profile

                      | Education

                    .heal-provide-profile__info-elem-info
                      | MBBS , MD (Medicine)

                  li.heal-provide-profile__info-elem
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        | my_profile

                      | Specialty

                    .heal-provide-profile__info-elem-info
                      | Radiologist

                  li.heal-provide-profile__info-elem
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        | my_profile

                      | Experiance

                    .heal-provide-profile__info-elem-info
                      | 30 Year
                
              li.heal-provide-profile__info-item
                .heal-provide-profile__info-header
                  .heal-provide-profile__info-header-title
                    | Address

                ul.heal-provide-profile__info-body
                  li.heal-provide-profile__info-elem
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        | my_profile

                      | Address

                    .heal-provide-profile__info-elem-info
                      | 156 – O Block

                  li.heal-provide-profile__info-elem
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        | my_profile

                      | Area

                    .heal-provide-profile__info-elem-info
                      | Patel State

                  li.heal-provide-profile__info-elem
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        | my_profile

                      | City

                    .heal-provide-profile__info-elem-info
                      | Naranpura

              li.heal-provide-profile__info-item
                .heal-provide-profile__info-header
                  .heal-provide-profile__info-header-title
                    | Contact Persons

                ul.heal-provide-profile__info-body
                  li.heal-provide-profile__info-elem
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        | my_profile

                      | Reception

                    .heal-provide-profile__info-elem-info
                      | +91 021 1234567

              li.heal-provide-profile__info-item
                .heal-provide-profile__info-header
                  .heal-provide-profile__info-header-title
                    | Personal Contact

                ul.heal-provide-profile__info-body
                  li.heal-provide-profile__info-elem
                    .heal-provide-profile__info-elem-title
                      .heal-provide-profile__info-elem-title-icon
                        | my_profile

                      | Dr. Williber

                    .heal-provide-profile__info-elem-info
                      | +91 021 1234567

                  li.heal-provide-profile__info-elem.heal-provide-profile__info-elem--note
                    .heal-provide-profile__info-elem-note
                      | Call in emergency only
          
          .heal-provide-profile__body-content
            .heal-provide-profile__reports
              .heal-provide-profile__reports-elem.heal-provide-profile__reports-elem--folders
                .heal-provide-profile__reports-title
                  | Folders
                
                ul.heal-provide-profile__reports-list
                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | Folder

                    .heal-provide-profile__reports-item-name
                      | Blood Pressure Reports

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM

                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | Folder

                    .heal-provide-profile__reports-item-name
                      | Blood Pressure Reports

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM

                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | Folder

                    .heal-provide-profile__reports-item-name
                      | Blood Pressure Reports

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM

                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | Folder

                    .heal-provide-profile__reports-item-name
                      | Blood Pressure Reports

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM

                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | Folder

                    .heal-provide-profile__reports-item-name
                      | Blood Pressure Reports

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM

                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | Folder

                    .heal-provide-profile__reports-item-name
                      | Blood Pressure Reports

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM

                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | Folder

                    .heal-provide-profile__reports-item-name
                      | Blood Pressure Reports

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM

                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | Folder

                    .heal-provide-profile__reports-item-name
                      | Blood Pressure Reports

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM
              
              .heal-provide-profile__reports-elem.heal-provide-profile__reports-elem--files
                .heal-provide-profile__reports-title
                  | Files

                ul.heal-provide-profile__reports-list
                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | File

                    .heal-provide-profile__reports-item-name
                      | Dr. Juhaid Doc.

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM
                  
                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | File

                    .heal-provide-profile__reports-item-name
                      | Dr. Juhaid Doc.

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM
                  
                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | File

                    .heal-provide-profile__reports-item-name
                      | Dr. Juhaid Doc.

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM
                  
                  li.heal-provide-profile__reports-item
                    .heal-provide-profile__reports-item-icon
                      | File

                    .heal-provide-profile__reports-item-name
                      | Dr. Juhaid Doc.

                    .heal-provide-profile__reports-item-date
                      | 19/07/17 , 9:38 PM

    aside.heal-provide-profile__addons
      button.heal-provide-profile__share.js-share-open-btn(type='button', title='Share')
        | Share

      button.heal-provide-profile__user-delete(type='button', title='Delete Provider')
        .heal-provide-profile__user-delete-icon
          | Basket

        | Delete Provider

</template>

<script>
  function HTMLCollectionToArray (array) {
    return Array.prototype.slice.call(array)
  }

  function variable () { // TODO: fixed it
    let contentList = document.getElementById('tabs__content-list')
    return contentList
  }

  function showCurrentTab () { // TODO: fixed call document.fetElementById
    function activeTab () {
      let tabsBtns = document.getElementById('tabs__btns-list')
      let childrens = HTMLCollectionToArray(tabsBtns.children)

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
    };

    let tab = activeTab()
    let tabs = HTMLCollectionToArray(document.getElementById('tabs__content-list').children)
    let activeTabBtn = tabs[tab]

    activeTabBtn.classList.add('visible')
  };

  export default {
    name: 'providers-page',
    data () {
      return {
      }
    },
    asyncData () {
      return showCurrentTab()
    },
    methods: {
      showTab: (e) => {
        let target = e.target
        let tabs = HTMLCollectionToArray(e.currentTarget.children)
        let tabsContent = HTMLCollectionToArray(variable().children) // TODO: fixed it

        tabs.forEach(function (item) {
          item.classList.remove('active')
        })

        tabsContent.forEach(function (item) {
          item.classList.remove('visible')
        })

        target.classList.add('active')

        showCurrentTab()
      }
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
