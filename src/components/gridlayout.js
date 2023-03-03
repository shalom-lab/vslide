import { createApp } from "vue";
import VueGridLayout from "vue-grid-layout";

const app = createApp().use(VueGridLayout);
const GridLayout = app.component("grid-layout");
const GridItem = app.component("grid-item");


export { GridLayout, GridItem };
