import type { SchemaType } from './types'
import { h } from 'vue'

/**
 * 将 schema 转换成组件树，主要使用 h 函数
 * @param schema shcema 结构: { component: 'formItem', rules: [{required: true}] children: [{ component: 'input' }] }
 * @returns 组件树结构: <FormItem rules={[{required: true}]><Input /></FormItem>
 */
function baseParse(schema: SchemaType) {
  const { component, children, ...props } = schema
  if (component) {
    return h(component, props, children && children.map(baseParse))
  }
  return null
}
