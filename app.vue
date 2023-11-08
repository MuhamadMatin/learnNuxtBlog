<script setup>
  const title = ref('LearnNuxtBlog');
</script>
<template>
  <div class="lg:max-w-3xl md:max-w-xl px-4 mx-auto text-[#404047]">
    <!-- ini merupakan cara menambahkan head pada Nuxt -->
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <!-- header -->
    <header class="mt-8 mb-4 flex justify-between items-end">
      <div>
        <h1 class="text-2xl my-2 font-semibold">
          <Nuxt-link to="/">Personal blog</Nuxt-link>
        </h1>
      </div>
      <Btn>Contact me</Btn>
    </header>

    <!-- main content -->
    <NuxtPage />
  </div>
</template>
