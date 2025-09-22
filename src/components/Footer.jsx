export default function Footer() {
  return (
    <footer className="inter w-full sm:w-full bg-black text-white px-6 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact</h2>
          <p className="text-sm mb-1">Quezon City, Metro Manila</p>
          <p className="text-sm mb-1">Email: <a className="text-gray-500 hover:underline">ecubin.jerome40@gmail.com</a></p>
          <p className="text-sm">Phone: <span className="text-gray-500">+63 905 566 9802</span></p>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Me</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/syntaxsin" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">GitHub</a>
            <a href="https://www.linkedin.com/in/marc-jerome-ecubin-623503337/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">LinkedIn</a>
            <a href="https://www.facebook.com/ecubinn16" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Facebook</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-8 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} willow.dev — All rights reserved.
      </div>
    </footer>

  );
}
