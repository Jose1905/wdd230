const currentdate = new Date(); 
const datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " - "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes();
const submitbtn = document.querySelector('.submitbtn');
const submit_time = document.querySelector('#submission-time');

submitbtn.addEventListener('click', () => {submit_time.innerHTML = datetime});

// hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);