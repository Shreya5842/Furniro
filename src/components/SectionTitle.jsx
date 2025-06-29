const SectionTitle = ({ heading, sub }) => (
  <header className="text-center max-w-xl mx-auto mb-14 px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-3">{heading}</h2>
    {sub && <p className="text-gray-500">{sub}</p>}
  </header>
);

export default SectionTitle;