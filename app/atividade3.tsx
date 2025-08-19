import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { questoes } from "../assets/mockups/posts";

export default function Atv3() {
  const [selecionada, setSelecionada] = useState<number | null>(null);
  const router = useRouter();

  function responder(idx: number) {
    setSelecionada(idx);
    setTimeout(() => {
      if (idx + 1 === questoes[2].certa) {
        router.replace("/atividade4");
      } else {
        router.replace("/");
      }
    }, 800);
  }

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
          Quiz React - Questão 3
        </Text>
      </View>
      {/* Conteúdo */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{questoes[2].pergunta}</Text>
        {questoes[2].respostas.map((resp, idx) => (
          <TouchableOpacity
            key={idx}
            style={{
              backgroundColor:
                selecionada === idx
                  ? idx + 1 === questoes[2].certa
                    ? "#1976d2"
                    : "#90caf9"
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