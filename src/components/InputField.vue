<template>
  <div class="input-field">
    <div v-if="props.type === 'search'" class="input-field__search">
      <input type="text" placeholder="Search...">

      <div class="search-btn" @click="search">
        <Icon icon="search" />
      </div>
    </div>

    <div v-else>
      <input type="text" placeholder="Input">
    </div>
  </div>
</template>

<script lang="ts" setup>
import Icon from './Icon.vue';

const props = defineProps<{ type?: string }>();

const search = () => {
  return null
}

</script>

<style lang="sass">
.input-field
  min-width: 200px
  max-width: 100%

  border: 2px solid var(--border-accent)
  border-radius: 8px
  .input-field__search
    display: inline-flex
    overflow: hidden

    input
      border: none
      outline: none
      border-radius: 8px 0 0 8px
      padding: 10px 20px
      width: 100%
      background-color: var(--background-secondary)
      color: var(--text-primary)

      &::placeholder
        color: var(--text-secondary)

    .search-btn
      display: flex
      justify-content: center
      align-items: center
      cursor: pointer

      width: 120px
      background-color: var(--background-accent)
      svg
        fill: var(--text-primary)
</style>