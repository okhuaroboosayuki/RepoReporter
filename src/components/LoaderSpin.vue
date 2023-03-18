<template>
  <flower-spinner :animation-duration="2500" :size="70" color="#255ad3" />
</template>

<script>
import { FlowerSpinner } from "epic-spinners";
export default {
  name: "LoaderSpin",

  components: {
    FlowerSpinner,
  },
};
</script>
