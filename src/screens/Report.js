import React from "react";
import { Image, Text, View } from "react-native";
import { Navbar } from "../components";
import { COLORS, FONTS, images } from "../constants";
import { ArrowRight } from "../constants/icons";
const Report = () => {
  function renderTitle() {
    return (
      <View>
        <Text
          style={{
            color: COLORS.text800,
            ...FONTS.h6,
            fontWeight: "bold",
            marginTop: 43,
          }}
        >
          Report
        </Text>
      </View>
    );
  }

  function renderReport() {
    const reports = [
      {
        _id: 1,
        image: images.shipping,
        image2: images.deliveryTruck,
        title: "Report an Incident",
      },
      {
        _id: 2,
        image: images.complaint,
        title: "Report a Fault",
      },
    ];

    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {reports.map((report) => (
          <View
            style={{
              width: 156,
              height: 208,
              backgroundColor: COLORS.success100,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            <View style={{ flexDirection: "row", marginBottom: 32 }}>
              <Image source={report.image} />
              {report.image2 ? <Image source={report.image2} /> : null}
            </View>

            <View
              style={{ flexDirection: "row", position: "absolute", bottom: 16 }}
            >
              <Text
                style={{
                  width: 65,
                  color: COLORS.success,
                  ...FONTS.body3,
                  lineHeight: 18,
                }}
              >
                {report.title}
              </Text>
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: COLORS.success,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                }}
              >
                <ArrowRight />
              </View>
            </View>
          </View>
        ))}
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
      <Navbar />

      {/* Title */}
      {renderTitle()}

      {/* Report */}
      {renderReport()}

      <Text>Report Screen</Text>
    </View>
  );
};

export default Report;
