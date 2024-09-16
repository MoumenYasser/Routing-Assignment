import React from 'react'

export default function Contact() {
  return <>
    <section className="contact py-xxl-5 vh-100">
      <h2 className="fw-bolder text-center mb-5">
        Contact Section
      </h2>

      <div className="w-50 m-auto">
        <form action="">
          <input type="text"
            placeholder='Username'
            className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
          />

          <input type="number"
            placeholder='User number'
            className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
          />

          <input type="email"
            placeholder='User email'
            className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
          />

          <input type="password"
            placeholder='User Password'
            className="w-100 form-control form-control-lg border-0 border-bottom rounded-0 mb-5"
          />

          <button className="btn btn-check send">
            Send
          </button>
        </form>
      </div>
    </section>
  </>
}
