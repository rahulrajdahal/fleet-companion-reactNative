import React from "react";
import { Text, View } from "react-native";
import { ChoiceButton } from "../../../components";
import { COLORS, FONTS, SIZES } from "../../../constants";
import { Check } from "../../../constants/icons";

const PageOne = ({ navigation }) => {
  function renderHeading() {
    return (
      <View
        style={{
          marginTop: 43,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: COLORS.text800,
            ...FONTS.body2,
            fontFamily: "Manrope",
            fontWeight: "bold",
          }}
        >
          COVID-19 Assessment
        </Text>
        <Text
          style={{
            color: COLORS.text400,
            ...FONTS.caption,
            fontFamily: "Manrope",
            fontWeight: "bold",
          }}
        >
          3/3
        </Text>
      </View>
    );
  }

  function renderDescription() {
    const points = [
      {
        _id: 1,
        desc: "I do not have any cold, flu or COVID-19 symptoms",
      },
      {
        _id: 2,
        desc: "I am not awating a COVID-19 test result",
      },
      {
        _id: 3,
        desc: "I have not been advised/directed to self-isolate or quarantine.",
      },
      {
        _id: 4,
        desc: "I have not been in contact with a confirm case of COVID-19",
      },
    ];

    return points.map((point) => (
      <View
        key={point._id}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <View
          style={{
            width: 8.33,
            height: 8.33,
            backgroundColor: COLORS.text300,
            borderRadius: SIZES.borderRadius,
          }}
        />

        <View
          style={{
            width: 4.83,
          }}
        />

        <Text
          style={{
            color: COLORS.text600,
            fontFamily: "Inter",
            fontWeight: "200",
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          {point.desc}
        </Text>
      </View>
    ));
  }

  function renderChoice() {
    return (
      <View
        style={{
          marginTop: 243,
          marginBottom: 60,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChoiceButton disagree onPress={() => navigation.goBack()} />
        <View style={{ width: 20 }} />
        <ChoiceButton onPress={() => navigation.navigate("VehicleSelection")} />
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
      {/* Title And Page Number */}
      {renderHeading()}
      {/* Description */}
      {renderDescription()}
      {/* Agree And Disagree Button */}
      {renderChoice()}
    </View>
  );
};

export default PageOne;
