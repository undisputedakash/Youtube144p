const xhr= new XMLHttpRequest()

document.querySelector("#search-btn").addEventListener('click', ()=>{
    const queryValue= document.querySelector("#search-query").value

    const apiKey=`AIzaSyA-KQwXetR2PHz9swCPB-qgI47h18HAC3w`
    const url= `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${queryValue}&key=${apiKey}&maxResults=1000`
    console.log(url)

    xhr.open('GET', url)

    xhr.onreadystatechange= ()=>{
        if(xhr.readyState === 4 && xhr.status=== 200){
            const response= JSON.parse(xhr.responseText)
            console.log(response)

            var output=''
            for (let i=0;i<response.items.length; i++){
                output+=`
                <div class="container-item">
                <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="blank">
                <img src="${response.items[i].snippet.thumbnails.high.url}"/>
                </a>
                <p style="color:white">${response.items[i].snippet.title}</p>
                <small style="color:grey">${response.items[i].snippet.description}</small>
                </div>
                `
            console.log(response.items[i].snippet.thumbnails.default.url)
            }

            document.querySelector('#videos').innerHTML=output
        }

    }
xhr.send()
})

