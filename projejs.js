const box = document.getElementById('box');

const redbtn = document.getElementById('redbtn');

redbtn.addEventListener('click', function handleClick() {
       if (box.style.display === 'none') {
          box.style.display = 'block-inline';
          redbtn.textContent = 'ADD';
       } else {
          box.style.display = 'none';
         redbtn.textContent = 'ADD';
       }

});