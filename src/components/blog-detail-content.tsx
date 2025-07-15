import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";
import { Calendar, Tag, User } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import BackButton from "./back-button";
import { Badge } from "./ui/badge";

interface BlogDetailContentProps {
  post: BlogPost;
}

export function BlogDetailContent({ post }: BlogDetailContentProps) {
  return (
    <article className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <BackButton />

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author and Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-y border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-destructive rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Author</div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(post.createdAt)}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-6 ">
          <div className="h-80 w-full aspect-video relative rounded-2xl overflow-hidden shadow">
            <Image
              src={
                `${process.env.NEXT_PUBLIC_BASE}${post?.thumbnail?.url}` ||
                "/placeholder.svg"
              }
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <Card className="border-0 shadow-lg mb-6">
          <CardContent className="">
            <div className="prose prose-gray max-w-none dark:prose-invert">
              <ReactMarkdown
                components={{
                  // Custom styling for different markdown elements
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-bold mt-8 mb-4 text-foreground">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold mt-6 mb-3 text-foreground">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-medium mt-4 mb-2 text-foreground">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 leading-relaxed text-foreground">
                      {children}
                    </p>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-foreground">
                      {children}
                    </strong>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-outside space-y-2 mb-6 ml-6">
                      {children}
                    </ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-outside space-y-2 mb-6 ml-6">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-foreground leading-relaxed pl-1">
                      {children}
                    </li>
                  ),
                  hr: () => <hr className="my-8 border-border" />,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-muted px-1 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                      {children}
                    </pre>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Category */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Tag className="w-5 h-5 mr-2 text-destructive" />
            ক্যাটাগরি সমূহ
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.categories.map((cat) => (
              <Badge
                key={cat.documentId}
                variant="outline"
                className="hover:bg-orange-50 hover:border-orange-300"
              >
                {cat.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        {/* <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 to-red-50">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.author}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  একজন অভিজ্ঞ লেখক যিনি ইসলামী বিষয়াদি নিয়ে নিয়মিত লেখালেখি
                  করেন। তার লেখায় রয়েছে গভীর জ্ঞান ও বাস্তব অভিজ্ঞতার সমন্বয়।
                </p>
                <div className="mt-4">
                  <Button variant="outline" size="sm">
                    আরও লেখা দেখুন
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </article>
  );
}
