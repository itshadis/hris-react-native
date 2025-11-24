import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type Props = {
  target: number;
  realisasi: number;
  label: string;
};

export default function ProgressBarChart({ target, realisasi, label }: Props) {
  const maxValue = Math.max(target, realisasi, 1);

  const [realisasiWidth, setRealisasiWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRealisasiWidth((realisasi / maxValue) * 100);
    }, 100);

    return () => clearTimeout(timeout);
  }, [target, realisasi, maxValue]);

  return (
    <View style={{ flexDirection: "column", gap: 2 }}>
      <View className="flex flex-row justify-between items-start">
        <Text>{label}</Text>
        <Text>{realisasi + "/" + target} Hari</Text>
      </View>
      <View style={{ flexDirection: "column", gap: 4 }}>
        <View
          style={{
            height: 10,
            width: "100%",
            borderRadius: 100,
            overflow: "hidden",
            backgroundColor: "#e3e3e3",
          }}
        >
          <View
            style={{
              height: "100%",
              width: `${realisasiWidth}%`,
              backgroundColor: "#246b9c",
              borderRadius: 100,
            }}
          />
        </View>
      </View>
    </View>
  );
}
