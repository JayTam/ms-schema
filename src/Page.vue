<script setup lang="ts">
import MsSchema from './MsSchema'

const schema = {
  component: 'input',
}
</script>

<template>
  <MsSchema :schema="schema" :style="{ width: '300px' }" />
</template>
