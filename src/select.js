// const select = () => {
//   const selectBlock = document.querySelectorAll('.select-custom');

//   selectBlock.forEach((item) => {
//     console.log(item);
//     const selectHeader = item.querySelector('.select__header');
//     const selectItem = item.querySelectorAll('.select__item');

//     selectHeader.addEventListener('click', () => {
//       selectHeader.parentElement.classList.toggle('is-active');
//     });

//     selectItem.forEach((itemSelect) => {
//       itemSelect.addEventListener('click', () => {
//         const text = itemSelect.innerText;
//         const selectWrap = itemSelect.closest('.select-custom');
//         const currentText = selectWrap.querySelector('.select__current');
//         currentText.innerText = text;
//         selectWrap.classList.remove('is-active');
//       });
//     });
//   });
// };

// export default select;
