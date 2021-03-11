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

  function renderNoficationSettings() {
    const notificationSettings = [
      {
        _id: 1,
        title: "New Job Notification",
        body: "We will send you a notification once new jobs are posted",
      },
      {
        _id: 2,
        title: "Message Notification",
        body: "We will send you a notification wherever someone messages you.",
      },
      {
        _id: 3,
        title: "Announcements",
        body: "We will send you a notification for important announcements.",
      },
      {
        _id: 4,
        title: "Reports",
        body: "Receive notification about your submitted reports instantly.",
      },
    ];

    return (
      <View>
        <Text
          style={{
            color: COLORS.text400,
            ...FONTS.caption,
            fontFamily: "Manrope",
            fontWeight: "600",
            marginTop: 40,
            marginBottom: 16,
          }}
        >
          Get Notifications for:
        </Text>

        {notificationSettings.map((notificationSetting) => (
          <View
            key={notificationSetting._id}
            style={{
              flexDirection: "row",
              marginBottom: 24,
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
                {notificationSetting.title}
              </Text>
              <Text
                style={{
                  color: COLORS.text600,
                  ...FONTS.caption,
                  lineHeight: 16,
                  marginTop: 4,
                }}
              >
                {notificationSetting.body}
              </Text>
            </View>
            <ToggleButton />
          </View>
        ))}
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* Push Notification */}
      {renderPushNotification()}

      {/* Notification Settings */}
      {renderNoficationSettings()}
    </View>
  );
};

export default Notifications;
