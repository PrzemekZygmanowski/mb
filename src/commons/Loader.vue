<template>
  <div class="text-center">
    <v-overlay>
      <v-progress-circular
        :color="blueColor"
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data: () => ({
    blueColor: "#69b9ff",
  }),
};
</script>
