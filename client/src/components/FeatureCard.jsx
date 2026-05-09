const FeatureCard = ({
  icon,
  title,
  desc,
}) => {

  return (
    <div className="bg-zinc-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300">

      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h2 className="text-2xl font-bold text-white mb-3">
        {title}
      </h2>

      <p className="text-zinc-400">
        {desc}
      </p>

    </div>
  );
};

export default FeatureCard;