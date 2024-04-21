// import React from 'react'


// const MovieCard = ( { movie: {imdbID , Year , Poster , Title , Type }}) =>  {
//   return (
//     <div>
//       <div className='movie' key={imdbID}>
//           <div>
//             <p>
//               {Year}
//             </p>
//           </div>
//           <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title}/>
//         </div>
//         <div>
//           <span>{Type} </span>
//           <h3>{Title}</h3>
//         </div>
//     </div>
//   )
// }

// export default MovieCard 

///to get card details updated MovieCard.jsx as follows 

import React, { useState } from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState(null);

  const openModal = async () => {
    const response = await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=c546c814`);
    const data = await response.json();
    setDetails(data);
    setIsOpen(true);
  };

  return (
    <>
      <div className='movie' key={imdbID} onClick={openModal}>
        <div>
          <p>{Year}</p>
        </div>
        <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title} />
      </div>
      <div>
        <span>{Type} </span>
        <h3>{Title}</h3>
      </div>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsOpen(false)}>&times;</span>
            <h2>{details.Title}</h2>
            <p>{details.Plot}</p>
            <p>Directed by: {details.Director}</p>
            <p>Starring: {details.Actors}</p>
            <p>Released: {details.Released}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
