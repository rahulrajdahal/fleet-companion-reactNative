import React from "react";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { DashboardHeader, LargeButton } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";

const WorkDetails = () => {
  function renderWorkStatus() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 40,
        }}
      >
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 50,
            backgroundColor: COLORS.info,
            marginRight: 4,
          }}
        />
        <Text style={{ ...FONTS.body3, color: COLORS.info, fontWeight: "200" }}>
          Scheduled
        </Text>
      </View>
    );
  }

  function renderImage() {
    return (
      <Image
        source={images.miniTruck}
        style={{ marginTop: 56.36, marginBottom: 33.15, alignSelf: "center" }}
      />
    );
  }

  function renderDetails() {
    const details = [
      { _id: 1, title: "Work ID", value: "420" },
      { _id: 2, title: "Driver", value: "Vivek Bhusal" },
      { _id: 3, title: "Vehicle", value: "1GG5ZV" },
      { _id: 4, title: "Origin", value: "Dayanagar, Nepal" },
      { _id: 5, title: "Destination", value: "N/A" },
    ];

    return (
      <View>
        {details.map((detail) => (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 37,
              alignItems: "center",
              marginBottom: 16,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: COLORS.text600,
                ...FONTS.body2,
                fontWeight: "600",
                fontFamily: "Manrope",
              }}
            >
              {detail.title}
            </Text>

            <Text
              style={{
                color: COLORS.text900,
                ...FONTS.body2,
                fontWeight: "600",
                fontFamily: "Manrope",
                alignSelf: "flex-start",
                textAlign: "left",
              }}
            >
              {detail.value}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  const renderButton = () => {
    return (
      <TouchableOpacity
        onPress={() => console.log("Start")}
        style={{
          width: 145,
          height: 48,
          backgroundColor: COLORS.success,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.borderRadius,
          position: "absolute",
          marginTop: 40,
          bottom: 40,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            color: COLORS.white,
            fontFamily: "Manrope",
            ...FONTS.body3,
            fontWeight: "600",
          }}
        >
          Start
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <DashboardHeader title="Work Details" />

      <View
        style={{
          paddingHorizontal: 24,
          width: 327,
          height: 552,
          borderRadius: SIZES.borderRadius * 2,
          borderWidth: 1,
          borderColor: COLORS.text100,
          alignSelf: "center",
          marginTop: 32,
          marginBottom: 31,
        }}
      >
        {/* Work Status */}
        {renderWorkStatus()}

        {/* Detail Image */}
        {renderImage()}

        {/* WorkDetails */}
        {renderDetails()}

        {/* Button */}
        {renderButton()}
      </View>
    </View>
  );
};

export default WorkDetails;
