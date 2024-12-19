let showClickedVideo = ()=>{
    let reqdata = JSON.parse(localStorage.getItem("clickedData"));
    let video = document.getElementById("video");
    let iframe = document.createElement("iframe");

     iframe.src= `https://www.youtube.com/embed/${reqdata.id.videoId}`
     iframe.width="560";
     iframe.height="315";
     iframe.setAttribute("allowfullscreen",true);
     video.append(iframe);
}