import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
import printMe from './print';

function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello')

  // 将图像添加到我们已经存在的 div 中。
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  console.log(Data);
  btn.innerHTML = '点击这f里，然后查看 cffonsole！';
  btn.onclick = printMe;
  element.appendChild(btn);
  return element;
}

let element = component(); 

document.body.appendChild(element);

if (module.hot) {
   module.hot.accept('./print.js', function() {
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
   })
 }