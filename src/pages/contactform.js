import React, { useState } from "react";
//import swal from 'sweetalert';


const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        email: "",
        msg: ""
    })

    const inputEvent = (e) => {
        const { name, value } = e.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
        });
    }

    const formSubmitHandle = (e) => {
        e.preventDefault();
        // message can be saved to db or email can be sent from here!
        
      //  swal("Sent!", "Message Sent Successfully!", "success");
    }

  return (
    <>
      <div className="my-3">
        <h1 className="text-center">Kontak Kami</h1>
      </div>
      <div className="text-center">
      <table  class="table table-striped"  class="col-lg-12 ms-auto" class="lead" border={3}>
           <tr> NAMA
           <td>:</td>
            <td>Ridho Fitra Palasa</td>
           </tr>
           <tr> NIM 
           <td>:</td>
            <td>2110059</td>
           </tr>
           <tr> EMAIL
           <td>:</td>
            <td>ridhofp054@gmail.com</td>
           </tr>
           </table>
          </div>
         
    </>
  );
};

export default Contact;
