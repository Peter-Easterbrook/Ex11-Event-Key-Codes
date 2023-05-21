// Method 1

// const insert = document.getElementById('insert');

// window.addEventListener('keydown', (event) => {
//   insert.innerHTML = `
// <div class="key">
// ${event.key === ' ' ? 'Space' : event.key}
// <small>event.key</small>
// </div>
// <div class="key">
// ${event.keyCode}
// <small>event.keyCode</small>
// </div>
// <div class="key">
// ${event.code}
// <small>event.code</small>
// </div>`;
// });

// Method 2

function showKeyCodes(e) {
  const insert = document.querySelector('#insert');
  insert.innerHTML = '';
  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.classList.add('key');
    const small = document.createElement('small');
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keydown', showKeyCodes);
