import React, { useEffect } from "react";
import "./leaflet.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import image from "./images/star-inside-circle.png";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import L from "leaflet";
import { Label } from "./components/ui/label";
import markerIcon2x from "./images/marker-icon-2x.png";
import markerIcon from "./images/marker-icon.png";
import markerShadow from "./images/marker-shadow.png";
function getIcon(_iconsize:number) {
  return new L.Icon({
    iconUrl: image,
    iconSize: [_iconsize, _iconsize],
  });
}
// function getPinIcon() {
//   return new L.Icon({
//     iconUrl: pinImage,
//     iconSize: [25, 39],
//   });
// }
type props = {
  currentUrl: string;
};
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});
const CheckToken = (props: props) => {
  if (!localStorage.getItem("token")) {
    return (
      <>
        <LoggedInScreen currentUrl={props.currentUrl}></LoggedInScreen>
      </>
    );
  } else {
    return <></>;
  }
};
type Rounds = {
  label: string;
  value: number;
  Latitude: number;
  Longitude: number;
};
type playerData = {
  name: string;
  Latitude: number;
  Longitude: number;
  Distance: number;
  Round: number;
  linkToPicture: string;
};

const LoggedInScreen = (props: props) => {
  let [rounds, setRounds] = React.useState<Rounds[]>([]);
  let [dataOfPlayers, setDataOfPlayers] = React.useState<playerData[]>([
    {
      name: "Chxrry-pie",
      Latitude: 30.123,
      Longitude: 20.123,
      Distance: 1000,
      Round: 1,
      linkToPicture:
        "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
    },
    {
      name: "Chxrrgway-pie",
      Latitude: 35.00800772454333,
      Longitude: 136.89523485781476,
      Distance: 1000,
      Round: 2,
      linkToPicture:
        "https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp",
    },
    {
      name: "Chxsrry-pie",
      Latitude: 30.123,
      Longitude: -20.123,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg",
    },
    {
      name: "Chjndpie",
      Latitude: 7.80280240174123,
      Longitude: 81.06769737977068,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=7.80280240174123,81.06769737977068",
    },
    {
      name: "Chxlrylpie",
      Latitude: 48.42520929247496,
      Longitude: 10.858823911443283,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=48.42520929247496,10.858823911443283",
    },
    {
      name: "Chx53dspie",
      Latitude: 46.781511601724624,
      Longitude: -66.45222128346495,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://firebasestorage.googleapis.com/v0/b/tpgstorage-836b1.firebasestorage.app/o/IMG_6552.JPG?alt=media&token=6b303c7b-ac0d-4864-9e77-e79dee16b01a",
    },
    {
      name: "Chxddt75",
      Latitude: -38.96318156972559,
      Longitude: 176.17471544553757,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=-38.96318156972559,176.17471544553757",
    },
    {
      name: "Chjkrtky-pie",
      Latitude: 32.34525316065081,
      Longitude: -105.67003922365096,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=32.34525316065081,-105.67003922365096",
    },
    {
      name: "Chxsee",
      Latitude: 80.123,
      Longitude: -20.123,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=80.123,-20.123",
    },
    {
      name: "Chxdhesj",
      Latitude: -30.53470958468928,
      Longitude: 142.29256763751394,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=-30.53470958468928,142.29256763751394",
    },
    {
      name: "jhr-pie",
      Latitude: 59.127851748693274,
      Longitude: 99.15066021629625,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=59.127851748693274,99.15066021629625",
    },
    {
      name: "Chxdssrrsy-srgs",
      Latitude: -0.7112485878347099,
      Longitude: 18.594497068880106,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=-0.7112485878347099,18.594497068880106",
    },
    {
      name: "haw-pie",
      Latitude: -10.930157898331279,
      Longitude: -49.996814256799034,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=-10.930157898331279,-49.996814256799034",
    },
    {
      name: "asf-pie",
      Latitude: -0.8617068924406669,
      Longitude: 107.86511432633816,
      Distance: 1000,
      Round: 3,
      linkToPicture:
        "https://www.google.com/maps/search/?api=1&query=-0.8617068924406669,107.86511432633816",
    },
  ]);
  useEffect(() => {
    fetch(props.currentUrl + "/images/rounds")
      .then((res) => res.json())
      .then((data) => {
        setRounds(data);
      });
  }, []);

  let [selectedRound, setSelectedRound] = React.useState<number>(0);
  let [selectedImage, setSelectedImage] = React.useState<string>(
    "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg",
  );
  const markerRefs = React.useRef<Record<string, L.Marker | null>>({});

  const openPopup = (id: string) => {
    markerRefs.current[id]?.openPopup();
  };
  return (
    <>
      <div className="flex gap-5">
        <div>
          <MapContainer
            center={[30, 20]}
            zoom={3}
            scrollWheelZoom={true}
            className="h-[90vh] w-[90vh]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
 
            {dataOfPlayers
              .filter(
                (player) => selectedRound && player.Round === selectedRound,
              )
              .map((marker) => (
                <Marker
                  key={marker.name}
                  position={[marker.Latitude, marker.Longitude]}
                  ref={(refs) => {
                    markerRefs.current[marker.name] = refs;
                  }}
                >
                  <Popup>
                    {marker.name}
                    <br></br>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${marker.Latitude},${marker.Longitude}`}
                      target="_blank"
                    >
                      {marker.Latitude.toFixed(5)},{marker.Longitude.toFixed(5)}
                    </a>
                  </Popup>
                </Marker>
              ))}
            {selectedRound > 0 && rounds[selectedRound - 1] && (
              <Marker
                position={[
                  rounds[selectedRound - 1].Latitude,
                  rounds[selectedRound - 1].Longitude,
                ]}
                icon={getIcon(30)}
              >
                <Popup>
                  Location
                  <br/>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${rounds[selectedRound - 1]?.Latitude},${rounds[selectedRound - 1]?.Longitude}`}
                    target="_blank"
                  >
                    {rounds[selectedRound - 1]?.Latitude.toFixed(5)},
                    {rounds[selectedRound - 1]?.Longitude.toFixed(5)}
                  </a>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div className="flex gap-4">
            <h2 className="font-bold text-2xl text-left">
              Asia Gaunlet Season 2 Tracker
            </h2>
          </div>
          <Label className="text-xl">Select Round</Label>
          <Combobox
            items={rounds}
            itemToStringValue={(round: Rounds) => round.label}
            onValueChange={(params) => {
              fetch(props.currentUrl + "/images?round=" + params?.value)
                .then((res) => res.json())
                .then((data) => {
                  // Handle the data for the selected round
                  setDataOfPlayers(data);
                  setSelectedRound(params?.value ?? 0);
                });
            }}
          >
            <ComboboxInput placeholder="Select a round" />
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(round) => (
                  <ComboboxItem key={round.value} value={round}>
                    {round.label}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <div className="mt-6 max-h-[250px] w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">#</TableHead>
                  <TableHead className="w-[100px]">Name</TableHead>
                  <TableHead>Latitude</TableHead>
                  <TableHead>Longitude</TableHead>
                  <TableHead className="text-right">Distance(km)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dataOfPlayers
                  .filter(
                    (player) => selectedRound && player.Round === selectedRound,
                  )
                  .map((player,index) => (
                    <TableRow
                      key={player.name}
                      onClick={() => {
                        openPopup(player.name);
                        setSelectedImage(player.linkToPicture);
                      }}
                    >
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{player.name}</TableCell>
                      <TableCell>{player.Latitude.toFixed(5)}</TableCell>
                      <TableCell>{player.Longitude.toFixed(5)}</TableCell>
                      <TableCell>{player.Distance}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-center max-h-50 w-full mt-5">
            <img src={selectedImage} alt="Asia Gauntlet Logo" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

const Dashboard = (props: props) => {
  return <CheckToken currentUrl={props.currentUrl}></CheckToken>;
};

export default Dashboard;
