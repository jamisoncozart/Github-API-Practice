//===================================
//AJAX REQUEST METHOD

// const Http = new XMLHttpRequest();
// const url = "https://api.github.com/users/jamisoncozart/repos";
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (err) => {
//   if(this.readyState==4 && this.status==200) {
//     console.log(Http.responseText);
//   } else {
//     console.log(err);
//   }
// }

//==================================
//AJAX JQUERY REQUEST METHOD

// $(document).ready(function() {
//   const Url = "https://api.github.com/users/jamisoncozart/repos";
//   $.ajax({
//     url: Url,
//     type: "GET",
//     success: function(result) {
//       console.log(result)
//     },
//     error: function(error) {
//       console.log(`Error: ${error}`);
//     }
//   })
// })

//=================================
//JQUERY REQUEST METHOD

$(document).ready(function() {
  const Url = "https://api.github.com/users/jamisoncozart/repos";
  $.get(Url, function(data, status) {
    var repos = data;
    console.log(repos[0].stargazers_count);
    repos = repos.sort((a,b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count));
    console.log(repos[0].stargazers_count);
    console.log(repos);
    document.getElementById("title").innerHTML = repos[0].name;
    document.getElementById("stars").innerHTML = repos[0].stargazers_count;
    document.getElementById("description").innerHTML = repos[0].description;
  })
})

