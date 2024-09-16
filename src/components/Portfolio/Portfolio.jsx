import React, { useState } from 'react'

export default function Portfolio() {

  const [data, setData] = useState(
    [
      { img: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630", id: "img1" },
      { img: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630", id: "img2" },
      { img: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630", id: "img3" },
      { img: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630", id: "img4" },
      { img: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630", id: "img5" },
      { img: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630", id: "img6" },
    ]
  )

  return <>
    <section className='portfolio py-5 text-center'>
      <h2 className='fw-bolder mb-5'>
        PORTFOLIO COMPONENT
      </h2>

      <div className="container">
        <div className="row g-4">

          {data.map((item) => (
            <>
              <div className=' col-md-4'>
                <div className="portfolio-item">
                  <img src={item.img} alt="" className='w-100 rounded-3' />
                  <div 
                  className="plus rounded-3" 
                  data-bs-toggle="modal"
                  data-bs-target={"#"+item.id}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
            </>
          ))}

          {data.map((item) => (
            <>
            <div 
            className="modal fade"
            id={item.id} 
            tabindex="-1"
            role="dialog" 
            aria-labelledby="exampleModalLabel" 
            aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <img src={item.img} className="w-100 p-0" alt="" />
                  </div>

                </div>
              </div>
            </div>
          </>
        ))}
        </div>
      </div>
    </section>
  </>
}
