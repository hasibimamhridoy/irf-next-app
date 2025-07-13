"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const BackButton = () => {
  const router = useRouter();
  return (
    <div className="mb-8">
      <Button
        onClick={() => {
          router.back();
        }}
        variant="outline"
        className="group bg-transparent"
      >
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        ব্লগে ফিরে যান
      </Button>
    </div>
  );
};

export default BackButton;
