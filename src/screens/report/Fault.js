import React from "react";
import { View, Text, Image } from "react-native";
import { Input, LargeButton, Navbar } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";

const Fault = () => {
  function renderTitle() {
    return (
      <View style={{ marginTop: 36 }}>
        <Text
          style={{ color: COLORS.text800, ...FONTS.h6, fontWeight: "bold" }}
        >
          Report a Fault
        </Text>
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <Text style={{ color: COLORS.text400, ...FONTS.caption }}>
            Reports /
          </Text>
          <Text
            style={{ color: COLORS.text900, ...FONTS.caption, marginLeft: 2 }}
          >
            Report a Fault
          </Text>
        </View>
      </View>
    );
  }

  function renderForm() {
    return (
      <View style={{ marginTop: 40 }}>
        <Input
          text="Vechicle Registration Number"
          placeholder="Ford Pickup '85"
          style={{ marginBottom: 40 }}
        />

        <Input
          text="Desciption"
          placeholder="Write a description..."
          style={{ marginBottom: 40 }}
          inputStyle={{ height: 144 }}
        />

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
                height: 96,
                borderWidth: 1,
                borderStyle: "dashed",
                borderColor: COLORS.success,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: SIZES.borderRadius,
                backgroundColor: "rgba(18, 130, 57, 0.05)",
              }}
            >
              <Image source={images.camera} style={{ width: 32, height: 32 }} />
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
                height: 96,
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
                style={{ width: 32, height: 32 }}
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
        text="Report this Incident"
        color={COLORS.success}
        textColor={COLORS.white}
        style={{ marginTop: 40, marginBottom: 40 }}
      />
    );
  }
  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 24 }}
    >
      <Navbar />

      {/* Title */}
      {renderTitle()}

      {/* Form */}
      {renderForm()}

      {/* Button */}
      {renderButton()}
    </View>
  );
};

export default Fault;
