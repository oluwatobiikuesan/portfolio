import React from 'react'
import '../style/contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <main>
            <h1>My Contact</h1>
            <section>
              <div className='founder0'>
                <img src='https://cdn.pixabay.com/photo/2018/04/18/15/02/chaplin-3330639_1280.png' height={"100%"}>
                </img>
              </div>
              <aside>
                
                {/* let us contact you section */}
              <div>
                <h3>Let us contact you!</h3>
                <div>
                  <div><label>fullname:</label><input type='text'></input>
                  </div>
                  <div><label>email:</label><input type='text'></input>
                  </div>
                  <div>
                    <label>Message:</label>
                    <textarea>

                    </textarea>
                  </div>
                  <button id='send-btn'>send</button>
                  </div>
                  {/* ends here for the lscu */}

                </div>
              </aside>
            </section>
        </main>
    </div>
  )
}
