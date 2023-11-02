<script setup lang="ts">
const { slug } = useRoute().params;
</script>

<template>
  <article class="rounded-2xl">
    <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }">
      <!-- header -->
      <header>
        <div class="text-center p-5">
          <h1 class="text-4xl font-semibold">
            {{ doc.title }}
          </h1>
          <div class="text-gray-500 text-sm m-2">
            {{ doc.date }}
          </div>
        </div>
        <img :src="doc.thumbnail" loading="lazy" alt="image thumnail" class="w-full h-full rounded-2xl object-cover" />
      </header>

      <!-- main -->
      <div class="py-3 px-2 text-sm lg:text-md md:py-4 md:px-3">
        <ContentRenderer :value="doc" />
      </div>
    </ContentDoc>
  </article>
</template>

<style>
  p{
    margin: 10px 0px;
  }
</style>