

<template>
  <div id="calculator">
  <div id="calculatorContainer">

      <input id="input"
              v-model="displayValue"
              placeholder="0"
              readonly
      >

    <button class="option" id="equals" @click="handleClick('=')">=</button>
    <button class="number" id="1" @click="handleClick('1')">1</button>
    <button class="number" id="2" @click="handleClick('2')">2</button>
    <button class="number" id="3" @click="handleClick('3')">3</button>
    <button class="option" id="plus" @click="handleClick('+')">+</button>
    <button class="number" id="4" @click="handleClick('4')">4</button>
    <button class="number" id="5" @click="handleClick('5')">5</button>
    <button class="number" id="6" @click="handleClick('6')">6</button>
    <button class="option" id="minus" @click="handleClick('-')">-</button>
    <button class="number" id="7" @click="handleClick('7')">7</button>
    <button class="number" id="8" @click="handleClick('8')">8</button>
    <button class="number" id="9" @click="handleClick('9')">9</button>
    <button class="option" id="times" @click="handleClick('x')">x</button>
    <button class="option" id="point" @click="handleClick('.')">.</button>
    <button class="number" id="0" @click="handleClick('0')">0</button>
    <button class="option" id="divide" @click="handleClick('/')">/</button>
    <button class="option" id="clear" @click="handleClick('c')">C</button>
  </div>

  <div id="output">
    <h1 id="outputHeader">Result</h1>
    <p id="result"></p>
  </div>

  </div>
</template>

<script>
export default {
  name: "CalculatorView",
data() {
  return {
    result: "",
    displayValue: "",
    calculated: false,
  };
},
  methods: {
    handleClick(value) {
      if (value === "=") {
        this.calculated = true;
      } else if (value === "c") {
        this.displayValue = "";
        this.result = "";
        this.calculated = false;
      } else {
        if (this.calculated) {
          this.displayValue = "";
          this.calculated = false;
        }
        this.displayValue += value;
      }
    },
    calculateResult() {

    }

  }
}
</script>


