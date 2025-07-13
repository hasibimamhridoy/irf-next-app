import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-400 via-red-500 to-red-600 text-white py-20">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            যে কমুন হারিয়ে
            <br />
            যাবার নয়
          </h1>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-red-600 hover:bg-gray-100">যোগাযোগ করুন</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              আমাদের সম্পর্কে জানুন
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-20 opacity-30">
          <div className="w-32 h-20 bg-yellow-300 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-10 opacity-40">
          <svg width="100" height="60" viewBox="0 0 100 60" className="fill-black">
            <path
              d="M20 40 L30 30 L40 35 L50 25 L60 30 L70 20 L80 25"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
