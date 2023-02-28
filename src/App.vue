<template>
  <Card class="search-container">
    <template #title> Busca de CEP </template>
    <template #content>
      <div class="search-field">
        <span class="fields">
          <label for="cep">CEP</label>
          <InputMask id="cep" v-model="cep" mask="99999-999" />
          <Button label="Submit" @click="buscaCep()" />
        </span>
      </div>
      <hr />
      <div class="results">
        <span class="fields">
          <label for="username">Username</label>
          <InputText id="username" type="text" v-model="value" />
        </span>
      </div>
    </template>
  </Card>
</template>

<script>
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Button from "primevue/button";

const axios = require("axios");

export default {
  name: "App",
  components: { InputMask, InputText, Card, Button },
  data() {
    return {
      cep: "",
    };
  },

  methods: {
    buscaCep() {
      axios
        .get("https://viacep.com.br/ws/" + this.cep + "/json/")
        .then((response) => {
          console.log(response.data);
        });
    },
  },
};
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  > .p-card {
    background: #fbfafa;
  }
}

.search-container {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;

  > .p-card-body {
    > .p-card-content {
      > .search-field {
        display: flex;
        justify-content: space-between;

        > .fields {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }

      > .results {
        display: flex;
        justify-content: space-between;

        > .fields {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
}
</style>
