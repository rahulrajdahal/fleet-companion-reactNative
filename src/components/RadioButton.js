import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, FONTS } from "../constants";
import { Check } from "../constants/icons";

const RadioButton = () => {
  const [selected, setSelected] = React.useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          color: COLORS.primary,
          ...FONTS.body3,
          fontWeight: "600",
          fontFamily: "Manrope",
        }}
      >
        Party at Fault?
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {!selected ? (
          <TouchableOpacity
            onPress={() => setSelected((selected) => !selected)}
            style={{
              width: 20,
              height: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.success,
              borderRadius: 8,
              marginRight: 8,
            }}
          >
            <Check />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setSelected((selected) => !selected)}
            style={{
              width: 20,
              height: 20,
              borderWidth: 1.5,
              borderRadius: 8,
              borderColor: COLORS.success,
              marginRight: 8,
            }}
          />
        )}

        <Text
          style={{
            color: COLORS.text900,
            ...FONTS.body3,
            fontWeight: "normal",
            fontFamily: "Manrope",
          }}
        >
          Self
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {selected ? (
          <TouchableOpacity
            onPress={() => setSelected((selected) => !selected)}
            style={{
              width: 20,
              height: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.success,
              borderRadius: 8,
              marginRight: 8,
            }}
          >
            <Check />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => setSelected((selected) => !selected)}
            style={{
              width: 20,
              height: 20,
              borderWidth: 1.5,
              borderRadius: 8,
              borderColor: COLORS.success,
              marginRight: 8,
            }}
          />
        )}
        <Text
          style={{
            color: COLORS.text900,
            ...FONTS.body3,
            fontWeight: "normal",
            fontFamily: "Manrope",
          }}
        >
          Other Party
        </Text>
      </View>
    </View>
  );
};

export default RadioButton;
