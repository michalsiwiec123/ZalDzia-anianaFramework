<template>
  <section class="main-projects-section">
    <h3>Moje Projekty</h3>
    
    <div class="projects-carousel-container">
      <button @click="prevProject" class="carousel-arrow left-arrow">
        <i class="fas fa-chevron-left"></i> 
      </button>

      <div class="carousel-content-wrapper">
        <ProjectsProject :key="currentProject.id" :title="currentProject.title" :description="currentProject.description" :tech="currentProject.tech" :link="currentProject.link" />
      </div>

      <button @click="nextProject" class="carousel-arrow right-arrow">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>

    
  </section>
</template>

<script>
import ProjectsProject from './ProjectsProject.vue';

export default {
  name: 'MainProjects',
  components: {
    ProjectsProject
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Projekt Iksde",
          description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
          tech: "Vue, JS, CSS, HTML",
          link: "#"
        },
        {
          id: 2,
          title: "Projekt Jajko",
          description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          tech: "React, Node, MongoDB, Express",
          link: "#"
        },
        {
          id: 3,
          title: "Projekt Kaczka",
          description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          tech: "Angular, TypeScript, Firebase",
          link: "#"
        },
        {
          id: 4,
          title: "Projekt Piesel",
          description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
          tech: "Svelte, Python, Django",
          link: "#"
        }
      ],
      currentProjectIndex: 0
    };
  },
  computed: {
    currentProject() {
      return this.projects[this.currentProjectIndex];
    }
  },
  methods: {
    nextProject() {
      this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    },
    prevProject() {
      this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
    }
  }
}
</script>

<style scoped>
.main-projects-section {
  background-color: #e8eaf6; 
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
  text-align: center;
}

.main-projects-section h3 {
  color: #3f51b5; 
  font-size: 2.5em;
  margin-bottom: 30px;
  font-weight: 600;
}

.projects-carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 900px;
  position: relative;
  
  background-color: #ffffff;
  padding: 30px 0; 
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05); 
}

.carousel-content-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 0 60px; 
}

.carousel-arrow {
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px; 
  font-size: 3.5em; 
  color: #3f51b5; 
  transition: transform 0.2s ease, color 0.2s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  outline: none;
}

.carousel-arrow:hover {
  transform: translateY(-50%) scale(1.1);
  color: #007bff; 
}

.left-arrow {
  left: 0; 
}

.right-arrow {
  right: 0; 
}

.cta-more-projects {
  font-style: italic;
  color: #555;
  margin-top: 35px;
  font-size: 1.1em;
}

@media (max-width: 768px) {
  .projects-carousel-container {
    flex-direction: column;
    padding: 30px 10px;
  }
  .carousel-arrow {
    position: static;
    margin: 10px auto;
    transform: none;
    font-size: 3em;
  }
  .carousel-content-wrapper {
    padding: 0 10px;
  }
}
</style>
