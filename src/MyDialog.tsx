import { defineComponent, type PropType } from "vue";

enum DialogType {
  First,
  Second,
}

export default defineComponent({
  name: "MyDialog",
  props: {
    dialogType: {
      type: Number as PropType<DialogType>,
      default: DialogType.First,
    },
  },
  render() {
    switch (this.dialogType) {
      case DialogType.First:
        return <h1>First</h1>;
      case DialogType.Second:
        return <h1>Second</h1>;
    }
  },
});
