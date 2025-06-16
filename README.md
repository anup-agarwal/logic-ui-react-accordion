[![npm version](https://img.shields.io/npm/v/@logicblocks/react-accordion.svg)](https://www.npmjs.com/package/@logicblocks/react-accordion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/anup-agarwal/logic-ui-react-accordion)](https://github.com/anup-agarwal/logic-ui-react-accordion/stargazers)

# @logicblocks/react-accordion

A customizable React accordion component with **no built-in CSS** — completely style-agnostic and perfect for logic-only UI builds.

---

## 🚀 Installation

Using npm:

```bash
npm install @logicblocks/react-accordion
```

Using yarn:

```bash
yarn add @logicblocks/react-accordion
```

---

## 💡 Usage Examples

---

### 1️⃣ With CSS Classes

### 📦 Example CSS
```css
/* accordion.css */

.accordion-container {
  border: 1px solid #ccc;
  padding: 12px;
}

.accordion-item {
  border: 1px solid #ddd;
  margin-bottom: 10px;
}

.accordion-trigger {
  background: #f1f1f1;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
}

.accordion-panel {
  padding: 10px;
  background: #fafafa;
}
```

```tsx
import React, { useState } from 'react';
import { Accordion } from '@logicblocks/react-accordion';
import './accordion.css';

const items = [
  { title: 'Section 1', Component: () => <p>Content 1</p> },
  { title: 'Section 2', Component: () => <p>Content 2</p> },
];

const App = () => {
  const [index, setIndex] = useState<number[]>([]);

  return (
    <Accordion
      items={items}
      currentIndex={index}
      onToggle={setIndex}
      multiple
      containerClassName="accordion-container"
      itemClassName="accordion-item"
      triggerClassName="accordion-trigger"
      panelClassName="accordion-panel"
    />
  );
};

export default App;
```

---

### 2️⃣ With Inline Styles

```tsx
import React, { useState } from 'react';
import { Accordion } from '@logicblocks/react-accordion';

const items = [
  { title: 'Section 1', Component: () => <p>Inline 1</p> },
  { title: 'Section 2', Component: () => <p>Inline 2</p> },
];

const App = () => {
  const [index, setIndex] = useState<number[]>([]);

  return (
    <Accordion
      items={items}
      currentIndex={index}
      onToggle={setIndex}
      multiple
      containerStyle={{ border: '1px solid #ccc', padding: '12px' }}
      itemStyle={{ marginBottom: '10px' }}
      triggerStyle={{ background: '#eee', padding: '10px', fontWeight: 'bold' }}
      panelStyle={{ padding: '10px', background: '#f9f9f9' }}
    />
  );
};

export default App;
```

---

### 3️⃣ With Tailwind CSS (v3.4+)

```tsx
import React, { useState } from 'react';
import { Accordion } from '@logicblocks/react-accordion';

const items = [
  { title: 'Tailwind 1', Component: () => <p className="p-4 text-gray-700">First</p> },
  { title: 'Tailwind 2', Component: () => <p className="p-4 text-gray-700">Second</p> },
];

const App = () => {
  const [index, setIndex] = useState<number[]>([]);

  return (
    <Accordion
      items={items}
      currentIndex={index}
      onToggle={setIndex}
      multiple
      containerClassName="space-y-4"
      itemClassName="border border-gray-300 rounded"
      triggerClassName="w-full text-left font-medium p-4 bg-gray-100 hover:bg-gray-200"
      panelClassName="p-4 bg-white"
    />
  );
};

export default App;
```

---

## 📦 Props

### ✅ Required Props

- `items`: Array of accordion items:
  - `title` (string): Section label
  - `Component` (React.FC): Rendered content

- `currentIndex`: Currently open index or array of indexes
- `onToggle`: Callback to handle index changes

### ⚙️ Optional Props

- `multiple`: Allow multiple open panels
- `collapseOthers`: When `multiple`, closes other panels automatically
- `containerClassName`, `itemClassName`, `triggerClassName`, `panelClassName`: CSS class hooks
- `containerStyle`, `itemStyle`, `triggerStyle`, `panelStyle`: Inline style hooks

---

## 🎨 Customization

This component is **100% unstyled** by default.  
You decide everything — whether to use Tailwind, vanilla CSS, Chakra, Emotion, or inline styles.

---

## 🤝 Contributing

Contributions are welcome!  
Feel free to [open an issue](https://github.com/anup-agarwal/logic-ui-react-accordion/issues) or submit a pull request on [GitHub](https://github.com/anup-agarwal/logic-ui-react-accordion).

---

## 📄 License

MIT License © [Anup Agarwal](https://github.com/anup-agarwal)