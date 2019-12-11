<template>
  <div id="xxoo" class="center">
    <p v-if="result" style="text-align: center;"> {{ result }} </p>
    <div class="line">
        <xxoo-unit :count="count" @click-unit="clickUnit($event, 0)"></xxoo-unit>
        <xxoo-unit :count="count" @click-unit="clickUnit($event, 1)"></xxoo-unit>
        <xxoo-unit :count="count" @click-unit="clickUnit($event, 2)"></xxoo-unit>          
    </div>
    <div class="line">
        <xxoo-unit :count="count" @click-unit="clickUnit($event, 3)"></xxoo-unit>
        <xxoo-unit :count="count" @click-unit="clickUnit($event, 4)"></xxoo-unit>
        <xxoo-unit :count="count" @click-unit="clickUnit($event, 5)"></xxoo-unit>          
    </div>
    <div class="line">
        <xxoo-unit :count="count" @click-unit="clickUnit($event, 6)"></xxoo-unit>
        <xxoo-unit :count="count" @click-unit="clickUnit($event, 7)"></xxoo-unit>
        <xxoo-unit :count="count" @click-unit="clickUnit($event, 8)"></xxoo-unit>          
    </div>
  </div>
</template>

<script>
import XxooUnit from './components/XxooUnit.vue'

export default {
  name: 'xxoo',
  components: {
    'xxoo-unit': XxooUnit
  },
    data() {
    return {
      count: 0,
      valueMap: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      result: ""
    }
  },
  methods: {
    clickUnit(value, id) {
      0 === this.count ? this.count = 1 : this.count = 0;
      // console.log(value, id);
      this.valueMap[Math.floor(id / 3)][id % 3] = value;
      this.tell();
    },
    tell() {
      for (let i = 0; i < 3; i++) {
        if (
          null !== this.valueMap[i][0] &&
          this.valueMap[i][0] === this.valueMap[i][1] &&
          this.valueMap[i][1] === this.valueMap[i][2]
        ) {
          this.result = this.valueMap[i][0];
        }
      }
      for (let i = 0; i < 3; i++) {
        if (
          null !== this.valueMap[0][i] &&
          this.valueMap[0][i] === this.valueMap[1][i] &&
          this.valueMap[1][i] === this.valueMap[2][i]
        ) {
          this.result = this.valueMap[0][i];
        }
      }
      if (
        null !== this.valueMap[1][1] &&
        (this.valueMap[0][0] === this.valueMap[1][1] &&
          this.valueMap[1][1] === this.valueMap[2][2]) ||
        (this.valueMap[0][2] === this.valueMap[1][1] &&
          this.valueMap[1][1] === this.valueMap[2][0])
      ) {
        this.result = this.valueMap[1][1];
      }

      if (null !== this.result && "" !== this.result) this.result += "赢了！";
    }
  }
}
</script>

<style>
  .line {
    display: flex;
    justify-content: center;
  }
</style>
