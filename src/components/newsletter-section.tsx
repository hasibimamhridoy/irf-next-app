import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export function NewsletterSection() {
  return (
    <section className="py-20 bg-destructive">
      <div className="container mx-auto px-4">
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            <Mail className="w-16 h-16 text-destructive mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              নিয়মিত আপডেট পান
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              আমাদের নতুন লেখা ও কার্যক্রমের খবর সরাসরি আপনার ইমেইলে পেতে
              সাবস্ক্রাইব করুন
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="আপনার ইমেইল ঠিকানা"
                className="flex-1 h-12 text-lg"
              />
              <Button size="lg" className="bg-destructive h-12 px-8">
                সাবস্ক্রাইব
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              আমরা আপনার গোপনীয়তার প্রতি সম্মান প্রদর্শন করি। যেকোনো সময়
              আনসাবস্ক্রাইব করতে পারবেন।
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
