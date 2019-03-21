<template>
  <div class="welcome">
    welcome to {{welcome}},my name is{{name}}
    
  </div>
</template>

<script>
export default {
  name: 'welcome',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      welcome:'兔兔网'
    };
  }
};
</script>

<style lang="scss">

</style>