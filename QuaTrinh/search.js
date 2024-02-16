function search() {
    // Lấy giá trị từ ô nhập liệu
    var searchTerm = document.getElementById("search").value;
  
    // Kiểm tra nếu ô nhập liệu không trống
    if (searchTerm.trim() !== "") {
      // Chuyển hướng đến trang kết quả tìm kiếm
      window.location.href = "https://css-tricks.com/?s=javascript" + encodeURIComponent(searchTerm);
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    var boxText = document.querySelector('.box p').innerText.toLowerCase();
    var textParagraphs = document.querySelectorAll('.text p');

    textParagraphs.forEach(function (paragraph) {
        var paragraphText = paragraph.innerText.toLowerCase();
        if (paragraphText.includes(boxText)) {
            // Nếu đoạn văn bản chứa từ giống với class "box", thì thay đổi màu chữ
            paragraph.innerHTML = paragraphText.replace(new RegExp(boxText, 'gi'), '<span class="highlight">$&</span>');
        }
    });
});
