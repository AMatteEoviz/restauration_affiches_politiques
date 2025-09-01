<template>
    <div id = "f1">
        <div id = "ToolBox">
            <div id="infoTB">
                <label>Sélectionner une strate</label>
                <input v-model="currentIndex" type="range" :max="titles.length - 1" min="0" value="0">
                <h2>{{ trueIndex + 1 }} : {{selTitle}}</h2>
            </div>
            <zoom-component />
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useCounterStore } from '@/stores/counter';
    import zoomComponent from './zoomComponent.vue';

    const store = useCounterStore();

    const currentIndex = computed({
        get: () => store.currentIndex,
        set: (value) => store.currentIndex = value
    });
    
    const titles = computed(() => store.titles)
    const trueIndex = computed(() => 12 - currentIndex.value)
    const selTitle = computed(() => titles.value[trueIndex.value])

</script>