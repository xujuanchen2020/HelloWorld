import React, {useState} from "react";
import './FAQ.css'

const Categories = ({ categories, filterItems }) => {
  const [value, setValue] = useState(0)
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
            <button
              type="button"
              key={index}
              className={`job-btn ${index === value && "active-btn"}`}
              onClick={() => {
                filterItems(category), setValue(index);
              }}
            >
              {category}
            </button>
        );
      })}
      
    </div>
  );
};

export default Categories;
