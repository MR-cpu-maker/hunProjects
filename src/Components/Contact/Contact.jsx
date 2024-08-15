 
import React from 'react'
import './Contact.css'
import  msg_icon from'../../assets/msg-icon.png'
import  phone_icon from'../../assets/phone.png'
import location_icon from '../../assets/location.png'
import mail_icon from '../../assets/mail.png'
import right from '../../assets/right.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", 
        "e66b58ec-8053-4240-87f7-27f38bf0c641");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };




  return (
    <div className="contact">
        <div className="contact-col">
            <h3>Send us a message<img src={msg_icon}alt=""/></h3>
            <p>
            
            We value your feedback and are eager to assist you.
             If you have any questions, comments, or inquiries,
              please dont hesitate to reach out to us.
               Our dedicated team is here to provide prompt and helpful responses to ensure your satisfaction. You can contact us through the form provided below, or alternatively, you can reach us via email or phone.
                We appreciate your interest and 
            look forward to hearing from you soon!
            </p>
<ul>
    <li><img src={mail_icon}alt=""/>Contact@XammyTechDev</li>
    <li><img src={phone_icon} alt=""/>+254 771 425 916</li>
    <li><img src={location_icon}alt=""/>Westlands,Nairobi,Kenya</li>
</ul>

        </div>
        <div className='contact-col'>
<form onSubmit={onSubmit}>
    
    <input type="text" placeholder="Name"/>
    
    <input type="tel"name='phone' placeholder='Enter your Mobile Number'required />
    <label>Write your messages here</label>
    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>


        <button type="submit" className="btn">Submit Now<img
        src={right}alt=''/></button>
</form>
<span>{result}</span>



        </div>
    
   
       
        </div>
    
  )
}

export default Contact