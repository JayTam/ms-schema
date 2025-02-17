import { createApp, type App, type DefineComponent } from 'vue'
import { NInput, NSelect, NRadio } from "naive-ui";
import Page from './Page.vue'

const app = createApp(Page);


export const SchemaRenderKey = Symbol('SchemaRenderKey');

export type ComponentsType = Record<string, any>;

const components: ComponentsType = {
  input: NInput,
  select: NSelect,
  radio: NRadio
};


const MyPlugin = {
  install(app: App, options: { components: ComponentsType }) {

    app.provide(SchemaRenderKey, options.components);

  }
}

app.use(MyPlugin, { components });

app.mount('#app')
