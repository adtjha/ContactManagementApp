import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

export const QueryTwo = () => {
  const { isLoading, error, data } = useQuery("covid-countries", () =>
    fetch("https://disease.sh/v3/covid-19/countries").then((res) => res.json())
  );

  return isLoading ? (
    <>Loading...</>
  ) : error ? (
    <>Error: {JSON.stringify(error, null, 2)}</>
  ) : (
    <Map data={data} />
  );
};

const Map = ({ data }: any) => {
  console.log({ data });

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconSize: [24, 24],
  });

  return (
    <div className='h-96 w-full'>
      <MapContainer center={[51.505, -0.09]} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {data.map((obj: any) => (
          <Marker
            key={obj.countryInfo._id}
            position={[obj.countryInfo.lat, obj.countryInfo.long]}
            icon={customIcon}>
            <Popup>
              <div>
                <h2>{obj.country}</h2>
                <p>
                  <span className='font-bold'>Cases</span>: {obj.cases}
                </p>
                <p>
                  <span className='font-bold'>Deaths</span>: {obj.deaths}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
