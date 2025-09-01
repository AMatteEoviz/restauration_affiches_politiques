<template> 
    <div id="f3">
        <div v-for="i in listCalquUri.length">
            <img :src="listCalquUri[i]" :class="i == currentIndex ? 'selImg' : 'imgEl'">
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import { useCounterStore } from '@/stores/counter';

    const store = useCounterStore();
    const currentIndex = computed(() => store.currentIndex)
    const listCalquUri = computed(() => store.isolatedPathes)

</script>