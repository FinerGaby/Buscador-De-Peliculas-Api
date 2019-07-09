import React from 'react';

const StarRanking = ({ ranking }) => {

    //console.log(ranking)
    const star = Math.round(`${ranking}`)

    

    return (
    <React.Fragment>
   
   {[...Array(star)].map(
       (e, i) => <i className="fas fa-star" key={i}></i>
       )}
   
   </React.Fragment>
    )
   
   };

export default StarRanking;