import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";
import { ArrowLeft } from "../constants/icons";
import { useNavigation } from "@react-navigation/native";

const DashboardHeader = ({ title, headerRightTitle }) => {
  const navigation = useNavigation();

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
            {title}
          </Text>
        </View>

        {headerRightTitle ? (
          <TouchableOpacity
            onPress={() => console.log("Fault Created")}
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
              {headerRightTitle}
            </Text>
          </TouchableOpacity>
        ) : null}
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
};

export default DashboardHeader;
