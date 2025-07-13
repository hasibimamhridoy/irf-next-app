import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Clock, Users } from "lucide-react";

export default function TrainingPage() {
  const courses = [
    {
      title: "ইসলামী শিক্ষা কোর্স",
      duration: "৩ মাস",
      level: "প্রাথমিক",
      students: "২৫ জন",
      description: "ইসলামের মৌলিক বিষয়াদি নিয়ে বিস্তারিত আলোচনা ও প্রশিক্ষণ",
      topics: [
        "কুরআন অধ্যয়ন",
        "হাদিস পরিচিতি",
        "ইসলামী ইতিহাস",
        "আকিদা ও বিশ্বাস",
      ],
    },
    {
      title: "যুব নেতৃত্ব প্রশিক্ষণ",
      duration: "২ মাস",
      level: "মধ্যম",
      students: "২০ জন",
      description: "যুব সমাজের নেতৃত্ব বিকাশ ও দক্ষতা উন্নয়নের প্রশিক্ষণ",
      topics: [
        "নেতৃত্বের গুণাবলি",
        "যোগাযোগ দক্ষতা",
        "টিম ওয়ার্ক",
        "সমস্যা সমাধান",
      ],
    },
    {
      title: "দাওয়াহ ও তাবলিগ",
      duration: "৪ মাস",
      level: "উন্নত",
      students: "১৫ জন",
      description: "ইসলামী দাওয়াতের পদ্ধতি ও কৌশল নিয়ে বিশেষ প্রশিক্ষণ",
      topics: [
        "দাওয়াতের পদ্ধতি",
        "বক্তৃতা দক্ষতা",
        "লেখালেখি",
        "মিডিয়া ব্যবহার",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <Header />

      <section className="py-20 bg-destructive text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">প্রশিক্ষণ কোর্স</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            ইসলামী শিক্ষা ও দক্ষতা উন্নয়নের জন্য আমাদের বিশেষ প্রশিক্ষণ কোর্সে
            অংশগ্রহণ করুন।
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="outline"
                      className="border-destructive text-destructive"
                    >
                      {course.level}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-1" />
                      {course.topics.length} বিষয়
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">কোর্সের বিষয়সমূহ:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.topics.map((topic, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-destructive">
                    <Award className="w-4 h-4 mr-2" />
                    ভর্তি হন≈
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
