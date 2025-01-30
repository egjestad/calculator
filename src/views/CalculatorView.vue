<template>
  <div id="calculator">
    <div id="calculatorContainer">
      <input id="input" type="text" v-model="displayValue" placeholder="0" readonly />

      <button class="option" id="clear" @click="handleClear()">C</button>
      <button class="number" id="1" @click="handleNumberClick('1')">1</button>
      <button class="number" id="2" @click="handleNumberClick('2')">2</button>
      <button class="number" id="3" @click="handleNumberClick('3')">3</button>
      <button class="option" id="plus" @click="handleOperatorClick('+')">+</button>
      <button class="number" id="4" @click="handleNumberClick('4')">4</button>
      <button class="number" id="5" @click="handleNumberClick('5')">5</button>
      <button class="number" id="6" @click="handleNumberClick('6')">6</button>
      <button class="option" id="minus" @click="handleOperatorClick('-')">-</button>
      <button class="number" id="7" @click="handleNumberClick('7')">7</button>
      <button class="number" id="8" @click="handleNumberClick('8')">8</button>
      <button class="number" id="9" @click="handleNumberClick('9')">9</button>
      <button class="option" id="times" @click="handleOperatorClick('*')">x</button>
      <button class="option" id="point" @click="handleClick('.')">.</button>
      <button class="number" id="0" @click="handleNumberClick('0')">0</button>
      <button class="option" id="equals" @click="handleClick('=')">=</button>
      <button class="option" id="divide" @click="handleOperatorClick('/')">/</button>
    </div>
  </div>
  <div id="log">
    <LogComponent :log="Log" />
  </div>
</template>

<script>
import LogComponent from '@/views/LogComponent.vue'

export default {
  name: 'CalculatorView',
  components: { LogComponent },
  data() {
    return {
      displayValue: '',
      calculated: false,
      log: [],
    }
  },
  provide() {
    return {
      log: this.log,
    }
  },
  methods: {
    handleClick(value) {
      if (value === '=') {
        this.calculated = true
        this.calculate()
      } else {
        this.displayValue += value
      }
    },
    handleNumberClick(value) {
      if (this.calculated) {
        this.handleClear()
        this.calculated = false
      }
      this.displayValue += value
    },
    handleOperatorClick(operator) {
      if (this.displayValue === '') {
        return
      }
      if (/[/+*-]$/.test(this.displayValue)) {
        this.displayValue = this.displayValue.slice(0, -1)
      }
      this.calculated = false
      this.displayValue += operator
    },
    handleClear() {
      this.displayValue = ''
      this.calculated = false
    },
    calculate() {
      try {
        let result = this.displayValue

        if (/\/0(\.0*)?$/.test(this.displayValue)) {
          throw new Error('Cannot divide by zero');
        }
        result = eval(result.replace(/(^|[^0-9])0+(\d+)/g, '$1$2'))


        if (isNaN(result || !isFinite(result))) {
          throw new Error('Invalid input')
        }

        if (result % 1 !== 0) {
          result = result.toFixed(9).replace(/\.?0+$/, '')
        }

        this.log.push(`${this.displayValue} = ${result}`)
        this.displayValue = result
        this.calculated = true

      } catch(error){
        alert(error)
      }
    },
  },
}
</script>
