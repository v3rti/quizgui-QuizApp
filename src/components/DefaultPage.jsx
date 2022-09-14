import React from 'react';
import { AiOutlineForm, AiOutlineContainer, AiOutlineFire, AiOutlineHeart, AiOutlinePlusCircle, AiOutlineRead, AiOutlineSetting, AiOutlinePoweroff, AiOutlineComment, AiOutlineEye } from "react-icons/ai";
import coverImage from '../assets/cover-image.png';
import eagle from '../assets/eagle.jpg';

const DefaultPage = () => {
  
  return(
    <div className=''>
      <nav className='flex justify-between items-center mb-10'>
        <div className="text-primary font-bold font-outfit text-4xl">Quizgui</div>
        <div>
          <button className="btn-primary">Create an account</button>
          <button class="btn-primary">Login</button>
        </div>
      </nav>
      <main className='grid grid-cols-12'>
        <div className='col-span-2'>
          <div className='flex flex-col mb-56'> 
            <div className='items text-white text-xl bg-primary mb-10'><AiOutlineForm />Dashboard</div>
            <ul>
              <li className='items'>
                <AiOutlineContainer size={22}  className='text-primary'/>
                <a href="#">All Quizzes</a>
              </li>
              <li className='items'><AiOutlineFire size={22}  className='text-primary'/><a href="#">Trendy Quizzes</a></li>
              <li className='items'><AiOutlineRead size={22}  className='text-primary'/><a href="#">Topics</a></li>
              <li className='items'><AiOutlineHeart size={22} className='text-primary'/><a href="#">Favorites</a></li>
              <li className='items'><AiOutlinePlusCircle size={22} className='text-primary'/><a href="#">Requests</a></li>
            </ul>
          </div>
          <ul>
            <li className='items'><AiOutlineSetting size={22} className='text-primary'/><a href="">Settings</a></li>
            <li className='items'><AiOutlinePoweroff size={22} className='text-primary'/><a href="">Log Out</a></li>
          </ul>
        </div>  
        <div class="col-span-10 grid grid-cols-10 grid-rows-3 gap-5">
          <div class="col-span-2 flex flex-col border-2 border-primary card rounded-3xl overflow-hidden">
            <img class="w-12/12 h-40 object-cover" src={coverImage} alt="" />
            <div class="bg-gray-200 px-4 py-3">
              <h2 class="text-black text-base font-bold w-fit mb-2">Lorem ipsum dolor sit amet con adipisicing elit del musro.</h2>
              <p class="text-sm text-gray-700 mb-3">18h ago</p>
              <div class="flex justify-between">
                <div class="flex gap-2">
                  <img class="w-6 h-6 rounded-full" src={eagle} alt="" />
                  <p>Amine</p>
                </div>
                <div class="flex gap-3">
                  <div class="flex items-center gap-1">
                  <p>11</p>
                    <AiOutlineComment />
                  </div>
                  <div class="flex items-center gap-1">
                    <p>18</p>
                    <AiOutlineEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2 flex flex-col border-2 border-primary card rounded-3xl overflow-hidden">
            <img class="w-12/12 h-40 object-cover" src={coverImage} alt="" />
            <div class="bg-gray-200 px-4 py-3">
              <h2 class="text-black text-base font-bold w-fit mb-2">Lorem ipsum dolor sit amet con adipisicing elit del musro.</h2>
              <p class="text-sm text-gray-700 mb-3">18h ago</p>
              <div class="flex justify-between">
                <div class="flex gap-2">
                  <img class="w-6 h-6 rounded-full" src={eagle} alt="" />
                  <p>Amine</p>
                </div>
                <div class="flex gap-3">
                  <div class="flex items-center gap-1">
                  <p>11</p>
                    <AiOutlineComment />
                  </div>
                  <div class="flex items-center gap-1">
                    <p>18</p>
                    <AiOutlineEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2 flex flex-col border-2 border-primary card rounded-3xl overflow-hidden">
            <img class="w-12/12 h-40 object-cover" src={coverImage} alt="" />
            <div class="bg-gray-200 px-4 py-3">
              <h2 class="text-black text-base font-bold w-fit mb-2">Lorem ipsum dolor sit amet con adipisicing elit del musro.</h2>
              <p class="text-sm text-gray-700 mb-3">18h ago</p>
              <div class="flex justify-between">
                <div class="flex gap-2">
                  <img class="w-6 h-6 rounded-full" src={eagle} alt="" />
                  <p>Amine</p>
                </div>
                <div class="flex gap-3">
                  <div class="flex items-center gap-1">
                  <p>11</p>
                    <AiOutlineComment />
                  </div>
                  <div class="flex items-center gap-1">
                    <p>18</p>
                    <AiOutlineEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2 flex flex-col border-2 border-primary card rounded-3xl overflow-hidden">
            <img class="w-12/12 h-40 object-cover" src={coverImage} alt="" />
            <div class="bg-gray-200 px-4 py-3">
              <h2 class="text-black text-base font-bold w-fit mb-2">Lorem ipsum dolor sit amet con adipisicing elit del musro.</h2>
              <p class="text-sm text-gray-700 mb-3">18h ago</p>
              <div class="flex justify-between">
                <div class="flex gap-2">
                  <img class="w-6 h-6 rounded-full" src={eagle} alt="" />
                  <p>Amine</p>
                </div>
                <div class="flex gap-3">
                  <div class="flex items-center gap-1">
                  <p>11</p>
                    <AiOutlineComment />
                  </div>
                  <div class="flex items-center gap-1">
                    <p>18</p>
                    <AiOutlineEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-2 flex flex-col border-2 border-primary card rounded-3xl overflow-hidden">
            <img class="w-12/12 h-40 object-cover" src={coverImage} alt="" />
            <div class="bg-gray-200 px-4 py-3">
              <h2 class="text-black text-base font-bold w-fit mb-2">Lorem ipsum dolor sit amet con adipisicing elit del musro.</h2>
              <p class="text-sm text-gray-700 mb-3">18h ago</p>
              <div class="flex justify-between">
                <div class="flex gap-2">
                  <img class="w-6 h-6 rounded-full" src={eagle} alt="" />
                  <p>Amine</p>
                </div>
                <div class="flex gap-3">
                  <div class="flex items-center gap-1">
                  <p>11</p>
                    <AiOutlineComment />
                  </div>
                  <div class="flex items-center gap-1">
                    <p>18</p>
                    <AiOutlineEye />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  )

}

export default DefaultPage;