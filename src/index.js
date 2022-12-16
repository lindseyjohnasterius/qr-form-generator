import './easy-form-component/index.js';
import './qr-code-element/index.js'


document.querySelector('easy-form').addEventListener('submit', (e)=> {
  const val = e.detail;
  const qr_tag = document.createElement('qr-tag'); 
  console.log(val)
  qr_tag.innerHTML = `

  <h1>${val.title}</h1>
  <qr-code src="${val.root_url}"></qr-code>
  <p>${val.description}</p>

  `

  document.querySelector('main').appendChild(qr_tag)
});

