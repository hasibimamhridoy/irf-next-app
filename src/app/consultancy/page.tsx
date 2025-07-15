import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Heart,
  Mail,
  MessageCircle,
  Phone,
  Users,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "কন্সাল্টেন্সি | আই আর এফ",
  description:
    "আই আর এফ একটি ইসলামী ব্লগ সাইট ও তরুণ-তরুণীদের জন্য প্রকাশিত হয়। আমাদের লক্ষ্য হলো নতুন প্রজন্মকে ইসলামী মূল্যবোধে দীক্ষিত করে সমাজের দায়িত্বশীল সদস্য হিসেবে গড়ে তোলা।",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_CLIENT_BASE || "https://irf.org"
  ),
};

export default function ConsultancyPage() {
  const services = [
    {
      icon: Heart,
      title: "ব্যক্তিগত পরামর্শ",
      description:
        "জীবনের বিভিন্ন সমস্যা ও চ্যালেঞ্জে ইসলামী দৃষ্টিভঙ্গি থেকে পরামর্শ",
      features: [
        "পারিবারিক সমস্যা",
        "ক্যারিয়ার গাইডেন্স",
        "আধ্যাত্মিক উন্নতি",
        "মানসিক স্বাস্থ্য",
      ],
    },
    {
      icon: Users,
      title: "পারিবারিক পরামর্শ",
      description: "পারিবারিক বিষয়াদি ও সম্পর্কের উন্নতিতে ইসলামী নির্দেশনা",
      features: [
        "দাম্পত্য জীবন",
        "সন্তান লালন-পালন",
        "পারিবারিক দ্বন্দ্ব",
        "আত্মীয়তার সম্পর্ক",
      ],
    },
    {
      icon: BookOpen,
      title: "শিক্ষা পরামর্শ",
      description:
        "শিক্ষা ক্ষেত্রে সিদ্ধান্ত গ্রহণ ও ভবিষ্যৎ পরিকল্পনায় সহায়তা",
      features: [
        "বিষয় নির্বাচন",
        "উচ্চশিক্ষা পরিকল্পনা",
        "ক্যারিয়ার গাইডেন্স",
        "দক্ষতা উন্নয়ন",
      ],
    },
    {
      icon: MessageCircle,
      title: "অনলাইন পরামর্শ",
      description: "ঘরে বসেই পেশাদার পরামর্শ সেবা গ্রহণ করুন",
      features: ["ভিডিও কল", "চ্যাট সাপোর্ট", "ইমেইল পরামর্শ", "ফোন কনসালটেশন"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      <section className="py-20 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">পরামর্শ সেবা</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            জীবনের যেকোনো সমস্যায় ইসলামী দৃষ্টিভঙ্গি থেকে পরামর্শ নিন। আমাদের
            অভিজ্ঞ পরামর্শদাতারা আপনার পাশে আছেন।
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-destructive">পরামর্শ নিন</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-50 to-red-50">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">এখনই যোগাযোগ করুন</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                আমাদের পরামর্শ সেবা নিতে আজই যোগাযোগ করুন। আমরা আপনার সমস্যার
                সমাধানে সর্বোচ্চ চেষ্টা করব।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-destructive">
                  <Phone className="w-5 h-5 mr-2" />
                  ফোন করুন
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-destructive text-destructive hover:bg-orange-50 bg-transparent"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  ইমেইল করুন
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
