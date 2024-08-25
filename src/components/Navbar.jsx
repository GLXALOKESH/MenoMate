import { NavLink } from "react-router-dom";

function Navbar(props){
    return (

        <>
                    <nav className='h-[70px] w-[100%] bg-[#FF69B4] flex items-center justify-end px-[20px]'>
                    {props.menu && <img src="menu.svg" alt="Menu" className="h-[30px] ml-[20px]" />}
                    <div className="buttons flex gap-[10px] ">
    {props.signin && <NavLink to="/signin" > <button className="signin bg-black text-white p-[8px] rounded-[10px]">SignIN</button></NavLink>}
    {props.signup && <NavLink to="/signup" > <button className="signup bg-black text-white p-[8px] rounded-[10px]">SignUp</button></NavLink>}
    {props.logout && <NavLink to="/" ><button className="logout bg-black text-white p-[8px] rounded-[10px]">Logout</button> </NavLink>}
</div>
                    </nav>

        </>
    )
}

export default Navbar;