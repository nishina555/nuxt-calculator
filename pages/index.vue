<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <h1>Nuxt Calculator</h1>
        <calculator-app
          :displayValue = "displayValue"
          @numberClick = "handleNumberClick"
          @clearClick = "handleClearClick"
          @equalClick = "handleEqualClick"
          @operatorClick = "handleOperatorClick"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CalculatorApp from '~/components/CalculatorApp.vue'

export default {
  components: {
    CalculatorApp
  },
  computed: {
    ...mapGetters([
      'calculator',
      'displayValue'
    ]),
  },
  methods: {
    ...mapActions([
      'updateInputValue',
      'clearResultValue',
      'clearInputValue',
      'showResult',
      'showInput',
      'calculate',
      'updateOperator',
      'clearOperator'
    ]),
    handleNumberClick(number) {
      if (this.calculator.showResult) {
        this.showInput()
      }
      this.updateInputValue(number)
    },
    handleClearClick() {
      this.clearResultValue()
      this.clearInputValue()
      this.clearOperator()
    },
    handleEqualClick() {
      this.calculate()
      this.showResult()
      this.clearInputValue()
    },
    handleOperatorClick(operator) {
      this.calculate()
      this.updateOperator(operator)
      this.clearInputValue()
      this.showResult()
    }
  }
}
</script>