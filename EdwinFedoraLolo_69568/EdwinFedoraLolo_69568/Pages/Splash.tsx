// import { View, Text } from "react-native";
// import React from "react";
// import GmailLogo from "../assets/Gmail_Icon.png";

// const Splash = () => {
//   return (
//     <View>
//       <Text>Splash</Text>
//     </View>
//   );
// };

import React from "react";
import GmailIcon from "../assets/Gmail_Icon.png";

const Splash: React.FC = () => {
  return (
    <div>
      <img src={GmailIcon} alt="Gmail Icon" />
    </div>
  );
};

export default Splash;
