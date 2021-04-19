<template>
  <div class="todo">
    {{ msg }}
  </div>
</template>

<script>

import {computed} from "@vue/composition-api";

export default {
  name: "Todo",
  props: {
    avg: Number,
  },
  setup(props) {
    const msg = computed(() => `평균 ${props.avg}`)
    console.log(props)
    return { msg }
  },
}
</script>

<style scoped>

</style>