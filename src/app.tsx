import { defineComponent } from "vue";
import FYButton from "./button";

export default defineComponent({
  name: "Index",
  setup() {
    return () => (
      <>
        <div>
          <FYButton color="blue">蓝色按钮</FYButton>
          <FYButton color="green">绿色按钮</FYButton>
          <FYButton color="gray">灰色按钮</FYButton>
          <FYButton color="yellow">黄色按钮</FYButton>
          <FYButton color="red">红色按钮</FYButton>
        </div>
        <lr />
        <div>
          <FYButton color="blue" round plain icon="search"></FYButton>
          <FYButton color="green" round plain icon="edit"></FYButton>
          <FYButton color="gray" round plain icon="check"></FYButton>
          <FYButton color="yellow" round plain icon="message"></FYButton>
          <FYButton color="red" round plain icon="delete"></FYButton>
        </div>
      </>
    );
  },
});
