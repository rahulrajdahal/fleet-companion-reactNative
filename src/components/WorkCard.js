import React from "react";
import { View, Text } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const WorkCard = ({ inProgress }) => {
  return (
    <View
      style={{
        width: 327,
        height: inProgress ? 132 : 106,
        backgroundColor: inProgress ? COLORS.warning200 : COLORS.success200,
        borderRadius: SIZES.borderRadius,
        marginTop: 16,
      }}
    >
      <View
        style={{
          height: "100%",
          width: 10,
          backgroundColor: inProgress ? COLORS.warning400 : COLORS.success400,
          borderTopStartRadius: 10,
          borderBottomStartRadius: 10,
          alignSelf: "flex-start",
        }}
      />
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

        {inProgress ? (
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
        ) : null}
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
            backgroundColor: inProgress ? "#E68A02" : "#128239",
            borderRadius: SIZES.borderRadius,
            marginRight: 4,
          }}
        />
        <Text style={{ color: inProgress ? "#E68A02" : "#128239" }}>
          {inProgress ? "In Progress" : "Open"}
        </Text>
      </View>

      {inProgress ? null : (
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
