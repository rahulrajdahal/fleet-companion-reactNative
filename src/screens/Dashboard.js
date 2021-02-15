import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { VictoryPie } from "victory-native";
import { TimeCard, WorkCard } from "../components";
import { FONTS, COLORS, SIZES } from "../constants";
import { Logo, Menu, Chat, Plus } from "../constants/icons";

const Dashboard = () => {
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
          marginTop: 32,
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
            height={190}
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
    return (
      <View
        style={{
          width: 327,
          height: 217,
          backgroundColor: "rgba(18, 130, 57, 0.05)",
          borderRadius: SIZES.borderRadius,
          marginTop: 15,
          padding: 20,
        }}
      >
        <Text>BarChart</Text>
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

  function renderWorkCard() {
    return (
      <>
        <WorkCard />
        <WorkCard inProgress />
        <WorkCard />
      </>
    );
  }

  function renderFAB() {
    return (
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
          bottom: 109,
          elevation: 3,
          shadowColor: "rgba(18, 130, 57, 0.3)",
          shadowOffset: {
            width: 15,
            height: 50,
          },
          shadowRadius: 50,
        }}
        onPress={() => console.log("Add")}
      >
        <Plus />
      </TouchableOpacity>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
      }}
    >
      {/* Navbar  */}
      {renderNavbar()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PieChart */}
        {renderPieChart()}

        {/* BarChart */}
        {renderBarChart()}

        {/* Time Card */}
        {renderTimeCard()}

        {/* Work Card */}
        {renderWorkCard()}
      </ScrollView>
      {/* Floating Action Button */}
      {renderFAB()}
    </View>
  );
};

export default Dashboard;
