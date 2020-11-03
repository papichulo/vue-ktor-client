<script>
import { getMonitoreringtillfallen } from "../utils/Api.js";

export default {
  name: "monitoreringHandler",
  data: () => ({
    monitoreringtillfallen: [],
    errorMessage: ""
  }),
  methods: {
    async getMonitoreringtillfallen() {
      if (this.$route.params.id) {
        const res = await getMonitoreringtillfallen(this.$route.params.id);
        this.monitoreringtillfallen = res;
      }
    }
  },
  mounted() {
    this.getMonitoreringtillfallen();
  }
};
</script>

<template>
  <div class="monitorering-handler">
    <h2>Monitorering</h2>
    <router-link class="header-link" to="/">Back</router-link>
    <ul>
      <li v-for="monitoreringtillfalle in monitoreringtillfallen" :key="monitoreringtillfalle._id">
        <router-link
          :to="`/monitoreringstillfalle/${monitoreringtillfalle._id}`"
        >{{monitoreringtillfalle.sjukhusId }}</router-link>
        {{monitoreringtillfalle.fromDate}}
        {{monitoreringtillfalle.toDate}}
      </li>
    </ul>
  </div>
</template>