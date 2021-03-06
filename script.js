function searchLinks() {
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("item");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  if (txtValue.toUpperCase().indexOf(filter) === 0 && i === 1) {
    var p = document.createElement("p");
    p.textContent = "No se encontraron resultados 💡";
    document.body.appendChild(p);
  } else {
    p.style.display = "none";
  }
}
