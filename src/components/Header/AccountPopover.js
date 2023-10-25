import { useState } from "react";
import { Button, Popover } from "antd";
import { NavLink } from "react-router-dom";

const AccountPopover = ({ user, handleLogIn, handleLogOut }) => {
  const [open, setOpen] = useState(false);
  const { accessToken, taiKhoan, hoTen, email } = user || {};

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };

  const renderBody = () => {
    if (accessToken) {
      return (
        <div className="z-[9999] p-2 text-md">
          <NavLink className="pb-2" to={`/profile/${taiKhoan}`}>
            Profile
          </NavLink>
          <NavLink className="block pt-2" to="/">
            <button type="button" title="Log out" onClick={handleLogOut}>
              Log out
            </button>
          </NavLink>
        </div>
      );
    }
    return;
  };

  if (accessToken) {
    return (
      <Popover
        content={renderBody()}
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <div className="flex items-center cursor-pointer">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              className="absolute w-12 h-12 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>

          <div className="ml-2">{hoTen || email}</div>
        </div>
      </Popover>
    );
  }
  return (
    <button
      type="button"
      title="Sign in"
      onClick={handleLogIn}
      className="self-center px-8 py-3 rounded"
    >
      Sign in
    </button>
  );
};

export default AccountPopover;
