import React, {useState} from 'react';

const Search = () => {

    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleDeleteClick = () => {
        setText('');
    }

    const handleClick = () => {
        setText('');
    }

    return (
        <div className='flex fixed top-0 w-[100%] h-[156rem] bg-[#000] bg-opacity-70'>

            <div className='bg-[#ffffff] w-[100%] h-[13rem]'>
                <div className='flex bg-[#007fa8] mt-[3.4rem] w-[100%] h-[3.8rem]'>
                    <div className='text-[0.75rem] text-[#fff] font-bold'>
                        <input
                            type="text"
                            value={text}
                            onChange={handleChange}
                            placeholder='검색어를 입력해주세요'
                            className='placeholder-[#fff] bg-transparent w-[19.5rem] h-full outline-none ml-[0.5rem] p-4'
                        />
                    </div>

                        <button onClick={handleDeleteClick}>
                            <img src='img/textClose.png' className='mt-[0.2rem] ml-[0.7rem] w-[1.5rem] h-[1.5rem]'></img>
                        </button>

                        <button onClick={handleClick}>
                            <img src='img/whiteMagnifier.png' className='mt-[0.2rem] ml-[1rem] w-[1.5rem] h-[1.5rem]'></img>
                        </button>
                        
                </div>

                <div className='flex mt-[0.7rem] font-medium text-[0.75rem]'>

                    <div className='ml-[0.75rem] w-[12rem] h-[2rem] bg-[#007FA8]'>
                        <p className='flex justify-center text-[#fff] font-bold p-[0.4rem]'>최근 검색어</p>
                    </div>                 

                    <div className='w-[12rem] h-[2rem] bg-[#F6F3F2]'>
                        <p className='flex justify-center p-[0.4rem]'>인기 검색어 TOP 10</p>
                    </div>

                </div>

                <p className='p-4 text-[0.8rem]'>최근 검색 내역이 없습니다.</p>
    
            </div>

        </div>
    );
};

export default Search;
