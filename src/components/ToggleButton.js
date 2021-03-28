import React from "react";
import { Switch, View } from "react-native";
import { COLORS } from "../constants";

const ToggleButton = ({ style }) => {
  const [active, setActive] = React.useState(false);

  return (
    <View
      style={{
        backgroundColor: active ? COLORS.success100 : COLORS.primary100,
        borderRadius: 16,
        width: 60,
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
    >
      <Switch
        value={active}
        trackColor={{ true: COLORS.success100, false: COLORS.primary100 }}
        thumbColor={active ? COLORS.success : COLORS.primary400}
        onValueChange={() => setActive((active) => !active)}
      />
    </View>
  );
};

export default ToggleButton;
