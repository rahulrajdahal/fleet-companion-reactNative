import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const WorkCard = ({ status }) => {
  function cardBackground() {
    if (status == "inProgress") {
      return {
        width: 327,
        height: 132,
        backgroundColor: COLORS.warning200,
        borderRadius: SIZES.borderRadius,
        marginBottom: 16,
      };
    } else if (status == "scheduled") {
      return {
        width: 327,
        height: 106,
        backgroundColor: COLORS.info200,
        borderRadius: SIZES.borderRadius,
        marginBottom: 16,
      };
    } else if (status == "completed") {
      return {
        width: 327,
        height: 184,
        backgroundColor: COLORS.danger200,
        borderRadius: SIZES.borderRadius,
        marginBottom: 16,
      };
    }
    return {
      width: 327,
      height: 106,
      backgroundColor: COLORS.success200,
      borderRadius: SIZES.borderRadius,
      marginBottom: 16,
    };
  }

  function cardBorder() {
    if (status == "inProgress") {
      return {
        height: "100%",
        width: 10,
        backgroundColor: COLORS.warning400,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        alignSelf: "flex-start",
      };
    } else if (status == "scheduled") {
      return {
        height: "100%",
        width: 10,
        backgroundColor: COLORS.info400,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        alignSelf: "flex-start",
      };
    } else if (status == "completed") {
      return {
        height: "100%",
        width: 10,
        backgroundColor: COLORS.danger400,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        alignSelf: "flex-start",
      };
    }
    return {
      height: "100%",
      width: 10,
      backgroundColor: COLORS.success400,
      borderTopStartRadius: 10,
      borderBottomStartRadius: 10,
      alignSelf: "flex-start",
    };
  }

  function cardInfo() {
    if (status == "inProgress") {
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ color: COLORS.text700, ...FONTS.body3 }}>Started</Text>
          <View style={{ width: 30 }} />
          <Text
            style={{
              color: COLORS.text900,
              ...FONTS.body3,
            }}
          >
            26 Oct 2020, 2:06PM
          </Text>
        </View>
      );
    } else if (status == "scheduled") {
    } else if (status == "completed") {
      return (
        <>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text style={{ color: COLORS.text700, ...FONTS.body3 }}>
              Started
            </Text>
            <View style={{ width: 30 }} />
            <Text
              style={{
                color: COLORS.text900,
                ...FONTS.body3,
              }}
            >
              26 Oct 2020, 2:06PM
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text style={{ color: COLORS.text700, ...FONTS.body3 }}>Ended</Text>
            <View style={{ width: 37 }} />
            <Text
              style={{
                color: COLORS.text900,
                ...FONTS.body3,
              }}
            >
              26 Oct 2020, 11:58PM
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Text style={{ color: COLORS.text700, ...FONTS.body3 }}>Time</Text>
            <View style={{ width: 47 }} />
            <Text
              style={{
                color: COLORS.text900,
                ...FONTS.body3,
              }}
            >
              9hr 26m
            </Text>
          </View>
        </>
      );
    }
    return;
  }

  return (
    <View style={cardBackground()}>
      <View style={cardBorder()} />
      <View style={{ position: "absolute", left: 20, top: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ color: COLORS.text700, ...FONTS.body3 }}>Job ID</Text>
          <View style={{ width: 37 }} />
          <Text
            style={{
              alignSelf: "flex-start",
              color: COLORS.text900,
              ...FONTS.body3,
            }}
          >
            420
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ color: COLORS.text700, ...FONTS.body3 }}>Driver</Text>
          <View style={{ width: 40 }} />
          <Text
            style={{
              color: COLORS.text900,
              ...FONTS.body3,
            }}
          >
            Vivek Bhusal
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ color: COLORS.text700, ...FONTS.body3 }}>Vechile</Text>
          <View style={{ width: 32 }} />
          <Text
            style={{
              color: COLORS.text900,
              ...FONTS.body3,
              textTransform: "uppercase",
            }}
          >
            1GG5ZV
          </Text>
        </View>

        {cardInfo()}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 21,
          right: 20,
          bottom: 102,
        }}
      >
        <View
          style={{
            width: 8,
            height: 8,
            backgroundColor: status == "inProgress" ? "#E68A02" : "#128239",
            borderRadius: SIZES.borderRadius,
            marginRight: 4,
          }}
        />
        <Text style={{ color: status == "inProgress" ? "#E68A02" : "#128239" }}>
          {status == "inProgress" ? "In Progress" : "Open"}
        </Text>
      </View>

      {status == "inProgress" ? null : (
        <View
          style={{
            width: 62,
            height: 32,
            backgroundColor: "#128239",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.borderRadius,
            position: "absolute",
            bottom: 20,
            right: 20,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontFamily: "Inter",
              fontSize: 12,
              lineHeight: 12,
              fontWeight: "600",
            }}
          >
            Start
          </Text>
        </View>
      )}
    </View>
  );
};

export default WorkCard;
