import React from 'react'

function Card() {
  return (
    <div className="card p-2" style={{width: '400px', height: 'auto'}}>
        <img className="card-img-top" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="Card image" style={{height: '200px'}} />
        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
          <button className="btn btn-primary">Sign in</button>
        </div>
    </div>
  )
}

export default Card