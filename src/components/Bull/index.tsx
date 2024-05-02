import { memo } from 'react';
import './Bull.css';

const Bull = () => {
    return (
        <div className="box-canvas">
            <div className="tail"></div>
            <div className="legs">
                <div className="leg front-left"></div>
                <div className="leg front-right"></div>
                <div className="leg back-right"></div>
                <div className="leg back-left"></div>
            </div>
            <div className="body">
                <div className="patch"></div>
                <div className="patch"></div>
                <div className="patch"></div>
            </div>
            <div className="horns"></div>
            <div className="head">
                <div className="eye left"></div>
                <div className="eye right"></div>
                <div className="snout">
                    <div className="mouth"></div>
                </div>
            </div>
        </div>
    )
}

export default memo(Bull);