import React from "react";
/**
 * Dropdown reusable component for form selection
 *
 * @component
 * @param {string} id - The unique identifier for the select input
 * @param {string} label - The label displayed above the dropdown
 * @param {string} value - The currently selected value
 * @param {Array<{ value: string, label: string }>} options - The list of available options
 * @param {function} onChange - Callback function triggered when the selection changes
 *
 * @example
 * <Dropdown
 *   id="department"
 *   label="Department"
 *   value={formData.department}
 *   options={departmentOptions}
 *   onChange={handleChange}
 * />
 *
 * @author Pa-Mai
 * @version 1.0.1
 */

export default function Dropdown({ id, label, value, options, onChange }) {
  return (
    <div className="dropdown">
      <label htmlFor={id}>{label}</label>
      <select id={id} value={value} onChange={onChange}>
        {options.map((opt, idx) => (
          <option key={idx} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  );
}
