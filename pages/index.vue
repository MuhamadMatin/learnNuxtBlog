<script></script>

<template>
  <div>
    <ContentList path="/posts" v-slot="{ list }">
      <!-- blog card -->
      <div
        v-for="post in list"
        :key="post._path"
        :query="{
          draft: false,
          sort: [{ date: -1 }],
        }"
        class="rounded-t-2xl overflow-hidden mb-4">
        <!-- img blog -->
        <Nuxt-link :to="`${post.slug}`">
          <div class="h-48 md:h-80 relative">
            <img :src="post.thumbnail" alt="image thumnail" class="md:w-full md:h-full object-cover absolute rounded-2xl" />
          </div>
          <div>
            <h1 class="text-2xl font-semibold">
              {{ post.title }}
            </h1>
            <div class="text-sm text-gray-500">
              {{ post.date }}
            </div>
          </div>
        </Nuxt-link>
      </div>
    </ContentList>
  </div>
</template>
