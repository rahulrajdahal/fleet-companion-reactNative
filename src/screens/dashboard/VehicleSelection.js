import React from "react";
import { Text, View, Image } from "react-native";
import { Picker } from "@react-native-community/picker";
import { COLORS, SIZES, FONTS, images } from "../../constants";
import { LargeButton } from "../../components";

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
    const vehicleDetails = [
      {
        _id: 1,
        title: "Rego Number",
        data: "FRD85",
      },
      {
        _id: 2,
        title: "Year",
        data: "1985",
      },
      {
        _id: 3,
        title: "Rego Expiry Date",
        data: "2021/09/30",
      },
      {
        _id: 4,
        title: "Fleet Weight",
        data: "-",
      },
      {
        _id: 5,
        title: "Make",
        data: "Ford Classic",
      },
      {
        _id: 6,
        title: "Model",
        data: "Pickup'85",
      },
      {
        _id: 7,
        title: "Fuel Type",
        data: "-",
      },
    ];

    return (
      <View style={{ marginTop: 22 }}>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.body3,
            fontFamily: "Manrope",
            fontWeight: "bold",
          }}
        >
          Vehicle Details
        </Text>

        {vehicleDetails.map((vehicleDetail) => (
          <View
            key={vehicleDetail._id}
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
              {vehicleDetail.title}
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.text700,
                fontFamily: "Manrope",
                fontWeight: "500",
                marginTop: 2,
                alignSelf: "flex-start",
              }}
            >
              {vehicleDetail.data}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  function renderConfirmButton() {
    return (
      <LargeButton
        text="Confirm Vehicle"
        color={COLORS.success}
        textColor={COLORS.white}
        style={{ marginTop: 40, marginBottom: 40 }}
      />
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

      {/* Confirm Button */}
      {renderConfirmButton()}
    </View>
  );
};

export default VehicleSelection;
