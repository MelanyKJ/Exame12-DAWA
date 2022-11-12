
const CardView = ({ movies }) => {
    return (
      <>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                      {movies.length > 0 &&
                        movies.map((movie) => (
                          <div>                            
                            <img className="item-movie" width={120} height={120}src={
                              movie.images.posterArt.url} alt="" loading='lazy'/>
                            <div className="info">
                              <p className="row-info">{movie.title}</p>
                            </div>
                          </div>
                        ))}
              </div>
      </>

  
  
    );
  };
  
  export default CardView;