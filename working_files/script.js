d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;
//   get text of selection
  var sel = document.getElementById("selectOption");
  var text= sel.options[sel.selectedIndex].text;
// or...
  test = document.getElementById('selectOption').selectedOptions[0].text


  console.log(dropdownMenuID);
  console.log(selectedOption);
  console.log(d3.selectAll("#menu").node().id);
  console.log(dropdownMenu.textContent);

  console.log(text);
  console.log(test);
};

