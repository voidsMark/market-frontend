<template>
  <div class="market-item">
    <img :src="props.img" alt="preview" class="item-preview" v-if="props.img">
    <img src="../assets/img/no-picture.jpg" alt="preview" class="item-preview" v-else>

    <div class="data">
      <div class="price">
        {{ formatPrice(props.price) }}
      </div>
      <div class="label">
        Кроссовки Nike Air Jordan
      </div>
      <div class="feedback">
        <div class="comments" v-if="props.commentsCount">
          <Icon icon="comment" />
          {{ props.commentsCount | 0 }}
        </div>
        <div class="grade" v-if="props.grade">
          <Icon icon="grade" />
          {{ props.grade }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import numeral from 'numeral'
import Icon from './Icon.vue';
// TODO: replace props as a type object
const props = defineProps<{ img?: string, label: string, price: number, grade?: number, commentsCount?: number }>()

const formatPrice = (price: number) => {
  return numeral(price).format('$ 0.00')
};
</script>

<style lang="sass">
.market-item
  display: flex
  flex-direction: column
  align-items: center
  
  border-radius: 8px
  width: clamp(50px, 100%, 320px)
  
  .item-preview
    width: 100%
    height: 100%
    object-fit: cover
    border-radius: 8px

  .data
    margin-top: 4px
    display: flex
    flex-direction: column
    align-items: start
    row-gap: 4px
    width: 100%

    .feedback
      display: flex
      flex-direction: row
      gap: 8px

      .grade, .comments
        display: inline-flex
        align-items: center
        color: var(--text-secondary)
        svg
          margin-right: 8px

      .grade
        svg
          fill: var(--text-warning)

      .comments
        svg
          fill: var(--text-secondary)

</style>