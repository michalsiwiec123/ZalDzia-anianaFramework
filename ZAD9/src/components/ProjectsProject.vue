<template>
  <div class="project-card">
    <h4>{{ title }}</h4>
    <p class="description">{{ description }}</p>
    
    
  </div>
</template>

<script>
export default {
  name: 'ProjectsProject',
  props: {
    title: String,
    description: String,
    tech: String,
    link: String
  }
}
</script>

<style scoped>
.project-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0; 
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  width: 100%;
  max-width: 600px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  height: 350px; 
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.project-card h4 {
  color: #3f51b5;
  font-size: 2.2em;
  margin-top: 0;
  margin-bottom: 15px;
  font-weight: 700;
}

.project-card .description {
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
  font-size: 1.05em;
  flex-grow: 1; 
}

.project-card .technologies {
  color: #888;
  font-size: 0.9em;
  margin-bottom: 25px;
  font-style: italic;
}

.project-card .project-link {
  display: inline-block;
  background-color: #4CAF50; 
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
  font-size: 1em;
}

.project-card .project-link .fas {
  margin-left: 8px; 
}

.project-card .project-link:hover {
  background-color: #388E3C; 
}
</style>
