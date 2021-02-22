import React from "react";
import {
  Text,
  View,
  Image,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-community/picker";
import { COLORS, SIZES, FONTS, images } from "../../constants";
import { LargeButton } from "../../components";
import { Logo, Menu, Chat, Plus, ModalClose } from "../../constants/icons";

const VehicleSelection = () => {
  const [selectedValue, setSelectedValue] = React.useState("Ford Pickup ‘85");

  const [modalVisible, setModalVisible] = React.useState(false);
  function renderDropDown() {
    return (
      <View>
        <Text
          style={{
            ...FONTS.body3,
            marginTop: 40,
            fontFamily: "Manrope",
            fontWeight: "600",
            color: COLORS.primary,
          }}
        >
          Select a Vehicle
        </Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={{
            backgroundColor: "rgba(18, 130, 57, 0.05)",
            color: COLORS.primary500,
            width: 327,
            borderRadius: SIZES.borderRadius,
            marginTop: 6,
          }}
        >
          <Picker.Item
            label="Ford Pickup ‘85"
            value="fordpickup85"
            color={COLORS.primary500}
          />
          <Picker.Item label="China" value="china" color={COLORS.primary500} />
          <Picker.Item label="India" value="india" color={COLORS.primary500} />
          <Picker.Item label="UK" value="uk" color={COLORS.primary500} />
        </Picker>

        <Image
          source={images.ford_pickup}
          style={{ alignSelf: "center", marginTop: 20 }}
        />
      </View>
    );
  }

  function renderVehicleDetails() {
    const vehicleDetails = [
      {
        _id: 1,
        title: "Rego Number",
        data: "FRD85",
      },
      {
        _id: 2,
        title: "Year",
        data: "1985",
      },
      {
        _id: 3,
        title: "Rego Expiry Date",
        data: "2021/09/30",
      },
      {
        _id: 4,
        title: "Fleet Weight",
        data: "-",
      },
      {
        _id: 5,
        title: "Make",
        data: "Ford Classic",
      },
      {
        _id: 6,
        title: "Model",
        data: "Pickup'85",
      },
      {
        _id: 7,
        title: "Fuel Type",
        data: "-",
      },
    ];

    return (
      <View style={{ marginTop: 22 }}>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.body3,
            fontFamily: "Manrope",
            fontWeight: "bold",
          }}
        >
          Vehicle Details
        </Text>

        {vehicleDetails.map((vehicleDetail) => (
          <View
            key={vehicleDetail._id}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.text700,
                fontFamily: "Manrope",
                marginTop: 2,
              }}
            >
              {vehicleDetail.title}
            </Text>
            <Text
              style={{
                ...FONTS.body3,
                color: COLORS.text700,
                fontFamily: "Manrope",
                fontWeight: "500",
                marginTop: 2,
                alignSelf: "flex-start",
              }}
            >
              {vehicleDetail.data}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  function renderConfirmButton() {
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
              height: 272,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              alignSelf: "center",
              marginTop: "auto",
              marginBottom: "auto",
              paddingHorizontal: 32,
              padding: 32,
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
                Confirm Reg. Number
              </Text>
              <ModalClose
                onPress={() => setModalVisible((modalVisible) => !modalVisible)}
              />
            </View>
            <Text
              style={{
                marginTop: 12,
                width: 263,
                color: COLORS.text500,
                ...FONTS.body3,
                lineHeight: 20,
              }}
            >
              Please confrim the Registration No. of the Vehicle before
              proceeding.
            </Text>

            <View
              style={{
                marginTop: 12,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: 263,
                height: 48,
                backgroundColor: "rgba(18, 130, 57, 0.05)",
                borderRadius: SIZES.borderRadius,
                padding: 17,
                alignItems: "center",
              }}
            >
              <Text>Rego Number</Text>
              <Text>FRD85</Text>
            </View>

            <Pressable
              style={{
                width: 181,
                height: 48,
                marginVertical: 32,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.success,
                borderRadius: SIZES.borderRadius,
              }}
              onPress={() => console.log("Confirm")}
            >
              <Text
                style={{
                  color: COLORS.white,
                  ...FONTS.body3,
                  fontFamily: "Manrope",
                  fontWeight: "600",
                }}
              >
                Confirm Reg. Number
              </Text>
            </Pressable>
          </View>
        </Modal>

        <LargeButton
          text="Confirm Vehicle"
          color={COLORS.success}
          textColor={COLORS.white}
          style={{ marginTop: 40, marginBottom: 40 }}
          onPress={() => setModalVisible(true)}
        />
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: modalVisible ? "rgba(2, 14, 38, 0.15)" : COLORS.white,
        paddingHorizontal: 24,
      }}
    >
      {/* Vehicle TropDown */}
      {renderDropDown()}

      {/* Vehicle Details */}
      {renderVehicleDetails()}

      {/* Confirm Button */}
      {renderConfirmButton()}
    </View>
  );
};

export default VehicleSelection;
