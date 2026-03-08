"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function ContactPage() {
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
        { label: "Cake Menu", href: "menu" },
        { label: "Custom Cakes", href: "#" },
        { label: "Cupcakes", href: "#" },
        { label: "Desserts", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "about" },
        { label: "Gallery", href: "gallery" },
        { label: "Contact", href: "contact" },
        { label: "Testimonials", href: "#" },
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

      <div id="cta" data-section="cta">
        <ContactCenter
          tag="Ready to Order?"
          title="Order Your Dream Cake Today"
          description="Contact us now to place your custom cake order or inquire about our offerings. We're here to make your celebration special."
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          useInvertedBackground={false}
          background={{
            variant: "radial-gradient",
          }}
          inputPlaceholder="Enter your email"
          buttonText="Get Started"
          termsText="We respect your privacy. Reply within 24 hours."
          onSubmit={(email) => console.log("Email submitted:", email)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={footerColumns}
          logoText="Caramella's"
          copyrightText="© 2025 Caramella's Cake Shop. All rights reserved."
          onPrivacyClick={() => console.log("Privacy clicked")}
        />
      </div>
    </ThemeProvider>
  );
}