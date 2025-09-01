<template> 
    <div id="f3">
        <div v-for="i in listCalquUri.length">
            <img :src="listCalquUri[i - 1]" :class="i == currentIndex ? 'selImg' : 'imgEl'">
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useCounterStore } from '@/stores/counter';

    const store = useCounterStore();
    const currentIndex = computed(() => 13 - store.currentIndex)
    const listCalquUri = computed(() => store.isolatedPathes)

</script>