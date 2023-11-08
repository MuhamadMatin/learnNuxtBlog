<template>
  <div>
    <NuxtLink to="https://myportowithnuxt.netlify.app" target="blank">
      <button class="py-2 px-4 bg-white rounded-2xl border hover:bg-[#2c3e50] hover:text-white hover:duration-300">
        <slot></slot>
      </button>
    </NuxtLink>
  </div>
</template>