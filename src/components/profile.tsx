import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import LogoutButton from "./login/logoutButton";

export default function ProfileButton() {
  const handleLogout = () => {
    return(
      console.log("clicked")
    )
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered">Profile</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem href="/dashboard" key="edit">
          Edit Profile
        </DropdownItem>
        <DropdownItem key="Log out" className="text-danger" color="danger" onClick={handleLogout}>
          <LogoutButton className="text-md md:text-md text-gray-800 py-2 px-3 md:px-4 rounded-full hover:bg-gray-200 transition ease-in-out duration-200 transform hover:scale-105" />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
