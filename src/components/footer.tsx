import Link from "next/link";
import Logo from "./logo";

export function Footer() {
  const navItems = [
    { href: "/about", label: "আমাদের কথা" },
    { href: "/our-work", label: "আমাদের কাজ" },
    { href: "/blog", label: "ব্লগ" },
    { href: "/library", label: "লাইব্রেরি ও মাল্টিমিডিয়া" },
    { href: "/schedule", label: "শিডিউল ট্রেইনিং" },
    { href: "/consultancy", label: "কনসালটেন্সি" },
  ];
  return (
    <footer className="bg-gray-50 border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <Logo></Logo>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              আই আর এফ হলো কিশোর-কিশোরী, তরুণ-তরুণীদের জন্য ব্লগ সাইট:
              কিশোর-কিশোরী ও তরুণ-তরুণীদের ইসলামী মূল্যবোধে দীক্ষিত করে সমাজের
              দায়িত্বশীল সদস্য হিসেবে গড়ে তোলা।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">দ্রুত-লিংকসমূহ</h3>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-destructive transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">যোগাযোগ-ঠিকানা</h3>
            <p className="text-gray-600 text-sm">ঠিকানা ঢাকা, বাংলাদেশ</p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
          © IRF. All rights reserved. 2021-present.
        </div>
      </div>
    </footer>
  );
}
