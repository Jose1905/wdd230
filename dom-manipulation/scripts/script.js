const link = document.querySelector('a');
const sect = document.querySelector('section');
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
const para = document.createElement('p');


link.textContent = 'Mozilla Developer Network';
link.href = 'https://developer.mozilla.org';

para.textContent = 'We hope you enjoyed the ride.';
sect.appendChild(para);

linkPara.appendChild(text);
sect.appendChild(linkPara);

para.setAttribute('class', 'highlight');