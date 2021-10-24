import React from 'react';
import Knight from './Knight';
import Square from './Square';

export default function Board({knightPosition}){
  /**
  return <div>
      <Square black>
          <Knight />
      </Square>
  </div>
   */
    const squares = []
    for(let i=0;i<64;i++){
      squares.push(renderSquare(i,knightPosition))

    }
  return (
    <div 
      style ={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}  
      </div>
  );
}

function renderSquare(i, [knightX,knightY]){
  const m = i % 8
  const n = Math.floor(i/8)
  const black = (m+n) % 2 === 1
  const isKnightHere = knightX === m && knightY === n
  const piece = isKnightHere ? <Knight /> : null

  return( 
    <div key={i} style={{width:'12.5%',height:'12.5%'}}>
    <Square black={black}> {piece}</Square>
  </div>
  )

}