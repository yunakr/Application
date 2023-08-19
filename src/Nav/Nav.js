import React from 'react';

const Explain = () => {
    return (
        <div>

            <div className='flex'>
                {/*텍스트 DIV*/}
                <div className=''>
                    <p className='pl-[1rem] pt-[1.8rem] text-[0.78rem] font-bold text-[#999999]'><button>모바일 App</button></p>
                    <p className='pl-[1rem] pt-[2.4rem] text-[0.78rem] font-bold text-[#ffffff]'><button>개인정보 처리방침</button></p>
                    <p className='pl-[1rem] pt-[2.4rem] text-[0.78rem] font-bold text-[#999999]'><button>프라이버시 센터</button></p>
                    <p className='pl-[1rem] pt-[2.4rem] text-[0.78rem] font-bold text-[#999999]'><button>영상정보처리기기 운영관리방침</button></p>
                    <p className='pl-[1rem] pt-[2.4rem] text-[0.78rem] font-bold text-[#999999]'><button>고객센터: 080-600-6000</button></p>
                </div>

                <div className='pl-2'>
                    <p className='pl-[1rem] pt-[1.8rem] text-[0.78rem] font-bold text-[#999999]'><button>저작권 안내</button></p>
                    <p className='pl-[1rem] pt-[2.4rem] text-[0.78rem] font-bold text-[#999999]'><button>이용약관</button></p>
                    <p className='pl-[1rem] pt-[2.4rem] text-[0.78rem] font-bold text-[#999999]'><button>윤리경영 사이버 감사실</button></p>
                    <p className='pl-[1rem] pt-[2.4rem] text-[0.78rem] font-bold text-[#999999]'><button>사이트맵</button></p>
                </div>
            </div>

            <div className='flex p-3 mt-[3rem] h-[3.2rem]'>
                <img src='img/HyundaiLogoWhite.png' className='ml-[0.7rem] w-[2.8rem] h-[1.4rem]' alt=''></img>
            
                <div className='mt-[-0.4rem] ml-[1rem] text-[0.82rem]  text-[#999999]'>
                    <p>COPYRIGHT @ HYUNDAI MPTOR COMPANY,</p>
                    <p>ALL RIGHTS RESERVED.</p> 
                </div>
            </div>

            <div className='mt-[1.6rem] h-[2.5rem] bottom-0 text-center'>
                <button>
                    <img src='img/downBtn.png' className='mt-[0.8rem] w-[1.8rem] h-[1.5rem] inline-block'></img>
                </button>
            </div>

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