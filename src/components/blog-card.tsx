import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog-data";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.id}`}>
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-0 shadow-lg bg-white cursor-pointer h-full">
        {/* Image Section */}
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Category Badge */}
          <Badge className="absolute top-4 left-4 bg-destructive text-white shadow-lg">
            {post.category}
          </Badge>

          {/* Read Time */}
          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {post.readTime}
          </div>
        </div>

        {/* Content Section */}
        <CardContent className="p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-1">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <User className="w-3 h-3 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Read More Indicator */}
            <div className="flex items-center text-destructive group-hover:text-destructive transition-colors font-medium">
              <span className="text-xs">বিস্তারিত →</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
