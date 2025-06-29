import SectionTitle from './SectionTitle';
import s1 from '../assets/share-1.png';
import s2 from '../assets/share-2.png';
import s3 from '../assets/share-3.png';
import s4 from '../assets/share-4.png';
import s5 from '../assets/share-5.png';

const SetupShare = () => (
  <section className="py-24">
    <SectionTitle heading="Share your setup with" sub="#FurniroFurniture" />

    <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-4 px-4">
      {[s1, s2, s3, s4, s5].map(src => (
        <img
          key={src}
          src={src}
          alt="setup"
          className="mb-4 rounded-lg hover:scale-105 transition duration-300"
        />
      ))}
    </div>
  </section>
);

export default SetupShare;