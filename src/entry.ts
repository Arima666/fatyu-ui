import { App } from "vue";
import FYButton from "./button";
import SFCButton from "./button/SFCButton.vue";
import JSXButton from "./button/JSXButton";

/**
 * 支持按需加载
 * Vue.component(Select.name, Select)
 */
export { FYButton, SFCButton, JSXButton };

/**
 * 支持全量加载
 * Vue.use(Element)
 * 编写一个插件，实现一个install方法
 */
export default {
  install(app: App): void {
    app.component(FYButton.name, FYButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
  },
};
