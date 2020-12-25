<template>
  <li class="flex items-center">
    <a
      class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
      :href="link"
    >
      <slot />
    </a>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: ['link']
}
</script>

<style scoped></style>
