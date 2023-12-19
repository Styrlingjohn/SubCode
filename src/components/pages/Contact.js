import React from 'react';



function Contact() {

    return (
        <div className='container mt-5'>
            <h1> Contact me! </h1>


            <form className='row g-3' action="https://formsubmit.co/styrlingjohn43@gmail.com" method="POST">
                <div className='col-md-6'>
                    <label for='firstName' className='form-label'> First Name</label>
                    <input type='text' className='form-control' id="firstName"
                        placeholder='First Name' required></input>
                </div>
                <div className='col-md-6'>
                    <label for='lastName' className='form-label'> Last Name</label>
                    <input type='text' className='form-control' id="lastName"
                        placeholder='Last Name' required></input>
                </div>
                <div className='col-md-8'>
                    <label for="emailInfo" className='form-label'> E-Mail </label>
                    <input type='email' name='email' className='form-control' id='emailInfo'
                        placeholder='JohnDoe@email.com' required></input>
                </div>
                <div className='col-md-4'>
                    <label for='phoneNumber' className='form-label'> Phone Number </label>
                    <input type='text' className='form-control' id='phoneNumber'
                    required placeholder='123-456-7899'></input>
                </div>

                <div className='col-md-12'>
                    <label for="comments" className='form-label'> </label>
                    <textarea className='form-control' id='comments' rows='7' required></textarea>
                </div>

                <div className='col-md-12'>
                    <button type='submit' className='btn btn-primary'> Submit </button>
                </div>
            </form>
        </div>
    );
}

export default Contact; 