import React from "react";
import { View, Text, Image } from "react-native";
import { Input, LargeButton, Navbar } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";

const FuelExpense = () => {
  const renderTitle = () => {
    return (
      <View style={{ marginTop: 36 }}>
        <Text
          style={{ color: COLORS.text800, ...FONTS.h6, fontWeight: "bold" }}
        >
          Record Fuel Expense
        </Text>
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <Text style={{ color: COLORS.text400, ...FONTS.caption }}>
            Expenses /
          </Text>
          <Text
            style={{ color: COLORS.text900, ...FONTS.caption, marginLeft: 2 }}
          >
            Record Fuel Expense
          </Text>
        </View>
      </View>
    );
  };

  function renderForm() {
    return (
      <View style={{ marginTop: 40 }}>
        <Input
          text="Select a Vehicle"
          placeholder="Ford Pickup '85"
          style={{ marginBottom: 40 }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: 327,
          }}
        >
          <Input text="Qty" placeholder="01" inputStyle={{ width: 72 }} />
          <Input
            text="Amount"
            placeholder="25.00 AUD"
            inputStyle={{ width: 128 }}
          />
          <Input text="Odometer" placeholder="00" inputStyle={{ width: 95 }} />
        </View>

        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              color: COLORS.primary,
              ...FONTS.body3,
              fontWeight: "600",
              fontFamily: "Manrope",
            }}
          >
            Choose a Photo
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 6,
            }}
          >
            <View
              style={{
                width: 156,
                height: 159,
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: COLORS.success,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.borderRadius,
                backgroundColor: "rgba(18, 130, 57, 0.05)",
              }}
            >
              <Image source={images.camera} style={{ width: 48, height: 48 }} />
              <Text
                style={{
                  color: COLORS.success,
                  ...FONTS.caption,
                  marginTop: 12,
                }}
              >
                Launch Camera
              </Text>
            </View>

            <View
              style={{
                width: 156,
                height: 159,
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: COLORS.success,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.borderRadius,
                backgroundColor: "rgba(18, 130, 57, 0.05)",
              }}
            >
              <Image
                source={images.gallery}
                style={{ width: 48, height: 48 }}
              />
              <Text
                style={{
                  color: COLORS.success,
                  ...FONTS.caption,
                  marginTop: 12,
                }}
              >
                Upload from Gallery
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <LargeButton
        text="Submit Expense Report"
        color={COLORS.success}
        textColor={COLORS.white}
        style={{ bottom: 32, position: "absolute", alignSelf: "center" }}
      />
    );
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 24 }}
    >
      <Navbar />

      {/* Form Title  */}
      {renderTitle()}

      {/* Form */}
      {renderForm()}

      {/* Button */}
      {renderButton()}
    </View>
  );
};

export default FuelExpense;
