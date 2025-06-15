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
````

---

## 🚀 Usage

```tsx
import { Accordion } from "@logicblocks/accordion";

const items = [
  {
    title: "Introduction",
    Component: () => <p>Hello world</p>,
  },
  {
    title: "Details",
    Component: () => <p>More content here...</p>,
  },
];

const [activeIndex, setActiveIndex] = useState<number>(0);

<Accordion
  items={items}
  currentIndex={activeIndex}
  onToggle={setActiveIndex}
  multiple={false}
/>
```

---

## 🔧 Props

| Prop                                                        | Type                                       | Description                             |
| ----------------------------------------------------------- | ------------------------------------------ | --------------------------------------- |
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

MIT © Anup Agarwal
[anupagarwal.com](https://anupagarwal.com)

---

## 💡 Want More?

Coming soon from `@logicblocks`:

* `@logicblocks/dialog`
* `@logicblocks/tabs`
* `@logicblocks/disclosure`
* `@logicblocks/pin-input`

Follow and ⭐ the repo to stay updated!