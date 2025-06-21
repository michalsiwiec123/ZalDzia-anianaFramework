<template>
  <div style="padding: 20px; max-width: 500px; margin: auto;">
    <h1>Lista uczniów</h1>

    <AddStudent @add-student="addStudentToList" />

    <div v-if="students.length > 0" style="margin-top: 20px;">
      <h3>Grupa:</h3>
      <ul>
        <li v-for="(student, index) in students" :key="index">{{ index + 1 }}. {{ student }}</li>
      </ul>
    </div>
    <div v-else>
      <p>Brak uczniów w grupie.</p>
    </div>
  </div>
</template>

<script>
import AddStudent from './components/AddStudent.vue';

export default {
  name: 'App',
  components: {
    AddStudent,
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {
    addStudentToList(name) {
      this.students.push(name);
    },
  },
};
</script>