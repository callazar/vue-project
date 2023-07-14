<template>
  <table class="container table table-bordered table-dark">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Code</th>
        <th scope="col">Name</th>
        <th scope="col">Role</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(people, index) in this.people" :key="index">
        <td>{{ people.id }}</td>
        <td>{{ people.key }}</td>
        <td>{{ people.name }}</td>
        <td>{{ people.role }}</td>
        <td>{{ people.email }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { apiUrl } from "../plugins/axios";

export default {
  name: "tableView",
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    this.getPeople();
  },
  methods: {
    getPeople() {
      apiUrl
        .get("/users")
        .then((response) => {
            this.people = response.data;
            console.log(this.people);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>