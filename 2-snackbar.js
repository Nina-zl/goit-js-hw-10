import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelector(".form");s.addEventListener("submit",n=>{n.preventDefault();const t=Number(s.elements.delay.value),o=s.elements.state.value;if(!t||!o){i.warning({title:"⚠️ Warning",message:"Please fill in all fields!",position:"topRight"});return}new Promise((e,l)=>{setTimeout(()=>{o==="fulfilled"?e(t):l(t)},t)}).then(e=>{console.log(`✅ Fulfilled promise in ${e}ms`),i.success({title:"✅ Success",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{console.log(`❌ Rejected promise in ${e}ms`),i.error({title:"❌ Error",message:`Rejected promise in ${e}ms`,position:"topRight"})})})});
//# sourceMappingURL=2-snackbar.js.map
