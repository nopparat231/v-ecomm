<template>
    <header class="bg-danger py-5">
    <div class="container px-4 px-lg-5 my-5">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">Demo Shop Vue style</h1>
        <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage</p>
      </div>
    </div>
  </header>

  <Content />

</template>

<script>
import Content from './Content.vue';
export default {
name: "Home",
components:{
  Content
}
}
</script>

<style>

</style>