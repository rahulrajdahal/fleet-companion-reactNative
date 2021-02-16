import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { BarChart } from "react-native-chart-kit";
import {
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryTheme,
} from "victory-native";
import { TimeCard, WorkCard } from "../components";
import { FONTS, COLORS, SIZES } from "../constants";
import { Logo, Menu, Chat, Plus, ModalClose } from "../constants/icons";
import TopTabNavigator from "../navigations/TopTabNavigator";

const Dashboard = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  function renderNavbar() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 36,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginRight: 228.08,
            alignSelf: "flex-start",
          }}
        >
          <Menu style={{ marginRight: 14 }} />
          <Logo width="33.59" height="24" />
        </View>
        <View
          style={{
            width: 10,
            height: 10,
            backgroundColor: COLORS.danger,
            borderRadius: 10,
            bottom: 9,
            left: 27,
            zIndex: 1,
          }}
        />
        <Chat style={{ alignSelf: "flex-end" }} />
      </View>
    );
  }

  function renderPieChart() {
    const data = [
      {
        _id: 1,
        name: "Open",
        x: "Open",
        y: 50,
        color: COLORS.info,
      },
      {
        _id: 2,
        name: "In Progress",
        x: "In Progress",
        y: 30,
        color: COLORS.info400,
      },
      {
        _id: 3,
        name: "Completed",
        x: "Completed",
        y: 20,
        color: COLORS.info300,
      },
    ];

    return (
      <View
        style={{
          width: 327,
          height: 177,
          backgroundColor: "rgba(21, 72, 191, 0.05)",
          borderRadius: SIZES.borderRadius,
          paddingTop: 20,
          paddingLeft: 16,
          paddingRight: 52,
          paddingBottom: 11.68,
        }}
      >
        <Text
          style={{
            color: COLORS.text800,
            fontFamily: "Manrope",
            fontSize: 16,
            lineHeight: 16,
            fontWeight: "600",
          }}
        >
          Works
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <VictoryPie
            data={data}
            colorScale={data.map((item) => item.color)}
            width={200}
            height={200}
            innerRadius={20}
            style={{
              labels: { fill: "none" },
              parent: {
                position: "absolute",
                alignSelf: "center",
                right: 41,
                bottom: 32.68,
              },
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-evenly",
              marginBottom: 44,
            }}
          >
            {data.map((item) => (
              <View
                key={item._id}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: 14,
                    height: 14,
                    backgroundColor: item.color,
                    borderRadius: SIZES.borderRadius / 2,
                    marginRight: 6,
                  }}
                />
                <Text>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    );
  }

  function renderBarChart() {
    const barChartData = [
      { label: "Jan", data: "500" },
      { label: "Feb", data: "1k" },
      { label: "Mar", data: "1.5K" },
      { label: "Apr", data: "2K" },
      { label: "May", data: "2.5K" },
      { label: "Jun", data: "3K" },
    ];

    return (
      <View
        style={{
          width: 327,
          height: 217,
          backgroundColor: "rgba(18, 130, 57, 0.05)",
          borderRadius: SIZES.borderRadius,
          marginTop: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: COLORS.text800,
              fontFamily: "Manrope",
              fontWeight: "600",
              fontSize: 16,
              lineHeight: 16,
            }}
          >
            Expenses
          </Text>
          <Text>Expenses</Text>
        </View>
        <VictoryChart
          theme={VictoryTheme.material}
          domainPadding={{ x: 20 }}
          width={SIZES.width - 40}
          height={SIZES.height * 0.25}
        >
          <VictoryBar
            data={barChartData}
            x="label"
            y="data"
            alignment="middle"
            barWidth={SIZES.width * 0.05}
            cornerRadius={5}
            style={{
              data: { fill: COLORS.success },
              labels: { fill: "none" },
            }}
          />
        </VictoryChart>
      </View>
    );
  }

  function renderTimeCard() {
    return (
      <View
        style={{
          marginTop: 15,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TimeCard
          backgroundColor="rgba(237, 138, 0, 0.05)"
          textColor={COLORS.warning}
          caption="This Week"
          body="08hr 15m"
        />
        <View style={{ width: 15 }} />
        <TimeCard
          backgroundColor="rgba(201, 24, 39, 0.05)"
          textColor={COLORS.danger}
          caption="This Month"
          body="35hr 48m"
        />
      </View>
    );
  }

  function renderFAB() {
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
              height: 195,
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
                Create Work
              </Text>
              <ModalClose
                onPress={() => setModalVisible((modalVisible) => !modalVisible)}
              />
            </View>
            <Text
              style={{
                marginTop: 12,
                width: 239,
                color: COLORS.text500,
                ...FONTS.body3,
                lineHeight: 20,
              }}
            >
              You are about to create a new work. Are you sure?
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 24,
              }}
            >
              <Pressable
                onPress={() => setModalVisible((modalVisible) => !modalVisible)}
              >
                <Text>Cancel</Text>
              </Pressable>
              <Pressable
                style={{
                  width: 181,
                  height: 48,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.success,
                  borderRadius: SIZES.borderRadius,
                }}
                onPress={() => setModalVisible((modalVisible) => !modalVisible)}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.body3,
                    fontFamily: "Manrope",
                    fontWeight: "600",
                  }}
                >
                  Yes, Create Work
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={{
            width: 56,
            height: 56,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.success,
            borderRadius: 50,
            position: "absolute",
            right: 24,
            bottom: 24,
            elevation: 3,
            shadowColor: "rgba(18, 130, 57, 0.3)",
            shadowOffset: {
              width: 15,
              height: 50,
            },
            shadowRadius: 50,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Plus />
        </TouchableOpacity>
      </>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: modalVisible ? "rgba(2, 14, 38, 0.15)" : COLORS.white,
        paddingHorizontal: 24,
      }}
    >
      {/* Navbar  */}
      {renderNavbar()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 32 }}
      >
        {/* PieChart */}
        {renderPieChart()}

        {/* BarChart */}
        {renderBarChart()}

        {/* Time Card */}
        {renderTimeCard()}

        <View style={{ width: 327 }}>
          <TopTabNavigator />
        </View>
      </ScrollView>
      {/* Floating Action Button */}
      {renderFAB()}
    </View>
  );
};

export default Dashboard;
