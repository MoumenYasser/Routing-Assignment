import React from 'react'

export default function Footer() {
  return <>
    <footer className='py-5 text-center'>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div>
              <h2  className='text-white fw-bold mb-2'>LOCATION</h2>
              <p className='text-white mb-2'>2215 john daniel drive</p>
              <p className='text-white mb-2'>clark mohsen abdelatif</p>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <h2 className='text-white fw-bold mb-3'>
                AROUND THE WORLD
              </h2>
              <div className='d-flex icon justify-content-center align-item-center'>
                <div>
                <i className="fa-brands fa-facebook text-white fa-2xl"></i>
                </div>

                <div>
                <i className="fa-brands fa-facebook text-white fa-2xl"></i>
                </div>

                <div>
                <i className="fa-brands fa-facebook text-white fa-2xl"></i>
                </div>

                <div>
                <i className="fa-brands fa-facebook text-white fa-2xl"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-white">
              <h3>
                ABOUT FREELANCER
              </h3>

              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et aspernatur quos assumenda laborum officia. Sint!</p>

            </div>
          </div>
        </div>
      </div>
    </footer>

  </>

}
