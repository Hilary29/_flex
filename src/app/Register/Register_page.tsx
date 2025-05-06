
'use client';

import React, { useState } from 'react';

interface Register_pageData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  hasLaptop: string;
  session: string;
  center: string;
  category: string;
  software: string;
  softwareStartDate: string;
  trainingStartDate: string;
  trainingTerm: string;
  trainingMessage: string;
  vipTrainingTraining: string;
  vipTrainingStartDate: string;
  vipTrainingTerm: string;
  vipTrainingMessage: string;
  specialTrainingTraining: string;
  specialTrainingStartDate: string;
  specialTrainingTerm: string;
  specialTrainingMessage: string;
}

const Register_page: React.FC = () => {
  const [formData, setFormData] = useState<Register_pageData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    hasLaptop: '',
    session: '',
    center: '',
    category: '',
    software: '',
    softwareStartDate: '',
    trainingStartDate: '',
    trainingTerm: '',
    trainingMessage: '',
    vipTrainingTraining: '',
    vipTrainingStartDate: '',
    vipTrainingTerm: '',
    vipTrainingMessage: '',
    specialTrainingTraining: '',
    specialTrainingStartDate: '',
    specialTrainingTerm: '',
    specialTrainingMessage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      category: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '+237696696927'; // Replace with your WhatsApp number
    
    let message = `*Registration Form*\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phoneNumber}\nAddress: ${formData.address}\nSession: ${formData.session}\nCenter: ${formData.center}\nCategory: ${formData.category}\n`;

    if (formData.category === 'SOFTWARE') {
      message += `Software: ${formData.software}\nStart Date: ${formData.softwareStartDate}`;
    }

    if (formData.category === 'TRAINING') {
      message += `Training Start Date: ${formData.trainingStartDate}\nTraining Term: ${formData.trainingTerm}\nTraining Message: ${formData.trainingMessage}`;
    }

    if (formData.category === 'VIP TRAINING') {
      message += `VIP Training: ${formData.vipTrainingTraining}\nStart Date: ${formData.vipTrainingStartDate}\nVIP Term: ${formData.vipTrainingTerm}\nVIP Message: ${formData.vipTrainingMessage}`;
    }

    if (formData.category === 'SPECIAL TRAINING') {
      message += `Special Training: ${formData.specialTrainingTraining}\nStart Date: ${formData.specialTrainingStartDate}\nSpecial Term: ${formData.specialTrainingTerm}\nSpecial Message: ${formData.specialTrainingMessage}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.location.href = whatsappLink; // Redirect to WhatsApp with the message
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center" id='Register'>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumber">
            WhatsApp Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="address">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Do you have a laptop? */}
        <div className="mb-4">
          <span className="block text-gray-700 font-medium mb-2">Do you have a laptop?</span>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="hasLaptop"
                value="Yes"
                checked={formData.hasLaptop === 'Yes'}
                onChange={handleChange}
                className="mr-2"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="hasLaptop"
                value="No"
                checked={formData.hasLaptop === 'No'}
                onChange={handleChange}
                className="mr-2"
              />
              No
            </label>
          </div>
        </div>

        {/* Session */}
        <div className="mb-4">
          <span className="block text-gray-700 font-medium mb-2">Session</span>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="session"
                value="MORNING"
                checked={formData.session === 'MORNING'}
                onChange={handleChange}
                className="mr-2"
              />
              MORNING
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="session"
                value="EVENING"
                checked={formData.session === 'EVENING'}
                onChange={handleChange}
                className="mr-2"
              />
              EVENING
            </label>
          </div>
        </div>

        {/* Center */}
        <div className="mb-4">
          <span className="block text-gray-700 font-medium mb-2">Center</span>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="center"
                value="DOUALA"
                checked={formData.center === 'DOUALA'}
                onChange={handleChange}
                className="mr-2"
              />
              DOUALA
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="center"
                value="YAOUNDE"
                checked={formData.center === 'YAOUNDE'}
                onChange={handleChange}
                className="mr-2"
              />
              YAOUNDE
            </label>
          </div>
        </div>

        {/* Category selection */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="category">
            Select Category
          </label>
          <select
            name="category"
            id="category"
            value={formData.category}
            onChange={handleCategoryChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="SOFTWARE">Software</option>
            <option value="TRAINING">Training</option>
            <option value="VIP TRAINING">VIP Training</option>
            <option value="SPECIAL TRAINING">Special Training</option>
          </select>
        </div>

        {/* Conditional Forms for each category */}
        {formData.category === 'SOFTWARE' && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Software Registration</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="software">
                Which Software?
              </label>
              <input
                type="text"
                id="software"
                name="software"
                value={formData.software}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="softwareStartDate">
                Starting Date
              </label>
              <input
                type="date"
                id="softwareStartDate"
                name="softwareStartDate"
                value={formData.softwareStartDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button type="submit" className="w-full p-3 mt-4 bg-blue-500 text-white rounded-md">
              Submit Software Registration
            </button>
          </div>
        )}

        {formData.category === 'TRAINING' && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Training Registration</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="trainingStartDate">
                Training Start Date
              </label>
              <input
                type="date"
                id="trainingStartDate"
                name="trainingStartDate"
                value={formData.trainingStartDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Term for Training */}
            <div className="mb-4">
              <span className="block text-gray-700 font-medium mb-2">Training Term</span>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="trainingTerm"
                  value="Long"
                  checked={formData.trainingTerm === 'Long'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Long
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="trainingTerm"
                  value="Short"
                  checked={formData.trainingTerm === 'Short'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Short
              </label>
            </div>

            {/* Added Which Training for training category */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="trainingMessage">
                Which Training?
              </label>
              <input
                type="text"
                id="trainingMessage"
                name="trainingMessage"
                value={formData.trainingMessage}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button type="submit" className="w-full p-3 mt-4 bg-blue-500 text-white rounded-md">
              Submit Training Registration
            </button>
          </div>
        )}

        {formData.category === 'VIP TRAINING' && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">VIP Training Registration</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="vipTrainingTraining">
                VIP Training
              </label>
              <input
                type="text"
                id="vipTrainingTraining"
                name="vipTrainingTraining"
                value={formData.vipTrainingTraining}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="vipTrainingStartDate">
                Start Date
              </label>
              <input
                type="date"
                id="vipTrainingStartDate"
                name="vipTrainingStartDate"
                value={formData.vipTrainingStartDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <span className="block text-gray-700 font-medium mb-2">VIP Training Term</span>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="vipTrainingTerm"
                  value="Long"
                  checked={formData.vipTrainingTerm === 'Long'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Long
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="vipTrainingTerm"
                  value="Short"
                  checked={formData.vipTrainingTerm === 'Short'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Short
              </label>
            </div>

            {/* Added VIP Message */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="vipTrainingMessage">
                VIP Message
              </label>
              <input
                type="text"
                id="vipTrainingMessage"
                name="vipTrainingMessage"
                value={formData.vipTrainingMessage}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button type="submit" className="w-full p-3 mt-4 bg-blue-500 text-white rounded-md">
              Submit VIP Training Registration
            </button>
          </div>
        )}

        {formData.category === 'SPECIAL TRAINING' && (
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Special Training Registration</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="specialTrainingTraining">
                Special Training
              </label>
              <input
                type="text"
                id="specialTrainingTraining"
                name="specialTrainingTraining"
                value={formData.specialTrainingTraining}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="specialTrainingStartDate">
                Start Date
              </label>
              <input
                type="date"
                id="specialTrainingStartDate"
                name="specialTrainingStartDate"
                value={formData.specialTrainingStartDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <span className="block text-gray-700 font-medium mb-2">Special Training Term</span>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="specialTrainingTerm"
                  value="Long"
                  checked={formData.specialTrainingTerm === 'Long'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Long
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="specialTrainingTerm"
                  value="Short"
                  checked={formData.specialTrainingTerm === 'Short'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Short
              </label>
            </div>

            {/* Added Special Training Message */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="specialTrainingMessage">
                Special Message
              </label>
              <input
                type="text"
                id="specialTrainingMessage"
                name="specialTrainingMessage"
                value={formData.specialTrainingMessage}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button type="submit" className="w-full p-3 mt-4 bg-blue-500 text-white rounded-md">
              Submit Special Training Registration
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Register_page;
