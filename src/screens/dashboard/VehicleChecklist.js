import React from "react";
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Animated,
} from "react-native";
import { AddButton, ChoiceButton, DashboardHeader } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { ArrowLeft } from "../../constants/icons";

const VehicleChecklist = ({ navigation }) => {
  function renderProgressBar() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            marginTop: 20,
            width: 32,
            height: 6,
            borderRadius: 10.5,
            backgroundColor: COLORS.success,
          }}
        />
        <View
          style={{
            marginTop: 20,
            width: 295,
            height: 6,
            borderTopRightRadius: 10.5,
            borderBottomRightRadius: 10.5,
            backgroundColor: COLORS.success200,
          }}
        />
      </View>
    );
  }

  function renderButtons() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <AddButton text="Add Remarks" image={images.chat} />
        <AddButton text="Add Photo" image={images.gallery} />
      </View>
    );
  }

  function renderImage() {
    return (
      <View style={{ marginTop: 46 }}>
        <Image source={images.tyre} style={{ alignSelf: "center" }} />
        <Text
          style={{
            marginTop: 24,
            ...FONTS.body1,
            color: COLORS.primary,
            fontFamily: "Manrope",
            fontWeight: "600",
            textAlign: "left",
            marginRight: 10,
            alignSelf: "center",
          }}
        >
          Wheels and Tyres
        </Text>
      </View>
    );
  }

  function renderPoints() {
    const points = [
      {
        _id: 1,
        desc: "Check all tyres are adequately inflated.",
      },
      {
        _id: 2,
        desc: "Check all tyres tread depth & integrity",
      },
      {
        _id: 3,
        desc: "Check all wheels are secure",
      },
      {
        _id: 4,
        desc: "Check all rims for damage",
      },
      {
        _id: 5,
        desc: "Check triangles, jack & wheels brace are in vehicle",
      },
    ];

    return (
      <View style={{ marginTop: 20, alignSelf: "center" }}>
        {points.map((point) => (
          <View
            key={point._id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                width: 8.33,
                height: 8.33,
                backgroundColor: COLORS.text300,
                borderRadius: SIZES.borderRadius,
                marginRight: 4.83,
              }}
            />
            <Text
              style={{
                color: COLORS.text700,
                ...FONTS.body3,
                lineHeight: 20,
                fontWeight: "normal",
                fontFamily: "Manrope",
              }}
            >
              {point.desc}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  function renderChoices() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 73,
          marginBottom: 60,
          marginHorizontal: 26,
        }}
      >
        <ChoiceButton disagree text="Broken" />
        <ChoiceButton text="Acceptable" />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <DashboardHeader title="Vehicle Checklist" headerRight />
      <View
        style={{
          paddingHorizontal: 24,
        }}
      >
        {/* Progress Bar */}
        {renderProgressBar()}

        {/* Add Buttons */}
        {renderButtons()}

        {/* Image And Image Title */}
        {renderImage()}

        {/* Points  */}
        {renderPoints()}

        {/* Choices */}
        {renderChoices()}
      </View>
    </View>
  );
};

export default VehicleChecklist;
