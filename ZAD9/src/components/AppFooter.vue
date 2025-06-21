<template>
  <footer class="app-footer">
    <div class="footer-content">
    </div>
    <div class="copyright-bar">
      <p>&copy; {{ currentYear }} Moje Portfolio. Wszelkie prawa zastrzeżone. | Projektowanie i rozwój front-end.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
}
</script>

<style scoped>
.app-footer {
  background-color: #3f51b5; 
  color: white;
  padding: 50px 20px 20px;
  margin-top: 50px;
}

.footer-content {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center; 
  gap: 40px;
}

.footer-text-area {
  flex: 1;
  min-width: 300px;
  text-align: left;
}

.footer-text-area h4 {
  font-size: 2.2em;
  margin-bottom: 20px;
  color: #ffffff; 
  font-weight: 600;
}

.footer-text-area p {
  font-size: 1.1em;
  line-height: 1.8;
  margin-bottom: 12px;
  color: #e0e0e0; 
}

.footer-text-area a {
  color: #ffeb3b; 
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-text-area a:hover {
  color: #ffd700;
}

.footer-graphic-area {
  flex: 1;
  min-width: 300px;
  display: flex; 
  justify-content: flex-end; 
  align-items: center;
}

.abstract-shape {
  background-color: #4CAF50; 
  width: 200px;
  height: 200px;
  border-radius: 50%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 1.2em;
}

.abstract-shape .fas {
  font-size: 3.5em;
  margin-bottom: 10px;
}

.copyright-bar {
  text-align: center;
  margin-top: 50px;
  padding-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  color: #c0c0c0;
  font-size: 0.9em;
}


@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }
  .footer-text-area, .footer-graphic-area {
    min-width: unset;
    width: 100%;
    text-align: center;
  }
  .footer-graphic-area {
    order: -1; 
    justify-content: center; 
    margin-bottom: 30px;
  }
}
</style>
