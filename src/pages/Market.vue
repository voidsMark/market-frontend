<template>
  <div class="market">
    <div class="container">
      <div class="market__items-grid">
        <template v-for="item in itemsMock">
          <MarketItem
            class="market__item"
            :img="item.img"
            :label="item.label"
            :price="item.price"
            :grade="item.grade"
            :commentsCount="item.commentsCount"
            />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import MarketItem from '../components/MarketItem.vue';

const itemsMock = reactive([
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
  {
    img: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/04f8fd59-76b9-4dec-bb4a-0762a61d42db/air-jordan-1-zoom-air-cmft-2-shoes-b35MTM.png',
    label: 'Кроссовки Nike Air Jordan',
    price: 559.99,
    grade: 4.8,
    commentsCount: 1281,
  },
])

</script>

<style lang="sass">
.market
  .market__items-grid
    margin-top: 20px

    display: grid
    grid-template-columns: repeat(4, minmax(150px, 1fr))
    grid-gap: 20px
</style>