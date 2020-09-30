<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>Nuxt Calculator</h1>
        <calculator-app
          :resultValue = "resultValue"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import CalculatorApp from '~/components/CalculatorApp.vue'

export default {
  components: {
    CalculatorApp
  },
  computed: {
    ...mapGetters([
      'resultValue',
      'inputValue',
    ]),
  }
}
</script>