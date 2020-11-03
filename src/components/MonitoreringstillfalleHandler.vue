<script>
import { getMonitoreringtillfalle, postMonitoreringtillfalle } from "../utils/Api.js";

export default {
  name: "monitoreringstillfalleHandler",
  data: () => ({
    monitoreringtillfalle: {},
    errorMessage: ""
  }),
  methods: {
    async getMonitoreringtillfalle() {
      if (this.$route.params.id) {
        const res = await getMonitoreringtillfalle(this.$route.params.id);
        this.monitoreringtillfalle = res;
      }
    },
    async onSave() {
        const res = await postMonitoreringtillfalle(this.monitoreringtillfalle);
        this.monitoreringtillfalle = res;
    }
  },
  mounted() {
    this.getMonitoreringtillfalle();
  }
};
</script>

<template>
  <div class="monitoreringstillfalle-handler">
    <h2>Monitoreringstillfälle</h2>
    <router-link class="header-link" :to="`/monitorering/${monitoreringtillfalle.monitoreringId}`">Back</router-link>
    <ul>
      <li v-for="registrering in monitoreringtillfalle.registreringar" :key="registrering.personId">
        {{registrering.personId}}
        <ul>
          <li v-for="variabel in registrering.variabler" :key="variabel.variabelName">
            {{variabel.variabelName}}
            {{variabel.variabelValue}}
            <select v-model="variabel.variabelResult">
                <option value=""></option>
                <option value="CORRECT">Rätt</option>
                <option value="WRONG">Fel</option>
                <option value="MISSING">Saknas</option>
            </select>
            <input v-model="variabel.variabelComment" placeholder="Kommentar"/>
          </li>
        </ul>
      </li>
    </ul>
    <button @click="onSave">Spara</button>
  </div>
</template>