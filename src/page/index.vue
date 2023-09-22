<template>
  <div>
    <HelloWorld />
    <h1 class="text-3xl font-bold underline text-green">Hello world!</h1>
  </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Index",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
};
</script>
