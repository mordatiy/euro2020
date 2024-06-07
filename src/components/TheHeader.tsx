import { Navigation } from "./Navigation";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Teams", href: "/teams" },
];

const TheHeader = () => {
    return (
        <header>
            <Navigation navLinks={navItems} />
        </header>
    );
};

export { TheHeader };