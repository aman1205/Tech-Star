import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <main>
        <h1>Contact US </h1>

        <form >
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required placeholder='Enter Your Name' />
            </div>
            <div>
                <label htmlFor="surname">SurName</label>
                <input type="text" name="surname" id="surname" required placeholder='Enter Your Surname' />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder='Abc@xyz.com' />
            </div>
            <div>
                <label htmlFor="tel">Phone No</label>
                <input type="tel" name="tel" id="tel" required placeholder='96XXXXXXX' />
            </div>
            <div>
                <label htmlFor="msg">Email</label>
                <input type="text" name="msg" id="msg" required placeholder='Tell us about your query ...' />
            </div>

            <button type="submit">Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
