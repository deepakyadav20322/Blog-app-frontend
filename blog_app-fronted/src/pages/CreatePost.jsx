import React,{useState,useContext} from 'react'
import { Authcontext } from '../context/UserContext';

const CreatePost = () => {
    const {setLoginUser} = useContext(Authcontext);

    const [selectedTags, setSelectedTags] = useState([]);
    const availableTags = ['React', 'NodeJs', 'Programming', 'Entertainment', 'Game','HTML', 'CSS', 'Javascipt', 'War', 'Computer','AI','ML','Finance','Healthcare','Education','Exercise','Climate','Mobile']; 
  
    const handleTagChange = (e) => {
      const selectedTag = e.target.value;
      if (e.target.checked) {
        // Add the selected tag to the array if it's not already present
        if (selectedTags.length < 4 && !selectedTags.includes(selectedTag)) {
          setSelectedTags([...selectedTags, selectedTag]);
        }
      } else {
        // Remove the selected tag from the array
        const updatedTags = selectedTags.filter((tag) => tag !== selectedTag);
        setSelectedTags(updatedTags);
      }
    };

  return (
    <div className='max-w-5xl   px-2 m-auto py-10'>
       
       <div className='text-center text-primary mb-2 '>  <span className='border-b-2 border-black px-4 pb-2'>Create Your New Post </span></div>
       <div>
        <form >
            <div className='flex flex-col justify-cenetr items-start'>
            <label htmlFor="title" className='text-2xl font-bold mt-2'>Title</label>
            <input type="text" name="title" id="title"  className='outline-none border-2 border-gray-300 rounded w-full  '  placeholder='Short range title' />

            </div>
            <div className='flex flex-col justify-cenetr items-start my-4'>
            <label htmlFor="discription" className='text-2xl font-medium mt-2 pl'>Discription</label>
            {/* <input type="text" name="discription" id="discription"  className='outline-none border-2 border-gray-300 rounded w-full mx-' /> */}
            <textarea name="discription" id="discription" cols="10" rows="10" minLength={'100'} maxLength={'250'} className='w-full h-[170px] sm:h-[100px] min-h-[100px] rounded p-2 resize-none' placeholder='Give short discription abour your post. Character limit gone from 100 to 250'></textarea>
            </div>

            <div className='flex flex-col justify-cenetr items-start my-4'>
            <label htmlFor="discription" className='text-2xl font-medium mt-2'>Main content</label>
            
            <textarea name="discription" id="discription" cols="50" rows="10" minLength={'300'} maxLength={'10000'} className='w-full min-h-[100px]'></textarea>
            </div>

                  {/* ------------------------- Tags selection------------------------------------------- */}
       <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Select up to four tags:</h2>
      <div className="space-x-6 flex flex-row flex-wrap justify-start items-center">
        {availableTags.map((tag) => (
          <div key={tag} className="flex items-center my-2">
            <input
              type="checkbox"
              value={tag}
              checked={selectedTags.includes(tag)}
              onChange={handleTagChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
            />
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">{tag}</label>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <strong className="block">Selected Tags:</strong>
        <ul>
          {selectedTags.map((tag) => (
            <li key={tag} className="ml-2">{tag}</li>
          ))}
        </ul>
      </div>
    </div>
    {/* ---------------------------------------------------------------------------------- */}

           
    <div className='flex flex-row justify-end items-center'>
                <button className='py-2 px-4 rounded mr-3 border-2 border-primary hover:bg-primary hover:text-white '>Save</button>
                <button className='p-2 rounded border-2 border-primary  hover:bg-primary hover:text-white   '>Cancel</button>
               </div>

        </form>
       </div>

    </div>
  )
}

export default CreatePost