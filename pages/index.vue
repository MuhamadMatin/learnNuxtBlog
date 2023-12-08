<template>
  <div class="text-[#404047]">
    <ContentList path="/posts" v-slot="{ list }">
      <!-- blog card -->
      <div
        v-for="post in list"
        :key="post._path"
        :query="{
          draft: false,
          sort: [{ date: -1 }],
        }"
        class="rounded-t-lg md:rounded-t-xl lg:rounded-t-2xl overflow-hidden mb-4">
        <!-- img blog -->
        <Nuxt-link :to="`${post.slug}`">
          <div class="h-48 md:h-80 relative">
            <img :src="post.thumbnail" alt="image thumnail" class="w-full md:h-full h-48 rounded-lg md:rounded-xl lg:rounded-2xl object-cover" />
          </div>
          <div>
            <h1 class="text-xl font-semibold">
              {{ post.title }}
            </h1>
            <div class="text-sm text-gray-500">
              {{ post.publishedAt }}
            </div>
          </div>
        </Nuxt-link>
      </div>
    </ContentList>
  </div>
</template>