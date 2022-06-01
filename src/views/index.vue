
<script setup lang="ts">
import { ref } from 'vue'
import { Button as VanButton } from 'vant'
import { useStore } from '@/store'
const msg = ref('Hello')
const count = ref(710)

const store = useStore()
</script>
 
<template>
  <h2>
    <p>
      {{ msg }}
    </p>
  </h2>
  <h2>{{ count }}</h2>
  <van-button>{{ store.state.count }}</van-button>
</template>
 
<style lang="scss" scoped>
/* rootValue: 75 */


/* rootValue: 37.5 */
.image2 {
  width: 375px;
  height: 667px;
}
</style> 