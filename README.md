# Project #14 OCR- Build a Library for any project in react

-Name: react-drpdwn-ui
-version: 1.0.1
-Autor:PA-MAI

## Install library

```bash
npm install react-drpdwn-ui
```

## Sample configuration

1-import the library in your React project page:

- `import { Dropdown } from 'react-drpdwn-ui';`

2-import data in your React project page

For your own custom data (internal src/data/xxxx.js):

- `import xxxx from "../../data/xxxx";`

3-Set datas for states or/and departements in your variable:

- `const statesOptions = states.map((s) => ({ label: s.name, value: s.abbreviation }));`
- `const departmentOptions = departements.map((d) => ({ label: d, value: d }));`

4-Use the dropdown in your return:

-`<Dropdown
    id="state"
    label="State"
    value={formData.state}
    options={statesOptions}
    onChange={handleChange}
    />`

or/and

-`<Dropdown
    id="department"
    label="Department"
    value={formData.department}
    options={departmentOptions}
    onChange={handleChange}
    />`
