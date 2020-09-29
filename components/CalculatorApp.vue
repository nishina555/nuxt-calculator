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
      <div
        v-for="row in 3"
        :key="row"
      >
        <v-btn
          v-for="column in 3"
          :key="row + column"
          depressed
        >
          {{ 3 * (3-row) + column }}
        </v-btn>
      </div>
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
}
</style>
