import React from 'react';
import '../assets/styles/containers/Player.scss';

const Player = () => {
    return(
        <div className="Player">
            <video controls autoPlay>
                <source src="" type="video/mp4"></source>
            </video>
            <div className="Player-back">
                <button type="button">Regresar</button>
            </div>
        </div>
    )
}

export default Player;