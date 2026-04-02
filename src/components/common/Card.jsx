export default function Card({ title, children, className = "", icon: Icon }) {
  return (
    <div className={`bg-white rounded-3xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 ${className}`}>
      {title && (
        <div className="flex items-center gap-3 mb-6">
          {Icon && (
            <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
              <Icon size={20} />
            </div>
          )}
          <h2 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
}
