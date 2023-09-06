import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

/**
 *
 * @typedef AccordionItem - Danh sách cần hiển thị
 * @returns
 */

/**
 * @property {string} title - Tiêu đề của danh sách
 * @property {React.Node} content - Nội dung của danh sách
 * @property {bolean} isOpen - Kiểm tra trạng thái của danh sách
 * @property {React.Function} onToggle - Hàm đóng mở danh sách
 */

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  const toggleAccordion = () => {
    onToggle();
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
        <span>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default AccordionItem;
