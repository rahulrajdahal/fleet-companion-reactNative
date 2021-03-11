import React from "react";
import { View, Text } from "react-native";
import { Navbar } from "../../components";
import { COLORS, FONTS } from "../../constants";
import { Pdf, DownloadLine, Jpg } from "../../constants/icons";

const DriverDocument = () => {
  const renderTitle = () => {
    return (
      <View style={{ marginTop: 36 }}>
        <Text
          style={{ color: COLORS.text800, ...FONTS.h6, fontWeight: "bold" }}
        >
          Driver Documents
        </Text>
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <Text style={{ color: COLORS.text400, ...FONTS.caption }}>
            My Documents /
          </Text>
          <Text
            style={{ color: COLORS.text900, ...FONTS.caption, marginLeft: 2 }}
          >
            Driver Documents
          </Text>
        </View>
      </View>
    );
  };

  function renderDocuments() {
    const documents = [
      {
        _id: 1,
        image: <Pdf />,
        title: "Karl McDrive.pdf",
        size: "384KB",
        pages: "02 pages",
      },
      {
        _id: 2,
        image: <Pdf />,
        title: "DriverLicense.pdf",
        size: "1.2MB",
        pages: "01 pages",
      },
      {
        _id: 3,
        image: <Jpg />,
        title: "InsuranceDriver.jpeg",
        size: "1.45MB",
        pages: "",
      },
      {
        _id: 4,
        image: <Pdf />,
        title: "WarrantyCopy(1).pdf",
        size: "457KB",
        pages: "01 pages",
      },
    ];

    return (
      <View style={{ marginTop: 32 }}>
        {documents.map((document) => (
          <View
            key={document._id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 32,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {document.image}
              <View style={{ marginLeft: 16 }}>
                <Text
                  style={{
                    color: COLORS.text800,
                    ...FONTS.body3,
                    fontWeight: "600",
                    fontFamily: "Manrope",
                  }}
                >
                  {document.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 6,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.text500,
                      ...FONTS.caption,
                      fontWeight: "600",
                      fontFamily: "Manrope",
                    }}
                  >
                    {document.size}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.text500,
                      ...FONTS.caption,
                      fontWeight: "600",
                      fontFamily: "Manrope",
                    }}
                  >
                    {document.pages}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: 24,
                height: 24,
                backgroundColor: COLORS.text100,
                borderRadius: 100,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DownloadLine />
            </View>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 24 }}
    >
      <Navbar />

      {/* Form Title  */}
      {renderTitle()}

      {/* Documents */}
      {renderDocuments()}
    </View>
  );
};

export default DriverDocument;
