import { Button, Navbar } from 'flowbite-react';
import React from 'react';

const Nav = () => {
    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button>
                    Log in
                </Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Add Task
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    My Task
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    Completed Tasks
                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Nav;