<template>
  <div class="layout">
    <header>Header</header>
    <main>
      <slot />
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>

<style scoped>
/* 样式 */
</style>
