import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import {FaRegShareFromSquare} from 'react-icons/fa6'
import {BsSave} from 'react-icons/bs'

const SingleBlog = () => {
  return (
    <div>
        <div className='break-words'>
            <div className='flex justify-center'>
                <div className='max-w-[680px]  mx-6 w-full'>
                 <div className='block w-full'>
                    <h1 className='w-full tracking-tighter-[-0.011em] sm:tracking-tighter-[-0.014em] sm:leading-[2.8rem] leading-9 mb-8 sm:mb-6 sm:text-[42px] text-3xl font-bold text-[#242424] sm:mt-12 mt-8'>This is my blog title and so many thigs happen here.</h1>
                    <div className=''>
                        <div className='flex flex-col justify-between'>
            <div className='block w-full'>
                <div className='flex '>
                    <div className=''>
                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    </div>
                    <div className='ml-3 w-full flex flex-col'>
                        <p>Author name</p>
                        <div><span>35 min read , </span> <span>Publish time</span></div>

                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-between mt-7 border-t-[0.2px] border-b-[0.2px] border-gray-200 py-2'>
               <div className='flex flex-row gap-4'>
               <span className=''>
                    <AiOutlineHeart size={25} color= 'black' className='inline cursor-pointer'/>
                    15
                    </span>
                    <span className=''>
                    <FaRegCommentDots size={22} color= 'black' className='inline cursor-pointer'/>
                    14
                    </span>
                   
                 </div>
                 <div className='flex flex-row gap-4'>
                    
                    <FaRegShareFromSquare size={25} color= 'black' className='inline cursor-pointer' />
                
                    <BsSave size={22} color= 'black' className='inline cursor-pointer'/>
                 </div>
            </div>
                        </div>
                    </div>
                 </div>
                 <figure className='mt-10 object-cover flex flex-col items-center justify-center'>
                 <img src="https://www.w3schools.com/tags/pic_trulli.jpg" alt="Trulli" className='w-full max-w-[640px]'/>
                  <figcaption className="text-center">Fig.1 - Trulli, Puglia, Italy.</figcaption>
                 </figure>
                 <div className='blog-main-content my-3'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias assumenda dicta id et debitis sit rem quis accusamus delectus, quae vel, quibusdam, tempora aspernatur ullam. Necessitatibus et repudiandae aperiam?</p>
                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestias assumenda dicta id et debitis sit rem quis accusamus delectus, quae vel, quibusdam, tempora aspernatur ullam. Necessitatibus et repudiandae aperiam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nesciunt, voluptatibus labore ipsa nisi ut a quaerat omnis, molestiae non dicta earum quasi? Dolore tenetur, harum sed architecto adipisci quis obcaecati debitis rem mollitia culpa natus totam est dolor facere. Pariatur natus itaque laborum esse saepe, reiciendis optio quaerat corrupti est eum possimus eligendi. Quo aspernatur inventore, molestiae rem qui reiciendis debitis neque maiores similique atque labore possimus? Ipsam, eos voluptates! Voluptatem dicta nam quasi adipisci? Consequuntur commodi esse temporibus praesentium cum culpa adipisci porro, iusto ratione voluptate consequatur reiciendis atque dolor soluta fugit provident accusamus, sapiente voluptatum. Laudantium, dolorum blanditiis, harum fuga architecto reiciendis error, quia natus quas iusto in facilis earum expedita ipsam quo necessitatibus dolores assumenda maxime voluptatibus aspernatur tenetur iure ipsa numquam velit. Enim velit voluptas, eius debitis est dicta nesciunt voluptate amet maiores qui porro magnam animi asperiores autem maxime ratione beatae illo voluptatibus officiis minus. Repellat tempora dicta suscipit tempore dolor adipisci iste omnis, quis atque ducimus earum rerum! Id fuga ipsa fugit magnam ea autem doloribus facilis libero aperiam, ipsum incidunt soluta sit, officiis, ducimus rem quisquam in reprehenderit? Animi molestiae veniam dolorum omnis eos nisi repudiandae consequatur, distinctio corrupti et provident ipsam?</p>
                    
                 </div>
            </div>
            </div>
            </div>
    </div>
  )
}

export default SingleBlog