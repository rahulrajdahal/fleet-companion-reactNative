import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Navbar } from "../../components";
import { COLORS, FONTS } from "../../constants";
import { ArrowRight, Folder, Settings, LifeRing } from "../../constants/icons";

import { ProfileImage } from "../../constants/images";

const Profile = ({ navigation }) => {
  function renderProfileDetail() {
    return (
      <View style={{ alignItems: "center", marginTop: 36 }}>
        <ProfileImage />
        <Text style={{ color: COLORS.text800, ...FONTS.h5, marginTop: 16 }}>
          Aakash D.
        </Text>
      </View>
    );
  }

  function renderProfileOptions() {
    const options = [
      {
        _id: 1,
        icon: <Folder />,
        title: "My Documents",
        body: "All your important documents in one convenient location.",
        backgroundColor: COLORS.info100,
        navTo: "Documents",
      },
      {
        _id: 2,
        icon: <Settings />,
        title: "Settings",
        body:
          "Go to Settings in order to change your passwords or notifications",
        backgroundColor: COLORS.success100,
        navTo: "Settings",
      },
      {
        _id: 3,
        icon: <LifeRing />,
        title: "Help Center",
        body: "Access the Help Center for FAQ or contact Support.",
        backgroundColor: COLORS.danger100,
        navTo: "Settings",
      },
    ];

    return (
      <View style={{ marginTop: 57 }}>
        {options.map((option) => (
          <TouchableOpacity
            key={option._id}
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: 327,
              justifyContent: "space-between",
              marginBottom: 32,
            }}
            onPress={() => navigation.navigate(option.navTo)}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 15,
                  backgroundColor: option.backgroundColor,
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 12,
                }}
              >
                {option.icon}
              </View>

              <View>
                <Text
                  style={{
                    color: COLORS.text700,
                    ...FONTS.body3,
                    fontWeight: "bold",
                    fontFamily: "Manrope",
                  }}
                >
                  {option.title}
                </Text>
                <Text
                  style={{
                    color: COLORS.text600,
                    ...FONTS.caption,
                    lineHeight: 16,
                    width: 169,
                    marginTop: 6,
                  }}
                >
                  {option.body}
                </Text>
              </View>
            </View>
            <ArrowRight
              style={{ color: COLORS.success }}
              width={15.56}
              height={16}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  return (
    <View
      style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 24 }}
    >
      <Navbar />

      {/* Profile Detail */}
      {renderProfileDetail()}

      {/* Profile Options */}
      {renderProfileOptions()}
    </View>
  );
};

export default Profile;
