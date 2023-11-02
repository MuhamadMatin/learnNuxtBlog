<template>
  <div class="max-w-3xl px-4 mx-auto">
    <!-- header -->
    <header class="mt-8 mb-4 flex justify-between items-end">
      <div>
        <h1 class="text-2xl font-semibold">
          <Nuxt-link to="/">Personal blog</Nuxt-link>
        </h1>
      </div>
      <Btn class="">Hire me</Btn>
    </header>

    <!-- main content -->
    <NuxtPage />
  </div>
</template>
