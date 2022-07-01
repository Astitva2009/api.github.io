window.onload = gegugaga.api.forEach((e) => loadBlog(e));



function loadBlog(data) {
  let li = document.createElement("li");

  li.innerHTML = '<div class="container">' + "<p class='title'>" + data.title + '</p>' + '<p class="content">' + data.content + "</p>" + "<img class='img' src=" + data.img + " width='100%' alt='...'>" + '<div>';
  
  document.getElementById('txa').appendChild(li);
}
