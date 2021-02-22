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
import { ChoiceButton, DashboardHeader } from "../../components";
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
        <Text>Buttons</Text>
        <Text>Buttons</Text>
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
        <Text>VehicleChecklist</Text>
      </View>
    </View>
  );
};

export default VehicleChecklist;
