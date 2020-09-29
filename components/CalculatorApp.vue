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
      <div>
        <v-btn depressed>
          7
        </v-btn>
        <v-btn depressed>
          8
        </v-btn>
        <v-btn depressed>
          9
        </v-btn>
      </div>
      <div>
        <v-btn depressed>
          4
        </v-btn>
        <v-btn depressed>
          5
        </v-btn>
        <v-btn depressed>
          6
        </v-btn>
      </div>
      <div>
        <v-btn depressed>
          1
        </v-btn>
        <v-btn depressed>
          2
        </v-btn>
        <v-btn depressed>
          3
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
