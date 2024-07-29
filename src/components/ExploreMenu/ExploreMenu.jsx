// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

const ExploreMenu=({category,setCategory}) => {
  return (
    <div className='ExploreMenu' id='ExploreMenu'>
        <h1>Explore Our Menu</h1>
        <p className='ExploreMenu-text'>Get your best food what you like the most. The food is waiting for you.</p>
        <div className="Explore-Menu-list">
            {menu_list.map((items, index) => {
                return (
                    <div onClick={()=>setCategory(prev=>prev===items.menu_name?"All":items.menu_name)} key={index} className="Explore-Menu-list-item">
                        <img className={category===items.menu_name? "active":""}src={items.menu_image} alt="" />
                        <p>{items.menu_name}</p>
                    </div>
                );
            })}
        </div>
        <hr />
    </div>
  );
}

export default ExploreMenu;
