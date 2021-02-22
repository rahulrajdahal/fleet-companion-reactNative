import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants";
import { ArrowLeft } from "../../constants/icons";

const VehicleChecklist = ({ navigation }) => {
  function renderHeader() {
    return (
      <>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 24,
            marginTop: 48,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ArrowLeft onPress={() => navigation.goBack()} />
            <Text
              style={{
                color: COLORS.text900,
                ...FONTS.body2,
                fontWeight: "bold",
                fontFamily: "Manrope",
                marginLeft: 16,
              }}
            >
              Vehicle Checklist
            </Text>
          </View>
          <View
            style={{
              width: 124,
              height: 48,
              backgroundColor: COLORS.success200,
              borderRadius: SIZES.borderRadius,
              alignItems: "center",
              justifyContent: "center",
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
              Create Fault
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 12,
            width: SIZES.width,
            borderColor: COLORS.primary100,
            borderWidth: 1,
            padding: 0,
          }}
        />
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* renderHeader     */}
      {renderHeader()}
      <View
        style={{
          paddingHorizontal: 24,
        }}
      >
        <Text>VehicleChecklist</Text>
      </View>
    </View>
  );
};

export default VehicleChecklist;
