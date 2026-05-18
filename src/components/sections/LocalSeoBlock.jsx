import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Truck } from 'lucide-react';

const LocalSeoBlock = () => {
  return (
    <section className="bg-[#f7f2df] px-4 py-12 text-black">
      <div className="container mx-auto max-w-5xl">
        <div className="border-4 border-black bg-white p-6">
          <p className="mb-3 inline-flex items-center gap-2 bg-black px-3 py-1 text-sm font-black uppercase text-[#FFC107]">
            <MapPin className="h-4 w-4" />
            Local Junk Removal
          </p>
          <h2 className="mb-4 text-3xl font-black sm:text-4xl">
            Kenmore and Bothell junk removal
          </h2>
          <p className="max-w-3xl text-lg font-semibold leading-relaxed">
            Based in Kenmore and hauling all over nearby Bothell. Garage junk,
            furniture, yard waste, appliances, move-out piles, and random stuff
            that needs to be gone.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="border-2 border-black bg-[#f7f2df] p-4">
              <h3 className="mb-2 text-xl font-black">Kenmore, WA</h3>
              <p className="mb-3 font-semibold">
                98028, Inglewood, Moorlands, Arrowhead, downtown Kenmore, and
                the Lake Washington side.
              </p>
              <Link className="font-black text-black underline" to="/junk-removal-kenmore">
                Kenmore junk removal
              </Link>
            </div>

            <div className="border-2 border-black bg-[#f7f2df] p-4">
              <h3 className="mb-2 text-xl font-black">Bothell, WA</h3>
              <p className="mb-3 font-semibold">
                98011, 98012, 98021, Canyon Park, North Creek, Bothell Landing,
                Westhill, and Norway Hill.
              </p>
              <Link className="font-black text-black underline" to="/junk-removal-bothell">
                Bothell junk removal
              </Link>
            </div>

            <div className="border-2 border-black bg-[#f7f2df] p-4">
              <h3 className="mb-2 flex items-center gap-2 text-xl font-black">
                <Truck className="h-5 w-5" />
                Big box truck
              </h3>
              <p className="font-semibold">
                More room than a pickup, fewer trips on bigger piles, and a
                price based on truck space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSeoBlock;
