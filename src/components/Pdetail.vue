<template>
  <section class="py-5">
    <div class="container px-4 px-lg-5">
      <div
        class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
      >
      
      
        <h1>Product Detail ID : {{ id }}</h1>
      
      </div>
    </div>
  </section>


</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped>

</style>
