<template>
  <div class="pt-16 h-full relative flex justify-center items-center">
    <div
      v-if="cover"
      class="h-full w-full absolute top-0 left-0 bg-center bg-cover"
      :style="{ backgroundImage: `url(${cover})` }"
    />
    <span class="w-full h-full absolute opacity-75 bg-black top-0 left-0" />
    <slot />
  </div>
</template>

<script lang="ts">
import { mapGetters } from 'vuex'
export default {
  name: 'Hero',
  computed: {
    ...mapGetters(['cover'])
  }
}
</script>

<style scoped></style>
