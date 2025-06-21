<template>
  <div class="container">
    <h1>Zadania Vue</h1>

    
    <section>
      <h2>Zadanie 1 – v-if</h2>
      <button @click="pokaz = !pokaz">
        {{ pokaz ? 'Ukryj' : 'Pokaż' }} wiadomość
      </button>
      <p v-if="pokaz">To jest dynamicznie wyświetlana informacja!</p>
    </section>

   
    <section>
      <h2>Zadanie 2 – v-for (Uczniowie)</h2>
      <ul>
        <li v-for="(uczen, index) in uczniowie" :key="index">
          Imię: {{ uczen.imie }}, Wiek: {{ uczen.wiek }}, Wzrost: {{ uczen.wzrost }} cm
        </li>
      </ul>
    </section>

    
    <section>
      <h2>Zadanie 3 – Koszt telefonów (computed + methods)</h2>
      <ul>
        <li v-for="(uczen, index) in uczniowie" :key="'tel-' + index">
          {{ uczen.imie }} - Telefon: {{ uczen.telefon }} zł
        </li>
      </ul>
      <p><strong>Całkowity koszt telefonów:</strong> {{ lacznyKoszt }} zł</p>
      <button @click="dodajTelefon">Dodaj 100 zł do losowego telefonu</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      pokaz: false,
      uczniowie: [
        { imie: 'Anna', wiek: 16, wzrost: 160, telefon: 1200 },
        { imie: 'Kamil', wiek: 17, wzrost: 172, telefon: 800 },
        { imie: 'Zosia', wiek: 15, wzrost: 158, telefon: 950 }
      ]
    }
  },
  computed: {
    lacznyKoszt() {
      return this.uczniowie.reduce((suma, uczen) => suma + uczen.telefon, 0);
    }
  },
  methods: {
    dodajTelefon() {
      const index = Math.floor(Math.random() * this.uczniowie.length);
      this.uczniowie[index].telefon += 100;
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
  padding: 1rem;
}
section {
  margin-bottom: 2rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}
button {
  margin: 0.5rem 0;
}
</style>
