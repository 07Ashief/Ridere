import React, { useState } from 'react';
import './faqComponent.css'; // Update the CSS file name here

function FAQ(props) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="faq-section"> {/* Updated class name */}
      <div className="faq-container"> {/* Updated class name */}
        <h2>FAQ</h2>
        <div className="faq-accordion"> {/* Updated class name */}
          {props.faqs.map((faq, index) => (
            <div className="faq-accordion-item" key={index}> {/* Updated class name */}
              <button
                aria-expanded={index === expandedIndex}
                onClick={() => toggleAccordion(index)}
              >
                <span
                  className={`faq-icon ${index === expandedIndex ? 'rotated' : ''}`}
                  aria-hidden="true"
                ></span>

                <span className="faq-accordion-title">{faq.question}</span> {/* Updated class name */}
              </button>
              {index === expandedIndex && (
                <div className="faq-accordion-content"> {/* Updated class name */}
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQApp = () => {
  const faqs = [
    {
      question: "What is framer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    },
    {
      question: "Is it easy to learn?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    },
    {
      question: "Do I need to code?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti."
    }
  ];

  return (
    <div>
      <FAQ faqs={faqs} />
      <hr />
    </div>

  );
};

export default FAQApp;
