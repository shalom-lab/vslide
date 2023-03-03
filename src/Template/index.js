import vslides from "./vslides.json";
import { nanoid } from "nanoid";
vslides.id = nanoid();

const slides = vslides.slides;
const slideContent = vslides.slides[1].slideContent;

export { vslides, slides, slideContent };
