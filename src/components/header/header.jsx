import './header.css'

export function Header(){
  const navbarList=["Boutique", "Smartphones", "Tablettes", "Smaet Home","Life Style", "Promotions","Nouvauté"] 

    return (
        <div className='flex'>
        <img src='' alt='logo' />
        
         <ul className="flex">
         {navbarList.map((nav,index,list)=>{
            
            return(<li>{nav}</li>)
         })}
         </ul>
         <div>
            <div className=''>
                <input type="search" placeholder='Rechercher ..'/>
                <div>
                    
                </div>
            </div>
         </div>

        </div>
    )
}
