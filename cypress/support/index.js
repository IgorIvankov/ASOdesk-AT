

// Cypress.on('window:before:load', (win) => {
//     const originalXhr = win.XMLHttpRequest;
  
//     function newXhr() {
//       const xhr = new originalXhr();
//       xhr.open = function () {
//         const result = originalXhr.prototype.open.apply(xhr, arguments);
//         xhr.setRequestHeader('Accept-Encoding', 'test');
//         return result;
//       };
//       return xhr;
//     }
  
//     win.XMLHttpRequest = newXhr;
//   });
  