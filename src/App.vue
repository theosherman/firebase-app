<template lang="pug">
v-app
  toolbar
  router-view
</template>

<script>
import Toolbar from '@/components/Toolbar'

export default {
  components: {
    toolbar: Toolbar
  }
}
</script>