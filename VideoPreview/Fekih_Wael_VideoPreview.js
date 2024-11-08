console.log("page loaded...");

const vid = document.getElementById('vid');
vid.addEventListener("mouseover" , () => vid.play());
vid.addEventListener("mouseout",() => vid.pause());