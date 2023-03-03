<template>
    <div class="wrap">
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="name"></use>
        </svg>
        <span>{{label}}</span>
    </div>
</template>
<script>

export default {
  props: {
    name: String,
    label: String
  }
}
</script>

<style scoped>
    .icon {
      width:2em;
      height:1em;
      vertical-align: 0em;
      cursor:pointer;
      font-size: 30px;
      padding:5px;
      border-radius: 5px;
      box-shadow: 0 1px 0 rgb(255, 241, 241) inset, 0 1px 1px rgb(186, 172, 172);
      background-color:rgb(230, 218, 218);
      background: linear-gradient(to bottom, rgb(220, 209, 209), rgb(186, 172, 172));
    }
    .icon:hover {
      background: linear-gradient(to top, rgb(245,245,245), rgb(211, 203, 203))
    }
    .icon:active{
      background: linear-gradient(to bottom, rgb(245,245,245), rgb(211, 203, 203))
    }
    span {
        display:block;
        position:relative;
        bottom:5px;
        font-size:15px;
        font-family:Arial;
        padding-left:4px;
        letter-spacing: 4px;
        cursor:default;
        user-select:none
    }
    .wrap {
      padding:0px 1px
    }
</style>
