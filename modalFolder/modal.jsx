// Alternatively, instead of extracting the values of each object element, access each value using dot notation.
// function Modal({ setModal }) {
//   return (
//     <div className="modal">
//       <div className="modalContent">
//         <button onClick={() => setModal(false)}>Close</button>
//         {modalData.map((section, index) => (
//           <div key={index} className="modalSection">
//             <h2>{section.title}</h2>
//             <p>{section.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./modalStyle.css";

function Modal({ modalText, showModal }) {
  function renderText() {
    return modalText.map((element, index) => {
      const { heading, paragraph } = element; // Destructuring the element object
      return (
        <div key={index}>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
        </div>
      );
    });
  }

  return (
    <div className="modal">
      <div className="overlay" onClick={() => showModal()}></div>
      <div className="modalContent">
        <button onClick={() => showModal(false)}>Close</button>
        {renderText()}
      </div>
    </div>
  );
}

export default Modal;
