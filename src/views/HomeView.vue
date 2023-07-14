<template>
  <div class="home">
    <h1>This is an home page</h1>
    <TableView />
  </div>
</template>

<script>
import TableView from '@/components/TableView.vue'

export default {
  name: 'HomeView',
  components: {
    TableView,
  }
}
</script>
