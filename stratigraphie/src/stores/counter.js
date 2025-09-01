import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ 
    isolatedPathes: [],
    stratifiedPathes: [],
    currentIndex: 0,
    titles: [
      "The provisional government of the Irish Republic",
      "Wanted immediately men for labour battalion",
      "Up the dublins",
      "Germany wants ireland",
      "Will you make a fourth",
      "Will you make a fourth",
      "Men required for the inland water transport",
      "An enquiry from the front",
      "Soldier's separation allowances",
      "Put your back into it and help",
      "Put your back into it and help",
      "An enquiry from the front",
      "Is your conscience clear"
    ]
  }),

  actions: {
    loadPathes(imgIndex) {

    this.isolatedPathes[imgIndex - 1] = `img/calque_${imgIndex}.webp`
    this.stratifiedPathes[imgIndex - 1] = `img/strat_${imgIndex}.webp`

    }
  }

})
