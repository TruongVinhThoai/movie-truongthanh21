import React from "react";

const Menu = () => {
  return (
    <ul className="items-stretch hidden space-x-3 lg:flex">
      <li className="flex">
        <a
          href="#lichchieu"
          className="flex items-center px-4 -mb-1 border-b-2 hover:text-violet-400 dark:border-transparent active:text-violet-400 focus:border-b-2 focus:text-violet-400 focus:border-violet-400"
        >
          Lịch Chiếu
        </a>
      </li>
      <li className="flex">
        <a
          href="#cumrap"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 active:text-violet-400 focus:border-b-2 focus:text-violet-400 focus:border-violet-400"
        >
          Cụm Rạp
        </a>
      </li>
      <li className="flex active:dark:text-violet-400 active:dark:border-violet-400">
        <a
          href="#tintuc"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 active:text-violet-400 focus:border-b-2 focus:text-violet-400 focus:border-violet-400"
        >
          Tin Tức
        </a>
      </li>
      <li className="flex">
        <a
          href="#lienhe"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 active:text-violet-400 focus:border-b-2 focus:text-violet-400 focus:border-violet-400"
        >
          Liên Hệ
        </a>
      </li>
      <li className="flex">
        <a
          href="#ungdung"
          className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 active:text-violet-400 focus:border-b-2 focus:text-violet-400 focus:border-violet-400"
        >
          Ứng Dụng
        </a>
      </li>
    </ul>
  );
};

export default Menu;
