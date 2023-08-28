import { Tabs } from "expo-router";
import { Label, Icon } from "../../components/Screen";

export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          padding: 16,
          height: 90,
          paddingVertical: 16,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {/* Home Screen */}

      <Tabs.Screen
        name="home/index"
        options={{
          tabBarLabel(props) {
            return <Label label="Home" props={props} />;
          },
          tabBarIcon(props) {
            return <Icon icon="ios-home" props={props} />;
          },
        }}
      />
      <Tabs.Screen
        name="account/index"
        options={{
          tabBarLabel(props) {
            return <Label label="Account" props={props} />;
          },
          tabBarIcon(props) {
            return <Icon icon="ios-person" props={props} />;
          },
        }}
      />
      <Tabs.Screen
        name="wishlist/index"
        options={{
          tabBarLabel(props) {
            return <Label label="Wishlist" props={props} />;
          },
          tabBarIcon(props) {
            return <Icon icon="ios-bookmark" props={props} />;
          },
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          tabBarLabel(props) {
            return <Label label="Cart" props={props} />;
          },
          tabBarIcon(props) {
            return <Icon icon="ios-cart" props={props} />;
          },
        }}
      />
    </Tabs>
  );
};
