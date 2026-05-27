"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Activity, DollarSign, Globe, LineChart, Linkedin, Lock, MessageCircle, Shield, Sparkles, Star, TrendingUp, Twitter, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="medium"
        background="circleGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Products",          id: "#products"},
        {
          name: "Pricing",          id: "#pricing"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "Partners",          id: "#social-proof"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      button={{
        text: "Get Started",        href: "#contact"}}
      brandName="CryptoForge"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      title="Unlock your financial freedom.                                             Just retire your parents and earn                                "
      description="The most secure and intuitive platform for decentralized finance, advanced trading, and innovative crypto investments. Empowering your journey to financial freedom."
      testimonials={[
        {
          name: "Sarah Johnson",          handle: "@CryptoQueen",          testimonial: "CryptoForge transformed my portfolio! The insights and security are unparalleled.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5391.jpg",          imageAlt: "Sarah Johnson"},
        {
          name: "Michael Chen",          handle: "@BlockchainPro",          testimonial: "Seamless user experience and powerful tools. A game-changer for serious investors.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/technician-optimizing-data-center-equipment-maximum-efficiency_482257-117650.jpg",          imageAlt: "Michael Chen"},
        {
          name: "Emily Rodriguez",          handle: "@DeFiVisionary",          testimonial: "Trustworthy and innovative. CryptoForge is truly shaping the future of finance.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/amazing-beautiful-redhead-young-lady-sitting-cafe_171337-15285.jpg",          imageAlt: "Emily Rodriguez"},
        {
          name: "David Kim",          handle: "@DigitalAssetGuru",          testimonial: "Finally, a platform that combines advanced features with top-tier security. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-senior-businessman-portrait_1262-1636.jpg",          imageAlt: "David Kim"},
        {
          name: "Jessica Lee",          handle: "@TokenTitan",          testimonial: "The best platform for staking and yield farming. My passive income has soared!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-business-woman-with-disabilities-looking-sad-front-while-diverse-team-working-financial-project_482257-2221.jpg",          imageAlt: "Jessica Lee"},
      ]}
      tag="Decentralized Future"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Start Trading",          href: "#products"},
        {
          text: "Learn More",          href: "#about"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/money-fantasy-scene_23-2151663128.jpg",          alt: "Avatar of crypto user 1"},
        {
          src: "http://img.b2bpic.net/free-photo/three-businesspersons-desk_23-2147626400.jpg",          alt: "Avatar of crypto user 2"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-elegant-mature-male-holding-tablet_23-2148673422.jpg",          alt: "Avatar of crypto user 3"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-man-christmas-celebrations_23-2150936477.jpg",          alt: "Avatar of crypto user 4"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-showing-bitcoin_171337-385.jpg",          alt: "Confident crypto investor"},
      ]}
      avatarText="Join 1M+ Users"
      imageSrc="http://img.b2bpic.net/free-photo/stock-market-trader-analyzing-charts_23-2151937277.jpg"
      imageAlt="Futuristic cryptocurrency dashboard"
      marqueeItems={[
        {
          type: "text-icon",          text: "Secure Transactions",          icon: Lock,
        },
        {
          type: "text-icon",          text: "Real-time Data",          icon: Activity,
        },
        {
          type: "text-icon",          text: "DeFi Integration",          icon: TrendingUp,
        },
        {
          type: "text-icon",          text: "Global Access",          icon: Globe,
        },
        {
          type: "text-icon",          text: "Advanced Analytics",          icon: LineChart,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Building a dedicated site for only serious persons,who wan'na be successful."
      description="CryptoForge is dedicated to providing a secure, transparent, and user-friendly platform for everyone to access the world of cryptocurrencies. Our mission is to democratize finance, enabling individuals to take control of their assets with cutting-edge technology and robust security protocols."
      metrics={[
        {
          value: "1M+",          title: "Active Users"},
        {
          value: "$500B+",          title: "Total Value Locked"},
        {
          value: "99.9%",          title: "Uptime Guarantee"},
      ]}
      tag="Our Vision"
      tagIcon={Zap}
      imageSrc="http://img.b2bpic.net/free-photo/go-digital-with-wires-new-york-city-background_53876-94933.jpg"
      imageAlt="Abstract blockchain technology network"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Intuitive Trading Terminal",          description: "Access real-time market data, advanced charting tools, and lightning-fast execution for all major cryptocurrencies. Trade with confidence.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/financial-manager-doing-accounting-work-pc-with-chroma-key-screen_482257-126417.jpg",            imageAlt: "Crypto trading terminal on phone"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/community-cloud-storage-sync-secure_53876-125542.jpg",            imageAlt: "Secure crypto wallet on phone"},
        },
        {
          title: "Decentralized Finance (DeFi) Hub",          description: "Dive into the world of DeFi with seamless access to lending, borrowing, and yield farming protocols. Maximize your earnings in a trustless environment.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-blockchain-technology_23-2151480185.jpg",            imageAlt: "DeFi platform on tablet"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169859.jpg",            imageAlt: "NFT marketplace on tablet"},
        },
        {
          title: "Smart Portfolio Management",          description: "Track your investments with comprehensive analytics, set custom alerts, and gain insights into your portfolio's performance across all assets.",          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/still-life-arrangement-with-cryptocurrency_23-2149102130.jpg",            imageAlt: "Crypto portfolio tracker on laptop"},
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/asian-woman-freelancer-working-from-home-business-app-home-business-laptop-computer-businesswoman-office-working-sitting-woman-work-communication-internet-people-online-happy-technology_482257-47239.jpg",            imageAlt: "Staking and yield farming interface"},
        },
      ]}
      showStepNumbers={true}
      title="Advanced Features for Every Investor"
      description="Explore the powerful tools and functionalities designed to give you an edge in the crypto market. From secure wallets to advanced trading analytics, we've got you covered."
      tag="Platform Capabilities"
      tagIcon={Shield}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "bitcoin",          name: "Bitcoin (BTC)",          price: "$65,000",          variant: "The Digital Gold",          imageSrc: "http://img.b2bpic.net/free-photo/3d-shapes-glowing-with-bright-holographic-colors_23-2151037180.jpg",          imageAlt: "Bitcoin icon"},
        {
          id: "ethereum",          name: "Ethereum (ETH)",          price: "$3,200",          variant: "Smart Contracts Powerhouse",          imageSrc: "http://img.b2bpic.net/free-photo/3d-cryptocurrency-rendering-design_23-2149074559.jpg",          imageAlt: "Ethereum icon"},
        {
          id: "solana",          name: "Solana (SOL)",          price: "$150",          variant: "High-Speed Blockchain",          imageSrc: "http://img.b2bpic.net/free-photo/futuristic-time-machines-design_23-2151599356.jpg",          imageAlt: "Solana icon"},
        {
          id: "ripple",          name: "Ripple (XRP)",          price: "$0.55",          variant: "Global Payments Network",          imageSrc: "http://img.b2bpic.net/free-vector/crypto-coin-bitcoin-logo-new-design_483537-4798.jpg",          imageAlt: "Ripple icon"},
        {
          id: "cardano",          name: "Cardano (ADA)",          price: "$0.40",          variant: "Peer-Reviewed Blockchain",          imageSrc: "http://img.b2bpic.net/free-photo/abstract-creative-3d-sphere_23-2150885355.jpg",          imageAlt: "Cardano icon"},
        {
          id: "litecoin",          name: "Litecoin (LTC)",          price: "$80",          variant: "The Silver to Bitcoin's Gold",          imageSrc: "http://img.b2bpic.net/free-vector/collection-cryptocurrency-coins_23-2147788784.jpg",          imageAlt: "Litecoin icon"},
      ]}
      title="Explore Our Diverse Crypto Assets"
      description="Discover a wide range of cryptocurrencies and digital assets available for trading, staking, and investment on CryptoForge."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          title: "Basic Access",          price: "$0",          period: "per month",          features: [
            "Secure Wallet",            "Basic Trading Tools",            "24/7 Support",            "Market Insights"],
          button: {
            text: "Sign Up Free"},
          imageSrc: "http://img.b2bpic.net/free-photo/computer-servers-row-network-generated-by-ai_188544-27795.jpg",          imageAlt: "Basic access node"},
        {
          id: "pro",          title: "Pro Trader",          price: "$29",          period: "per month",          features: [
            "All Basic Features",            "Advanced Charting",            "DeFi Integration",            "Priority Support",            "Staking & Yield Farming"],
          button: {
            text: "Go Pro"},
          imageSrc: "http://img.b2bpic.net/free-photo/cyber-security-concept-digital-art_23-2151637766.jpg",          imageAlt: "Pro trader network"},
        {
          id: "enterprise",          title: "Enterprise Suite",          price: "Contact Us",          period: "custom",          features: [
            "All Pro Features",            "Dedicated Account Manager",            "Custom API Access",            "Institutional Liquidity",            "Advanced Security Audits"],
          button: {
            text: "Get a Quote"},
          imageSrc: "http://img.b2bpic.net/free-photo/optical-fiber-background_23-2149301540.jpg",          imageAlt: "Enterprise global network"},
      ]}
      title="Transparent Pricing, Powerful Features"
      description="Choose the CryptoForge plan that best fits your investment strategy. No hidden fees, just clear benefits."
      tag="Investment Plans"
      tagIcon={DollarSign}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Our Impact in Numbers"
      tag="Growth & Performance"
      metrics={[
        {
          id: "tx",          value: "1.5M+",          description: "Transactions Processed Daily"},
        {
          id: "aum",          value: "$100B+",          description: "Assets Under Management"},
        {
          id: "countries",          value: "150+",          description: "Countries Supported"},
        {
          id: "partners",          value: "50+",          description: "Global Partners"},
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Alex T.",          handle: "@CryptoMind",          testimonial: "CryptoForge has truly simplified my investment strategy. The interface is clean, and the security gives me peace of mind. Best decision I ever made!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/female-hacker-breaching-network-security-with-advanced-techniques_482257-115501.jpg",          imageAlt: "Alex T. trading crypto"},
        {
          id: "2",          name: "Brenda J.",          handle: "@BlockchainBelle",          testimonial: "I've tried several platforms, but CryptoForge stands out. Their analytics tools are incredibly powerful, helping me make smarter moves. Highly recommend!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-cheerful-businessman-showing-bitcoin_171337-387.jpg",          imageAlt: "Brenda J. reviewing portfolio"},
        {
          id: "3",          name: "Chris P.",          handle: "@DeFiDynamo",          testimonial: "The DeFi integration on CryptoForge is a game-changer. I'm earning passive income effortlessly, and their support team is always there to help.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/startup-team-review-financial-reports-performance-metrics-laptop_482257-90887.jpg",          imageAlt: "Chris P. discussing crypto"},
        {
          id: "4",          name: "Diana S.",          handle: "@TokenTrailblazer",          testimonial: "Security is my top priority, and CryptoForge exceeds expectations. I feel completely safe trading and storing my assets here. A truly robust platform.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-wearing-headphones_23-2149153410.jpg",          imageAlt: "Diana S. making secure transaction"},
        {
          id: "5",          name: "Ethan L.",          handle: "@HodlHero",          testimonial: "The educational resources and market insights provided by CryptoForge are fantastic. I've learned so much and seen my portfolio grow significantly.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-successful-confident-woman-with-glasses-holds-gold-bitcoin-her-hand-isolated-black-wall_231208-11713.jpg",          imageAlt: "Ethan L. with successful investment"},
      ]}
      showRating={true}
      title="What Our Users Say"
      description="Hear from real investors who are thriving with CryptoForge. Their success stories speak volumes about our platform."
      tag="Success Stories"
      tagIcon={Star}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Coinbase",        "Binance",        "Kraken",        "Chainlink",        "Polygon",        "Avalanche",        "FTX Ventures"]}
      title="Trusted by Leading Innovators"
      description="Our platform is proudly supported by and integrated with industry-leading blockchain projects and financial institutions."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What is CryptoForge?",          content: "CryptoForge is a leading digital asset trading and management platform designed for both beginners and experienced investors to securely buy, sell, and manage cryptocurrencies."},
        {
          id: "2",          title: "How do I secure my account?",          content: "We recommend enabling Two-Factor Authentication (2FA) for all accounts, using a strong, unique password, and being vigilant against phishing attempts. Our platform uses advanced encryption for all data."},
        {
          id: "3",          title: "What cryptocurrencies can I trade?",          content: "CryptoForge supports a wide range of popular cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Ripple (XRP), Cardano (ADA), and many more altcoins. New assets are added regularly."},
        {
          id: "4",          title: "How are my assets protected?",          content: "Your assets are protected through a combination of cold storage, multi-signature wallets, and regular security audits. We prioritize the safety of your funds above all else."},
        {
          id: "5",          title: "What is DeFi and how can I participate?",          content: "DeFi (Decentralized Finance) refers to financial services built on blockchain technology. On CryptoForge, you can participate in DeFi protocols like staking and yield farming to earn passive income, directly from your dashboard."},
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about CryptoForge, cryptocurrency, trading, and security."
      tag="Support"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      tag="Ready to Start?"
      title="Join the Crypto Revolution Today"
      description="Connect with our team to learn more about CryptoForge or get started with your investment journey. We're here to help you every step of the way."
      buttons={[
        {
          text: "Get Started Now",          href: "#"},
        {
          text: "Contact Support",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="CryptoForge"
      copyrightText="© 2024 CryptoForge. All rights reserved."
      socialLinks={[
        {
          icon: Twitter,
          href: "https://twitter.com/cryptoforge",          ariaLabel: "Twitter"},
        {
          icon: MessageCircle,
          href: "https://discord.com/cryptoforge",          ariaLabel: "Discord"},
        {
          icon: Linkedin,
          href: "https://linkedin.com/company/cryptoforge",          ariaLabel: "LinkedIn"},
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
