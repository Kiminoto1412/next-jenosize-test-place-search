"use client"; // This is a client component 👈🏽
import { GOOGLE_API_KEY } from "@/config/env";
import { useAppContext } from "../context/appContext";

export default function page() {
  const { fetchData } = useAppContext();

  return (
    <div>
      <h1 className="font-bold text-xl ">
        <div className="mb-5">Place search page</div>
      </h1>
      <div className="mx-4 ">
        {fetchData.length > 0 ? (
          fetchData?.map((el, idx) => {
            return (
              <div key={idx} className="grid grid-cols-4 gap-3 mb-3">
                <div className="col-span-1">
                  <img
                    src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${el.photos?.[0].photo_reference}&key=${GOOGLE_API_KEY}`}
                    alt="Restaurant Photo"
                    className="object-fill sm:w-full"
                  />
                </div>
                <div className="col-span-3">
                  <div>
                    <strong>Name:</strong> {el.name}
                  </div>
                  <div>
                    <strong>Address:</strong> {el.formatted_address}
                  </div>
                  <div>
                    <strong>Rating:</strong> {el.rating}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-6xl">No restaurant data available</div>
        )}
      </div>
    </div>
  );
}
