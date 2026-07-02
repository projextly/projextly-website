interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 mx-4 mt-4 overflow-hidden section-dark flex items-center justify-center">
      {/* Grain overlay */}
      <div className="grain-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {badge && (
          <div className="mb-6 animate-fade-in-up">
            <span className="text-[#34D399] font-semibold text-[10px] uppercase tracking-[0.2em] bg-white/5 border border-[#34D399]/20 backdrop-blur-md rounded-full px-4 py-1.5 inline-block">
              {badge}
            </span>
          </div>
        )}
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          {title}
        </h1>
        
        <p className="text-zinc-500 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
