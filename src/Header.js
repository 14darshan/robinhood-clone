import React from "react";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import "./Header.css";
import Logo from './robinhood.svg'

function Header() {
  return (
  	<div class="bg-black shadow">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <div>
       <img className="px-3" width={40} src={Logo} />
        </div>

        <div class="hidden sm:flex sm:items-center">
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 mr-4">Free Stocks</a>
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 mr-4">PortFolio</a>
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 mr-4">Cash</a>
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 mr-4 ">Messages</a>
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 ">Account</a>
        </div>

        <div class="hidden sm:flex sm:items-center">
          <input className="text-white appearance-none bg-transparent px-4 py-2 w-64" type="text" placeholder='search' />
        </div>

        <div class="sm:hidden cursor-pointer">
          
        </div>
      </div>
      
      <div class="block sm:hidden bg-black py-2">
        <div class="flex items-center flex-col">
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 mb-1">Free Stocks</a>
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 mb-1">PortFolio</a>
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 mb-1">Cash</a>
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 mb-1">Messages</a>
          <a href="#" class="text-white text-sm font-semibold hover:text-green-600 mb-1">Account</a>

          <div width="100%" class="flex justify-between items-center pt-2">
            <input className="text-white 
            appearance-none bg-transparent px-4 py-2 w-64" type="text" placeholder='search' />
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default Header;
