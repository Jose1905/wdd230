const datefield = document.querySelector(".date");
const meeting_msg = document.getElementById('meeting-msg');
const now = new Date();
const weekday = now.getDay();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
);

datefield.innerHTML = `<em>${fulldate}</em>`;