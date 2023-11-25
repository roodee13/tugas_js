const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get("jumlahItem"));

// const kursi = document.getElementById("jumlahItem");
// kursi.innerHTML = urlParams.get("tmb01");