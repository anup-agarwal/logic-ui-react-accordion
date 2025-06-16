[![npm version](https://img.shields.io/npm/v/@logicblocks/react-accordion.svg)](https://www.npmjs.com/package/@logicblocks/react-accordion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/anup-agarwal/logic-ui-react-accordion)](https://github.com/anup-agarwal/logic-ui-react-accordion/stargazers)

# @logicblocks/accordion

A **headless**, **fully controlled**, and **unopinionated** React accordion component built with logic-first principles.  
No styles. No theming. You control everything.

---

## ✨ Features

- ✅ **Fully controlled** via `currentIndex` + `onToggle`
- ✅ **Supports single or multiple open panels**
- ✅ Optional `collapseOthers` to close other panels automatically
- ✅ **Zero styling** — use `className` and `style` freely
- ✅ Works with **Tailwind**, **CSS Modules**, **Emotion**, or **vanilla CSS**
- ✅ Accessible with proper ARIA roles

---

## 📦 Installation

```bash
npm install @logicblocks/accordion
```

---

## 🚀 Usage

### 🔹 1. Inline Styles

```tsx
import { Accordion } from "@logicblocks/accordion";
import { useState } from "react";

const items = [
  {
    title: "Inline Panel 1",
    Component: () => <p>Hello world</p>,
  },
  {
    title: "Inline Panel 2",
    Component: () => <p>More content</p>,
  },
];

const App = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Accordion
      items={items}
      currentIndex={activeIndex}
      onToggle={setActiveIndex}
      multiple={false}
      containerStyle={{ border: "1px solid #ccc", padding: "10px" }}
      itemStyle={{ marginBottom: "10px" }}
      triggerStyle={{ background: "#eee", padding: "8px", fontWeight: "bold" }}
      panelStyle={{ padding: "8px", background: "#fafafa" }}
    />
  );
};
```

---

### 🎨 2. Custom CSS Classes

```tsx
import { Accordion } from "@logicblocks/accordion";
import "./styles.css"; // Your CSS file
import { useState } from "react";

const items = [
  {
    title: "Custom Class Panel 1",
    Component: () => <p>Styled by CSS</p>,
  },
  {
    title: "Custom Class Panel 2",
    Component: () => <p>Another styled panel</p>,
  },
];

const App = () => {
  const [index, setIndex] = useState<number[]>([]);

  return (
    <Accordion
      items={items}
      currentIndex={index}
      onToggle={setIndex}
      multiple
      itemClassName="accordion-item"
      triggerClassName="accordion-trigger"
      panelClassName="accordion-panel"
    />
  );
};
```

```css
/* styles.css */
.accordion-item {
  border: 1px solid #888;
  margin-bottom: 10px;
}
.accordion-trigger {
  background: #222;
  color: #fff;
  padding: 10px;
  width: 100%;
  text-align: left;
}
.accordion-panel {
  background: #f0f0f0;
  padding: 10px;
}
```

---

### 💨 3. Tailwind CSS

```tsx
import { Accordion } from "@logicblocks/accordion";
import { useState } from "react";

const items = [
  {
    title: "Tailwind Panel 1",
    Component: () => <p className="text-gray-700">This is Tailwind!</p>,
  },
  {
    title: "Tailwind Panel 2",
    Component: () => <p className="text-blue-600">Tailwind rocks!</p>,
  },
];

const App = () => {
  const [activeList, setActiveList] = useState<number[]>([]);

  return (
    <Accordion
      items={items}
      currentIndex={activeList}
      onToggle={setActiveList}
      multiple
      containerClassName="space-y-4"
      itemClassName="border border-gray-300 rounded"
      triggerClassName="w-full text-left font-medium p-4 bg-gray-100 hover:bg-gray-200"
      panelClassName="p-4 bg-white"
    />
  );
};
```

---

## 🔧 Props

| Prop                                                        | Type                                       | Description                             |
|-------------------------------------------------------------|--------------------------------------------|-----------------------------------------|
| `items`                                                     | `{ title: string, Component: React.FC }[]` | List of accordion sections              |
| `currentIndex`                                              | `number` or `number[]`                     | Controlled index or list of indexes     |
| `onToggle`                                                  | `(nextIndex: number or number[]) => void`  | Callback to control state externally    |
| `multiple`                                                  | `boolean`                                  | Allow multiple panels open              |
| `collapseOthers`                                            | `boolean`                                  | Collapse all others when one is toggled |
| Styling props like `containerClassName`, `panelStyle`, etc. | `string` or `React.CSSProperties`          | Full styling control via props          |

---

## 🧱 Philosophy

This package is part of the [@logicblocks](https://www.npmjs.com/org/logicblocks) ecosystem — focused on **clean logic** and **maximum styling freedom**.  
Ideal for devs who hate fighting CSS-in-JS libraries or component libraries that lock down UI.

---

## 🪪 License

MIT License © [Anup Agarwal](https://github.com/anup-agarwal)