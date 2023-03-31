import "./App.css";
import Image from "./components/Question-01";
import Cartoons from "./components/Question-02";
import CartoonsWithEvenMagnitude from "./components/Question-03";
import CartoonsWithIntelligence from "./components/Question-04";
import Vegetables from "./components/Question-05";
import Bouquet from "./components/Question-06";
import Car from "./components/Question-09";
import Certificate from "./components/Question-10";
import { bouquet } from "./utils/bouquet";
import { DonationData } from "./utils/donationData";
import Donation from "./components/Question-08";
import BouquetCard from "./components/Question-07";
function App() {
  return (
    <>
      {/* <Image link=" https://picsum.photos/200" width={300} height={300} /> */}
      {/* <Cartoons /> */}
      {/* <CartoonsWithEvenMagnitude /> */}
      {/* <CartoonsWithIntelligence superpower="Intelligence" /> */}
      {/* <Vegetables/> */}
      {/* <Bouquet bouquets={bouquet} /> */}
      <BouquetCard />
      {/* <Donation DonationData={DonationData} /> */}
      {/* <Car /> */}
      {/* <Certificate /> */}
    </>
  );
}

export default App;
