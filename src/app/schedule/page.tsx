import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "শিডিউল ট্রেইনিং | আই আর এফ",
  description:
    "আই আর এফ একটি ইসলামী ব্লগ সাইট ও তরুণ-তরুণীদের জন্য প্রকাশিত হয়। আমাদের লক্ষ্য হলো নতুন প্রজন্মকে ইসলামী মূল্যবোধে দীক্ষিত করে সমাজের দায়িত্বশীল সদস্য হিসেবে গড়ে তোলা।",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_CLIENT_BASE || "https://irf.org"
  ),
};

export default function SchedulePage() {
  const events = [
    {
      title: "সাপ্তাহিক আলোচনা সভা",
      date: "প্রতি শুক্রবার",
      time: "মাগরিবের পর",
      location: "মূল কার্যালয়",
      type: "নিয়মিত",
      description: "সাপ্তাহিক ইসলামী আলোচনা ও প্রশ্নোত্তর সেশন",
    },
    {
      title: "মাসিক সেমিনার",
      date: "প্রতি মাসের প্রথম শনিবার",
      time: "সকাল ১০:০০",
      location: "সেমিনার হল",
      type: "মাসিক",
      description: "বিশেষ বিষয়ে বিস্তারিত আলোচনা ও গবেষণা উপস্থাপনা",
    },
    {
      title: "বার্ষিক সম্মেলন ২০২৫",
      date: "১৫ ডিসেম্বর ২০২৫",
      time: "সকাল ৯:০০",
      location: "জাতীয় প্রেসক্লাব",
      type: "বিশেষ",
      description: "বার্ষিক সাধারণ সভা ও পুরস্কার বিতরণী অনুষ্ঠান",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      <section className="py-20 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">কার্যক্রমের সময়সূচি</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            আমাদের আসন্ন কার্যক্রম ও অনুষ্ঠানের তালিকা। সময়মতো যোগ দিন।
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {events.map((event, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{event.title}</h3>
                        <Badge
                          variant={
                            event.type === "বিশেষ" ? "default" : "secondary"
                          }
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                    </div>
                  </div>
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
