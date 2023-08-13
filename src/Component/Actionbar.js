import React from 'react';

const ActionBar = () => {
    return (
        <div>
            <div className="absolute flex mt-[0.5rem] h-[2.5rem] ">
                <img src='img/HyundaiLogo.png' className='mt-[0.375rem]  ml-[0.75rem] w-[2.5rem] h-[1.5rem]' alt='' />
                    <button>
                        <img src='img/Magnifier.png' className='ml-[18rem] w-[1.25rem] h-[1.25rem]' alt='' />
                    </button>
                    <button>
                        <img src='img/Group 1 (3).png' className="ml-[1rem] mr-3.5 w-[1.25rem] h-[1rem]" alt='' />
                    </button>
                </div>
            </div>
    
    )
}
  export default ActionBar;