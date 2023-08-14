import React from 'react';

const SlideBar = () => {
    return (
        <div className='absolute bottom-[15.3rem] w-full h-[11rem] right-1'>

            {/*1줄 슬라이더*/}
            <div className='flex h-[5.5rem] font-bold'>
                <div>
                    <button>
                        <img src='img/choose1.png'className='w-8 h-8 ml-9 mt-4' alt=''></img>
                    </button>
                    <p className='w-[3.5rem] ml-[1.8rem] text-[0.7rem]'>견적내기</p>
                </div>
                <div>
                    <button>
                    <img src='img/choose2.png'className='w-8 h-8 ml-[2.4rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[3.5rem] ml-[2.2rem] text-[0.7rem] '>구매상담</p>
                </div>             
                <div>
                    <button>
                    <img src='img/choose3.png'className='w-8 h-8 ml-[2.4rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[3.5rem] ml-[2.1rem] text-[0.7rem] '>시승신청</p>
                </div>        
                <div>
                    <button>
                    <img src='img/choose4.png'className='w-8 h-8 ml-[2.2rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[4.5rem] ml-[1.8rem] text-[0.7rem]'>판매처 검색</p>
                </div>            
                <div>
                    <button>
                    <img src='img/choose5.png'className='w-8 h-8 ml-[1.5rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[4rem] ml-[1.3rem] text-[0.7rem] '>구매혜택</p>
                </div>
                <div>
                    <button>
                    <img src='img/choose6.png'className='w-8 h-8 ml-[2.2rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[4rem] ml-[1.8rem] text-[0.7rem] '>정비예약</p>
                </div>          
            </div>

                
            {/*2줄 슬라이더*/}
            <div className='absolute flex h-[5.5rem] font-bold bottom-5'>
                <div>
                    <button>
                        <img src='img/choose7.png'className='w-8 h-8 ml-9 mt-4' alt=''></img>
                    </button>
                    <p className='w-[4rem] ml-[1.8rem] text-[0.7rem]'>블루멤버스</p>
                </div>
                <div>
                    <button>
                    <img src='img/choose8.png'className='w-8 h-8 ml-[1.7rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[4.3rem] ml-[1.2rem] text-[0.7rem] '>포인트 사용</p>
                </div>             
                <div>
                    <button>
                    <img src='img/choose9.png'className='w-8 h-8 ml-[2.0rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[5.1rem] ml-[1rem] text-[0.7rem] '>내비 업데이트</p>
                </div>        
                <div>
                    <button>
                    <img src='img/choose10.png'className='w-8 h-8 ml-[1.6rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[5.1rem] ml-[0.6rem] text-[0.7rem]'>보증수리 안내</p>
                </div>            
                <div>
                    <button>
                    <img src='img/choose11.png'className='w-8 h-8 ml-[1.4rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[4rem] ml-[1.4rem] text-[0.7rem] '>중고차</p>
                </div>
                <div>
                    <button>
                    <img src='img/choose12.png'className='w-8 h-8 ml-[1.8rem] mt-4' alt=''></img>
                    </button>
                    <p className='w-[4rem] ml-[1.7rem] text-[0.7rem] '>이벤트</p>
                </div>          
            </div>
        </div>
    )
}

const Slide = () => {
    return (
        <div>
            <SlideBar />
        </div>
    );
};
  
export default Slide;
