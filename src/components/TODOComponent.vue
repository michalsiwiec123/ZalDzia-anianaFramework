
<template>
    <div>
    <input type="text" v-model="value">
    <button @click="addNewValue(value)">Add</button>
    <TODOElement v-for="v in values" :key="v" :element="v" @remove-element="(el) => removeValue(el)"></TODOElement>
    </div>
    </template>
    <script>
    import TODOElement from './TODOElement.vue';
    export default {
    components: {TODOElement},
    methods: {
    
        addNewValue(newValue) {
            this.value = '';
            this.values.push(newValue);
        },
    removeValue(value){
    const index = this.values.indexOf(value);
    console.log(value);
    this.values.splice(index, 1);
    }
    },
    data(){
    return {
    value:"",
    values: []
    }
    }
    }
    </script> <style scoped>
    </style>