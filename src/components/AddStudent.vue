<template>
  <div>
    <h2>Dodaj ucznia</h2>
    <input v-model="studentName" placeholder="Imię ucznia" />
    <button @click="submitStudent">Dodaj</button>
  </div>
</template>

<script>
export default {
  name: 'AddStudent',
  data() {
    return {
      studentName: '',
    };
  },
  methods: {
    submitStudent() {
      if (this.studentName.trim()) {
        this.$emit('add-student', this.studentName.trim());
        this.studentName = ''; // reset pola
      }
    },
  },
};
</script>

<style scoped>
input {
  margin-right: 10px;
  padding: 5px;
}
button {
  padding: 5px 10px;
}
</style>
