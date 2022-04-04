function getData() {
  // console.log("Started getData");
  url = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
  fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    let newsHtml = "";
    Array.from(data.articles).forEach(function (element) {
      let news = `
                        <div class="col searchDiv" >
                        <div class="card h-100">
                            <div class="card-header"><b>Author:</b> ${element["author"]}</div>
                            <img src="${element["urlToImage"]}"
                                class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${element["title"]}</h5>
                                <p class="card-text">${element["description"]}</p>
                            </div>
                            <a href="${element["url"]}">
                            <h6> For more details</h6>
                            </a> 
                            <div class="card-footer">
                                <small class="text-muted">${element["publishedAt"]}</small>
                            </div>
                        </div>
                    </div>`;
      newsHtml += news;

    });
    newsDiv.innerHTML = newsHtml;
  })

}

getData();





// Search function
search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
    inputVal = search.value.toLowerCase();
    let searchDiv = document.getElementsByClassName("searchDiv");
    Array.from(searchDiv).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;

        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }

    })

});