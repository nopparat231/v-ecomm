<template>
  <div>
       <!-- Footer-->
        <footer class="py-5 bg-danger">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; My V Website {{ year }}</p></div>
        </footer>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
export default {
  setup(){
    const year = computed(() => new Date().getFullYear())
    return {year}
  }

}
</script>

<style>

</style>