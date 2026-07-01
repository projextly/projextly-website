interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gray-50 flex items-center justify-center border-b border-gray-200">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {badge && (
          <div className="mb-6">
            <span className="text-teal-700 font-semibold text-sm uppercase tracking-widest bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 inline-block">
              {badge}
            </span>
          </div>
        )}
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
          {title}
        </h1>
        
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
