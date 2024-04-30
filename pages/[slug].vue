<script setup lang="ts">
  const { slug } = useRoute().params;
</script>

<template>
  <main class="rounded-2xl">
    <ContentDoc :path="`/posts/${slug}`" v-slot="{ doc }">
      <!-- header -->
      <header>
        <div class="text-center py-5">
          <h1 class="text-2xl md:text-4xl font-semibold">
            {{ doc.title }}
          </h1>
          <div class="text-gray-500 text-sm">
            {{ doc.publishedAt }}
          </div>
        </div>
        <NuxtImg loading="lazy" :src="doc.thumbnail" alt="image thumnail" class="w-full md:h-80 rounded-md md:rounded-2xl md:object-cover" />
      </header>
      <!-- main -->
      <article class="">
        <ContentRenderer :value="doc" />
      </article>
    </ContentDoc>
  </main>
</template>

<style>
  p {
    margin: 10px 0px;
  }
</style>
