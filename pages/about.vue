<template>
  <div>
    <Head>
      <Title>Acerca</Title>
    </Head>
    <div class="min-h-screen">
      <div class="flex flex-col items-center justify-center">
        <h1>About Page</h1>
        <div>
          <i class="fa-solid fa-star text-yellow-400"></i>
          <i class="fa-solid fa-star text-yellow-400"></i>
          <i class="fa-solid fa-star text-yellow-400"></i>
          <i class="fa-regular fa-star-half-stroke text-yellow-400"></i>
          <i class="fa-regular fa-star text-yellow-400"></i>
        </div>
        <div v-for="(product, index) in data" :key="index">
          {{ product }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/reviews");
</script>
