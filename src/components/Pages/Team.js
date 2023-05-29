import React from 'react'
import patron from "../Images/goldenshosa.jpg"
import chair from "../Images/enock.png";
import treasurer from "../Images/rosetteshosa.jpeg"
import secretary from "../Images/lilianshosa.jpeg"

const Team = () => {
  return (
    <div>
        <div className='team-sect'>
           <div className='team-header'>
                <h2>OUR <span>TALENTED TEAM</span></h2>
                <p>Meet our experienced Leadership Team</p>
           </div>
            <div className='team-members'>
                <div className='team-member'>
                    <img src={patron} alt='Golden' />
                    <p>
                        <span className='posn'>PATRON</span>
                        <span className='pos-name'>GOLDEN TUMUSHABE</span>
                    </p>
                </div>


                <div className='team-member'>
                    <img src={chair} alt='Golden' />
                    <p>
                        <span className='posn'>CHAIR PERSON</span>
                        <span className='pos-name'>ENOCK TUMWIKIRIZE</span>
                    </p>
                </div>


                <div className='team-member'>
                    <img src={treasurer} alt='Golden' />
                    <p>
                        <span className='posn'>TREASURER</span>
                        <span className='pos-name'>ROSETTE ATUHAIRE</span>
                    </p>
                </div>


                <div className='team-member'>
                    <img src={secretary} alt='Golden' />
                    <p>
                        <span className='posn'>SECRETARY</span>
                        <span className='pos-name'>LILIAN NAMAKULA</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team