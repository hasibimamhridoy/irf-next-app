import { Award, BookOpen, Globe, Users } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "৫০০+",
      label: "সক্রিয় পাঠক",
      description: "প্রতিদিন আমাদের সাথে যুক্ত",
    },
    {
      icon: BookOpen,
      number: "২০০+",
      label: "প্রকাশিত নিবন্ধ",
      description: "বিভিন্ন বিষয়ে গুণগত লেখা",
    },
    {
      icon: Award,
      number: "৫০+",
      label: "দক্ষ লেখক",
      description: "অভিজ্ঞ ও জ্ঞানী লেখকমণ্ডলী",
    },
    {
      icon: Globe,
      number: "১০+",
      label: "দেশ থেকে পাঠক",
      description: "বিশ্বব্যাপী বাংলা ভাষী সমাজ",
    },
  ];

  return (
    <section className="py-20 bg-destructive text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">আমাদের অর্জন</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            গত কয়েক বছরে আমাদের যাত্রায় অর্জিত সাফল্যের পরিসংখ্যান
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <stat.icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
