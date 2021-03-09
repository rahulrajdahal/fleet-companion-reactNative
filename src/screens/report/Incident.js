import React from "react";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { Input, LargeButton, Navbar, RadioButton } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";

const Incident = () => {
  const renderTitle = () => {
    return (
      <View style={{ marginTop: 36 }}>
        <Text
          style={{ color: COLORS.text800, ...FONTS.h6, fontWeight: "bold" }}
        >
          Report an Incident
        </Text>
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <Text style={{ color: COLORS.text400, ...FONTS.caption }}>
            Reports /
          </Text>
          <Text
            style={{ color: COLORS.text900, ...FONTS.caption, marginLeft: 2 }}
          >
            Report an Incident
          </Text>
        </View>
      </View>
    );
  };

  function renderForm() {
    return (
      <View style={{ marginTop: 40 }}>
        <Input
          text="Select a Vechile"
          placeholder="Ford Pickup '85"
          style={{ marginBottom: 40 }}
        />

        <Input
          text="Select Incident Type"
          placeholder="Near Miss"
          style={{ marginBottom: 40 }}
        />

        <Input
          text="Title"
          placeholder="Near Miss with Family SUV"
          style={{ marginBottom: 40 }}
        />

        <Input
          text="Desciption"
          placeholder="Write a description..."
          style={{ marginBottom: 40 }}
          inputStyle={{ height: 144 }}
        />

        <Input
          text="Related Person"
          placeholder="Mr. Someone Else"
          style={{ marginBottom: 40 }}
        />

        <RadioButton />

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

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Title / SubText */}
        {renderTitle()}

        {/* Form */}
        {renderForm()}

        {/* Button */}
        {renderButton()}
      </ScrollView>
    </View>
  );
};

export default Incident;
