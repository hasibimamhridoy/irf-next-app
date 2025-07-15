"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export function CreativeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-10 lg:mt-0">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-destructive/15 text-destructive rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4 mr-2" />
                বাংলাদেশি ইসলামী শিক্ষা
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                নতুন প্রজন্মের
                <span className="bg-destructive bg-clip-text text-transparent block">
                  আলোর দিশা
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                ইসলামী মূল্যবোধ ও আধুনিক শিক্ষার সমন্বয়ে গড়ে তুলুন একটি সুন্দর
                ভবিষ্যৎ। আমাদের সাথে যুক্ত হয়ে হয়ে উঠুন দায়িত্বশীল নাগরিক।
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-2"
            >
              <Link href={"/contact"}>
                <Button
                  variant={"destructive"}
                  size="lg"
                  className=" text-white shadow-xl group"
                >
                  আমাদের সাথে যুক্ত হন
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link className="block" href={"/about"}>
                <Button size="lg" variant="outline" className="">
                  <BookOpen className="mr-2 h-5 w-5" />
                  আরও জানুন
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold ">১০০+</div>
                <div className="text-sm text-gray-600">নিবন্ধ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold ">৫০০+</div>
                <div className="text-sm text-gray-600">পাঠক</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold ">২৫+</div>
                <div className="text-sm text-gray-600">লেখক</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-fit lg:h-[500px] flex lg:block flex-col gap-3 mb-12">
              {/* Floating Cards */}
              <motion.div className="lg:absolute lg:top-10 lg:left-10 bg-white p-6 rounded-2xl shadow-xl border border-orange-100">
                <BookOpen className="w-8 h-8 text-destructive mb-2" />
                <h3 className="font-semibold text-gray-800">শিক্ষামূলক</h3>
                <p className="text-sm text-gray-600">গুণগত কন্টেন্ট</p>
              </motion.div>

              <motion.div className="lg:absolute top-32 lg:right-10 bg-white p-6 rounded-2xl shadow-xl border border-red-100">
                <Users className="w-8 h-8 text-red-500 mb-2" />
                <h3 className="font-semibold text-gray-800">কমিউনিটি</h3>
                <p className="text-sm text-gray-600">সক্রিয় অংশগ্রহণ</p>
              </motion.div>

              <motion.div className="lg:absolute lg:bottom-20 lg:left-20 bg-white p-6 rounded-2xl shadow-xl border border-yellow-100">
                <Award className="w-8 h-8 text-yellow-500 mb-2" />
                <h3 className="font-semibold text-gray-800">মানসম্পন্ন</h3>
                <p className="text-sm text-gray-600">বিশ্বস্ত তথ্য</p>
              </motion.div>

              {/* Central Illustration */}
              <div className="hidden lg:flex lg:absolute inset-0 items-center justify-center">
                <Logo />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
