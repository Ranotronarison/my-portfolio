'use client'
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import FadeInSection from "./FadeInSection";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactMe() {

  const { executeRecaptcha } = useGoogleReCaptcha()
  const [messageFormData, setMessageFormData] = useState({
    message: '',
    name: '',
    email: ''
  })
  const [errors, setErrors] = useState([])

  const reCaptchaVerify = async () => {
    const token = await executeRecaptcha()
  }

  const handleSubmit = () => {
    setErrors([])
    Object.keys(messageFormData).forEach(element => {
      if (messageFormData[element] === "") {
        setErrors(prevState => [...prevState, element])
      }
    });

    const errorsArray = new Set(errors)
    if (errorsArray.size === 0) {
      reCaptchaVerify()
      const sendMessage = async () => {
        const response = await fetch(
          '/api/contact-me',
          {
            method: 'POST', body: JSON.stringify(messageFormData),
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        return response.json()
      }

      sendMessage()
        .then((responseJson) => {
          if (responseJson.success) {
            toast.success("Your message has been sent !")
            setMessageFormData({ email: "", message: "", name: "" })
          }
        })
        .catch(error => {
          console.log(error.message)
          toast.error("Oops, Something went wrong !")
        })
    }
  }

  return <FadeInSection>
    <section id="contact-me">
      <div className="md:container mx-auto px-2 md:px-46 w-full">
        <h3 className="section-title">{'{ Contact me }'}</h3>
        <form action="#" className="space-y-8 mx-auto w-full md:w-1/2">
          <div className="w-full">
            <input
              className="w-full rounded-sm p-2"
              type="text"
              placeholder="Name *"
              onChange={(e) => setMessageFormData({ ...messageFormData, name: e.target.value })}
            />
            <span className={`text-red-500 text-sm ${!errors.includes('name') && 'hidden'}`}>This field is required.</span>
          </div>
          <div className="w-full">
            <input
              className="w-full rounded-sm p-2"
              type="text"
              placeholder="Email *"
              onChange={(e) => setMessageFormData({ ...messageFormData, email: e.target.value })}
            />
            <span className={`text-red-500 text-sm ${!errors.includes('email') && 'hidden'}`}>This field is required.</span>
          </div>
          <div className="w-full">
            <textarea
              className="w-full rounded-sm p-2"
              placeholder="Your message *"
              onChange={(e) => setMessageFormData({ ...messageFormData, message: e.target.value })}
            />
            <span className={`text-red-500 text-sm ${!errors.includes('message') && 'hidden'}`}>This field is required.</span>
          </div>
          <button type="button" onClick={handleSubmit} className="rounded-full bg-neutral-950 py-2 px-5 text-white hover:bg-neutral-800 text-base text-center focus:ring-2 focus:ring-neutral-400">Submit</button>
        </form>
      </div>
    </section>
  </FadeInSection>
}