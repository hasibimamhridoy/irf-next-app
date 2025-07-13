import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Eye, Heart } from "lucide-react"

export function FeaturedSection() {
  const featuredPosts = [
    {
      id: 1,
      title: "আধুনিক যুগে ইসলামী শিক্ষার গুরুত্ব",
      excerpt: "বর্তমান সময়ে ইসলামী শিক্ষা কীভাবে আমাদের জীবনে প্রভাব ফেলতে পারে তার বিস্তারিত আলোচনা।",
      image: "/placeholder.svg?height=300&width=400",
      category: "শিক্ষা",
      readTime: "৫ মিনিট",
      views: "১২৫",
      likes: "২৩",
    },
    {
      id: 2,
      title: "যুব সমাজের চ্যালেঞ্জ ও সমাধান",
      excerpt: "আজকের যুব সমাজ যে সমস্যার মুখোমুখি হচ্ছে এবং এর ইসলামী সমাধান নিয়ে আলোচনা।",
      image: "/placeholder.svg?height=300&width=400",
      category: "সমাজ",
      readTime: "৭ মিনিট",
      views: "২০৮",
      likes: "৪৫",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">বিশেষ নিবন্ধ</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">আজকের বিশেষ লেখা</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">আমাদের সেরা লেখকদের কাছ থেকে বিশেষভাবে নির্বাচিত নিবন্ধসমূহ</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg"
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                  <span className="text-6xl opacity-20">📚</span>
                </div>
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">{post.category}</Badge>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
