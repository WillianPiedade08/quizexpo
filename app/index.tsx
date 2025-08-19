import { View, Text } from "react-native";
import { Button } from "@react-navigation/elements";
import { useRouter } from "expo-router";

export default function Inicio() {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      {/* Header azul */}
      <View style={{
        width: "100%",
        paddingVertical: 18,
        paddingHorizontal: 12,
        backgroundColor: "#b8b8b8ff",
        elevation: 4,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 2,
      }}>
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
          Quiz React - Início
        </Text>
      </View>
      {/* Conteúdo */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo ao Quiz!</Text>
        <Button onPress={() => router.replace("/atividade1")}>Começar</Button>
      </View>
    </View>
  );
}