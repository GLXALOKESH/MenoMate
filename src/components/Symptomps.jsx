import React from 'react';

const Symptomps = (props) => {
    // If props.stars is not provided, it defaults to 0
    const starCount = props?.stars ?? 0;
    const starArray = Array(Number(starCount)).fill(0);

    return (
        <div className="box bg-[#fffacd] h-[80px] w-[80px] m-[10px] border-black border-[1px] rounded-[10px] flex justify-center items-center flex-col p-[1px]">
            <p className="name text-[11px]">{props?.name}</p>
            <img src={props?.path} alt="" className='h-[70%]' />
            <div className="stars flex">
                {starArray.map((_, index) => (
                    <img key={index} src="stars.svg" alt="star" className="h-[15px]" />
                ))}
            </div>
        </div> 
    );
}

export default Symptomps;
