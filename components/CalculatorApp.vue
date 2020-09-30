<template>
  <div class="calculator__container">
    <v-text-field
      class="calculator__result"
      :value="displayValue"
      label="Solo"
      solo
      readonly
    ></v-text-field>
    <div class="calculator__button">
      <v-row no-gutters>
        <v-col
          v-for="n in 3"
          :key="n"
          :cols="3"
        >
          <v-btn
            depressed
            block
            outlined
            tile
            @click = "handleNumberClick(n + 6)"
          >
            {{ n + 6 }}
          </v-btn>
        </v-col>
        <v-col
          :cols="3"
        >
          <v-btn
            depressed
            block
            outlined
            tile
            @click = "handleClearClick"
          >
            C
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          v-for="n in 3"
          :key="n"
          :cols="3"
        >
          <v-btn
            depressed
            block
            outlined
            tile
            @click = "handleNumberClick(n + 3)"
          >
            {{ n + 3 }}
          </v-btn>
        </v-col>
        <v-col
          :cols="3"
        >
          <v-btn
            depressed
            block
            outlined
            tile
          >
            -
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          v-for="n in 3"
          :key="n"
          :cols="3"
          @click = "handleNumberClick(n)"
        >
          <v-btn
            depressed
            block
            outlined
            tile
          >
            {{ n }}
          </v-btn>
        </v-col>
        <v-col
          :cols="3"
        >
          <v-btn
            depressed
            block
            outlined
            tile
          >
            +
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          :cols="9"
        >
          <v-btn
            depressed
            block
            outlined
            tile
            @click = "handleNumberClick(0)"
          >
            0
          </v-btn>
        </v-col>
        <v-col
          :cols="3"
        >
          <v-btn
            depressed
            block
            outlined
            tile
            @click = "handleEqualClick"
          >
            =
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // calculator: {
    //   type: Object,
    //   require : true,
    // },
    displayValue: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleNumberClick(number) {
      this.$emit("numberClick", number)
    },
    handleClearClick() {
      this.$emit("clearClick")
    },
    handleEqualClick() {
      this.$emit("equalClick")
    }
  }
}
</script>

<style scoped>
.calculator__container {
  /* background: yellow; */
}

.calculator__result {
  /* background: yellowgreen; */
}

.calculator__result >>> input {
  text-align: right;
  /* background: blueviolet; */
}

.calculator__button {
  /* background: blue; */
  margin: 0 auto;
  width: 200px;
}
</style>
