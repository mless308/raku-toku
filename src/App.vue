<template>
  <div>test</div>
</template>

<script>
export default {
  name: "App",
  async created () {
    console.log(await this.getRakutenItem("タオル"))
  }
}
</script>