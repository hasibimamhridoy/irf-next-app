import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Calendar, Mic, Users, Video } from "lucide-react";

export default function OurWorkPage() {
  const services = [
    {
      icon: BookOpen,
      title: "প্রকাশনা",
      description: "মাসিক পত্রিকা ও বই প্রকাশনার মাধ্যমে জ্ঞান বিতরণ",
      features: ["মাসিক শোলো পত্রিকা", "ইসলামী বই প্রকাশনা", "অনলাইন আর্টিকেল"],
    },
    {
      icon: Users,
      title: "কমিউনিটি সেবা",
      description: "সমাজের বিভিন্ন স্তরে সেবামূলক কার্যক্রম পরিচালনা",
      features: ["যুব উন্নয়ন কর্মসূচি", "শিক্ষা সহায়তা", "দাতব্য কার্যক্রম"],
    },
    {
      icon: Mic,
      title: "বক্তৃতা ও সেমিনার",
      description: "নিয়মিত শিক্ষামূলক বক্তৃতা ও সেমিনারের আয়োজন",
      features: ["সাপ্তাহিক বয়ান", "মাসিক সেমিনার", "বিশেষ আলোচনা সভা"],
    },
    {
      icon: Video,
      title: "মিডিয়া প্রোডাকশন",
      description: "শিক্ষামূলক ভিডিও ও অডিও কন্টেন্ট তৈরি",
      features: ["ইউটিউব চ্যানেল", "পডকাস্ট", "ডকুমেন্টারি"],
    },
    {
      icon: Calendar,
      title: "ইভেন্ট ম্যানেজমেন্ট",
      description: "বিভিন্ন ধর্মীয় ও সামাজিক অনুষ্ঠানের আয়োজন",
      features: ["বার্ষিক সম্মেলন", "সাংস্কৃতিক অনুষ্ঠান", "প্রতিযোগিতা"],
    },
    {
      icon: Award,
      title: "পুরস্কার ও সম্মাননা",
      description: "মেধাবী শিক্ষার্থী ও সেবকদের পুরস্কৃত করা",
      features: ["বৃত্তি প্রদান", "সম্মাননা প্রদান", "প্রতিভা অনুসন্ধান"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">আমাদের কাজ</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            সমাজের কল্যাণে আমরা বিভিন্ন ক্ষেত্রে কাজ করে যাচ্ছি। শিক্ষা,
            সংস্কৃতি, সেবা - সব ক্ষেত্রেই আমাদের অবদান রয়েছে।
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-destructive transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              আমাদের প্রভাব
            </h2>
            <p className="text-xl text-gray-600">
              সমাজে আমাদের কাজের ইতিবাচক প্রভাব
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-destructive mb-2">
                ১০০+
              </div>
              <div className="text-gray-600">সফল প্রকল্প</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500 mb-2">৫০০০+</div>
              <div className="text-gray-600">উপকৃত মানুষ</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">৫০+</div>
              <div className="text-gray-600">স্বেচ্ছাসেবক</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500 mb-2">১০+</div>
              <div className="text-gray-600">বছরের অভিজ্ঞতা</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
