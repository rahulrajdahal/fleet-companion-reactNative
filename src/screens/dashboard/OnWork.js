import React from "react";
import { Image, Text, View } from "react-native";
import { COLORS, FONTS, images, SIZES } from "../../constants";

const OnWork = () => {
  function renderTimerContainer() {
    return (
      <View
        style={{
          width: SIZES.width,
          height: 160,
          backgroundColor: COLORS.success,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 32,
            paddingHorizontal: 14,
          }}
        >
          <Image source={images.pillow} style={{ marginLeft: 10 }} />
          <Text
            style={{
              width: 245,
              color: COLORS.white,
              ...FONTS.h5,
              lineHeight: 32,
              marginLeft: 14.12,
              fontWeight: "200",
            }}
            numberOfLines={2}
          >
            If you feel fatigued, take a break
          </Text>
        </View>

        <Text
          style={{
            color: COLORS.white,
            ...FONTS.body1,
            fontFamily: "Manrope",
            fontWeight: "normal",
          }}
        >
          Total Work: 03:42:52
        </Text>
      </View>
    );
  }

  function renderClock() {
    return (
      <View>
        <Text>Clock</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Timer Container */}
      {renderTimerContainer()}

      <View style={{ paddingHorizontal: 24 }}>
        {/* Timer Clock */}
        {renderClock()}
      </View>
    </View>
  );
};

export default OnWork;
