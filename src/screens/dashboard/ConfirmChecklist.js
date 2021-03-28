import React from "react";
import { View, Text, Image } from "react-native";
import { DashboardHeader, LargeButton } from "../../components";
import { COLORS, images } from "../../constants";
import { Check } from "../../constants/icons";

const ConfirmChecklist = ({ navigation }) => {
  function renderImage() {
    return (
      <View
        style={{
          width: 98,
          height: 98,
          borderRadius: 50,
          backgroundColor: COLORS.success100,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 33,
          marginTop: 89,
        }}
      >
        <Image source={images.like} />
      </View>
    );
  }

  function renderList() {
    const points = [
      {
        _id: 1,
        title: "Wheels and Tyres",
      },
      {
        _id: 2,
        title: "Light and Reflectors",
      },
      {
        _id: 3,
        title: "Windscreen, Mirrors, Wipers and Washers",
      },
      {
        _id: 4,
        title: "Structural Body & Fluid Systems",
      },
      {
        _id: 5,
        title: "Brake & Suspension Air Systems",
      },
      {
        _id: 6,
        title: "Pre-Work Period Housekeeping",
      },
    ];

    return (
      <View>
        {points.map((point) => (
          <View
            key={point._id}
            style={{
              flexDirection: "row",
              marginBottom: 16,
            }}
          >
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: COLORS.success,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                marginRight: 12,
              }}
            >
              <Check />
            </View>
            <Text>{point.title}</Text>
          </View>
        ))}
      </View>
    );
  }

  function renderButton() {
    return (
      <LargeButton
        text="Continue to Sign Off"
        color={COLORS.success}
        textColor={COLORS.white}
        onPress={() => navigation.navigate("SignatureScreen")}
        style={{ position: "absolute", bottom: 40 }}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <DashboardHeader title="Confrim Checklist" />

      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          alignItems: "center",
        }}
      >
        {/* Image And Container */}
        {renderImage()}

        {/* Confirmed List */}
        {renderList()}

        {/* Continue Button */}
        {renderButton()}
      </View>
    </View>
  );
};

export default ConfirmChecklist;
