document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("hapus").addEventListener("click", function () {
    var table = document.getElementById("data");
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
  });

  document.getElementById("refresh").addEventListener("click", function () {
    location.reload();
  });

  document.getElementById("cariButton").addEventListener("click", function () {
    var kataKunci = document.getElementById("cari").value.toLowerCase();
    var table = document.getElementById("data");
    for (var i = 1; i < table.rows.length; i++) {
      var row = table.rows[i];
      var npm = row.cells[1].textContent.toLowerCase();
      var nama = row.cells[2].textContent.toLowerCase();
      if (npm.includes(kataKunci) || nama.includes(kataKunci)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  });

  document.getElementById("simpan").addEventListener("click", function () {
    var npm = document.getElementById("npm").value;
    var nama = document.getElementById("nama").value;

    var table = document.getElementById("data");
    var newRow = table.insertRow(-1);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    cell1.textContent = table.rows.length - 1;
    cell2.textContent = npm;
    cell3.textContent = nama;

    document.getElementById("npm").value = "";
    document.getElementById("nama").value = "";
  });
});