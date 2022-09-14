import React from 'react';
import { AiOutlineForm, AiOutlineContainer, AiOutlineFire, AiOutlineHeart, AiOutlinePlusCircle, AiOutlineRead, AiOutlineSetting } from "react-icons/ai";

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
              <li className='items'><AiOutlineContainer className='text-primary'/> All Quizzes</li>
              <li className='items'><AiOutlineFire className='text-primary'/> Trendy Quizzes</li>
              <li className='items'><AiOutlineRead className='text-primary'/> Topics</li>
              <li className='items'><AiOutlineHeart className='text-primary'/> Favorites</li>
              <li className='items'><AiOutlinePlusCircle className='text-primary'/> Requests</li>
            </ul>
          </div>
          <ul>
            <li className='items'><AiOutlineSetting className='text-primary'/>Settings</li>
            <li className='items'><AiOutlineSetting className='text-primary'/>Log Out</li>
          </ul>
        </div>  
        <div>Content - Mostly Cards</div>
      </main>
    </div>
  )

}

export default DefaultPage;