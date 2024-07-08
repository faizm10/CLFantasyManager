import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

export default function NavBar() {
  return (
    <Navbar
      style={{
        backgroundColor: "#3573cf",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: "60px", // Increased height of navbar
        padding: "0 20px", // Added padding for larger appearance
      }}
      isBordered
    >
      <NavbarBrand>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link style={{ color: "white", fontSize: "16px" }} href="/"> {/* Increased font size for links */}
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: "white", fontSize: "16px" }} href="/playerStats"> {/* Increased font size for links */}
            Player Stats
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: "white", fontSize: "16px" }} href="/playerStats"> {/* Increased font size for links */}
            Team Stats
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: "white", fontSize: "16px" }} href="/playerStats"> {/* Increased font size for links */}
            Match Predictor
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link style={{ color: "white", fontSize: "16px" }} href="/playerStats"> {/* Increased font size for links */}
            UCL Quiz
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end"></NavbarContent>
    </Navbar>
  );
}
