let input=document.getElementById('input')
let btn=document.getElementById('btn')
let result=document.getElementById('result')
btn.addEventListener('click',function(){
    let inputValue=input.value 
    let apikey="9c67ef62"
    let url=`http://www.omdbapi.com/?apikey=${apikey}&t=${inputValue}`;
    const image=`http://www.omdbapi.com/?apikey=${apikey}&`;
    fetch(url)
    .then((response)=>response.json()) 
    .then((res)=>{
        const movie=res;
        const posterUrl=`${image}&i;=${movie.ImdbID}`;
        const html=`
        <div>
        <img src='${posterUrl}' alt='${movie.title}'>
        <p>Released in ${movie.year}</p>
        <p>IMDB rating:${movie.ImdbRating}</p>
        <p>Cast:${movie.Actors}</p>
        <p>Crew:${movie.Crew}</p>
        </div>
        
        `;
        
       result.innerHTML=html; 
    } )
})