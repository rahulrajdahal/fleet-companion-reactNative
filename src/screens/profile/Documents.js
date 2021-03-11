import React from "react";
import { FlatList, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navbar } from "../../components";
import { COLORS, FONTS, SIZES } from "../../constants";
import { Folder } from "../../constants/icons";

const Documents = ({ navigation }) => {
  function renderTitle() {
    return (
      <View>
        <Text
          style={{
            color: COLORS.text700,
            ...FONTS.h6,
            fontWeight: "bold",
            marginTop: 43,
          }}
        >
          My Documents
        </Text>
      </View>
    );
  }

  function renderDocuments() {
    const documents = [
      {
        _id: 1,
        title: "Driver Documents",
        body: "2 files",
        navTo: "DriverDocument",
      },
      { _id: 2, title: "Insurance", body: "1 file", navTo: "DriverDocument" },
      { _id: 3, title: "Jobs Log", body: "26 files", navTo: "DriverDocument" },
    ];

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate("DriverDocument")}
          style={{
            width: 156,
            height: 107,
            backgroundColor: "rgba(21, 72, 191, 0.05)",
            borderRadius: SIZES.borderRadius,
            justifyContent: "center",
            padding: 16,
            marginRight: 15,
            marginBottom: 15,
          }}
        >
          <Folder width={39} height={39} />
          <Text
            style={{
              marginTop: 9.07,
              color: COLORS.text700,
              ...FONTS.body3,
              fontWeight: "bold",
              fontFamily: "Manrope",
            }}
          >
            {item.title}
          </Text>

          <Text
            style={{
              marginTop: 4,
              color: COLORS.text500,
              ...FONTS.caption,
              fontWeight: "600",
              fontFamily: "Manrope",
            }}
          >
            {item.body}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={{
          marginTop: 32,
        }}
      >
        <FlatList
          data={documents}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => `${item._id}`}
        />
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

      {/* Documents */}
      {renderDocuments()}
    </View>
  );
};

export default Documents;
