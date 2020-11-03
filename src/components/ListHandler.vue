<script>
import {getMonitorering} from "../utils/Api.js";

export default {
    name: 'listHandler',
    data: () => ({
        monitoreringar: [],
        errorMessage: ""
    }),
    methods: {
        async getMonitoreringar() {
            const res = await getMonitorering("testSystem");
            this.monitoreringar = res;
        }
    },
    mounted() {
        this.getMonitoreringar();
    }
}
</script>

<template>
    <md-app id="app">
        <md-app-toolbar class="md-primary">
            <h2>Monitoreringar</h2>
        </md-app-toolbar>
        <md-app-content>
            <md-table md-card>
                <md-table-row>
                    <md-table-head>
                        Namn
                    </md-table-head>
                    <md-table-head>
                        Beskrivning
                    </md-table-head>
                    <md-table-head>
                        Datum
                    </md-table-head>
                </md-table-row>
                <md-table-row v-for="monitorering in monitoreringar" :key="monitorering.name">
                    <md-table-cell>
                        <router-link :to="`/monitorering/${monitorering._id}`">
                            {{ monitorering.name }}
                        </router-link>
                    </md-table-cell>
                    <md-table-cell>
                        {{monitorering.description}}
                    </md-table-cell>
                    <md-table-cell>
                        {{monitorering.createdDate.date.year}}-{{monitorering.createdDate.date.month}}-{{monitorering.createdDate.date.day}}
                    </md-table-cell>
                </md-table-row>
            </md-table>
        </md-app-content>
    </md-app>
</template>
