<template>
  <div class="calculator__container">
    <v-text-field
      class="calculator__result"
      value="0"
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
          >
            x
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
          :cols="6"
        >
          <v-btn
            depressed
            block
            outlined
            tile
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
          >
            C
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
            =
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {

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
