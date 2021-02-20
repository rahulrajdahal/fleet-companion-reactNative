import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ChoiceButton } from "../../../components";
import { COLORS, FONTS, SIZES } from "../../../constants";

const PageTwo = ({ navigation }) => {
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
          Driver Declaration
        </Text>
        <Text
          style={{
            color: COLORS.text400,
            ...FONTS.caption,
            fontFamily: "Manrope",
            fontWeight: "bold",
          }}
        >
          2/3
        </Text>
      </View>
    );
  }

  function renderDescription() {
    const points = [
      {
        _id: 1,
        desc: "I am fit and well to undertake this trip",
      },
      {
        _id: 2,
        desc: "I have sufficient hours to complete my tasks.",
      },
      {
        _id: 3,
        desc:
          "I am not suffering from any medical conditions that could affect by driving performance. ",
      },
      {
        _id: 4,
        desc:
          "I am not impaired by any illicit drug, prescription drug or alcohol that could affect my driving performance.",
      },
      {
        _id: 5,
        desc:
          "In the last 14 days, I have fully complied with regulated driving and rest hours.",
      },
      {
        _id: 6,
        desc:
          "During this trip, I will undertake to rest when feeling fatigued and take all regulated breaks as a minimum.",
      },
      {
        _id: 7,
        desc:
          "My Daily Worksheet will be completed in accordance with regulations and a signed copy will be provided to toll",
      },
      {
        _id: 8,
        desc: "I am fit and well to undertake this trip",
      },
      {
        _id: 9,
        desc: "I have sufficient hours to complete my tasks.",
      },
      {
        _id: 10,
        desc:
          "I am not suffering from any medical conditions that could affect by driving performance. ",
      },
      {
        _id: 11,
        desc:
          "I am not impaired by any illicit drug, prescription drug or alcohol that could affect my driving performance.",
      },
      {
        _id: 12,
        desc:
          "In the last 14 days, I have fully complied with regulated driving and rest hours.",
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
          marginTop: 135,
          marginBottom: 60,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChoiceButton disagree onPress={() => navigation.goBack()} />
        <View style={{ width: 20 }} />
        <ChoiceButton onPress={() => navigation.navigate("PageThree")} />
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
      <ScrollView>
        {/* Title And Page Number */}
        {renderHeading()}

        {/* Description */}
        {renderDescription()}

        {/* Agree And Disagree Button */}
        {renderChoice()}
      </ScrollView>
    </View>
  );
};

export default PageTwo;
