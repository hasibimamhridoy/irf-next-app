import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Download, Headphones, Video } from "lucide-react";

export default function LibraryPage() {
  const resources = [
    {
      type: "বই",
      icon: BookOpen,
      title: "ইসলামী শিক্ষা ও আধুনিক জীবন",
      description: "আধুনিক যুগে ইসলামী শিক্ষার প্রয়োগ নিয়ে বিস্তারিত আলোচনা",
      format: "PDF",
      size: "২.৫ MB",
    },
    {
      type: "ভিডিও",
      icon: Video,
      title: "যুব সমাজের দায়িত্ব",
      description: "ইসলামে যুব সমাজের ভূমিকা ও দায়িত্ব নিয়ে বক্তব্য",
      format: "MP4",
      size: "১২৫ MB",
    },
    {
      type: "অডিও",
      icon: Headphones,
      title: "কুরআন তিলাওয়াত",
      description: "বিশুদ্ধ উচ্চারণে কুরআন তিলাওয়াতের অডিও সংকলন",
      format: "MP3",
      size: "৪৫ MB",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      <section className="py-20 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">লাইব্রেরি ও মাল্টিমিডিয়া</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            বই, ভিডিও, অডিও - সব ধরনের শিক্ষামূলক উপকরণ এক জায়গায়।
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <resource.icon className="w-8 h-8 text-destructive" />
                    <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{resource.format}</span>
                    <span>{resource.size}</span>
                  </div>
                  <Button className="w-full bg-destructive">
                    <Download className="w-4 h-4 mr-2" />
                    ডাউনলোড করুন
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
