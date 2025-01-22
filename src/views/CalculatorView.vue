<script src="/src/calculatorScript.js"></script>

<template>
  <div id="calculatorContainer">

      <textarea id="input"></textarea>

    <button class="btn" id="equals">=</button>
    <button class="btn" id="1">1</button>
    <button class="btn" id="2">2</button>
    <button class="btn" id="3">3</button>
    <button class="btn" id="plus">+</button>
    <button class="btn" id="4">4</button>
    <button class="btn" id="5">5</button>
    <button class="btn" id="6">6</button>
    <button class="btn" id="minus">-</button>
    <button class="btn" id="7">7</button>
    <button class="btn" id="8">8</button>
    <button class="btn" id="9">9</button>
    <button class="btn" id="times">x</button>
    <button class="btn" id="point">.</button>
    <button class="btn" id="0">0</button>
    <button class="btn" id="divide">/</button>
    <button class="btn" id="clear">C</button>

  </div>
  <div id="output">
    <h1 id="outputHeader">Result</h1>
    <p id="result"></p>
  </div>


</template>

<style src="/src/assets/calculator.css"></style>
