function change() {
    let a = document.getElementById("num").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
   let giaTri = a*to/from
    document.getElementById("kq").innerText = giaTri
}
