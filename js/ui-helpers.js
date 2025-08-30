/* ui-helpers.js
   DOM helpers + modal + Arabic digits converter
   Exposes: window.UI = { $, $$, openModal, closeModal, arabicDigits }
*/
(function(){
  const $ = (sel, el=document) => el.querySelector(sel);
  const $$ = (sel, el=document) => [...el.querySelectorAll(sel)];

  const modal = $('#backdrop');
  const modalTitle = $('#modalTitle');
  const modalContent = $('#modalContent');

  const openModal = (title, html) => {
    modalTitle.textContent = title;
    modalContent.innerHTML = html;
    modal.style.display = 'flex';
    modalContent.focus();
  };
  const closeModal = () => { modal.style.display = 'none'; };

  // Convert Western digits to Arabic-Indic digits for UI display
  const arabicDigits = (str) => String(str).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);

  // expose
  window.UI = { $, $$, openModal, closeModal, arabicDigits };
})();
