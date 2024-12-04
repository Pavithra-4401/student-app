import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Formsheet(){
  const handleSubmit = (e) => {
    alert("Done")
    e.preventDefault(); 
    console.log('Form Submitted:');

};


    return(
     

      <div class="container xs-6 p-3 w-50 justify-content-center ">
   <div class="card">
   <form onSubmit={handleSubmit}>
   <div class="input_group xs-6 mb-3 p-2"> 
   <label for="Name" class="control-label col-sm-3">Name</label>
    <input type="text" name="Name" id="Name" placeholder="Name" required />
    
    </div>
    <div class="input_group xs-6 mb-3 p-2">
    <label for="Email"class="control-label col-sm-3">Email address </label>
     <input type="Email" name="Email"  id="Email" placeholder="Email" required />
     </div>
    <div class=" input_group sm-6 mb-3 p-2">
    <label for="Phone No" class="control-label col-sm-3">Phone Number</label>
    <input type="tel" name="phone" id="phone" placeholder="Phone No" required />
    </div>
    <div class="input_group sm-6 mb-3 p-2 ">
    <label for="booking date" class="control-label col-sm-3">Date of Birth</label>
    <input type="date" id="Date"  placeholder="29-1-24" required />

    <div class="input_group sm-6 mb-3 p-2 ">
    <label for="Language" class="control-label  col-sm-3">Language Type</label>
    <input type="radio" name="options"  placeholder="Tamil" />
    <label for="Tamil" class="p-2">Tamil</label>
    <input type="radio" name="options"  placeholder="English"/>
    <label for="English" class="p-2">English</label> 
   
    </div>
   <div class=" input_group input-sm p-3">
    <label for="Address" class="control-label col-sm-3">Address</label>
    <textarea class="input_group" id="Address" rows="3"></textarea>
    </div>

    <button type="submit" className='bg-primary p-2 '> Submit </button>
    
    </div>
    </form>


    </div>
    </div>
    )
}
export default Formsheet;