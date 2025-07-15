import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "আমাদের কথা | আই আর এফ",
  description:
    "আই আর এফ একটি ইসলামী ব্লগ সাইট ও তরুণ-তরুণীদের জন্য প্রকাশিত হয়। আমাদের লক্ষ্য হলো নতুন প্রজন্মকে ইসলামী মূল্যবোধে দীক্ষিত করে সমাজের দায়িত্বশীল সদস্য হিসেবে গড়ে তোলা।",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_CLIENT_BASE || "https://irf.org"
  ),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">আমাদের কথা</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            আই আর এফ একটি ইসলামী ব্লগ সাইট ও তরুণ-তরুণীদের জন্য প্রকাশিত হয়।
            আমাদের লক্ষ্য হলো নতুন প্রজন্মকে ইসলামী মূল্যবোধে দীক্ষিত করে সমাজের
            দায়িত্বশীল সদস্য হিসেবে গড়ে তোলা।
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-destructive mb-6" />
                <h3 className="text-2xl font-bold mb-4">আমাদের লক্ষ্য</h3>
                <p className="text-gray-600 leading-relaxed">
                  কিশোর-কিশোরী ও তরুণ-তরুণীদের ইসলামী মূল্যবোধে দীক্ষিত করে
                  সমাজের দায়িত্বশীল সদস্য হিসেবে গড়ে তোলা। আধুনিক শিক্ষার সাথে
                  ইসলামী শিক্ষার সমন্বয় ঘটিয়ে একটি সুন্দর ভবিষ্যৎ গড়ার স্বপ্ন
                  দেখি।
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">আমাদের দৃষ্টিভঙ্গি</h3>
                <p className="text-gray-600 leading-relaxed">
                  একটি আলোকিত সমাজ গঠন যেখানে প্রতিটি যুবক-যুবতী তাদের ধর্মীয় ও
                  নৈতিক মূল্যবোধ নিয়ে গর্বিত। জ্ঞান-বিজ্ঞানে এগিয়ে থেকেও
                  ইসলামী আদর্শে অটুট থাকার পথ দেখানো।
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              আমাদের মূল্যবোধ
            </h2>
            <p className="text-xl text-gray-600">
              যে নীতিমালার উপর ভিত্তি করে আমরা কাজ করি
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-destructive" />
              </div>
              <h3 className="text-xl font-bold mb-4">সততা ও বিশ্বস্ততা</h3>
              <p className="text-gray-600">
                আমাদের সকল কাজে সততা ও বিশ্বস্ততা বজায় রাখি
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">সেবার মানসিকতা</h3>
              <p className="text-gray-600">
                সমাজের কল্যাণে নিঃস্বার্থ সেবার মানসিকতা নিয়ে কাজ করি
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">ভালোবাসা ও সহানুভূতি</h3>
              <p className="text-gray-600">
                সকলের প্রতি ভালোবাসা ও সহানুভূতির সাথে কাজ করি
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
