import React from "react";
import { Text, View } from "react-native";
import { ChoiceButton, DashboardHeader } from "../../../components";
import { FONTS, COLORS } from "../../../constants";

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
          Fatigue Self Assessment
        </Text>
        <Text
          style={{
            color: COLORS.text400,
            ...FONTS.caption,
            fontFamily: "Manrope",
            fontWeight: "bold",
          }}
        >
          1/3
        </Text>
      </View>
    );
  }

  function renderDescription() {
    return (
      <>
        <Text
          style={{
            marginTop: 12,
            color: COLORS.text600,
            fontFamily: "Inter",
            fontWeight: "200",
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          You MUST NOT be suffering from a lack of alertness, inability to
          concerntrate, reduce ability to recognize or respond to external
          stimuli, poor judgement or memory, lack gof attention to detail,
          drowsiness and excessive yawning, finding it difficult to keep the
          eyes open and/or blurred vision, need or more frequent naps than
          usual, not feeling refreshed after sleep, easily distracted, a sense
          of continual pressure at work and/or home, domestic relationsahip
          and/or sickness.
        </Text>
        <Text
          style={{
            marginTop: 24,
            color: COLORS.text600,
            fontFamily: "Inter",
            fontWeight: "200",
            fontSize: 16,
            lineHeight: 24,
          }}
        >
          By ticking the box, you are declaring that you are fit for duty. You
          are not fatigued and you ahve xero drug and/or alcohol in your system.
        </Text>
      </>
    );
  }

  function renderChoice() {
    return (
      <View
        style={{
          marginTop: 39,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChoiceButton
          disagree
          onPress={() => navigation.goBack()}
          text="I Disagree"
        />
        <View style={{ width: 20 }} />
        <ChoiceButton
          text="I agree"
          onPress={() => navigation.navigate("PageTwo")}
        />
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
      <DashboardHeader title="Assessment" />
      <View
        style={{
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
    </View>
  );
};

export default PageOne;
