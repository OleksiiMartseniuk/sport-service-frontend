<template>
  <q-card class="text-white no-shadow" bordered style="background-color: #181c4d">
    <q-card-section>
      <div class="text-h6 q-pa-sm">
        {{ name }}
      </div>
      <div class="q-pa-sm">
        {{ text }} <span class="text-red-6">{{ des }}</span>
      </div>
    </q-card-section>
    <q-separator dark />
    <q-card-actions vertical>
      <q-btn :to="to" flat>Go to</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "CardProfileDark",
  props: {
    name: {
      type: String,
      request: true,
    },
    des: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      request: true,
    }
  }
})
</script>

<style scoped>

</style>
