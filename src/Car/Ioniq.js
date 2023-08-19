import React from 'react';

const Ioniq6 = () => {
    return (
        <div>
            <div className='mt-[29.2rem] h-[7rem]'>
                <span className='flex justify-center font-extrabold text-[1.5rem] mt-[0.5rem]'>전기차</span>
                <p className='flex justify-center font-bold text-[0.8rem] text-[#888] mt-[1rem]'>지구 환경을 품은 현대자동차의</p>
                <p className='flex justify-center font-bold text-[0.8rem] text-[#888]'>미래형 모빌리티를 경험해보세요.</p>
            </div>

            <div className='h-[38.2rem] bg-[#F7F3F2]'>
                <img src='img/ioniq6.jpg' alt=''></img>

                <div className='w-[2.4rem] h-[0.9rem] m-3 mt-[1.8rem] bg-[#007fa8]'>
                    <p className='text-[0.65rem] font-bold ml-[0.35rem] text-[#ffffff]'>NEW</p>
                </div>
                
                <p className='ml-[0.8rem] font-extrabold text-[1.4rem]'>아이오닉 6</p>
                <p className='ml-[0.8rem] mt-2 font-semibold text-[0.8rem]'>내가만드는세상</p>

                <div className='flex justify-center mt-6 ml-3 h-[2.6rem] w-[24rem] bg-[#002c5f]'>
                    <button>
                        <p className='text-[#ffffff] font-bold text-[0.85rem] '>자세히 보기</p>
                    </button>
                </div>

                <p className='ml-[0.8rem] mt-8 font-extrabold text-[1rem]'>충전소&서비스 네트워크</p>
                <p className='ml-[0.8rem] text-[#666] mt-2 font-semibold text-[0.77rem]'>고객님의 계신 곳 근처의 충전소 및</p>
                <p className='ml-[0.8rem] text-[#666] mt-1 font-semibold text-[0.77rem]'>서비스 네트워크를 안내해드립니다.</p>
                
                <div>            
                    <img src='img/ioniq_icon.jpg' className='ml-[17rem] mt-[-0.7rem] w-[8rem]' alt=''></img>
                    <div className='flex ml-[0.8rem] mt-[-1.2rem] text-[0.8rem] font-extrabold text-[#002c5f]'>
                    <button className='flex'><p>전기차</p><img src='img/nextBtn.png' className='w-[1rem] h-[1rem] ml-[0.2rem] mt-[0.1rem]' alt=''></img></button>
                        <div className='bg-[#666] border border-[#b4b4b4] ml-[1.4rem] mt-[0.3rem] h-[0.8rem]'></div>
                        <p className='ml-5'> <button className='flex'>수소전기차</button></p><button><img src='img/nextBtn.png' className='w-[1rem] h-[1rem] ml-[0.2rem] mt-[0.1rem]' alt=''></img></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

const Nav = () => {
    return (
        <div>
            <Ioniq6 />
        </div>
    );
};

export default Nav;