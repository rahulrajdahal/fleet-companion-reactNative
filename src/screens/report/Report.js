import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navbar } from "../../components";
import { COLORS, FONTS, images } from "../../constants";
import { ArrowRight } from "../../constants/icons";

const Report = ({ navigation }) => {
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
        navTo: "Incident",
      },
      {
        _id: 2,
        image: images.complaint,
        title: "Report a Fault",
        navTo: "Incident",
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
          <TouchableOpacity
            key={report._id}
            style={{
              width: 156,
              height: 208,
              backgroundColor: COLORS.success100,
              borderRadius: 15,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 24,
            }}
            onPress={() => navigation.navigate(report.navTo)}
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
          </TouchableOpacity>
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
    </View>
  );
};

export default Report;
