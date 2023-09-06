import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import PropTypes from "prop-types";

/**
 *
 * @typedef AccordionExample - Tạo accordion mẫu
 * @returns
 */

/**
 * @property {string} title - Tiêu đề của danh sách
 * @property {string} content - Nội dung của danh sách
 */

const AccordionExample = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

AccordionExample.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default AccordionExample;
