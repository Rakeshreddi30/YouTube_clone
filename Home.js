let Api = "AIzaSyBS23RjA1h-Vh7_LHa_g1888FcRu6lvOoQ"

let result = document.getElementById("search_result");

async function searchVideos(){
    try{
        let query = document.getElementById("search").value;
    console.log(query);
        let searchApi = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${Api}`);
        let data = await searchApi.json();
        console.log(data.items);
        appendData(data.items);

    }catch(error){
        console.log(error);
    }
}

const appendData = (array)=>{
    result.innerHTML="";

    array.forEach(function (element) {
        let{snippet,id} = element;
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src= snippet.thumbnails.medium.url;
        let title = document.createElement("p");
        title.innerText=snippet.title;
        let channel = document.createElement("h4");
        channel.innerText=snippet.channelTitle;

        div.append(image,title,channel);
        let data = {
            snippet,id
        }
        console.log(data);
        div.onclick=()=>{
            showVideo(data);
            window.location.href="./Video.html"
        }
        result.append(div);
    });
}
  function showVideo(data){
        let storage = JSON.stringify(data);
        localStorage.setItem("clickedData",storage);
  }
