interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black flex items-center justify-center">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {badge && (
          <div className="mb-6">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-widest bg-cyan-400/10 border border-cyan-400/20 rounded-full px-4 py-1.5 inline-block">
              {badge}
            </span>
          </div>
        )}
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          {title}
        </h1>
        
        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      
      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
