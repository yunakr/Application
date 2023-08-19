import React from 'react';

const Explain = () => {
    return (
        <div>

             {/*텍스트 DIV*/}
             <div className='mt-2'>
                <p className='text-[0.85rem] font-bold text-[#999999]'>모바일 App</p>
                </div>

                <p className='text-[0.85rem] font-bold text-[#999999]'>개인정보 처리방침</p>
                <p className='text-[0.85rem] font-bold text-[#999999]'>프라이버시 센터</p>
                <p className='text-[0.85rem] font-bold text-[#999999]'>영상정보처리기기 운영관리방침</p>
                <p className='text-[0.85rem] font-bold text-[#999999]'>고객센터: 080-600-6000</p>

        </div>
    )
}
    
const Nav = () => {
    return (
        <div className='h-[27.5rem] bg-[#1C1B1B] '>

            <Explain />
        
            {/*현대 로고 메뉴얼 DIV*/}

            {/*버튼 DIV*/}


        </div>
    );
};
    
export default Nav;