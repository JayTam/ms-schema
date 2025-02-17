import { defineComponent } from 'vue'

type MsSchemaProps = {
  schema?: any
}

export default defineComponent<MsSchemaProps>({
  // props: {
  //   schema: {
  //     type: Object,
  //     default: () => ({}),
  //   },
  // },
  props: { ...Object },
  setup(props, { attrs }) {
    const { schema } = props

    console.log('schema', schema)
    console.log('attrs', attrs.schema)

    return () => {
      return <div>hello world</div>
    }
  },
})
