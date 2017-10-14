<template lang='pug'>

  .validation-error__tooltip
    .validation-error__tooltip-icon
      <icon name='error_info'></icon>

    .validation-error__tooltip-message(v-html='message')

</template>

<script>
  import Icon from '~/components/Icon'

  export default {
    name: 'validation-error-tooltip',
    props: ['message'],
    components: { Icon }
  }
</script>

<style lang="sass">
  
  .validation-error__tooltip
    position: absolute
    right: 15px
    top: calc(50% - 12px)
    width: 15px
    height: 15px
    color: $error-color
    opacity: 0
    visibility: hidden
    transition: opacity .25s ease-out, visibility .25s ease-out, top .3s ease-out
    
    .validation-error &
      top: calc(50% - 6px)
      opacity: 1
      visibility: visible
  
  .validation-error__tooltip-icon
    cursor: pointer
    
    svg
      width: 100%
      height: 100%
  
  .validation-error__tooltip-message
    white-space: nowrap
    padding: 13px 10px
    background-color: #fff 
    font-size: 13px
    border-radius: 4px
    border: 1px solid $light-grey
    position: absolute
    top: calc(100% + 5px)
    right: 7px
    opacity: 0
    visibility: hidden
    transition: opacity .25s ease-out, visibility .25s ease-out, top .3s ease-out
    
    .validation-error__tooltip:hover &
      top: calc(100% + 11px)
      opacity: 1
      visibility: visible
    
    &:after
      content: ''
      position: absolute
      top: -9px
      right: 1px
      width: 0
      height: 0
      border-style: solid
      border-width: 0 0 9px 9px
      border-color: transparent transparent #fff transparent
    
    &:before
      content: ''
      position: absolute
      top: -11px
      right: 0
      width: 0
      height: 0
      border-style: solid
      border-width: 0 0 11px 11px
      border-color: transparent transparent $light-grey transparent

</style>
