---
title: 在线制作echarts数据可视化图表工具软件_Vue,echarts图表
description: '零基础零代码免费在线制作echarts图表。基于Vue-echarts开发,数据驱动,组件化。可视化图表拖拽布局。'
---

:::tip
如果您对VSlide的实现原理感兴趣，欢迎阅读本篇文章~
:::

## 设计理念

**数据驱动**和**组件化**是Vue.js的核心理念。VSlide的设计始终秉持着这两大原则。

VSlide是网页。其核心功能是制作支持交互式图表的幻灯演示文稿(依然是网页)。

所以从本质上讲，VSlide是制作网页的网页应用。


## 技术实现

VSlide的实现离不开如下第三方库。

| **名称**        | **协议**         | **功能**            |
| --------------- | ---------------- | ------------------- |
| [Vue.js](https://vuejs.org/)          | MIT              | 数据驱动            |
| [Vuex](https://vuex.vuejs.org/)           | MIT              | Vue数据中心化管理   |
| [Echarts](https://echarts.apache.org/)         | Apache-2.0       | 交互式可视化图表    |
| [Vue-echarts](https://github.com/ecomfe/vue-echarts)     | MIT              | Vue版本的echarts    |
| [Vue-grid-layout](https://jbaysolutions.github.io/vue-grid-layout/) | MIT              | 布局与排版          |
| [Naive UI](https://www.naiveui.com/)       | MIT              | UI组件，表单组件    |
| [md-ediotr-v3](https://imzbf.github.io/)        | MIT              | Markdown编辑器          |
| [Animate.css](https://animate.style/)     |  Hippocratic License   | 动画控制            |
| [Handsontable](https://handsontable.com/)        |               | 数据输入          |