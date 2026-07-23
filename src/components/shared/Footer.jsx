import { Mail, Phone, Sparkles } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    // ফুল উইডথ এবং স্লিক থিম-অ্যাডাপ্টিভ ব্যাকগ্রাউন্ড
    <footer className="w-full relative overflow-hidden bg-base-200 border-t border-base-content/10 pt-16 pb-10 transition-colors duration-300">
      {/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* 🎯 মেইন লেআউট গ্রিড: সমান ভাগে ৩টি কলামে ভাগ করা হয়েছে (১:১:১ রেশিও) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12 border-b border-base-content/10">
          {/* ১. লেফট কলাম: ব্র্যান্ডিং ও ডেসক্রিপশন */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-start">
            {/* 🎯 গ্লোয়িং প্রিমিয়াম টেক্সট গ্রেডিয়েন্ট লোগো */}
            <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm select-none">
              IdeaVault
            </h2>
            <p className="text-sm leading-relaxed text-base-content/70 font-medium max-w-sm">
              IdeaVault is a modern ecosystem for thoughts, concepts, and
              disruptions. We bridge the gap between raw imagination and
              world-changing execution.
            </p>
          </div>

          {/* ২. মিডল কলাম: ভিশন স্টেটমেন্ট (পারফেক্টলি এলাইন্ড) */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-start">
            <h3 className="text-xs font-black tracking-wider text-base-content/40 uppercase flex items-center gap-1.5 pt-1">
              <Sparkles size={14} className="text-blue-500" /> Vision
            </h3>
            <p className="text-sm font-medium text-base-content/70 leading-relaxed max-w-xs">
              Join our global community to explore and share curated ideas
              weekly.
            </p>
          </div>

          {/* ৩. রাইট কলাম: নেভিগেশন (গ্রিড ফিক্সড) */}
          <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-start">
            <h3 className="text-xs font-black tracking-wider text-base-content/40 uppercase pt-1">
              Navigation
            </h3>
            <div className="flex flex-col gap-2.5 text-sm font-bold text-base-content/80">
              {["Ideas", "Add Idea", "My Ideas", "My Interactions"].map(
                (item) => (
                  <div key={item} className="transition-colors duration-200">
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* কন্টাক্ট এবং সোশ্যাল বার */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between pt-8">
          {/* কন্টাক্ট ইনফো */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-semibold text-base-content/70 text-center sm:text-start">
            <div className="flex items-center justify-center gap-2">
              <Phone size={14} className="text-blue-500" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={14} className="text-blue-500" />
              <span>example@gmail.com</span>
            </div>
          </div>

          {/* জ্যান্ত সোশ্যাল আইকনসমূহ */}
          <div className="flex gap-5 justify-center items-center text-base-content/50">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1877F2] transition-colors duration-300"
            >
              <FaFacebook size={22} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#E4405F] transition-colors duration-300"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-base-content transition-colors duration-300"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        {/* কপিরাইট এবং লিগ্যাল লিংক */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-base-content/40 border-t border-base-content/5 mt-8 text-center w-full">
          <p>Copyright © 2026 Mahmudul Hasan Nirab. All rights reserved.</p>
          <div className="flex gap-6 justify-center">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
