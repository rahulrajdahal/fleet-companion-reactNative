import React from "react";
import { Text, View } from "react-native";
import { Picker } from "@react-native-community/picker";
import { COLORS, SIZES } from "../../constants";

const VehicleSelection = () => {
  const [selectedValue, setSelectedValue] = React.useState("Ford Pickup ‘85");

  function renderDropDown() {
    return (
      <View>
        <Text>DropDown</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={{
            backgroundColor: "rgba(18, 130, 57, 0.05)",
            color: COLORS.primary500,
            width: 327,
            borderRadius: SIZES.borderRadius,
          }}
        >
          <Picker.Item
            label="Ford Pickup ‘85"
            value="fordpickup85"
            color={COLORS.primary500}
          />
          <Picker.Item label="China" value="china" color={COLORS.primary500} />
          <Picker.Item label="India" value="india" color={COLORS.primary500} />
          <Picker.Item label="UK" value="uk" color={COLORS.primary500} />
        </Picker>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
      }}
    >
      {/* Vehicle TropDown */}
      {renderDropDown()}
      <Text>VehicleSelection</Text>
    </View>
  );
};

export default VehicleSelection;
