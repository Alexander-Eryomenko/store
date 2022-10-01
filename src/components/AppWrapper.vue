<template>
  <div class="app-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppWrapper',
};

</script>

<style lang="scss" scoped>
.app-wrapper {
  padding: 20px 0;
  width: 1000px;
  margin: 0 auto;
}
</style>
