<script>
import axios from 'axios';
import { store } from '../data/store';
export default {
  name: 'Contatti',
  data() {
    return {
      name: 'ilaria',
      email: 'ilaria.g@gmail.com',
      message: 'questo è il messaggio',
      sending: false,
      sent: false,
    }
  },
  methods: {
    sendEmail() {

      this.sending = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      // console.log(data);
      axios.post(store.apiUrl + 'send-email', data)  //concateno endpoint e poi oggetto data
        .then(result => {
          this.sending = false;
          console.log(result.data);
          this.sent= result.data.success;
        })
        .catch(err => {
          this.sending = false;
          console.log(err.message);
        })

      console.log(data)

    }
  }
}
</script>

<template>
  <div>
    <h1>Contatti</h1>
    <div v-if="!sending">
      <form v-if="!sent" @submit.prevent="sendEmail">
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input v-model="name" type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Indirizzo Email</label>
          <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">Messaggio</label>
          <textarea v-model="message" name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Contattaci</button>
      </form>
      <h3 v-else>email inviata correttamente</h3>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<style lang="scss" scoped></style>