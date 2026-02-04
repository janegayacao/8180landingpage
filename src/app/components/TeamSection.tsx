import { motion } from "motion/react";
import LogoArrowBlue from "@/imports/LogoArrowBlue1";

export function TeamSection() {
  const team = [
    {
      name: 'Arvin Maya',
      role: 'Managing Director',
      bio: '12 years crafting brand identities for Fortune 500s and disruptive startups. Ex-Pentagram.',
      expertise: ['Brand Strategy', 'Art Direction', 'Systems Design'],
    },
    {
      name: 'DJ Delos Santos',
      role: 'Managing Director',
      bio: 'Former Google designer specializing in human-centered digital experiences that scale.',
      expertise: ['UX Research', 'Product Design', 'Prototyping'],
    },
    {
      name: 'Jane Acosta',
      role: 'Managing Director',
      bio: 'Award-winning motion designer bringing brands to life through kinetic storytelling.',
      expertise: ['Motion Graphics', 'Animation', '3D Design'],
    },
    {
      name: 'Jessie Dimaculangan',
      role: 'Managing Director',
      bio: 'Strategic design leader with expertise in transforming complex challenges into elegant solutions.',
      expertise: ['Design Systems', 'Product Strategy', 'Innovation'],
    },
  ];

  return (
    <section className="px-6 py-8 max-w-[1600px] mx-auto">
      {/* Section Header */}
      <div className="max-w-full mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Brand Arrow Accent */}
          <p className="text-sm tracking-wider uppercase text-[#00AAFF] mb-4">The Humans Behind 8180</p>
          <div className="w-5 h-7 mb-0">
            <LogoArrowBlue />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">
            A Collective of Obsessive Designers
          </h2>
          <p className="text-lg md:text-xl text-[rgb(255,255,255)] leading-relaxed">
            We're not your typical agency. We're a tight-knit studio of senior designers who've worked at the world's most demanding companies—and chose independence to do our best work.
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            className="relative group"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
          >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00AAFF]/20 to-[#0062FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
            
            <div className="h-full border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#00AAFF]/60 hover:shadow-[0_8px_32px_rgba(0,170,255,0.2),0_16px_64px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group-hover:scale-[1.01] group-hover:translate-y-[-2px] flex flex-col">
              
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-[#00AAFF] via-[#0088FF] to-[#00AAFF] animate-gradient bg-[length:200%_auto] opacity-20 blur-sm" />
              </div>

              {/* Photo placeholder */}
              <div className="aspect-[4/5] bg-[#353535] relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a1a]" />
                
                {/* Name overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 relative z-10">
                  <div
                    className="text-2xl md:text-3xl mb-1 tracking-tight"
                    style={{ fontFamily: 'Agdasima, sans-serif' }}
                  >
                    {member.name}
                  </div>
                  <div
                    className="text-sm md:text-base text-[#00AAFF] tracking-wide"
                    style={{ fontFamily: 'Agdasima, sans-serif' }}
                  >
                    {member.role}
                  </div>
                </div>

                {/* Geometric pattern overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <svg className="w-full h-full" xmlns="https://www.w3.org/2000/svg">
                    <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#00AAFF" strokeWidth="0.5"/>
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4 flex-1 relative z-10">
                <p
                  className="text-sm md:text-base text-gray-200 leading-relaxed"
                  style={{ fontFamily: 'Open-Sauce-Sans, sans-serif' }}
                >
                  {member.bio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 border border-white/20 bg-black/30 text-white/70 group-hover:border-[#00AAFF] group-hover:text-[#00AAFF] transition-all duration-300"
                      style={{ fontFamily: 'Agdasima, sans-serif' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}