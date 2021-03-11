import React from "react";
import { Text, View } from "react-native";
import { ToggleButton } from "../../components";
import { COLORS, FONTS } from "../../constants";

const Notifications = () => {
  function renderPushNotification() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginTop: 24,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: 200 }}>
          <Text
            style={{
              color: COLORS.text700,
              ...FONTS.body3,
              fontWeight: "bold",
              fontFamily: "Manrope",
            }}
          >
            Enable Push Notifications
          </Text>
          <Text
            style={{
              color: COLORS.text600,
              ...FONTS.caption,
              lineHeight: 16,
              marginTop: 4,
            }}
          >
            Get instant notifications on your device as soon as we have news.
          </Text>
        </View>
        <ToggleButton />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Push Notification */}
      {renderPushNotification()}

      <ToggleButton style={{ width: 60, height: 32 }} />
    </View>
  );
};

export default Notifications;
