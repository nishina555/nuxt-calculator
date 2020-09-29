<template>
  <div class="container">
    <v-text-field
      class="calculator__result"
      value="0"
      label="Solo"
      solo
      readonly
    ></v-text-field>
    <div class="calculator__button">
      <v-row>
        <v-col
          :cols="4"
        >
          <v-btn depressed>
            7
          </v-btn>
        </v-col>
        <v-col
          :cols="4"
        >
          <v-btn depressed>
            8
          </v-btn>
        </v-col>
        <v-col
          :cols="4"
        >
          <v-btn depressed>
            9
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :cols="4"
        >
          <v-btn depressed>
            4
          </v-btn>
        </v-col>
        <v-col
          :cols="4"
        >
          <v-btn depressed>
            5
          </v-btn>
        </v-col>
        <v-col
          :cols="4"
        >
          <v-btn depressed>
            6
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :cols="4"
        >
          <v-btn depressed>
            1
          </v-btn>
        </v-col>
        <v-col
          :cols="4"
        >
          <v-btn depressed>
            2
          </v-btn>
        </v-col>
        <v-col
          :cols="4"
        >
          <v-btn depressed>
            3
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

<style>
.container {
  background: yellow;
}

.calculator__result {
  background: yellowgreen;
}

.calculator__result input {
  text-align: right;
}

.calculator__button {
  background: blue;
}
</style>
