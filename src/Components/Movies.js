import React from 'react'


function Movies(props){
    return(
        <div>
   <center><h1>Movie List</h1></center>
          {props.movies.map((movie) => (
              
              <div class="col-6 center">
            <div class="card"   >
              <div class="card-body" >
                <h5 class="card-title">Title:{movie.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Realse Date:{movie.release_date}</h6>
                <p class="card-text">Description:{movie.overview}</p>
               Image <img src="http://image.tmdb.org/t/p/w500/{movie.poster_path}" alt=""/><br/>
              </div>
            </div>
            </div>
          ))}
        </div>
    )
}

export default Movies