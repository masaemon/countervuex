<template>
  <div>
    <section class="section">
      <div class="container">
        <p class="title is-3">カウンター</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column" />
          <div class="column counter">
            <p class="title is-3 ">{{ count }}</p>
            <div>
              <button class="button" v-on:click="increment">たす</button>
            </div>
            <br>
            <div>
              <button class="button" v-on:click="decrement">ひく</button>
            </div>
          </div>
          <div class="column" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters({
      count: 'count'
    }),
  },
  methods: {
    ...mapActions({
      increment: 'increment',
      decrement: 'decrement',
    })
  }
}
</script>

<style scoped>
  .counter {
    text-align: center;
  }
</style>
