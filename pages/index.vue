<template>
  <div>
    <Head>
      <Title>Reviewame</Title>
    </Head>
    <div class="container mx-auto pb-20 min-h-screen">
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <p class="text-teal-600 lg:text-lg font-semibold mb-2 md:mb-3">
            Review de Restaurantes
          </p>
          <h2 class="text-gray-800 text-2xl lg:text-3xl font-bold mb-4 md:mb-6">
            Información Para Que Otros Aprendas
          </h2>
          <p class="max-w-screen-md text-gray-500 md:text-lg">
            Trataremos de ser lo más honestos posible :)
          </p>
        </div>
      </div>

      <div class="inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t-2 border-teal-900"></div>
      </div>
      <section>
        <div class="px-4 py-8 mx-auto">
          <div class="max-w-full mx-auto">
            <div class="space-y-8 lg:divide-y lg:divide-gray-100">
              <div
                v-for="example in examples"
                :key="example.id"
                class="pt-8 sm:flex lg:items-end group"
              >
                <div class="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                  <img
                    class="mx-auto w-9/12 h-9/12 rounded-md lg:h-32 lg:w-32"
                    src="https://source.unsplash.com/random"
                    alt="text"
                  />
                </div>
                <div>
                  <span class="text-sm text-gray-500">August 20.20.21</span>
                  <p class="mt-3 text-lg font-medium leading-6">
                    <a
                      href=""
                      class="text-xl text-neutral-600 group-hover:text-gray-500 lg:text-2xl"
                    >
                      {{ example.name }}
                    </a>
                  </p>
                  <p class="mt-2 text-lg text-gray-500">
                    {{ example.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
  data() {
    return {
      examples: [
        {
          id: 1,
          name: this.$faker.fake(
            "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"
          ),
          description: this.$faker.fake("{{random.words(20)}} "),
        },
        {
          id: 2,
          name: this.$faker.fake(
            "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"
          ),
          description: this.$faker.fake("{{random.words(20)}} "),
        },
        {
          id: 3,
          name: this.$faker.fake(
            "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"
          ),
          description: this.$faker.fake("{{random.words(20)}} "),
        },
        {
          id: 4,
          name: this.$faker.fake(
            "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"
          ),
          description: this.$faker.fake("{{random.words(20)}} "),
        },
        {
          id: 5,
          name: this.$faker.fake(
            "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"
          ),
          description: this.$faker.fake("{{random.words(20)}} "),
        },
        {
          id: 6,
          name: this.$faker.fake(
            "{{name.lastName}}, {{name.firstName}} {{name.suffix}}"
          ),
          description: this.$faker.fake("{{random.words(20)}} "),
        },
      ],
    };
  },
};
</script>
