<template>
    <div class="element">{{element}} <button @click="removeElement()">x</button></div> </template>
    <script>
    export default {
    props: ['element'],
    methods: {
    removeElement(){
    this.$emit('removeElement', this.element);
    }
    }
    }
    </script>
    <style scoped>
    .element{
        margin: 5px;
    }
  
    </style>