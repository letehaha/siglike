<template lang="pug">
  
  .heal-provider
    section.heal-provider__main
      ul.heal-provider__list
        li.heal-provider__item(v-for='item in providers')
          label.heal-provider__item-check
            input.heal-provider__item-check-field(type='checkbox')
            .heal-provider__item-check-style(@click='selectProvider')
              .heal-provider__item-check-style-icon
                <icon name='check'></icon>

          .heal-provider__item-photo(@click='unSelectProvider')
            .heal-provider__item-photo-mask
              .heal-provider__item-photo-mask-icon
                <icon name='check'></icon>
            
            img.heal-provider__item-photo-img(:src="'img/' + item.user_avatar",
                                              :alt="item.name + ' ' + item.s_name")

          .heal-provider__item-info
            nuxt-link.heal-provider__item-name(:to="'providers/'+item.id")
              | {{ item.name + ' ' + item.s_name }}

            .heal-provider__item-bio
              | {{ item.profession }}

            .heal-provider__item-location
              .heal-provider__item-location-icon
                <icon name='place'></icon>
              
              | {{ item.location }}

          .heal-provider__item-share
            button.heal-provider__item-share-button.js-share-open-btn(type='button')
              | Share
    
    aside.heal-provide-profile__addons
      button.heal-provide-profile__share.js-add-heal-provider(type='button', title='Add heal provider')
        | Add heal provider

      .heal-provide-profile__share-inner#js-share
        .heal-provide-profile__share-title
          | Share

        ul.heal-provide-profile__share-list
          li.heal-provide-profile__share-item.heal-provide-profile__share-item--twitter
            a.heal-provide-profile__share-link(href='#')
              | twitter

          li.heal-provide-profile__share-item.heal-provide-profile__share-item--facebook
            a.heal-provide-profile__share-link(href='#')
              | facebook

          li.heal-provide-profile__share-item.heal-provide-profile__share-item--google
            a.heal-provide-profile__share-link(href='#')
              | google_plus

        .heal-provide-profile__share-copy
          .heal-provide-profile__share-copy-title
            | Copy Link

          .heal-provide-profile__share-copy-field
            input.heal-provide-profile__share-copy-input#js-share-copy-input
            
            button.heal-provide-profile__share-copy-btn#js-share-copy-button(type='button', title='Copy link')
              | copy

              .heal-provide-profile__share-copy-tooltip
                | Copied!

          .heal-provide-profile__share-cancel
            button.heal-provide-profile__share-cancel-btn#js-cancel-share(type='button', title='Close')
              | Cancel

</template>

<script>
  import Icon from '~/components/Icon'

  const CLASS_ITEM = 'heal-provider__item'
  const CLASS_CHECKED = 'heal-provider__item--checked'

  export default {
    name: 'providers-page',
    data () {
      return {
      }
    },
    components: { Icon },
    methods: {
      providerToggleCheckbox (element) {
        element.classList.toggle(CLASS_CHECKED)
      },
      selectProvider () {
        let target = event.target
        while (true) {
          if (target.classList.contains(CLASS_ITEM)) {
            this.providerToggleCheckbox(target)
            return false
          }

          target = target.parentNode
        }
      },
      unSelectProvider () {
        let target = event.target
        while (true) {
          if (target.classList.contains(CLASS_ITEM)) {
            if (target.classList.contains(CLASS_CHECKED)) {
              this.providerToggleCheckbox(target)
              return false
            }
            return false
          }

          target = target.parentNode
        }
      }
    },
    computed: {
      providers () {
        return this.$store.state.providers.providers
      }
    }
  }
</script>

<style lang="sass">

  .heal-provider
    display: flex
    height: 100%

  .heal-provider__main
    border-top: 1px solid $light-grey
    padding: 10px
    width: calc(100% - 300px)

  .heal-provider__list
    display: flex
    flex-wrap: wrap

  .heal-provider__item
    width: calc(33.333% - 7px)
    height: 110px
    background-color: #fff
    padding: 5px 15px 15px 10px
    border: 1px solid $light-grey
    border-radius: 3px
    display: flex
    
    &:not(:nth-child(3n+1))
      margin-left: 10px

    &:nth-child(n+4)
      margin-top: 5px

    &.heal-provider__item--checked
      border-color: $light-green

  .heal-provider__item-check
    margin: auto 10px auto 0
    opacity: 0
    width: 18px
    height: 18px
    position: relative
    user-select: none

    .heal-provider__item:hover &,
    .heal-provider__item--checked &
      opacity: 1

  .heal-provider__item-check-field
    opacity: 0

  .heal-provider__item-check-style
    position: absolute
    top: 0
    left: 0
    height: 100%
    width: 100%
    background-color: #fff
    color: #fff
    border: 1px solid $light-grey
    border-radius: 3px
    display: flex
    align-items: center
    justify-content: center

    .heal-provider__item--checked &
      background-color: $light-green

    svg
      width: 100%
      height: 100%
      display: block
  
  .heal-provider__item-check-style-icon
    opacity: 0
    width: 10px
    height: 10px
    
    .heal-provider__item--checked &
      opacity: 1

  .heal-provider__item-photo
    width: 65px
    height: 65px
    overflow: hidden
    border-radius: 50%
    margin-right: 10px
    position: relative

  .heal-provider__item-photo-img
    display: block
    width: 100%
    height: 100%

  .heal-provider__item-photo-mask
    background-color: $light-green
    color: #fff
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    opacity: 0
    display: flex
    align-items: center
    justify-content: center

    .heal-provider__item--checked &
      opacity: 1

    svg
      width: 100%
      height: 100%
      margin: auto
  
  .heal-provider__item-photo-mask-icon
    height: 30px
    width: 30px

  .heal-provider__item-info
    margin: auto 0
    text-align: left

  .heal-provider__item-name
    font-size: 20px
    font-weight: 400
    color: #000
    margin-bottom: 5px

  .heal-provider__item-bio,
  .heal-provider__item-location
    font-size: 16px
    color: #cecece
    +font-smoothing

  .heal-provider__item-location
    margin-top: 10px
    display: flex
  
  .heal-provider__item-location-icon
    width: 18px
    margin-right: 10px

  .heal-provider__item-share
    margin-left: auto
    margin-top: auto

  .heal-provider__item-share-button
    width: 95px
    color: $light-green
    border: 1px solid $light-grey
    border-radius: 30px
    font-size: 16px
    height: 32px
    cursor: pointer
    background-color: #fff

    .heal-provider__item:hover &,
    .heal-provider__item--checked &
      color: #fff
      border-color: $light-green
      background-color: $light-green

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
