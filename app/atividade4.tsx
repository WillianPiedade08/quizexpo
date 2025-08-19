import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { questoes } from "../assets/mockups/posts";

export default function Atv4() {
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const router = useRouter();

  function responder(idx: number) {
    setSelecionada(idx);
    setTimeout(() => {
      if (idx + 1 === questoes[3].certa) {
        router.replace("/result");
      } else {
        router.replace("/");
      }
    }, 800);
  }

  return (
    <View style={{ flex: 1 }}>
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
          Quiz React - Questão 4
        </Text>
      </View>
      {/* Conteúdo */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{questoes[3].pergunta}</Text>
        {questoes[3].respostas.map((resp, idx) => (
          <TouchableOpacity
            key={idx}
            style={{
              backgroundColor:
                selecionada === idx
                  ? idx + 1 === questoes[3].certa
                    ? "#b8b8b8ff"
                    : "#a3a3a3ff"
                  : "#eee",
              padding: 10,
              margin: 5,
              borderRadius: 5,
              width: 200,
              alignItems: "center",
            }}
            disabled={selecionada !== null}
            onPress={() => responder(idx)}
          >
            <Text style={{ color: selecionada === idx ? "#fff" : "#222" }}>{resp}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}