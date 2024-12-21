import type { Ref, InjectionKey } from 'vue'

export type NameType = string

export interface CollapseProps {
  modelValue: NameType | NameType[]
  accordion?: boolean
}

export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}

export interface CollapseContext {
  activeNames: Ref<NameType[] | NameType>
  handleItemClick: (name: NameType) => void
}
export interface CollapseEmits {
  (e: 'update:modelValue', values: NameType[] | NameType): void
  (e: 'change', values: NameType[] | NameType): void
}
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')
