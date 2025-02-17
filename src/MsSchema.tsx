import { defineComponent } from 'vue'

type MsSchemaProps = {
  schema?: any
}

export default defineComponent<MsSchemaProps>({
  setup(props) {
    const { schema } = props

    console.log('schema', schema)

    return () => {
      return <div>hello world</div>
    }
  },
})
