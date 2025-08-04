# Project #14 OCR — Build a Library for Any React Project

- **Name**: `react-drpdwn-ui`  
- **Version**: `1.0.2`  
- **Author**: Pa-Mai

---

## Technologies

- JavaScript
- CSS
- React

---

## Install the library

```bash
npm install react-drpdwn-ui
```

---

## Sample configuration

### 1 - Import the library in your React component

```js
import { Dropdown } from 'react-drpdwn-ui';
```

---

### 2 - Import your own data (from `src/data/xxxx.js`)

```js
import xxxx from "../../data/xxxx";
```

---

### 3 - Set data for `states` or `departments` in your variables

#### States example

```js
export const states = [
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  // ...
];

const statesOptions = states.map((state) => ({
  value: state.abbreviation, // "AL"
  label: state.name,         // "Alabama"
}));
```

#### Departments example

```js
export const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
];

const departmentOptions = departments.map((d) => ({
  value: d,
  label: d,
}));
```

---

### 4 - Use the `<Dropdown />` component in your JSX

```jsx
<Dropdown
  id="state"
  label="State"
  value={formData.state}
  options={statesOptions}
  onChange={handleChange}
/>

<Dropdown
  id="department"
  label="Department"
  value={formData.department}
  options={departmentOptions}
  onChange={handleChange}
/>
```

---

## 📘 `<Dropdown />` Component API

The `Dropdown` component is a reusable input for selecting an option from a list.

### Props

| Prop        | Type                                     | Required | Description                                                                 |
|-------------|------------------------------------------|----------|-----------------------------------------------------------------------------|
| `id`        | `string`                                 | ✅       | A unique identifier for the input.                                          |
| `label`     | `string`                                 | ✅       | The text displayed above the dropdown.                                      |
| `value`     | `string`                                 | ✅       | The currently selected value.                                               |
| `options`   | `Array<{ value: string, label: string }>`| ✅       | The list of available options.                                              |
| `onChange`  | `(event: React.ChangeEvent) => void`     | ✅       | Callback function triggered when the selection changes.                     |

---

### Example usage

```jsx
<Dropdown
  id="department"
  label="Department"
  value={formData.department}
  options={departmentOptions}
  onChange={handleChange}
/>
```

---

### Example `options` structure

```js
[
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  // ...
]
```

---

## License

no License

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
