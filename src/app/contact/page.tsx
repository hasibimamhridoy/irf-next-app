import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "যোগাযোগ | আই আর এফ",
  description:
    "আই আর এফ একটি ইসলামী ব্লগ সাইট ও তরুণ-তরুণীদের জন্য প্রকাশিত হয়। আমাদের লক্ষ্য হলো নতুন প্রজন্মকে ইসলামী মূল্যবোধে দীক্ষিত করে সমাজের দায়িত্বশীল সদস্য হিসেবে গড়ে তোলা।",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_CLIENT_BASE || "https://irf.org"
  ),
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">যোগাযোগ</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            আমাদের সাথে যোগাযোগ করুন। আপনার মতামত, পরামর্শ বা যেকোনো প্রশ্নের
            জন্য আমরা সর্বদা প্রস্তুত।
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">আমাদের লিখুন</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        নাম
                      </label>
                      <Input placeholder="আপনার নাম লিখুন" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        ইমেইল
                      </label>
                      <Input type="email" placeholder="আপনার ইমেইল লিখুন" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      বিষয়
                    </label>
                    <Input placeholder="বার্তার বিষয় লিখুন" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      বার্তা
                    </label>
                    <Textarea placeholder="আপনার বার্তা লিখুন" rows={6} />
                  </div>
                  <Button className="w-full bg-destructive">
                    বার্তা পাঠান
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">যোগাযোগের তথ্য</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">ঠিকানা</h4>
                        <p className="text-gray-600">ঢাকা, বাংলাদেশ</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">ফোন</h4>
                        <p className="text-gray-600">+৮৮০ ১৭১২-৩৪৫৬৭৮</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">ইমেইল</h4>
                        <p className="text-gray-600">info@sholo.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">কার্যসময়</h4>
                        <p className="text-gray-600">
                          রবি - বৃহস্পতি: ৯:০০ - ১৭:০০
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
