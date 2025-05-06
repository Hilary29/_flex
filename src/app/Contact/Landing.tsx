'use client'

import React, { useState } from "react";
import Image from 'next/image'

const Landing: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [item, setItem] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  
  const whatsappNumber = "+237696696927";
  const baseUrl = `https://wa.me/${whatsappNumber}?text=`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber || !item || price <= 0) {
      alert("Please fill all fields correctly.");
      return;
    }

    const message = encodeURIComponent(
      `*Purchase Details*%0APhone Number: ${phoneNumber}%0AItem: ${item}%0APrice: $${price}`
    );

    window.open(`${baseUrl}${message}`, "_blank");
  };

  return (
    <div className="w-[80%] h-auto m-auto pt-[20px]">
      <div className="largeTablet:hidden block">
        <div className="bg-white p-6 rounded-md shadow-md w-96">
          <h2 className="text-2xl text-[#202224] font-semibold mb-4 text-center">Purchase Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Whatssap Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="item" className="block text-sm font-medium text-gray-700">
                Item
              </label>
              <input
                type="text"
                id="item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                min="1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#1B3D74] text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Purchase
            </button>
          </form>
        </div>
      </div>



      <div className="hidden largeTablet:block">
        <div className=" container mx-auto ">
          <div className="flex flex-[1]">
          <div className='flex-[1]'>
                  <h2 className='text-xl font-semibold text-[#202224] mb-10 ml-10 mt-10'>THANKS FOR CONTACTING US</h2>
                  <div className='flex gap-3 '>
                      <div>
                      <Image
                      src="/location-icon.PNG"
                      alt="LOCATION LOGO"
                      width={50}
                      height={50}
                    />
                    <div>
                    <ul>
                              <li className='font-medium'>DOUALA</li>
                              <p  className='ml-3'>CAMPUS-II </p>
                              <p className='ml-3'>ANGE RAPHAEL</p>
                              <li className='font-medium'>YAOUNDE</li>
                             <p className='ml-3'>BIYEM-ASSI LAC</p>
                       </ul>
                    </div>
                      </div>
    
                      <div>
                      <Image
                      src="/phone-icon.jpg"
                      alt="phone LOGO"
                      width={50}
                      height={50}
                    />
                    <div>
                    <ul>
                              <li>699557415</li>
                              <li>675309658</li>
                          </ul>
                    </div>
                      </div>
    
                      <div>
                      <Image
                      src="/email.webp"
                      alt="email LOGO"
                      width={50}
                      height={50}
                    />
                    <div>
                    <ul>
                              <li>flexacademy237@gmail.com</li>
                          </ul>
                    </div>
                      </div>
                  </div>
              </div>

              <div className="flex-[1]">

              <div className="bg-white p-6 rounded-md shadow-md w-96">
          <h2 className="text-2xl text-[#202224] font-semibold mb-4 text-center">Purchase Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Whatssap Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="item" className="block text-sm font-medium text-gray-700">
                Item
              </label>
              <input
                type="text"
                id="item"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                min="1"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#1B3D74] text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Submit Purchase
            </button>
          </form>
         </div>

              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;







// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image'

// interface RegisterPageData {
//   phoneNumber: string;
//   item: string;
//   price: number;
//   quantity: number;
//   total: number;
// }

// const RegisterPage: React.FC = () => {
//   const [formData, setFormData] = useState<RegisterPageData>({
//     phoneNumber: '',
//     item: '',
//     price: 0,
//     quantity: 0,
//     total: 0
//   });

//   // Handle form field changes
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => {
//       const newData = { ...prevData, [name]: value };
//       if (name === 'price' || name === 'quantity') {
//         // Recalculate total when price or quantity changes
//         newData.total = newData.price * newData.quantity;
//       }
//       return newData;
//     });
//   };

//   // Construct the message for WhatsApp
//   const handleSendRequest = () => {
//     const message = `
//       *New Request*
//       *Phone Number*: ${formData.phoneNumber}
//       *Item*: ${formData.item}
//       *Price*: $${formData.price}
//       *Quantity*: ${formData.quantity}
//       *Total*: $${formData.total}
//     `;
    
//     // URL-encode the message
//     const encodedMessage = encodeURIComponent(message);

//     // The WhatsApp API URL (Replace the number with your target WhatsApp number)
//     const whatsappNumber = '+237696696927'; // Replace this with the desired WhatsApp number
//     const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

//     // Redirect the user to WhatsApp
//     window.open(url, '_blank');
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Handle form submission logic if needed
//   };

//   return (

    
//     <div className='w-[80%] h-auto m-auto flex mt-15 '>

//       <div className='tablet:hidden block'>
//       <div className=' mt-10 ml-20'>
//           <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
//             <h2 className="text-2xl font-semibold mb-6 text-center " id='PURCHASE'>PURCHASE</h2>
//             <form onSubmit={handleSubmit}>
//               {/* Phone Number */}
//               <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumber">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   value={formData.phoneNumber}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               {/* Item */}
//               <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2" htmlFor="item">
//                   Item
//                 </label>
//                 <input
//                   type="text"
//                   id="item"
//                   name="item"
//                   value={formData.item}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//               {/* Price */}
//               <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
//                   Price
//                 </label>
//                 <input
//                   type="number"
//                   id="price"
//                   name="price"
//                   value={formData.price}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                   min="0"
//                 />
//               </div>
//               {/* Quantity */}
//               <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2" htmlFor="quantity">
//                   Quantity
//                 </label>
//                 <input
//                   type="number"
//                   id="quantity"
//                   name="quantity"
//                   value={formData.quantity}
//                   onChange={handleChange}
//                   className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                   min="1"
//                 />
//               </div>
//               {/* Total (auto-calculated) */}
//               <div className="mb-2">
//                 <label className="block text-gray-700 font-medium mb-2" htmlFor="total">
//                   Total
//                 </label>
//                 <input
//                   type="text"
//                   id="total"
//                   name="total"
//                   value={formData.total}
//                   readOnly
//                   className="w-full p-3 border border-gray-300 rounded-md bg-gray-200"
//                 />
//               </div>
//               {/* Send Request Button */}
//               <button
//                 type="button"
//                 onClick={handleSendRequest}
//                 className="w-full p-3 bg-[#1B3D74] text-white font-semibold rounded-md hover:bg-[#1B3D74] focus:outline-none focus:ring-2 focus:ring-green-500"
//               >
//                 Send Request
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

// <div className='hidden tablet:block'>
//   <div className='container mx-auto'>
//     <div className='flex  flex-col'>
//       <div className='flex-[1]'>
//                   <h2 className='text-xl font-semibold text-[#202224] mb-10 ml-10 mt-10'>THANKS FOR CONTACTING US</h2>
//                   <div className='flex gap-3 '>
//                       <div>
//                       <Image
//                       src="/location-icon.PNG"
//                       alt="LOCATION LOGO"
//                       width={50}
//                       height={50}
//                     />
//                     <div>
//                     <ul>
//                               <li className='font-medium'>DOUALA</li>
//                               <p  className='ml-3'>CAMPUS-II </p>
//                               <p className='ml-3'>ANGE RAPHAEL</p>
//                               <li className='font-medium'>YAOUNDE</li>
//                              <p className='ml-3'>BIYEM-ASSI LAC</p>
//                        </ul>
//                     </div>
//                       </div>
    
//                       <div>
//                       <Image
//                       src="/phone-icon.jpg"
//                       alt="phone LOGO"
//                       width={50}
//                       height={50}
//                     />
//                     <div>
//                     <ul>
//                               <li>699557415</li>
//                               <li>675309658</li>
//                           </ul>
//                     </div>
//                       </div>
    
//                       <div>
//                       <Image
//                       src="/email.webp"
//                       alt="email LOGO"
//                       width={50}
//                       height={50}
//                     />
//                     <div>
//                     <ul>
//                               <li>flexacademy237@gmail.com</li>
//                           </ul>
//                     </div>
//                       </div>
//                   </div>
//               </div>
    
//           <div className='flex-[1] mt-10'>
//             <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
//               <h2 className="text-2xl font-semibold mb-6 text-center">PURCHASE</h2>
//               <form onSubmit={handleSubmit}>
//                 {/* Phone Number */}
//                 <div className="mb-2">
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="phoneNumber">
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//                 {/* Item */}
//                 <div className="mb-2">
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="item">
//                     Item
//                   </label>
//                   <input
//                     type="text"
//                     id="item"
//                     name="item"
//                     value={formData.item}
//                     onChange={handleChange}
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                 </div>
//                 {/* Price */}
//                 <div className="mb-2">
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="price">
//                     Price
//                   </label>
//                   <input
//                     type="number"
//                     id="price"
//                     name="price"
//                     value={formData.price}
//                     onChange={handleChange}
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                     min="0"
//                   />
//                 </div>
//                 {/* Quantity */}
//                 <div className="mb-2">
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="quantity">
//                     Quantity
//                   </label>
//                   <input
//                     type="number"
//                     id="quantity"
//                     name="quantity"
//                     value={formData.quantity}
//                     onChange={handleChange}
//                     className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                     min="1"
//                   />
//                 </div>
//                 {/* Total (auto-calculated) */}
//                 <div className="mb-2">
//                   <label className="block text-gray-700 font-medium mb-2" htmlFor="total">
//                     Total
//                   </label>
//                   <input
//                     type="text"
//                     id="total"
//                     name="total"
//                     value={formData.total}
//                     readOnly
//                     className="w-full p-3 border border-gray-300 rounded-md bg-gray-200"
//                   />
//                 </div>
//                 {/* Send Request Button */}
//                 <button
//                   type="button"
//                   onClick={handleSendRequest}
//                   className="w-full p-3 bg-[#1B3D74] text-white font-semibold rounded-md hover:bg-[#1B3D74] focus:outline-none focus:ring-2 focus:ring-green-500"
//                 >
//                   Send Request
//                 </button>
//               </form>
//             </div>
//           </div>
//           </div>
//   </div>
// </div>
//     </div>
//   );
// };

// export default RegisterPage;
