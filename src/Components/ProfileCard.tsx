import React from 'react'
import PhotoPicture from '../Assets/Images/Photo_Profile.png'

const ProfileCard = () => {
  return (
      <section className="bg-lightdark p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img 
            src={PhotoPicture} // Replace with your image URL
            alt="Profile"
            className="rounded-full w-64 h-64 object-cover"
          />
        </div>
        
        <div className="mr-5 md:w-1/2 md:ml-8 text-center md:text-left">
          <h1 className="text-white text-4xl font-bold mb-4">Hello, I'm Bryan Januardo</h1>
          <p className="text-white text-lg text-lg">
          I am a dedicated professional with a strong passion for technology development. 
          I thrive on creating innovative solutions and continuously expanding my knowledge. 
          Committed to personal growth and strive to deliver value and excellence in every project I make.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProfileCard
