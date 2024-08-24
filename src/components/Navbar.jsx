function Navbar(props){
    return (

        <>
                    <nav className='h-[70px] w-[100%] bg-[#FF69B4] flex items-center'>
                    {props.menu && <img src="menu.svg" alt="Menu" className="h-[30px] ml-[20px]" />}
                    </nav>

        </>
    )
}

export default Navbar;