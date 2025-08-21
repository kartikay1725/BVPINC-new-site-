import { Mail, Phone, Linkedin, Instagram, Github } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* President */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">President</h3>
            <h4 className="text-lg font-semibold text-violet-300 mb-3">Alex Johnson</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>president@bvpinc.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex gap-3 mt-4">
                <Linkedin className="w-5 h-5 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Vice President */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Vice President</h3>
            <h4 className="text-lg font-semibold text-violet-300 mb-3">Sarah Chen</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>vp@bvpinc.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 234-5678</span>
              </div>
              <div className="flex gap-3 mt-4">
                <Linkedin className="w-5 h-5 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Mentor */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Industry Mentor</h3>
            <h4 className="text-lg font-semibold text-violet-300 mb-3">Dr. Michael Rodriguez</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>mentor@bvpinc.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 345-6789</span>
              </div>
              <div className="flex gap-3 mt-4">
                <Linkedin className="w-5 h-5 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-pink-400 hover:text-pink-300 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Site Developers */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-2">Site Developers</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-violet-300 mb-2">Emma Wilson</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>emma@bvpinc.org</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Github className="w-4 h-4 text-gray-400 hover:text-gray-300 cursor-pointer transition-colors" />
                    <Linkedin className="w-4 h-4 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-violet-300 mb-2">David Kim</h4>
                <div className="space-y-1 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>david@bvpinc.org</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Github className="w-4 h-4 text-gray-400 hover:text-gray-300 cursor-pointer transition-colors" />
                    <Linkedin className="w-4 h-4 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">BVPINC</h3>
              <p className="text-gray-300">Guiding the way to dream placements and financial success</p>
            </div>
            <div className="text-center md:text-right text-sm text-gray-400">
              <p>&copy; 2024 BVPINC. All rights reserved.</p>
              <p className="mt-1">Built with passion for student success</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
