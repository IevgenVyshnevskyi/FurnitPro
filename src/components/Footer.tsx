import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-10">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Про компанію */}
        <div>
          <h2 className="text-lg font-semibold text-white">About Us</h2>
          <p className="mt-2 text-sm">
            MySite is dedicated to delivering high-quality services with focus
            on user experience, accessibility and performance.
          </p>
        </div>

        {/* Швидкі посилання */}
        <div>
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>

        {/* Контакти */}
        <div>
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <ul className="mt-2 space-y-2">
            <li>Email: support@mysite.com</li>
            <li>Phone: +123 456 7890</li>
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:underline"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Нижня лінія */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
}
