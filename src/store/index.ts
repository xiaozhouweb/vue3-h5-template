import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    count: 11
  }
})

// 定义自己的 `useStore` 组合式函数
export function useStore():Store<State> {
  return baseUseStore(key)
}