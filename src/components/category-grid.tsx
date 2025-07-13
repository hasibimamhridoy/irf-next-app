import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Globe, Heart, Lightbulb, Users } from "lucide-react";

export function CategoryGrid() {
  const categories = [
    {
      icon: BookOpen,
      title: "শিক্ষা",
      count: "৪৫টি নিবন্ধ",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Users,
      title: "সমাজ",
      count: "৩২টি নিবন্ধ",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Heart,
      title: "পারিবারিক জীবন",
      count: "২৮টি নিবন্ধ",
      color: "from-pink-400 to-pink-600",
    },
    {
      icon: Award,
      title: "চরিত্র গঠন",
      count: "৩৮টি নিবন্ধ",
      color: "from-purple-400 to-purple-600",
    },
    {
      icon: Globe,
      title: "বিশ্ব পরিস্থিতি",
      count: "২২টি নিবন্ধ",
      color: "from-indigo-400 to-indigo-600",
    },
    {
      icon: Lightbulb,
      title: "উদ্ভাবনী চিন্তা",
      count: "১৮টি নিবন্ধ",
      color: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            বিষয়ভিত্তিক লেখা
          </h2>
          <p className="text-xl text-gray-600">
            আপনার পছন্দের বিষয়ে লেখা খুঁজে নিন
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-destructive transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-500 text-sm">{category.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
