import React, {useState} from 'react';
import Search from '../Search/Search';

const ActionBar = () => {
    const [searchVisible, setSearchVisible] = useState(false);

    const handleSearchClick = () => {
        setSearchVisible(!searchVisible); // Toggle searchVisible
    };
    
    return (
        <div>
            {searchVisible && <Search />}
            <div className="fixed  flex mt-[0.5rem] h-[2.5rem] top-0 left-0 z-[1]">
                <img src='img/HyundaiLogo.png' className='mt-[0.375rem]  ml-[0.75rem] w-[2.5rem] h-[1.5rem]' alt='' />
                    <div className='flex mt-[0em] ml-[18rem]'>
                        <button onClick={handleSearchClick}>
                            <img src='img/Magnifier.png' className='w-[1.25rem] h-[1.25rem]' alt='' />
                        </button>
                        <button>
                            <img src='img/Hamburger.png' className="ml-[1rem] mr-3.5 w-[1.20rem] h-[1.04rem]" alt='' />
                        </button>
                    </div>
            </div>
        </div>
    )
}
  export default ActionBar;