<template>
  <div class="app-header__backing" />
  <header class="app-header">
    <div class="container">
      <div class="app-header__start">
        <router-link class="app-header__link" to="/">
          <img src="../assets/blobs/logo.png" alt="logo" class="app-header__logo">
        </router-link>
      </div>

      <InputField type="search"/>

      <div class="app-header__end">
        <router-link class="app-header__link" to="/orders">
          <Icon icon="box" />
          <span class="desktop-only">Orders</span>
        </router-link>

        <router-link class="app-header__link" to="/favorites">
          <Icon icon="favorite" />
          <span class="desktop-only">Favorites</span>
        </router-link>

        <router-link class="app-header__link" to="/cart">
          <Icon icon="cart" />
          <span class="desktop-only">Cart</span>
        </router-link>

        <router-link class="app-header__link" to="/account">
          <Icon icon="account" />
          <span class="desktop-only">Account</span>
        </router-link>
      </div>

    </div>
  </header>
</template>

<script lang="ts" setup>
import Icon  from './Icon.vue';
import InputField from './InputField.vue';


</script>

<style lang="sass">
.app-header__backing
  height: 72px

  @media(max-width: 800px)
    height: 48px

.app-header
  background-color: var(--background-primary)
  border-bottom: 1px solid var(--background-secondary)
  flex-shrink: 0
  height: 72px
  position: fixed
  left: 0
  right: 0
  top: 0
  z-index: 1000
  
  @media(max-width: 800px)
    height: 48px

  .container
    display: flex
    align-items: center
    justify-content: space-between
    gap: 20px
    height: 100%

    .app-header__logo
      // width: clamp(64px, 100%, 280px)
      width: 100%
      max-width: 280px
      max-height: 68px
      @media(max-width: 800px)
        max-height: 44px

    .app-header__start, .app-header__end
      width: 280px
      display: inline-flex

    .app-header__end
      justify-content: space-evenly

  .app-header__link
    display: flex
    flex-direction: column
    align-items: center
    svg
      fill: var(--text-primary)
</style>