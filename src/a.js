import './b.css';
import dogImg from './dog.jpeg';
import catImg from './img/cat.jpeg';
console.log('dogImg', dogImg);
console.log('catImg', catImg);
const add = (a, b) =>  a + b;
console.log(add(1, 2));

window.onload = function() {
  document.getElementById('img1').innerHTML = `<img src=${dogImg} />`;
  document.getElementById('img2').innerHTML = `<img src=${catImg} />`;
}
