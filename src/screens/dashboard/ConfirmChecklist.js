import React from "react";
import { View, Text, Image } from "react-native";
import { DashboardHeader } from "../../components";
import { COLORS, images, SIZES } from "../../constants";

const ConfirmChecklist = () => {
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
        }}
      >
        <Image source={images.like} />
      </View>
    );
  }

  function renderList() {
    return (
      <View>
        <Text>List</Text>
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
      <DashboardHeader title="Confrim Checklist" />

      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Image And Container */}
        {renderImage()}

        {/* Confirmed List */}
        {renderList()}
      </View>
    </View>
  );
};

export default ConfirmChecklist;
