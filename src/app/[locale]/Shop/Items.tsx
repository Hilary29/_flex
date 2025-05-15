import React from 'react'
import Image from 'next/image'

const Items = () => {
  return (
    <div className='w-[80%] h-auto m-auto pt-[20px] mt-20'>
      <div className='largeTablet:hidden block'>
      <div className="join ">
          <h3 className='mt-[-250px]'>ITEMS</h3>
        </div>
        <div className=' '>
        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/laptop.PNG"
                                  alt="laptop"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>DELL Laptops</h3>
            <p>Color:black</p>
            <p>CPU: Intel corei8</p>
            <p>RAM: 64/8</p>
            <p>PRICE: 150000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/22lap.PNG"
                                  alt="laptop"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>HP Laptops</h3>
            <p>Color:gray</p>
            <p>CPU: Intel corei8</p>
            <p>RAM: 64/8</p>
            <p>PRICE: 100000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/23lap.PNG"
                                  alt="laptop"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>LENOVO Laptops</h3>
            <p>Color:gray</p>
            <p>CPU: Intel corei5</p>
            <p>RAM: 64/8</p>
            <p>PRICE: 200000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/usb.PNG"
                                  alt="usb keys"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>USB KEY</h3>
            <p>Color:blue</p>
            <p>RAM: 64go</p>
            <p>PRICE: 5000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/usb1.PNG"
                                  alt="usb keys"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>USB KEY</h3>
            <p>Color:black</p>
            <p>RAM: 8go</p>
            <p>PRICE: 3000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/key.PNG"
                                  alt="usb"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>USB KEY</h3>
            <p>Color:white</p>
            <p>RAM: 4go</p>
            <p>PRICE: 2000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/MOUSE.PNG"
                                  alt="MOUSE"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>WIRELESS MOUSE</h3>
            <p>Color:black</p>
            <p>PRICE: 5000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/wiredmouse.PNG"
                                  alt="mouse"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>WIRED MOUSE</h3>
            <p>Color:black</p>
            <p>PRICE: 3000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/charger.PNG"
                                  alt="charger"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>CHARGERS</h3>
            <p>Color:black</p>
            <p>PRICE: 10000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/dellchargers.PNG"
                                  alt="charger"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>CHARGERS</h3>
            <p>Color:black</p>
            <p>PRICE: 8000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/EYER.PNG"
                                  alt="keyboard"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>WIRELESS KEYBOARD</h3>
            <p>Color:black</p>
            <p>CPU: Intel corei8</p>
            <p>RAM: 64/8</p>
            <p>PRICE: 3000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        <div className='border-2 border-[#202224] w-[350px] mb-10'>
        <div className='flex'>
          <Image
                                  src="/wiredkeyboard.PNG"
                                  alt="keyboard"
                                  width={200}
                                  height={200}
                                  />
          <div className='mt-10 font-semibold'>
            <h3>WIRED KEYBOARD</h3>
            <p>Color:black</p>
            <p>PRICE: 2000frs</p>
          </div>
        </div>

        <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
          <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
        </div>
        </div>

        </div>
      </div>

      <div className='hidden largeTablet:block desktop:hidden'>

  
        <div className="join ">
              <h3 className='mt-[-320px]'>ITEMS</h3>
            </div>
            <div className=' grid grid-cols-2 grid-rows-6 gap-4 align-items: stretch justify-evenly content-evenly'>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/laptop.PNG"
                                      alt="laptop"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>DELL Laptops</h3>
                <p>Color:black</p>
                <p>CPU: Intel corei8</p>
                <p>RAM: 64/8</p>
                <p>PRICE: 75000frs</p>
                <p>.</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/22lap.PNG"
                                      alt="laptop"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>HP Laptops</h3>
                <p>Color:gray</p>
                <p>CPU: Intel corei8</p>
                <p>RAM: 64/8</p>
                <p>PRICE: 100000frs</p>
                <p>.</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/23lap.PNG"
                                      alt="laptop"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>LENOVO Laptops</h3>
                <p>Color:gray</p>
                <p>CPU: Intel corei5</p>
                <p>RAM: 64/8</p>
                <p>PRICE: 150000frs</p>
                <p>.</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/usb.PNG"
                                      alt="usb keys"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>USB KEY</h3>
                <p>Color:black</p>
                <p>RAM: 4go</p>
                <p>PRICE: 2000frs</p>
                <p>.</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/usb1.PNG"
                                      alt="usb keys"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>USB KEY</h3>
                <p>Color:black</p>
                <p>RAM: 8go</p>
                <p>PRICE: 5000frs</p>
                <p>.</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/key.PNG"
                                      alt="usb"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>USB KEY</h3>
                <p>Color:white</p>
                <p>Color:black</p>
                <p>RAM: 64go</p>
                <p>PRICE: 8000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/MOUSE.PNG"
                                      alt="MOUSE"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>WIRELESS MOUSE</h3>
                <p>Color:black</p>
                <p>PRICE: 5000frs</p>
                <p>.</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/wiredmouse.PNG"
                                      alt="mouse"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>WIRED MOUSE</h3>
                <p>Color:black</p>
                <p>PRICE: 3000frs</p>
                <p>.</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/charger.PNG"
                                      alt="charger"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>CHARGERS</h3>
                <p>Color:black</p>
                <p>PRICE: 10000frs</p>
                <p>.</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/dellchargers.PNG"
                                      alt="charger"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>CHARGERS</h3>
                <p>Color:black</p>
                <p>PRICE: 8000frs</p>
                <p>.</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/EYER.PNG"
                                      alt="keyboard"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>WIRELESS KEYBOARD</h3>
                <p>Color:black</p>
                <p>PRICE: 5000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex mt-10'>
              <Image className=''
                                      src="/wiredkeyboard.PNG"
                                      alt="keyboard"
                                      width={200}
                                      height={200}
                                      />
              <div className=' font-semibold'>
                <h3>WIRED KEYBOARD</h3>
                <p>Color:black</p>
                <p>PRICE: 3000frs</p>
              </div>
            </div>
            <div className='box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            </div>


      </div>


      <div className='hidden desktop:block'>

  
        <div className="join ">
              <h3 className='mt-[-350px]'>ITEMS</h3>
            </div>
            <div className=' grid grid-cols-3 grid-rows-4 gap-4 align-items: stretch justify-evenly content-evenly'>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/laptop.PNG"
                                      alt="laptop"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>DELL Laptops</h3>
                <p>Color:black</p>
                <p>CPU: Intel corei8</p>
                <p>RAM: 64/8</p>
                <p>PRICE: 150000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className=' py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/22lap.PNG"
                                      alt="laptop"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>HP Laptops</h3>
                <p>Color:gray</p>
                <p>CPU: Intel corei8</p>
                <p>RAM: 64/8</p>
                <p>PRICE: 100000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/23lap.PNG"
                                      alt="laptop"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>LENOVO Laptops</h3>
                <p>Color:gray</p>
                <p>CPU: Intel corei5</p>
                <p>RAM: 64/8</p>
                <p>PRICE: 200000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/usb.PNG"
                                      alt="usb keys"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>USB KEY</h3>
                <p>Color:blue</p>
                <p>RAM: 64go</p>
                <p>PRICE: 5000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/usb1.PNG"
                                      alt="usb keys"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>USB KEY</h3>
                <p>Color:black</p>
                <p>RAM: 8go</p>
                <p>PRICE: 3000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/key.PNG"
                                      alt="usb"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>USB KEY</h3>
                <p>Color:white</p>
                <p>RAM: 4go</p>
                <p>PRICE: 2000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/MOUSE.PNG"
                                      alt="MOUSE"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>WIRELESS MOUSE</h3>
                <p>Color:black</p>
                <p>PRICE: 5000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/wiredmouse.PNG"
                                      alt="mouse"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>WIRED MOUSE</h3>
                <p>Color:black</p>
                <p>PRICE: 3000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/charger.PNG"
                                      alt="charger"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>CHARGERS</h3>
                <p>Color:black</p>
                <p>PRICE: 10000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/dellchargers.PNG"
                                      alt="charger"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>CHARGERS</h3>
                <p>Color:black</p>
                <p>PRICE: 8000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/EYER.PNG"
                                      alt="keyboard"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>WIRELESS KEYBOARD</h3>
                <p>Color:black</p>
                <p>PRICE: 5000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            <div className='border-2 border-[#202224] w-[350px] mb-10'>
            <div className='flex'>
              <Image
                                      src="/wiredkeyboard.PNG"
                                      alt="keyboard"
                                      width={200}
                                      height={200}
                                      />
              <div className='mt-10 font-semibold'>
                <h3>WIRED KEYBOARD</h3>
                <p>Color:black</p>
                <p>PRICE: 2000frs</p>
              </div>
            </div>
            <div className=' box-content text-white bg-[#1b3d74] border-2 border-[#1b3d74] w-[346px] mt-5'>
              <a href="Contact"><button className='py-3 pl-20 ml-10 #PURCHASE' >PURCHASE</button></a>
            </div>
            </div>
            </div>

      </div>
       
            

       
    </div>
  )
}

export default Items