import React from "react";
import { Text, View, Image } from "react-native";
import { Picker } from "@react-native-community/picker";
import { COLORS, SIZES, FONTS, images } from "../../constants";

const VehicleSelection = () => {
  const [selectedValue, setSelectedValue] = React.useState("Ford Pickup ‘85");

  function renderDropDown() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.body3,
            marginTop: 40,
            fontFamily: "Manrope",
            fontWeight: "600",
            color: COLORS.primary,
          }}
        >
          Select a Vehicle
        </Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={{
            backgroundColor: "rgba(18, 130, 57, 0.05)",
            color: COLORS.primary500,
            width: 327,
            borderRadius: SIZES.borderRadius,
            marginTop: 6,
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

        <Image
          source={images.ford_pickup}
          style={{ alignSelf: "center", marginTop: 20 }}
        />
      </View>
    );
  }

  function renderVehicleDetails() {
    return (
      <View style={{ marginTop: 22 }}>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.body3,
            fontFamily: "Manrope",
            fontWeight: "600",
          }}
        >
          Vehicle Details
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.text700,
              fontFamily: "Manrope",
              marginTop: 2,
            }}
          >
            Rego Number
          </Text>
          {/* <View style={{ width: 159 }} /> */}
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.text700,
              fontFamily: "Manrope",
              fontWeight: "500",
              marginTop: 2,
              marginRight: 61,
            }}
          >
            FRD85
          </Text>
        </View>
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

      {/* Vehicle Details */}
      {renderVehicleDetails()}
      <Text>VehicleSelection</Text>
    </View>
  );
};

export default VehicleSelection;
