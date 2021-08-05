import * as React from "react";
import { Stage, Graphics } from '@inlet/react-pixi';
import ReactDOM from 'react-dom';

function ScrollItem({ speaker }) {
    const draw = React.useCallback((g) => {
        g.drawRect(50, 150, 120, 120);
    },[]); 

    return (
        <div className={`scroll-item scroll-${speaker.img} bg-black text-white text-9xl flex justify-center items-center`}>
            <Stage width={'100vw'} height={'100vh'} options={{backgroundColor: 0xffff}}>
                <Graphics draw={draw}/>
            </Stage>
        </div>  
    );
}

export default ScrollItem;