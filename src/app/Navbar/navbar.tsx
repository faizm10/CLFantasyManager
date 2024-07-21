"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Player Stats", href: "/playerStats" },
    { label: "Team Stats", href: "/teamStats" },
    { label: "Match Predictor", href: "/matchPredictor" },
    { label: "UCL Quiz", href: "/uclQuiz" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden justify-between">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex justify-center items-center w-full">
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex justify-center w-full gap-4">
        <NavbarItem>
          <Link href="/playerStats">Player Stats</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/teamStats">Team Stats</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/matchPredictor">Match Predictor</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/uclQuiz">UCL Quiz</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
