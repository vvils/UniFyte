import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
  } from "@nextui-org/react";

export default function ProfileButton() {
    return (
        <Dropdown>
        <DropdownTrigger>
            <Button variant="bordered">Profile</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
            <DropdownItem href="/profile" key="edit">
            Edit Profile
            </DropdownItem>
            <DropdownItem key="Log out" className="text-danger" color="danger">
            Logout
            </DropdownItem>
        </DropdownMenu>
        </Dropdown>
    );
}