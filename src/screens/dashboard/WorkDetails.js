import React from "react";
import {
  Image,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { DashboardHeader, Input } from "../../components";
import { COLORS, FONTS, images, SIZES } from "../../constants";
import { ModalClose } from "../../constants/icons";

const WorkDetails = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  function renderWorkStatus() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: 40,
        }}
      >
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 50,
            backgroundColor: COLORS.info,
            marginRight: 4,
          }}
        />
        <Text style={{ ...FONTS.body3, color: COLORS.info, fontWeight: "200" }}>
          Scheduled
        </Text>
      </View>
    );
  }

  function renderImage() {
    return (
      <Image
        source={images.miniTruck}
        style={{ marginTop: 56.36, marginBottom: 33.15, alignSelf: "center" }}
      />
    );
  }

  function renderDetails() {
    const details = [
      { _id: 1, title: "Work ID", value: "420" },
      { _id: 2, title: "Driver", value: "Vivek Bhusal" },
      { _id: 3, title: "Vehicle", value: "1GG5ZV" },
      { _id: 4, title: "Origin", value: "Dayanagar, Nepal" },
      { _id: 5, title: "Destination", value: "N/A" },
    ];

    return (
      <View>
        {details.map((detail) => (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 37,
              alignItems: "center",
              marginBottom: 16,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: COLORS.text600,
                ...FONTS.body2,
                fontWeight: "600",
                fontFamily: "Manrope",
              }}
            >
              {detail.title}
            </Text>

            <Text
              style={{
                color: COLORS.text900,
                ...FONTS.body2,
                fontWeight: "600",
                fontFamily: "Manrope",
                alignSelf: "flex-start",
                textAlign: "left",
              }}
            >
              {detail.value}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  const renderButton = () => {
    const submitReading = () => {
      setModalVisible((modalVisible) => !modalVisible);
      navigation.navigate("OnWork");
    };

    return (
      <>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() =>
            setModalVisible((modalVisible) => !modalVisible)
          }
        >
          <View
            style={{
              width: 327,
              height: 417,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              alignSelf: "center",
              marginTop: "auto",
              marginBottom: "auto",
              paddingHorizontal: 32,
              paddingTop: 32,
              paddingBottom: 23,
              elevation: 5,
              shadowColor: "rgba(0, 0, 0, 0.2)",
              shadowOffset: {
                width: 5,
                height: 50,
              },
              shadowRadius: 50,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "600",
                  fontSize: 16,
                  lineHeight: 16,
                  color: COLORS.text1000,
                }}
              >
                Speedometer Reading
              </Text>
              <ModalClose
                onPress={() => setModalVisible((modalVisible) => !modalVisible)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <TextInput
                style={{
                  width: 203,
                  height: 48,
                  backgroundColor: "rgba(18, 130, 57, 0.05)",
                  borderRadius: SIZES.borderRadius,
                  borderWidth: 0.5,
                  borderColor: COLORS.success300,
                }}
                placeholder="Speedometer reading"
                textAlign="center"
                keyboardType="number-pad"
              />
              <View
                style={{
                  width: 48,
                  height: 48,
                  backgroundColor: COLORS.success200,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: SIZES.borderRadius,
                }}
              >
                <Image source={images.camera} />
              </View>
            </View>
            <Text
              style={{
                color: COLORS.text400,
                ...FONTS.caption,
                fontWeight: "600",
                fontFamily: "Manrope",
                marginTop: 8,
              }}
            >
              Current: 20,811mi (2 days ago)
            </Text>

            <View style={{ marginTop: 24 }}>
              <Text
                style={{
                  color: COLORS.primary,
                  ...FONTS.body3,
                  fontWeight: "600",
                  fontFamily: "Manrope",
                }}
              >
                Remarks (optional)
              </Text>

              <TextInput
                style={{
                  width: 263,
                  height: 141,
                  borderRadius: SIZES.borderRadius,
                  borderWidth: 0.5,
                  borderColor: COLORS.success300,
                  backgroundColor: "#F3F9F5",
                  marginTop: 6,
                }}
              />
            </View>

            <Pressable
              style={{
                width: 181,
                height: 48,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.success,
                borderRadius: SIZES.borderRadius,
                position: "absolute",
                bottom: 32,
                alignSelf: "center",
              }}
              onPress={submitReading}
            >
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.body3,
                  fontFamily: "Manrope",
                  fontWeight: "600",
                }}
              >
                Submit Reading
              </Text>
            </Pressable>
          </View>
        </Modal>
        <TouchableOpacity
          onPress={() => setModalVisible((modalVisible) => !modalVisible)}
          style={{
            width: 145,
            height: 48,
            backgroundColor: COLORS.success,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: SIZES.borderRadius,
            position: "absolute",
            marginTop: 40,
            bottom: 40,
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontFamily: "Manrope",
              ...FONTS.body3,
              fontWeight: "600",
            }}
          >
            Start
          </Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <DashboardHeader title="Work Details" />

      <View
        style={{
          paddingHorizontal: 24,
          width: 327,
          height: 552,
          borderRadius: SIZES.borderRadius * 2,
          borderWidth: 1,
          borderColor: COLORS.text100,
          alignSelf: "center",
          marginTop: 32,
          marginBottom: 31,
        }}
      >
        {/* Work Status */}
        {renderWorkStatus()}

        {/* Detail Image */}
        {renderImage()}

        {/* WorkDetails */}
        {renderDetails()}

        {/* Button */}
        {renderButton()}
      </View>
    </View>
  );
};

export default WorkDetails;
