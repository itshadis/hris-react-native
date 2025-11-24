import UserIcon from "@/assets/images/avatar.png";
import IdulFitriImg from "@/assets/images/baner-idul-fitri.png";
import NatalImg from "@/assets/images/baner-natal.png";
import Card from "@/components/Card";
import ProgressBarChart from "@/components/charts/ProgressBar";
import RoundIcon from "@/components/RoundIcon";
import { Feather, Fontisto, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {

  const inset = useSafeAreaInsets()

  return (
    <View style={{ marginTop: inset.top }}>
      <ScrollView className="bg-[#f0f0f0]">
        {/* Hero Section */}
        <LinearGradient
          colors={['#011f57', '#367dad']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <View className="flex flex-row gap-5 p-4">
            <View className="pb-6 gap-3">
              <View className="flex flex-row justify-between items-center mb-6">
                <Text className="text-white text-3xl font-medium">Good Morning</Text>
                <View>
                  <Fontisto name="bell" color="white" size={16} />
                </View>
              </View>
              <View className='flex flex-row'>
                {/* User Section */}
                <View className='w-1/2 flex flex-row gap-4'>
                  <Image source={UserIcon} className="size-14" />
                  <View>
                    <Text className="text-white text-xl font-bold">Tester</Text>
                    <Text className="text-white">Programmer</Text>
                  </View>
                </View>
                {/* End User Section */}
                
                {/* Date Section */}
                <View className="w-1/2 items-end">
                  <Text className="text-white font-medium">Kamis, 20 Nov 2025</Text>
                </View>
                {/* End Date Section */}
              </View>
              <View />

              {/* Present Section */}
              <View className="border rounded-3xl border-white px-8 py-4 gap-4 bg-white/20">
                <View className="flex flex-row justify-between border-b border-white pb-2">
                  <View className="items-center w-1/2">
                    <Text className="text-white text-lg font-medium">Absen Masuk</Text>
                  </View>
                  <View className="items-center w-1/2">
                    <Text className="text-white text-lg font-medium">Absen Keluar</Text>
                  </View>
                </View>

                <View className="flex flex-row justify-center items-center">
                  <View className="items-center w-1/2">
                    <Text className="text-white text-xl font-bold">08:50:25</Text>
                  </View>
                  <View className="items-center w-1/2">
                    <Text className="text-white text-xl font-bold">08:50:25</Text>
                  </View>
                </View>
                
                <View className="flex flex-row justify-center items-center">
                  <View className="items-center w-1/2">
                  <TouchableOpacity className="bg-cyan-500 px-6 py-2 border-[1px] border-cyan-300 rounded-full flex flex-row items-center gap-2">
                      <Feather name="log-in" color="white" size={16} />
                      <Text className="text-white">Clock In</Text>
                    </TouchableOpacity>
                  </View>
                  <View className="items-center w-1/2">
                    <TouchableOpacity className="bg-cyan-500 px-6 py-2 border-[1px] border-cyan-300 rounded-full flex flex-row gap-2">
                      <Feather name="log-out" color="white" size={16} />
                      <Text className="text-white">Clock Out</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* End Present Section */}
            </View>
          </View>
        </LinearGradient>
        {/* End Hero Section */}
        
        {/* Body Section */}
        <View className="bottom-6 bg-[#f0f0f0] h-fit rounded-t-3xl p-4 gap-4">
          {/* Time Off Section */}
          <Card title="Time Off Saya">
            <View className="gap-4 mt-4">
              <ProgressBarChart label="Cuti Tahunan" key="cuti-tahunan" target={12} realisasi={5} />
              <ProgressBarChart label="Cuti Sakit" key="cuti-sakit" target={12} realisasi={5} />
              <View className="bg-[#f0f0f0] flex flex-row gap-3 rounded-xl p-3">
                <View className="">
                  <RoundIcon
                    color="green"
                    icon={<MaterialCommunityIcons name="airplane" size={18} color="green" />}
                  />
                </View>
                <View>
                  <Text className="text-sm font-bold">Cuti Yang Akan Datang</Text>
                  <Text className="text-sm text-neutral-600">Cuti Tahunan: 30 Desember 2025</Text>
                </View>
              </View>
            </View>
          </Card>
          {/* End Time Off Section */}

          {/* Pengumumam Section */}
          <Card 
            title="Pengumuman" 
            classname="gap-4"
            sideNode={
              <TouchableOpacity>
                <Text className="text-red-700 text-sm font-semibold">Lihat Semua</Text>
              </TouchableOpacity>
            }
          >
            <View className="p-4 border border-neutral-300 rounded-xl gap-2">
              <View className="flex-row justify-between items-center">
                <Text className="font-bold text-base">Libur Hari Raya Idul Fitri</Text>
                <Text className="text-neutral-500 text-sm">10 April 2025</Text>
              </View>
              <View className="h-52 w-auto">
                <Image source={IdulFitriImg} className="flex-1 w-full h-full" resizeMode="contain" />
              </View>
                <Text className="line-clamp-3 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore quisquam numquam, nesciunt rerum saepe facilis atque reiciendis molestias facere, dicta suscipit doloremque ratione natus repellendus minus id maxime ad maiores culpa quaerat. Ipsa voluptatibus quaerat sunt laborum sint necessitatibus fugit autem repellendus mollitia, perspiciatis, assumenda maiores asperiores, veniam possimus!</Text>
            </View>

            <View className="p-4 border border-neutral-300 rounded-xl gap-2">
              <View className="flex-row justify-between items-center">
                <Text className="font-bold text-base">Libur Natal</Text>
                <Text className="text-neutral-500 text-sm">20 Desember 2025</Text>
              </View>
              <View className="h-52 w-auto">
                <Image source={NatalImg} className="flex-1 w-full h-full" resizeMode="contain" />
              </View>
              <Text className="line-clamp-3 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore quisquam numquam, nesciunt rerum saepe facilis atque reiciendis molestias facere, dicta suscipit doloremque ratione natus repellendus minus id maxime ad maiores culpa quaerat. Ipsa voluptatibus quaerat sunt laborum sint necessitatibus fugit autem repellendus mollitia, perspiciatis, assumenda maiores asperiores, veniam possimus!</Text>
            </View>

            <View className="p-4 border border-neutral-300 rounded-xl gap-2">
              <View className="flex-row justify-between items-center">
                <Text className="font-bold text-base">Libur Tahun Baru</Text>
                <Text className="text-neutral-500 text-sm">28 Desember 2025</Text>
              </View>
              <Text className="line-clamp-3 text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tempore quisquam numquam, nesciunt rerum saepe facilis atque reiciendis molestias facere, dicta suscipit doloremque ratione natus repellendus minus id maxime ad maiores culpa quaerat. Ipsa voluptatibus quaerat sunt laborum sint necessitatibus fugit autem repellendus mollitia, perspiciatis, assumenda maiores asperiores, veniam possimus!</Text>
            </View>
          </Card>
          {/* End Pengumumam Section */}
        </View>
        {/* End Body Section */}

      </ScrollView>
    </View>
  );
}