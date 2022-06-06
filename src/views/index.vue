
<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useStore } from '@/store'
import { ref } from 'vue';
const msg = ref('Hello')
const count = ref(710)
msg.value = 'hello world!'
const store = useStore()
</script>
 
<template>
  <h2>
    <p>
      {{ msg }}
    </p>
  </h2>
  <h2>{{ count }}</h2>
  <van-button color="blue" size="large">{{ store.state.count }}</van-button>
</template>
 
<style lang="scss" scoped>
/* rootValue: 75 */


/* rootValue: 37.5 */
.image2 {
  width: 375px;
  height: 667px;
}
</style> 