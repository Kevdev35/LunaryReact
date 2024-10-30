import React, { useState } from 'react';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div id='Contact' className="w-full max-h-967 bg-black/85 backdrop-blur-md py-16 px-4">
      <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl text-center font-bold text-transparent bg-gradient-to-r from-[#582D7D] to-[#A1000A] bg-clip-text ">
                CONTACTO
            </h2>
        <p className="text-center text-xl mt-10 text-gray-300 mb-12">
          ¿Tienes alguna pregunta? Estamos aquí para ayudarte
        </p>

        <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <FormInput
            label="Asunto"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-6"
          />
          
          <FormTextarea
            label="Mensaje"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-6"
          />

          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-[#582D7D] to-[#A1000A] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;