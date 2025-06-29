import SectionTitle from './SectionTitle';
import img1 from '../assets/browse-1.png';
import img2 from '../assets/browse-2.png';
import img3 from '../assets/browse-3.png';

const CARD_CLASS =
  'rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300';

const BrowseRange = () => (
  <section className="py-24">
    <SectionTitle
      heading="Browse The Range"
      sub="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    />

    <div className="max-w-6xl mx-auto grid gap-8 px-4 sm:grid-cols-2 md:grid-cols-3">
      {[
        { img: img1, label: 'Dining'   },
        { img: img2, label: 'Living'   },
        { img: img3, label: 'Bedroom'  },
      ].map(({ img, label }) => (
        <div key={label} className={CARD_CLASS}>
          <img src={img} alt={label} className="w-full h-72 object-cover" />
          <p className="text-center py-4 font-medium">{label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BrowseRange;