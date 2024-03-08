<template>
    <ul v-for="(dog, index) in dogs" :key="index">
        <li>{{ dog.name }}</li>
</ul>
</template>

<script lang="ts">
    import { getGoodDogs, type Dog } from "@/store";
    import { defineComponent} from "@vue/runtime-core";
    export default defineComponent({
        name: 'Dogs',
        data() {
        return {
            dogs: [] as Array<Dog>
        }
    },
    mounted() {
        this.dogs = getGoodDogs()
    }
})
</script>
<style>
</style>