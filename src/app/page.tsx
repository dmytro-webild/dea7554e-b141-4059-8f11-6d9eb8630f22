"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import FooterBase from "@/components/sections/footer/FooterBase";
import Link from "next/link";
import { Cake, Star, Heart, Image as ImageIcon, MessageCircle, Sparkles, Quote } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="Freshly Baked Happiness in Every Bite"
          description="Premium cakes and desserts handcrafted for every celebration. From custom designs to classic favorites, we deliver excellence with every creation."
          tag="Premium Bakery"
          tagIcon={Cake}
          tagAnimation="slide-up"
          imageSrc="http://img.b2bpic.net/free-photo/side-close-up-view-cake-cake-with-berries-powdered-sugar-waffles-green-sauce_140725-71803.jpg"
          imageAlt="Luxurious tiered cake display at Caramella's"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
          testimonials={[
            {
              name: "Priya Sharma",
              handle: "Wedding Planner, Moshi",
              testimonial: "Caramella's created the most beautiful wedding cake. Every detail was perfect!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-cozy-office_23-2149739353.jpg?_wi=1",
              imageAlt: "Priya Sharma",
            },
            {
              name: "Amit Patel",
              handle: "Restaurant Owner, Pune",
              testimonial: "The birthday cakes are always fresh and delicious. Highly recommended!",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15845.jpg?_wi=1",
              imageAlt: "Amit Patel",
            },
            {
              name: "Neha Gupta",
              handle: "Event Organizer",
              testimonial: "Best custom cake designs in the city. Professional and reliable service.",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-supportive-girl-showing-thumbs-up-smiling-proud-praising-you-showing-well-done-excellent-gesture-standing-satisfied-white-wall_176420-34127.jpg?_wi=1",
              imageAlt: "Neha Gupta",
            },
          ]}
          buttons={[
            {
              text: "Enquire Now",
              href: "contact",
            },
            {
              text: "Explore Cakes",
              href: "menu",
            },
          ]}
          buttonAnimation="slide-up"
          background={{
            variant: "glowing-orb",
          }}
        />
      </div>

      <div id="featured-cakes" data-section="featured-cakes">
        <ProductCardTwo
          title="Featured Cake Collection"
          description="Our most popular creations, handpicked for their exceptional taste and stunning presentation."
          tag="Bestsellers"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          carouselMode="buttons"
          products={[
            {
              id: "1",
              brand: "Caramella's",
              name: "Chocolate Truffle Cake",
              price: "₹850",
              rating: 5,
              reviewCount: "142",
              imageSrc: "http://img.b2bpic.net/free-photo/festive-dessert-red-brown-velvet-cake-with-white-candy-snowflakes_114579-1398.jpg?_wi=1",
              imageAlt: "Chocolate Truffle Cake",
            },
            {
              id: "2",
              brand: "Caramella's",
              name: "Red Velvet Cake",
              price: "₹920",
              rating: 5,
              reviewCount: "128",
              imageSrc: "http://img.b2bpic.net/free-photo/swiss-roll-cake-with-red-jelly-white-cream-served-with-strawberries_114579-14194.jpg?_wi=1",
              imageAlt: "Red Velvet Cake",
            },
            {
              id: "3",
              brand: "Caramella's",
              name: "Black Forest Cake",
              price: "₹1050",
              rating: 5,
              reviewCount: "156",
              imageSrc: "http://img.b2bpic.net/free-photo/fruity-cake-slice-high-angle_23-2148536825.jpg?_wi=1",
              imageAlt: "Black Forest Cake",
            },
            {
              id: "4",
              brand: "Caramella's",
              name: "Butterscotch Cake",
              price: "₹780",
              rating: 5,
              reviewCount: "98",
              imageSrc: "http://img.b2bpic.net/free-photo/wooden-board-delicious-sponge-cake-marble-background_114579-54470.jpg?_wi=1",
              imageAlt: "Butterscotch Cake",
            },
          ]}
        />
      </div>

      <div id="why-choose-us" data-section="why-choose-us">
        <FeatureCardOne
          title="Why Choose Caramella's"
          description="We're committed to delivering premium quality cakes and exceptional service for every celebration."
          tag="Our Promise"
          tagIcon={Heart}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
          features={[
            {
              title: "Fresh Ingredients",
              description: "Premium quality ingredients sourced fresh daily for optimal taste and texture.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-walnuts-with-eggs-flour-jelly-white-background-color-cake-biscuit-photo-pie-bun-dough-hotcake_140725-158384.jpg?_wi=1",
              imageAlt: "Fresh baking ingredients",
            },
            {
              title: "Custom Designs",
              description: "Personalized cake designs tailored to your vision and celebration theme.",
              imageSrc: "http://img.b2bpic.net/free-photo/female-baker-placing-blue-cupcake-case-stainless-steel-tray_23-2148028090.jpg?_wi=1",
              imageAlt: "Custom cake design process",
            },
            {
              title: "Same Day Orders",
              description: "Available for select cakes with advance notice. Same-day delivery in Moshi & Pune.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-walnuts-with-eggs-flour-jelly-white-background-color-cake-biscuit-photo-pie-bun-dough-hotcake_140725-158384.jpg?_wi=2",
              imageAlt: "Fast delivery service",
            },
            {
              title: "Premium Quality",
              description: "Handcrafted with precision and care. Every cake meets our high standards.",
              imageSrc: "http://img.b2bpic.net/free-photo/female-baker-placing-blue-cupcake-case-stainless-steel-tray_23-2148028090.jpg?_wi=2",
              imageAlt: "Quality assurance",
            },
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
              imageSrc: "http://img.b2bpic.net/free-photo/happy-bride-groom-cut-wedding-cake_8353-9297.jpg?_wi=1",
              imageAlt: "Wedding cake display",
            },
            {
              title: "Birthday Cakes",
              description: "Colorful and festive designs for all ages.",
              imageSrc: "http://img.b2bpic.net/free-photo/birthday-cake-with-balloons_23-2148001932.jpg?_wi=1",
              imageAlt: "Birthday cake collection",
            },
            {
              title: "Cupcakes",
              description: "Individually crafted with premium toppings.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-rainbow-cupcake-glaze-still-life_23-2150154576.jpg?_wi=1",
              imageAlt: "Cupcake assortment",
            },
            {
              title: "Anniversary Cakes",
              description: "Romantic designs to celebrate your milestone.",
              imageSrc: "http://img.b2bpic.net/free-photo/beautiful-couple-sitting-table-decorated-with-candles-rose-petals-spending-evening-together_141793-66726.jpg?_wi=1",
              imageAlt: "Anniversary cake design",
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Customers Say"
          description="Trusted by hundreds of happy customers across Moshi and Pune for our quality and service."
          tag="Testimonials"
          tagIcon={MessageCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          speed={40}
          topMarqueeDirection="left"
          testimonials={[
            {
              id: "1",
              name: "Priya Sharma",
              handle: "Wedding Planner, Moshi",
              testimonial: "Caramella's exceeded all expectations. The wedding cake was absolutely stunning and tasted divine!",
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-cozy-office_23-2149739353.jpg?_wi=2",
              imageAlt: "Priya Sharma",
              icon: Quote,
            },
            {
              id: "2",
              name: "Amit Patel",
              handle: "Restaurant Owner, Pune",
              testimonial: "I order cakes from Caramella's every month. The quality is consistent and my customers love them.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15845.jpg?_wi=2",
              imageAlt: "Amit Patel",
              icon: Quote,
            },
            {
              id: "3",
              name: "Neha Gupta",
              handle: "Event Organizer",
              testimonial: "Best custom cake designs in the city. Professional, reliable, and always on time.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-supportive-girl-showing-thumbs-up-smiling-proud-praising-you-showing-well-done-excellent-gesture-standing-satisfied-white-wall_176420-34127.jpg?_wi=2",
              imageAlt: "Neha Gupta",
              icon: Quote,
            },
            {
              id: "4",
              name: "Rahul Singh",
              handle: "Corporate Event Manager",
              testimonial: "Caramella's handled our company event perfectly. The dessert cakes were a huge hit!",
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-businesswoman-posing-outdoors_23-2148767054.jpg?_wi=1",
              imageAlt: "Rahul Singh",
              icon: Quote,
            },
            {
              id: "5",
              name: "Anjali Verma",
              handle: "Chef & Food Blogger",
              testimonial: "The artistry and flavors at Caramella's are unmatched. Highly recommend for any celebration.",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-work_23-2149304146.jpg?_wi=1",
              imageAlt: "Anjali Verma",
              icon: Quote,
            },
            {
              id: "6",
              name: "Vikram Desai",
              handle: "Hotel Manager, Pune",
              testimonial: "We partner with Caramella's for special occasions. Their cakes are premium quality.",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-suit-looking-camera_23-2148112202.jpg?_wi=1",
              imageAlt: "Vikram Desai",
              icon: Quote,
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