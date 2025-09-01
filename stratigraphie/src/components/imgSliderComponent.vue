<template>
    <div id="f2" class="img-zoom-container">
        <img id="myimage" :src="imgURI" width="419.5" height="600" @change="changeFocus">
    </div>
</template>

<script setup>

import { computed, watch, onMounted } from 'vue'
import { useCounterStore } from '@/stores/counter';
import { imageZoom } from '../utils/zoom'

const store = useCounterStore();
const imgURI = computed(() =>
    store.stratifiedPathes[12 - store.currentIndex]
)

onMounted(() =>
        imageZoom("myimage", "myresult", imgURI.value)
)

watch(imgURI, (newVal) => {
    imageZoom("myimage", "myresult", newVal)
})


</script>