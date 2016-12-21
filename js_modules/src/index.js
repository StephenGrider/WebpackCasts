const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then(module => {
    console.log(module);
  });
};

document.body.appendChild(button);
