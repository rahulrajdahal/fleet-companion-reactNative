import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Ellipse } from "../constants/icons";
import { COLORS, FONTS, images, SIZES } from "../constants";

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
      <View
        style={{
          width: 180,
          height: 180,
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.success200,
          borderRadius: 100,
          marginTop: 52,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ellipse style={{ position: "absolute", left: 88, bottom: 102 }} />

        <Text
          style={{
            color: COLORS.text700,
            ...FONTS.caption,
            fontFamily: "Manrope",
            fontWeight: "600",
          }}
        >
          Pass Time
        </Text>
        <Text
          style={{
            color: COLORS.text700,
            ...FONTS.h5,
            marginTop: 5,
          }}
        >
          00:07:35
        </Text>
      </View>
    );
  }

  function renderActiviryRecord() {
    return (
      <View style={{ marginTop: 24 }}>
        <Text
          style={{
            color: COLORS.text600,
            ...FONTS.body3,
            fontWeight: "bold",
            fontFamily: "Manrope",
            marginBottom: 16,
          }}
        >
          Activity Record
        </Text>
      </View>
    );
  }

  function renderFlalist() {
    const data = [
      {
        _id: 1,
        title: "Work Started",
        location: "Dayanagar, Nepal",
        time: "01:18 AM",
        image: images.racingFlag,
      },
      {
        _id: 2,
        title: "Break Time",
        location: "Dayanagar, Nepal",
        time: "03:25 AM - 04:15 AM ",
        image: images.directorsChair,
      },
      {
        _id: 3,
        title: "Driving",
        location: "Dayanagar, Nepal",
        time: "03:25 AM - 04:15 AM ",
        image: images.steeringWheel,
      },
    ];

    const renderItem = ({ item }) => {
      return (
        <View
          key={item._id}
          style={{
            width: 327,
            height: 81,
            backgroundColor: "rgba(18, 130, 57, 0.05)",
            borderRadius: SIZES.borderRadius,
            marginBottom: 12,
            paddingHorizontal: 20,
            paddingVertical: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.success200,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Image source={item.image} />
            </View>

            <View>
              <Text
                style={{
                  marginBottom: 4,
                  color: COLORS.text800,
                  ...FONTS.body3,
                }}
              >
                {item.title}
              </Text>
              <Text
                style={{
                  marginBottom: 4,
                  color: COLORS.text600,
                  ...FONTS.body3,
                }}
              >
                {item.location}
              </Text>
              <Text style={{ color: COLORS.text600, ...FONTS.caption }}>
                {item.time}
              </Text>
            </View>
          </View>
        </View>
      );
    };

    return (
      <View style={{ height: 226 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => `${item._id}`}
        />
      </View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingTop: 24,
          alignItems: "center",
          justifyContent: "space-between",
          position: "absolute",
          bottom: 40,
          alignSelf: "center",
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            width: 130,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.success200,
            borderRadius: SIZES.borderRadius,
            marginRight: 14,
          }}
        >
          <Text
            style={{
              color: COLORS.success,
              ...FONTS.body3,
              fontWeight: "600",
              fontFamily: "Manrope",
            }}
          >
            Take Rest
          </Text>
        </View>
        <View
          style={{
            width: 173,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.success,
            borderRadius: SIZES.borderRadius,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.body3,
              fontWeight: "600",
              fontFamily: "Manrope",
            }}
          >
            Take Rest
          </Text>
        </View>
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
        {/* Activity Record */}
        {renderActiviryRecord()}
        {/* Flastlist Activity */}
        {renderFlalist()}
      </View>
      {/* Buttons */}
      {renderButtons()}
    </View>
  );
};

export default OnWork;
