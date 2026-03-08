"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Heart, Sparkles } from 'lucide-react';
import Link from "next/link";

export default function AboutPage() {
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
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-walnuts-with-eggs-flour-jelly-white-background-color-cake-biscuit-photo-pie-bun-dough-hotcake_140725-158384.jpg",
              imageAlt: "Fresh baking ingredients",
            },
            {
              title: "Custom Designs",
              description: "Personalized cake designs tailored to your vision and celebration theme.",
              imageSrc: "http://img.b2bpic.net/free-photo/female-baker-placing-blue-cupcake-case-stainless-steel-tray_23-2148028090.jpg",
              imageAlt: "Custom cake design process",
            },
            {
              title: "Same Day Orders",
              description: "Available for select cakes with advance notice. Same-day delivery in Moshi & Pune.",
              imageSrc: "http://img.b2bpic.net/free-photo/top-view-fresh-walnuts-with-eggs-flour-jelly-white-background-color-cake-biscuit-photo-pie-bun-dough-hotcake_140725-158384.jpg",
              imageAlt: "Fast delivery service",
            },
            {
              title: "Premium Quality",
              description: "Handcrafted with precision and care. Every cake meets our high standards.",
              imageSrc: "http://img.b2bpic.net/free-photo/female-baker-placing-blue-cupcake-case-stainless-steel-tray_23-2148028090.jpg",
              imageAlt: "Quality assurance",
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="What Our Customers Say"
          description="Trusted by hundreds of happy customers across Moshi and Pune for our quality and service."
          tag="Testimonials"
          tagIcon="MessageCircle"
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
              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-cozy-office_23-2149739353.jpg",
              imageAlt: "Priya Sharma",
            },
            {
              id: "2",
              name: "Amit Patel",
              handle: "Restaurant Owner, Pune",
              testimonial: "I order cakes from Caramella's every month. The quality is consistent and my customers love them.",
              imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-library_273609-15845.jpg",
              imageAlt: "Amit Patel",
            },
            {
              id: "3",
              name: "Neha Gupta",
              handle: "Event Organizer",
              testimonial: "Best custom cake designs in the city. Professional, reliable, and always on time.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-cute-supportive-girl-showing-thumbs-up-smiling-proud-praising-you-showing-well-done-excellent-gesture-standing-satisfied-white-wall_176420-34127.jpg",
              imageAlt: "Neha Gupta",
            },
            {
              id: "4",
              name: "Rahul Singh",
              handle: "Corporate Event Manager",
              testimonial: "Caramella's handled our company event perfectly. The dessert cakes were a huge hit!",
              imageSrc: "http://img.b2bpic.net/free-photo/smiley-businesswoman-posing-outdoors_23-2148767054.jpg",
              imageAlt: "Rahul Singh",
            },
            {
              id: "5",
              name: "Anjali Verma",
              handle: "Chef & Food Blogger",
              testimonial: "The artistry and flavors at Caramella's are unmatched. Highly recommend for any celebration.",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-work_23-2149304146.jpg",
              imageAlt: "Anjali Verma",
            },
            {
              id: "6",
              name: "Vikram Desai",
              handle: "Hotel Manager, Pune",
              testimonial: "We partner with Caramella's for special occasions. Their cakes are premium quality.",
              imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-suit-looking-camera_23-2148112202.jpg",
              imageAlt: "Vikram Desai",
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