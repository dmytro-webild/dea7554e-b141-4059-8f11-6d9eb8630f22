"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Star, Heart } from "lucide-react";

export default function MenuPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Products",
      items: [
        { label: "Cake Menu", href: "/menu" },
        { label: "Custom Cakes", href: "#" },
        { label: "Cupcakes", href: "#" },
        { label: "Desserts", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "#about" },
        { label: "Gallery", href: "#gallery" },
        { label: "Contact", href: "#contact" },
        { label: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Connect",
      items: [
        { label: "WhatsApp Order", href: "https://wa.me/919876543210" },
        { label: "Instagram", href: "https://instagram.com" },
        { label: "Facebook", href: "https://facebook.com" },
        { label: "Email", href: "mailto:info@caramellas.com" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="compact"
      sizing="mediumLarge"
      background="fluid"
      cardStyle="inset"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Caramella's" navItems={navItems} />
      </div>

      <div id="all-cakes" data-section="all-cakes">
        <ProductCardTwo
          title="Complete Cake Menu"
          description="Browse our full collection of premium handcrafted cakes. All cakes are available for custom orders with advance notice."
          tag="All Products"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          carouselMode="buttons"
          products={[
            {
              id: "1",
              brand: "Caramella's",
              name: "Chocolate Truffle Cake",
              price: "₹850",
              rating: 5,
              reviewCount: "142",
              imageSrc: "http://img.b2bpic.net/free-photo/festive-dessert-red-brown-velvet-cake-with-white-candy-snowflakes_114579-1398.jpg?_wi=2",
              imageAlt: "Chocolate Truffle Cake",
            },
            {
              id: "2",
              brand: "Caramella's",
              name: "Red Velvet Cake",
              price: "₹920",
              rating: 5,
              reviewCount: "128",
              imageSrc: "http://img.b2bpic.net/free-photo/swiss-roll-cake-with-red-jelly-white-cream-served-with-strawberries_114579-14194.jpg?_wi=2",
              imageAlt: "Red Velvet Cake",
            },
            {
              id: "3",
              brand: "Caramella's",
              name: "Black Forest Cake",
              price: "₹1050",
              rating: 5,
              reviewCount: "156",
              imageSrc: "http://img.b2bpic.net/free-photo/fruity-cake-slice-high-angle_23-2148536825.jpg?_wi=2",
              imageAlt: "Black Forest Cake",
            },
            {
              id: "4",
              brand: "Caramella's",
              name: "Butterscotch Cake",
              price: "₹780",
              rating: 5,
              reviewCount: "98",
              imageSrc: "http://img.b2bpic.net/free-photo/wooden-board-delicious-sponge-cake-marble-background_114579-54470.jpg?_wi=2",
              imageAlt: "Butterscotch Cake",
            },
            {
              id: "5",
              brand: "Caramella's",
              name: "Vanilla Dream Cake",
              price: "₹720",
              rating: 5,
              reviewCount: "87",
              imageSrc: "http://img.b2bpic.net/free-photo/wooden-board-delicious-sponge-cake-marble-background_114579-54470.jpg?_wi=3",
              imageAlt: "Vanilla Dream Cake",
            },
            {
              id: "6",
              brand: "Caramella's",
              name: "Strawberry Bliss Cake",
              price: "₹890",
              rating: 5,
              reviewCount: "112",
              imageSrc: "http://img.b2bpic.net/free-photo/swiss-roll-cake-with-red-jelly-white-cream-served-with-strawberries_114579-14194.jpg?_wi=3",
              imageAlt: "Strawberry Bliss Cake",
            },
          ]}
        />
      </div>

      <div id="custom-options" data-section="custom-options">
        <FeatureCardOne
          title="Custom Cake Options"
          description="Personalize your cake with our customization options. Choose flavors, fillings, designs, and sizes to create your perfect cake."
          tag="Customize"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="three-columns-all-equal-width"
          features={[
            {
              title: "Flavor Selection",
              description: "Choose from vanilla, chocolate, red velvet, black forest, strawberry, and seasonal specials.",
              imageSrc: "http://img.b2bpic.net/free-photo/festive-dessert-red-brown-velvet-cake-with-white-candy-snowflakes_114579-1398.jpg?_wi=3",
              imageAlt: "Flavor options",
            },
            {
              title: "Size Variations",
              description: "Available in 2-inch (serves 2), 6-inch (serves 6), 8-inch (serves 12), and 10-inch (serves 20) sizes.",
              imageSrc: "http://img.b2bpic.net/free-photo/fruity-cake-slice-high-angle_23-2148536825.jpg?_wi=3",
              imageAlt: "Size options",
            },
            {
              title: "Special Requests",
              description: "Gluten-free, vegan, sugar-free, and dairy-free options available. Custom designs and decorations welcome.",
              imageSrc: "http://img.b2bpic.net/free-photo/female-baker-placing-blue-cupcake-case-stainless-steel-tray_23-2148028090.jpg?_wi=3",
              imageAlt: "Special requests",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Caramella's"
          copyrightText="© 2025 Caramella's Cake Shop. All rights reserved."
          columns={footerColumns}
        />
      </div>
    </ThemeProvider>
  );
}