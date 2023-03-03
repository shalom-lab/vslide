import { createStore } from "vuex";
import { atom } from "./atom";
import { editorOption } from "./editor";
import { vslides, slides } from "../Template";

import templateLayout from "./templateLayout";
import shanghai from "./shanghai.json";

const background = {
  mode: "texture",
  pure: "rgba(249, 249, 249, 1)",
  linear: {
    angle: 23,
    start: "rgba(98, 116, 137, 1)",
    end: "rgba(58,153,178,1)",
  },
  radial: {
    shape: "ellipse",
    start: "rgba(58,153,178,1)",
    end: "rgba(13,56,112,1)",
  },
  custom: "linear-gradient(20deg, #feac5e, #c779d0, #4bc0c8)",
  image: {
    src: "data:image/png;base64,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",
    repeat: "repeat",
    x: "center",
    y: "center",
    width: "100%",
    height: "100%",
  },
  texture: {
    src: "data:image/png;base64,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",
  },
};

export default createStore({
  strict: false,
  state: {
    layout: vslides.slides,
    iActive: {
      slide: "0",
      atom: "-1",
    },
    iMax: {
      slide: 1000,
      atom: 1000,
    },
    atom: JSON.parse(JSON.stringify(atom)),
    editorOption: JSON.parse(JSON.stringify(editorOption)),
    background,
    innerSize: {
      width: 0,
      height: 0,
    },
    workingAreaKey: 1,
    leftAreaKey: 1,
    gallery: {
      templateLayout,
      localLayout: [{ slideContent: [] }],
      activeIndex: 0,
    },
    document: {
      fileList: [vslides, JSON.parse(JSON.stringify(vslides))],
      activeIndex: 0,
      templateFile: vslides,
    },
    template: {
      vslides,
      slides,
    },
    store: null,
    loginState: null,
    account: {
      role: "user",
      date_expire: null,
      max_file: 0,
      max_size: 0,
      total_file: 0,
      total_size: 0,
    },
    sharedFileList: [],
    mapList: [{ mapName: "shanghai", mapObj: shanghai }],
  },
  getters: {
    activeSlide(state, getters) {
      return state.layout[getters.indexActive.slide];
    },
    activeSlideContent(state, getters) {
      return getters.activeSlide.slideContent;
    },
    activeAtom(state, getters) {
      return getters.activeSlideContent[getters.indexActive.atom];
    },
    indexActive(state) {
      var slide = state.layout
        .map((slide) => slide.i)
        .indexOf(state.iActive.slide);
      var atom = state.layout[slide].slideContent
        .map((atom) => atom.i)
        .indexOf(state.iActive.atom);
      return { slide, atom };
    },
    blankArea(state, getters) {
      var slideContent = getters.activeSlideContent;
      if (slideContent.length == 0) {
        var occupied = [0, 0, 0, 0];
      } else {
        var array = slideContent.map((item) => {
          return {
            x1: item.x,
            y1: item.y,
            x2: item.x + item.w,
            y2: item.y + item.h,
          };
        });
        var minX1 = Math.min.apply(
          Math,
          array.map(function (o) {
            return o.x1;
          })
        );
        var minY1 = Math.min.apply(
          Math,
          array.map(function (o) {
            return o.y1;
          })
        );
        var maxX2 = Math.max.apply(
          Math,
          array.map(function (o) {
            return o.x2;
          })
        );
        var maxY2 = Math.max.apply(
          Math,
          array.map(function (o) {
            return o.y2;
          })
        );
        var occupied = [minX1, minY1, maxX2 - minX1, maxY2 - minY1];
      }
      var retained = function (area, occupied) {
        const [x1, y1, w1, h1] = area;
        const [x3, y3, w2, h2] = occupied;
        var x2 = x1 + w1,
          y2 = y1 + h1,
          x4 = x3 + w2,
          y4 = y3 + h2;
        var left = x3 - x1,
          right = x2 - x4,
          top = y3 - y1,
          bottom = y2 - y4;
        var blank1 =
          left < right
            ? { x: x4, y: y1, w: right, h: h1 }
            : { x: x1, y: y1, w: left, h: h1 };
        var blank2 =
          top < bottom
            ? { x: x1, y: y4, w: w1, h: bottom }
            : { x: x1, y: y1, w: w1, h: top };
        return blank1.w * blank1.h < blank2.w * blank2.h ? blank2 : blank1;
      };
      var area = [0, 0, 18, 18];
      var newAtomArea = retained(area, occupied);
      newAtomArea.h = Math.max(1, Math.floor(newAtomArea.h / 2));
      return newAtomArea;
    },
    getBackground(state) {
      var background = "";
      switch (state.background.mode) {
        case "pure":
          background = `${state.background.pure}`;
          break;
        case "linear":
          background = `linear-gradient(${state.background.linear.angle}deg, ${state.background.linear.start}, ${state.background.linear.end})`;
          break;
        case "radial":
          background = `radial-gradient(${state.background.radial.shape}, ${state.background.radial.start}, ${state.background.radial.end})`;
          break;
        case "custom":
          background = state.background.custom;
          break;
        case "image":
          background = `url(${state.background.image.src}) no-repeat ${state.background.image.x} ${state.background.image.y} /  ${state.background.image.width} ${state.background.image.height}`;
          break;
        case "texture":
          background = `url(${state.background.texture.src}) repeat`;
          break;
      }
      return background;
    },
    sortLayout(state) {
      var layout = JSON.parse(JSON.stringify(state.layout));
      layout.sort((a, b) => {
        return a.y - b.y;
      });
      var newLayout = layout.map((slide, index) => {
        slide.i = index.toString();
        var newSlideContent = slide.slideContent.map((atom, atomIndex) => {
          atom.i = atomIndex.toString();
          return atom;
        });
        // slideAnimation.steps
        var orders = slide.slideContent.map((atom, atomIndex) => {
          return atom.atomAnimation.order;
        });
        slide.slideContent = newSlideContent;
        slide.slideAnimation.steps = Math.max(...orders);
        return slide;
      });
      return newLayout;
    },
    //file
    activeFile(state, getters) {
      return state.document.fileList[state.document.activeIndex];
    },
    getFileList(state, getters) {
      return state.document.fileList;
    },
    //user
    user(state, getters) {
      return state.loginState ? state.loginState.user : null;
    },
    //local Atoms
    myAtomList(state, getters) {
      return state.gallery.localLayout[0].slideContent.map((atom) => {
        return {
          ...atom,
          atomBorder: {
            width: 0,
            type: "solid",
            color: "#808080",
            radius: 1,
          },
          atomAnimation: { order: 1, enter: "fadeIn", leave: "fadeOut" },
        };
      });
    },
    //local template slideContent
    getLocalSlideContent(state, getters) {
      return state.gallery.localLayout[0].slideContent;
    },
    getTemplateSlideContent(state, getters) {
      return state.gallery.templateLayout[0].slideContent;
    },
  },
  mutations: {
    // slide
    addSlide(state, payload) {
      state.iMax.slide++;
      state.layout.push(payload);
      state.iActive.slide = payload.i;
    },
    removeSlide(state, payload) {
      state.layout.splice(payload, 1);
    },
    // actived slide and atom // Working Area
    updateIActive(state, payload) {
      state.iActive = payload;
    },
    // atom
    addAtom(state, payload) {
      state.iMax.atom++;
      var indexActiveSlide = state.layout
        .map((slide) => slide.i)
        .indexOf(state.iActive.slide);
      state.layout[indexActiveSlide].slideContent.push(payload);
    },
    removeAtom(state, payload) {
      var indexActiveSlide = state.layout
        .map((slide) => slide.i)
        .indexOf(state.iActive.slide);
      var indexActiveAtom = state.layout[indexActiveSlide].slideContent
        .map((atom) => atom.i)
        .indexOf(state.iActive.atom);
      state.layout[indexActiveSlide].slideContent.splice(indexActiveAtom, 1);
    },
    fixedAtom(state) {
      var indexActiveSlide = state.layout
        .map((slide) => slide.i)
        .indexOf(state.iActive.slide);
      var indexActiveAtom = state.layout[indexActiveSlide].slideContent
        .map((atom) => atom.i)
        .indexOf(state.iActive.atom);
      state.layout[indexActiveSlide].slideContent[indexActiveAtom].static =
        !state.layout[indexActiveSlide].slideContent[indexActiveAtom].static;
    },
    // changeAtom or change config
    changeAtom(state, payload) {
      //console.log("changeAtom", payload);
      switch (payload.menuValue) {
        case "template-layout":
          var str =
            "state.gallery.templateLayout[0].slideContent[state.gallery.activeIndex]." +
            payload.key +
            "=payload.value";
          eval(str);
          break;
        case "local-layout":
          var str =
            "state.gallery.localLayout[0].slideContent[state.gallery.activeIndex]." +
            payload.key +
            "=payload.value";
          eval(str);
          break;
        case "layout":
          var indexActiveSlide = state.layout
            .map((slide) => slide.i)
            .indexOf(state.iActive.slide);
          var indexActiveAtom = state.layout[indexActiveSlide].slideContent
            .map((atom) => atom.i)
            .indexOf(state.iActive.atom);
          var str =
            "state.layout[indexActiveSlide].slideContent[indexActiveAtom]." +
            payload.key +
            "=payload.value";
          eval(str);
          break;
      }
    },
    changeSheetData(state, payload) {
      //console.log("changeSheetData", payload);
      switch (payload.menuValue) {
        case "template-layout":
          state.gallery.templateLayout[0].slideContent[
            state.gallery.activeIndex
          ].atomContent.detail.sheetData = payload.sheetData;
          state.gallery.templateLayout[0].slideContent[
            state.gallery.activeIndex
          ].atomContent.detail.nr = payload.nr;
          state.gallery.templateLayout[0].slideContent[
            state.gallery.activeIndex
          ].atomContent.detail.nc = payload.nc;
          //console.log("template", payload.menuValue);
          break;
        case "local-layout":
          state.gallery.localLayout[0].slideContent[
            state.gallery.activeIndex
          ].atomContent.detail.sheetData = payload.sheetData;
          state.gallery.localLayout[0].slideContent[
            state.gallery.activeIndex
          ].atomContent.detail.nr = payload.nr;
          state.gallery.localLayout[0].slideContent[
            state.gallery.activeIndex
          ].atomContent.detail.nc = payload.nc;
          //console.log("local123", payload.menuValue);
          break;
        default:
          var indexActiveSlide = state.layout
            .map((slide) => slide.i)
            .indexOf(state.iActive.slide);
          var indexActiveAtom = state.layout[indexActiveSlide].slideContent
            .map((atom) => atom.i)
            .indexOf(state.iActive.atom);
          state.layout[indexActiveSlide].slideContent[
            indexActiveAtom
          ].atomContent.detail.sheetData = payload.sheetData;
          state.layout[indexActiveSlide].slideContent[
            indexActiveAtom
          ].atomContent.detail.nr = payload.nr;
          state.layout[indexActiveSlide].slideContent[
            indexActiveAtom
          ].atomContent.detail.nc = payload.nc;
          break;
      }
    },
    //animation
    changeSlideAnimation(state, payload) {
      var indexActiveSlide = state.layout
        .map((slide) => slide.i)
        .indexOf(state.iActive.slide);
      state.layout[indexActiveSlide].slideAnimation[payload.key] =
        payload.value;
    },
    //background
    changeBackground(state, payload) {
      this.state.background = payload.background;
    },
    // width and height
    changeInnersize(state, payload) {
      state.innerSize.width = payload.width;
      state.innerSize.height = payload.height;
    },
    // open file and changeLayout
    // toolbar
    changeLayout(state, payload) {
      state.layout = payload.layout;
      state.iActive = {
        slide: payload.layout[0].i,
        atom: -1,
      };
      state.leftAreaKey++;
    },
    changeWorkingAreaKey(state) {
      state.workingAreaKey++;
    },
    changeLeftAreaKey(state) {
      state.leftAreaKey++;
      ////console.log("changeLeftAreaKey");
    },
    //gallery
    changeGalleryActiveIndex(state, payload) {
      state.gallery.activeIndex = payload.activeIndex;
    },
    initLocalAtom(state, payload) {
      state.gallery.localLayout[0].slideContent = payload.slideContent;
    },
    addLocalAtom(state, payload) {
      state.gallery.localLayout[0].slideContent.push(payload.atom);
      //console.log(state.gallery.localLayout[0].slideContent.length);
    },
    //indexDB
    changeStore(state, payload) {
      state.store = payload.store;
    },
    //document
    changeDocumentActiveIndex(state, payload) {
      state.document.activeIndex = payload.activeIndex;
      //layout and background
      const layout = state.document.fileList[payload.activeIndex].slides;
      const background =
        state.document.fileList[payload.activeIndex].background;
      state.layout = JSON.parse(JSON.stringify(layout));
      state.background = JSON.parse(JSON.stringify(background));
      //iActive
      state.iActive = {
        slide: layout[0].i,
        atom: -1,
      };
    },
    changeDocumentFileList(state, payload) {
      var fileList = Array.from(new Set([...payload.fileList]));
      if (fileList.length === 0) fileList.push(state.document.templateFile);
      state.document.fileList = fileList;
    },
    addFile(state, payload) {
      state.document.fileList.push(payload.file);
    },
    removeFile(state, payload) {
      state.document.fileList.splice(payload.index, 1);
    },
    //loginState
    changeLoginState(state, payload) {
      state.loginState = payload.loginState;
    },
    //changeAccount
    initAccount(state, payload) {
      state.account = payload.account;
    },
    changeAccount(state, payload) {
      state.account.total_file += payload.file;
      state.account.total_size += payload.size;
    },
    //sharedFile
    initSharedFileList(state, payload) {
      state.sharedFileList = payload.sharedFileList;
      //change shared status vip expire
      if (state.sharedFileList.length > 0) {
        const sharedList = payload.sharedFileList.map((file1) => file1._id);
        state.document.filelist.forEach((file2, i) => {
          state.document.fileList[i].shared = sharedList.includes(file2.id);
        });
      }
    },
    addSharedFileList(state, payload) {
      state.sharedFileList.push(payload.fileInfo);
    },
    removeSharedFileList(state, payload) {
      const index1 = state.sharedFileList
        .map((fileInfo) => fileInfo._id)
        .indexOf(payload._id);
      state.sharedFileList.splice(index1, 1);
      const index2 = state.document.fileList
        .map((file) => file.id)
        .indexOf(payload._id);
      state.document.fileList[index2].shared = false;
    },
  },
});
