<template>
  <div>
    <Top :name="hh"></Top>
    <Lun></Lun>
    <City></City>
  </div>
</template>

<script>
  import Top from "./Top";
  import Lun from "./Lun";
  import City from "./City";
export default {

  name: 'HelloWorld',
  data () {
    return {
      hh:this.$route.query.name
    }
  },
  components: {Lun,City,Top},
}
</script>

<style scoped>
</style>
