"use client"; // This is a client component 👈🏽
import { GOOGLE_API_KEY } from "@/config/env";
import { useAppContext } from "../context/appContext";

export default function page() {
  const { fetchData } = useAppContext();

  return (
    <div>
      <h1 className="font-bold text-xl mb-5">all restaurant data</h1>
      <ul className="ml-4">
        {fetchData.length > 0 ? (
          fetchData?.map((el, idx) => {
            return (
              <div key={idx}>
                <strong>Photo:</strong>{" "}
                <img
                  src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${el.photos?.[0].photo_reference}&key=${GOOGLE_API_KEY}`}
                  alt="Restaurant Photo"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: el.photos?.[0]?.html_attributions[0],
                  }}
                />
                <li>
                  <strong>Name:</strong> {el.name}
                </li>
                <li>
                  <strong>Address:</strong> {el.formatted_address}
                </li>
                <li className="border-b-[1px]">
                  <strong>Rating:</strong> {el.rating}
                </li>
              </div>
            );
          })
        ) : (
          <li>No restaurant data available</li>
        )}
      </ul>
    </div>
  );
}
