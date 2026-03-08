"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Image as ImageIcon, Sparkles } from 'lucide-react';
import Link from "next/link";

export default function GalleryPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "/about" },
    { name: "Gallery", id: "/gallery" },
    { name: "Contact", id: "/contact" },
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
        <NavbarStyleApple 
          brandName="Caramella's"
          navItems={[
            { name: "Home", id: "/" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "/about" },
            { name: "Gallery", id: "/gallery" },
            { name: "Contact", id: "/contact" },
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <FeatureCardOne
          title="Cake Gallery"
          description="Explore our stunning collection of custom designs and signature creations."
          tag="Portfolio"
          tagIcon={ImageIcon}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="asymmetric-60-wide-40-narrow"
          features={[
            {
              title: "Wedding Cakes",
              description: "Elegant tiered designs for your special day.",
              imageSrc: "http://img.b2bpic.net/free-photo/happy-bride-groom-cut-wedding-cake_8353-9297.jpg",
              imageAlt: "Wedding cake display",
            },
            {
              title: "Birthday Cakes",
              description: "Colorful and festive designs for all ages.",
              imageSrc: "http://img.b2bpic.net/free-photo/birthday-cake-with-balloons_23-2148001932.jpg",
              imageAlt: "Birthday cake collection",
            },
            {
              title: "Cupcakes",
              description: "Individually crafted with premium toppings.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-rainbow-cupcake-glaze-still-life_23-2150154576.jpg",
              imageAlt: "Cupcake assortment",
            },
            {
              title: "Anniversary Cakes",
              description: "Romantic designs to celebrate your milestone.",
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-couple-sitting-table-decorated-with-candles-rose-petals-spending-evening-together_141793-66726.jpg",
              imageAlt: "Anniversary cake design",
            },
          ]}
        />
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
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Caramella's"
          copyrightText="© 2025 Caramella's Cake Shop. All rights reserved."
          columns={[
            {
              title: "Products",
              items: [
                {
                  label: "Cake Menu",
                  href: "menu",
                },
                {
                  label: "Custom Cakes",
                  href: "#",
                },
                {
                  label: "Cupcakes",
                  href: "#",
                },
                {
                  label: "Desserts",
                  href: "#",
                },
              ],
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "/about",
                },
                {
                  label: "Gallery",
                  href: "/gallery",
                },
                {
                  label: "Contact",
                  href: "/contact",
                },
                {
                  label: "Testimonials",
                  href: "#",
                },
              ],
            },
            {
              title: "Connect",
              items: [
                {
                  label: "WhatsApp Order",
                  href: "https://wa.me/919876543210",
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com",
                },
                {
                  label: "Facebook",
                  href: "https://facebook.com",
                },
                {
                  label: "Email",
                  href: "mailto:info@caramellas.com",
                },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}