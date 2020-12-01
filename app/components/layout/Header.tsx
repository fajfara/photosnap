import React from "react";
import Button from "../button/Button";
import Logo from "../../assets/images/logo.svg";
import MainNavbar from "../navigation/MainNavbar";

const Header = () => {
  return (
    <header>
      <div
        className="max-w-1110 mx-auto flex justify-between py-4 items-center"
        padding="px-20"
      >
        <Logo />
        <MainNavbar />
        <Button type="primary" variation="dark">
          Get an invite
        </Button>
      </div>
    </header>
  );
};

export default Header;
