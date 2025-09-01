<template>
  <header>
      <h1>Proposition de reconstitution stratigraphique du Papyrus Case 16</h1>
  </header>
  <div id="main" v-if="readyToDisplay">
    <tool-box-component />
    <img-slider-component />
    <img-list-component />
  </div>
  <footer>
      <div id="credits">
        <p>Source: Papyrus Case 16, Trinity College Dublin, sur la base des numérisations réalisées par les équipes de la DRIS (Digital Resources and Imaging Services)</p>
    </div>
  </footer>
</template>

<script setup>
import toolBoxComponent from './components/toolBoxComponent.vue';
import imgSliderComponent from './components/imgSliderComponent.vue';
import imgListComponent from './components/imgListComponent.vue';

import { useCounterStore } from './stores/counter';
import { ref, onMounted } from 'vue';

const store = useCounterStore();
const readyToDisplay = ref(false);

const nImgs = 13;

onMounted(() => {

  for(let i = 0; i < nImgs; i++) {
    store.loadPathes(i + 1)
  };

  readyToDisplay.value = true;

});

</script>

<style>

body, html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0px;
    margin: 0px;
}

h1 {
    margin-left: 10px;
}

#app {
    height: 100vh;
    width: 95%;
    margin: 0 auto;
    overflow: hidden;
}

#main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    height: 80%;
    width: 100%;
    max-width: 100%;
}

#f1 {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 25%;
    max-width: 25%;
}

#ToolBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 100%;
    max-height: 500px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0px 0px 5px rgb(150, 150, 150);
    border-radius: 10px;
}

#infoTB {
  width: 100%;
  max-height: 80px;
}

input[type=range] {
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497E3;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #2497E3;
}
input[type=range]:focus::-ms-fill-upper {
  background: #2497E3;
}

#imgContainer {
    height: 600px;
    width: auto;
}

#f3 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    justify-items: center;
    max-width: 25%;
    height: 75%;
    padding: 10px;
    box-shadow: 0px 0px 5px rgb(150, 150, 150);
    border-radius: 10px;
}

.imgEl {
    height: 100px;
    width: auto;
    opacity: 0.5;
}

.selImg {
    height: 100px;
    width: auto;
    opacity: 1;
    scale: 1.2;
    transition: all 0.2s ease-in-out;
}

.img-zoom-lens {
  position: fixed;
  /*set the size of the lens:*/
  width: 40px;
  height: 40px;
}

.img-zoom-result {
  border: 1px solid #d4d4d4;
  /*set the size of the result div:*/
  width: 300px;
  height: 300px;
  border-radius: 5px;
}

footer {
  width: 100%;
  height: 20%;
  position: relative;
  background-color: rgb(204, 204, 204);
}

</style>
