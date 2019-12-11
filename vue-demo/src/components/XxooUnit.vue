<template>
    <div class="unit" @click="clickUnit">
      <template v-if="clicked"> {{ value }} </template>
      <template v-else></template>
    </div>
</template>

<script>
export default {
  name: 'XxooUnit',
  data() {
    return {
      clicked: false,
      value: ""
    }
  },
  props: ["count"],
  methods: {
    clickUnit: function () {
      if (this.clicked) return;
      this.clicked = true;
      this.value = 0 === this.count ? "x" : "O";
      this.$emit('click-unit', this.value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .unit {
    border: 1px solid black;
    display: inline-block;
    width: 100px;
    height: 100px;
    font-size: 50px;
    line-height: 100px;
    text-align: center;
  }
</style>
