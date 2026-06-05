import { useState } from "react";

const days = [
  {
    day: "SENIN",
    label: "Push + Chest & Shoulder",
    theme: "#FF6B35",
    icon: "💪",
    type: "workout",
    focus: "Dada · Bahu · Triceps",
    goal: "Bangun massa dada & bahu lebar — visual aesthetic paling impactful",
    warmup: "Shoulder circles 30 detik, Wrist circles, Scapular push-up 10 reps, Arm swings",
    exercises: [
      { name: "Scapular Push-Up", sets: "3", reps: "10", note: "Aktifkan scapula & sehat bahu. Wajib sebelum push.", category: "Activation" },
      { name: "Push-Up", sets: "4", reps: "8–12", note: "Tubuh satu garis lurus, siku 45°. Fondasi semua push.", category: "Main" },
      { name: "Wide Push-Up", sets: "3", reps: "10–12", note: "Siku lebar → fokus dada luar. Chest width & shape.", category: "Hypertrophy" },
      { name: "DB Floor Press", sets: "4", reps: "8–12", note: "Berbaring di lantai, tekan dumbbell ke atas. Floor press aman untuk pemula.", category: "DB Mass" },
      { name: "DB Dumbbell Flyes (lantai)", sets: "3", reps: "12–15", note: "Buka tangan lebar ke samping, tutup di atas. Stretch & kontraksi dada penuh.", category: "DB Mass" },
      { name: "Pike Push-Up", sets: "3", reps: "8–10", note: "Badan V, fokus bahu. Progression handstand push-up.", category: "Shoulder" },
      { name: "DB Lateral Raise", sets: "3", reps: "12–15", note: "Angkat dumbbell ke samping setinggi bahu. Bahu lebar = V-taper.", category: "DB Mass" },
      { name: "DB Overhead Press", sets: "3", reps: "10–12", note: "Tekan ke atas dari bahu. Massa bahu anterior & medial.", category: "DB Mass" },
      { name: "Diamond Push-Up", sets: "3", reps: "8–10", note: "Tangan berlian di dada. Triceps — lengan berisi.", category: "Triceps" },
      { name: "DB Tricep Kickback", sets: "3", reps: "12", note: "Siku tinggi, luruskan lengan ke belakang. Isolasi triceps.", category: "DB Mass" },
    ],
    cooldown: "Chest doorway stretch 45 detik, Tricep overhead stretch 30 detik/sisi, Child's pose 1 menit",
    skillTarget: "🎯 Calisthenics goal: Archer Push-Up → One-Arm Push-Up",
  },
  {
    day: "SELASA",
    label: "Pull + Back & Biceps",
    theme: "#4ECDC4",
    icon: "🏋️",
    type: "workout",
    focus: "Punggung · Biceps · Grip · Rear Delt",
    goal: "V-taper (punggung lebar) = tampilan badan paling aesthetic",
    warmup: "Dead hang 20 detik, Shoulder dislocates (handuk), Scapular retraction 10 reps",
    exercises: [
      { name: "Dead Hang", sets: "3", reps: "25–30 detik", note: "Grip + dekompresi tulang belakang. WAJIB tiap pull day.", category: "Activation" },
      { name: "Scapular Pull-Up", sets: "3", reps: "10", note: "Angkat bahu tanpa tekuk siku. Aktifkan lat sebelum pull penuh.", category: "Activation" },
      { name: "Negative Pull-Up", sets: "4", reps: "4–5 (5 detik turun)", note: "Naik pakai kursi, turun perlahan. Cara terbaik belajar pull-up.", category: "Main" },
      { name: "Australian Pull-Up (meja)", sets: "3", reps: "8–12", note: "Makin horizontal = makin susah. Tingkatkan perlahan.", category: "Main" },
      { name: "DB Bent-Over Row", sets: "4", reps: "10–12", note: "Punggung sejajar lantai, tarik dumbbell ke pinggang. Lat & mid-back.", category: "DB Mass" },
      { name: "DB Single-Arm Row", sets: "3", reps: "10–12/sisi", note: "Lutut & tangan di kursi, row satu sisi. Range lebih penuh.", category: "DB Mass" },
      { name: "DB Rear Delt Fly", sets: "3", reps: "12–15", note: "Bungkuk, angkat dumbbell ke samping. Rear delt = punggung atas berisi.", category: "DB Mass" },
      { name: "DB Bicep Curl", sets: "3", reps: "10–12", note: "Kontrol saat turun (eccentric) = pertumbuhan lebih baik.", category: "DB Mass" },
      { name: "DB Hammer Curl", sets: "3", reps: "10–12", note: "Telapak saling berhadapan. Brachialis & forearm — lengan tebal.", category: "DB Mass" },
      { name: "Hollow Body Hold", sets: "3", reps: "25–30 detik", note: "Rib cage turun, lower back flat. Dasar semua calisthenics.", category: "Skill Work" },
    ],
    cooldown: "Lat stretch gantung 20 detik, Bicep wall stretch 30 detik/sisi, Child's pose",
    skillTarget: "🎯 Calisthenics goal: Full Pull-Up → Chest-to-Bar → Muscle-Up",
  },
  {
    day: "RABU",
    label: "Legs + Glutes & Core",
    theme: "#FFE66D",
    icon: "🦵",
    type: "workout",
    focus: "Paha · Glutes · Betis · Core",
    goal: "Kaki berisi proporsional + core kuat = fondasi semua gerakan",
    warmup: "Hip circles 30 detik, Leg swings, Glute bridge 10 reps, Deep squat hold 30 detik",
    exercises: [
      { name: "Bodyweight Squat", sets: "3", reps: "15–20", note: "Full depth. Fondasi semua gerakan kaki. Aktifkan quad & glutes.", category: "Activation" },
      { name: "DB Goblet Squat", sets: "4", reps: "10–12", note: "Pegang dumbbell di dada. Squat dalam, upright torso. Quad & glute massa.", category: "DB Mass" },
      { name: "DB Romanian Deadlift", sets: "4", reps: "10–12", note: "Punggung rata, dumbbell di depan paha, turun sambil dorong pinggul ke belakang.", category: "DB Mass" },
      { name: "Bulgarian Split Squat", sets: "3", reps: "8–10/kaki", note: "Kaki belakang di kursi. Salah satu latihan terbaik untuk kaki.", category: "Main" },
      { name: "DB Lunges", sets: "3", reps: "10/kaki", note: "Pegang dumbbell di samping. Langkah ke depan, lutut belakang hampir lantai.", category: "DB Mass" },
      { name: "DB Sumo Squat", sets: "3", reps: "12–15", note: "Kaki lebar, jari kaki keluar 45°. Inner thigh & glute.", category: "DB Mass" },
      { name: "Single-Leg Calf Raise", sets: "3", reps: "15/kaki", note: "Di tepi tangga, full range. Betis defined = kaki lengkap.", category: "Hypertrophy" },
      { name: "L-Sit Hold", sets: "3", reps: "5–15 detik", note: "Kaki diangkat dari lantai. Core + hip flexor + triceps.", category: "Skill Work" },
      { name: "Plank Variations", sets: "3", reps: "35–45 detik", note: "Standard → side kiri → side kanan. Core 360°.", category: "Core" },
      { name: "DB Weighted Crunch", sets: "3", reps: "15", note: "Pegang dumbbell di dada saat crunch. Abs berisi & defined.", category: "DB Mass" },
    ],
    cooldown: "Hip flexor lunge stretch 45 detik/sisi, Pigeon pose 45 detik/sisi, Hamstring stretch",
    skillTarget: "🎯 Calisthenics goal: Shrimp Squat → Pistol Squat",
  },
  {
    day: "KAMIS",
    label: "Flexibility & Mobility",
    theme: "#A8E6CF",
    icon: "🧘",
    type: "rest",
    focus: "Kelenturan · Mobilitas · Recovery",
    goal: "Buka range of motion untuk skill calisthenics yang lebih rumit",
    restSections: [
      {
        title: "🌅 MORNING FLOW (10 menit)",
        color: "#FFE66D",
        items: [
          { name: "Cat-Cow", duration: "10 reps", note: "Mobilitas tulang belakang. Buka punggung pagi hari." },
          { name: "World's Greatest Stretch", duration: "5 reps/sisi", note: "Hip flexor + thoracic rotation. Satu gerakan, banyak manfaat." },
          { name: "Deep Squat Hold", duration: "60 detik", note: "Duduk jongkok sedalam mungkin. Ankle, hip, lower back." },
          { name: "Arm Circles + Cross-body Swing", duration: "30 detik/arah", note: "Panaskan bahu secara aktif." },
        ]
      },
      {
        title: "🤸 FLEXIBILITY SESSION (25–30 menit)",
        color: "#A8E6CF",
        items: [
          { name: "Jefferson Curl (tanpa beban)", duration: "5 reps, 3 set", note: "Gulung tulang belakang ke bawah perlahan. Hamstring + spine. SANGAT PELAN." },
          { name: "Pancake Stretch", duration: "3 × 45 detik", note: "Kaki lebar, condong ke depan. Penting untuk L-sit & front lever." },
          { name: "Pigeon Pose", duration: "60 detik/sisi", note: "Hip flexor dalam + glute. Kunci pistol squat yang dalam." },
          { name: "Couch Stretch", duration: "60 detik/sisi", note: "Kaki belakang di tembok, badan tegak. Hip flexor terdalam." },
          { name: "Pike Stretch (duduk)", duration: "3 × 45 detik", note: "Kaki lurus, raih ujung kaki. Hamstring — penting untuk L-sit." },
          { name: "Bridge / Wheel Pose", duration: "3 × 20 detik", note: "Buka dada & bahu anterior. Fondasi back handspring & skin the cat." },
          { name: "Shoulder Flexion Wall Stretch", duration: "2 × 45 detik", note: "Tangan di tembok setinggi pinggul, jongkok ke bawah. Buka lat & bahu." },
          { name: "Wrist Flexor/Extensor Stretch", duration: "30 detik/arah", note: "WAJIB untuk calisthenics — tangan tidak fleksibel = cedera planche." },
        ]
      },
      {
        title: "🌙 EVENING WIND-DOWN (10 menit)",
        color: "#C77DFF",
        items: [
          { name: "Supine Spinal Twist", duration: "60 detik/sisi", note: "Berbaring, lutut jatuh ke sisi. Dekompresi tulang belakang." },
          { name: "Happy Baby Pose", duration: "60 detik", note: "Pegang telapak kaki dari dalam, lutut ke dada. Buka hip." },
          { name: "Child's Pose", duration: "60 detik", note: "Rileks total. Tarik napas dalam, hembuskan perlahan." },
          { name: "Legs Up The Wall", duration: "2–5 menit", note: "Kaki di tembok, berbaring. Sirkulasi balik — recovery aktif terbaik." },
        ]
      }
    ],
    skillTarget: "🎯 Flexibility target: Full pike, Bridge, Pancake flat — fondasi skill advance",
  },
  {
    day: "JUMAT",
    label: "Skill + Full Body Strength",
    theme: "#C77DFF",
    icon: "⚡",
    type: "workout",
    focus: "Calisthenics Skill · Compound DB · Full Body",
    goal: "Kerjakan skill + compound movement untuk massa & kekuatan total",
    warmup: "Full body dynamic stretch 5 menit, Wrist prep, Shoulder warm-up",
    exercises: [
      { name: "Pull-Up / Negative Pull-Up (max)", sets: "5", reps: "semampu kamu", note: "Sesi utama pull-up. Kualitas > kuantitas.", category: "Main" },
      { name: "DB Arnold Press", sets: "4", reps: "10–12", note: "Rotasi dari telapak ke depan ke ke luar saat tekan. Semua kepala bahu aktif.", category: "DB Mass" },
      { name: "Dips (antara 2 kursi)", sets: "3", reps: "8–12", note: "Chest dips: condong ke depan. Tricep dips: tegak.", category: "Main" },
      { name: "DB Deadlift", sets: "4", reps: "10", note: "Dumbbell di sisi kaki, punggung rata, angkat dengan dorong lantai. Posterior chain full.", category: "DB Mass" },
      { name: "DB Farmer's Walk", sets: "3", reps: "30–40 langkah", note: "Pegang dumbbell di samping, jalan tegak. Grip + core + trap + postur.", category: "DB Mass" },
      { name: "Handstand Wall Hold", sets: "3", reps: "15–30 detik", note: "Chest to wall. Bangun shoulder strength + body awareness.", category: "Skill Work" },
      { name: "Tuck Front Lever Hold", sets: "3", reps: "5–10 detik", note: "Di pull-up bar, tarik badan horizontal. Progression front lever.", category: "Skill Work" },
      { name: "Dragon Flag (negatives)", sets: "3", reps: "3–5", note: "Naik dengan momentum, turun perlahan 5 detik. Core elite.", category: "Core Elite" },
    ],
    cooldown: "Wrist stretch, Full shoulder mobility, Spinal twist 45 detik/sisi",
    skillTarget: "🎯 Skill progression: Tuck → Advanced Tuck → Full Front Lever",
  },
  {
    day: "SABTU",
    label: "Upper Body Volume + Cardio",
    theme: "#FF8FA3",
    icon: "🔥",
    type: "workout",
    focus: "Volume Tinggi · Pump · Endurance · Definisi",
    goal: "High volume = muscle definition + endurance. Semua bagian atas disentuh.",
    warmup: "Jumping jacks 1 menit, jog di tempat 1 menit, arm swings",
    exercises: [
      { name: "Push-Up AMRAP", sets: "3", reps: "sebanyak mungkin", note: "Catat angkamu. Beat it next week.", category: "Benchmark" },
      { name: "Pull-Up / Row AMRAP", sets: "3", reps: "sebanyak mungkin", note: "Australian row jika belum bisa pull-up. Progress tetap jalan.", category: "Benchmark" },
      { name: "DB Renegade Row", sets: "3", reps: "8/sisi", note: "Push-up di dumbbell, lalu row satu tangan. Full upper body satu gerakan.", category: "Compound" },
      { name: "DB Shrug", sets: "3", reps: "15", note: "Angkat bahu ke atas dengan dumbbell. Trapezius — leher & bahu berisi.", category: "DB Mass" },
      { name: "DB Concentration Curl", sets: "3", reps: "12/sisi", note: "Siku di lutut. Puncak bicep peak — penting untuk lengan aesthetic.", category: "DB Mass" },
      { name: "DB Overhead Tricep Extension", sets: "3", reps: "12", note: "Satu dumbbell di atas kepala, turunkan ke belakang. Long head triceps.", category: "DB Mass" },
      { name: "Mountain Climbers", sets: "3", reps: "30 detik", note: "Cardio + core. Makin cepat = makin tinggi HR.", category: "Cardio" },
      { name: "Squat Jump", sets: "3", reps: "15", note: "Explosive. Mendarat lembut, langsung turun.", category: "Cardio" },
      { name: "Bear Crawl", sets: "3", reps: "15–20 meter", note: "Finisher. Seluruh tubuh aktif.", category: "Finisher" },
    ],
    cooldown: "Cool-down jalan 3 menit, full body static stretch 10 menit",
    skillTarget: "📊 Catat: push-up & pull-up hari ini vs minggu lalu. Progress?",
  },
  {
    day: "MINGGU",
    label: "Mobility & Mindful Rest",
    theme: "#C77DFF",
    icon: "🌿",
    type: "rest",
    focus: "Deep Stretch · Sendi · Mental Reset",
    goal: "Pulihkan sendi, buka mobilitas, siapkan tubuh untuk minggu baru",
    restSections: [
      {
        title: "🔁 JOINT MOBILITY CIRCUIT (15 menit)",
        color: "#4ECDC4",
        items: [
          { name: "Neck Circles (pelan)", duration: "5 reps/arah", note: "Mulai dari yang paling sederhana. Jangan di-crack paksa." },
          { name: "Shoulder 360° Rotation", duration: "10 reps/arah", note: "Bahu ke depan, atas, belakang, bawah. Full circle." },
          { name: "Thoracic Rotation (duduk)", duration: "10 reps/sisi", note: "Silang kaki, tangan di belakang kepala. Rotasi dada." },
          { name: "Hip 90/90 Stretch", duration: "60 detik/sisi", note: "Duduk dua kaki bengkok 90°. Penting untuk split & pistol squat." },
          { name: "Ankle Circles + Flexion", duration: "10 reps/arah/kaki", note: "Ankle kaku = squat buruk. Luangkan waktu untuk ini." },
          { name: "Wrist CARs", duration: "5 reps/arah", note: "Putar pergelangan tangan full range. Injury prevention untuk planche." },
        ]
      },
      {
        title: "🧘 DEEP FLEXIBILITY (20 menit)",
        color: "#C77DFF",
        items: [
          { name: "Straddle Sit + Side Reach", duration: "45 detik/sisi", note: "Kaki lebar, condong ke kiri & kanan. Buka inner thigh & oblique." },
          { name: "Standing Forward Fold", duration: "2 × 60 detik", note: "Kaki lurus, raih lantai. Rileks bahu, biarkan gravitasi bekerja." },
          { name: "Lizard Pose", duration: "60 detik/sisi", note: "Lunge dalam, tangan di lantai. Deep hip flexor + groin." },
          { name: "Doorway Chest Stretch", duration: "2 × 45 detik", note: "Siku 90° di kusen pintu, badan condong ke depan. Buka pecs." },
          { name: "Thread the Needle", duration: "45 detik/sisi", note: "Dari all-four, selipkan satu tangan ke bawah. Buka thoracic." },
          { name: "Seated Spinal Twist", duration: "60 detik/sisi", note: "Rotasi dalam sambil napas panjang. Detoks tulang belakang." },
        ]
      },
      {
        title: "📓 WEEKLY CHECK-IN (5 menit)",
        color: "#FFE66D",
        items: [
          { name: "Catat progress latihan", duration: "—", note: "Berapa push-up? Pull-up? Gerakan apa yang makin gampang?" },
          { name: "Cek berat badan", duration: "—", note: "Timbang pagi setelah bangun (sebelum makan). Naik 0.5–1kg/bulan = ideal." },
          { name: "Foto progress bulanan", duration: "—", note: "Foto bulan pertama vs sekarang. Perubahan nyata perlahan." },
          { name: "Set 1 target minggu depan", duration: "—", note: "+1 rep? Beban lebih berat? Plank lebih lama?" },
          { name: "Tidur lebih awal malam ini", duration: "—", note: "Persiapkan Senin dengan istirahat yang baik. Recovery = growth." },
        ]
      }
    ],
    skillTarget: "🎯 Flexibility goal: Hip 90/90 nyaman, forward fold tangan menyentuh lantai",
  },
];

const bulkingTips = [
  { icon: "📈", title: "Caloric Surplus", value: "+300–500 kkal/hari", desc: "Kamu butuh lebih banyak kalori dari yang dibakar. Hitung kebutuhan harianmu (~2000–2200 kkal) lalu tambah 300–500.", color: "#FF8FA3" },
  { icon: "🥚", title: "Protein", value: "80–100g/hari", desc: "Telur, ayam, tempe, tahu, susu, ikan. Spread sepanjang hari, bukan sekaligus.", color: "#4ECDC4" },
  { icon: "🍚", title: "Karbohidrat", value: "Prioritas tinggi", desc: "Nasi, ubi, oat, roti gandum. Karbo = bahan bakar otot + simpan glikogen. Jangan dipotong.", color: "#FFE66D" },
  { icon: "🥑", title: "Lemak Sehat", value: "Jangan skip", desc: "Alpukat, kacang, telur (kuning), minyak zaitun. Lemak = hormon anabolik (testosteron).", color: "#C77DFF" },
  { icon: "🥛", title: "Liquid Calories", value: "Trik untuk kurus", desc: "Susu full cream, smoothie pisang + susu + telur + oat. Gampang diminum, tinggi kalori.", color: "#FF6B35" },
  { icon: "⏰", title: "Frekuensi Makan", value: "4–5x sehari", desc: "Sarapan, makan siang, snack sore, makan malam, dan snack sebelum tidur.", color: "#A8E6CF" },
];

const mealPlan = [
  { waktu: "Pagi (07.00)", menu: "3 telur dadar + nasi + susu full cream segelas", kalori: "~600 kkal", protein: "~30g" },
  { waktu: "Snack (10.00)", menu: "Pisang 2 buah + kacang segenggam / roti + selai kacang", kalori: "~300 kkal", protein: "~8g" },
  { waktu: "Siang (13.00)", menu: "Nasi 2 centong + ayam/ikan + tahu/tempe + sayur", kalori: "~700 kkal", protein: "~35g" },
  { waktu: "Pre-Workout (16.00)", menu: "Pisang + telur rebus 2 butir", kalori: "~200 kkal", protein: "~14g" },
  { waktu: "Malam (19.00)", menu: "Nasi + protein + sayur (sama seperti siang)", kalori: "~700 kkal", protein: "~30g" },
  { waktu: "Sebelum Tidur (21.00)", menu: "Susu + telur rebus / tahu goreng", kalori: "~250 kkal", protein: "~15g" },
];

const progressionRoadmap = [
  { skill: "Pull-Up", color: "#4ECDC4", icon: "⬆️", steps: ["Dead Hang","Scapular Pull-Up","Negative Pull-Up","Assisted Pull-Up","Full Pull-Up","Chest-to-Bar","Muscle-Up"] },
  { skill: "Push-Up", color: "#FF6B35", icon: "⬇️", steps: ["Incline Push-Up","Push-Up","Wide / Diamond","Archer Push-Up","One-Arm Assisted","One-Arm Push-Up","Planche Push-Up"] },
  { skill: "Squat", color: "#FFE66D", icon: "🦵", steps: ["Bodyweight Squat","Split Squat","Bulgarian Squat","Shrimp Squat (assisted)","Pistol Squat","Weighted Pistol"] },
  { skill: "Flexibility", color: "#A8E6CF", icon: "🤸", steps: ["Touch Toes","Full Pike (duduk)","Bridge","Pancake Halfway","Pancake Flat","Front Split","Middle Split"] },
];

const categoryColors = {
  "Activation":"#888","Main":"#fff","Progression":"#FFE66D","Hypertrophy":"#FF8FA3",
  "Skill Work":"#C77DFF","Power":"#FF6B35","Core":"#4ECDC4","Core Elite":"#C77DFF",
  "Benchmark":"#FFE66D","Cardio":"#FF8FA3","Finisher":"#FF6B35","Shoulder":"#4ECDC4",
  "Triceps":"#FF6B35","Biceps":"#4ECDC4","Glutes":"#FF8FA3","Posterior":"#A8E6CF",
  "DB Mass":"#FF8FA3","Compound":"#C77DFF",
};

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState("schedule");
  const [completedExercises, setCompletedExercises] = useState({});
  const [completedRestItems, setCompletedRestItems] = useState({});

  const day = days[activeDay];

  const toggleExercise = (dayIdx, exIdx) => {
    const key = `${dayIdx}-${exIdx}`;
    setCompletedExercises(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleRestItem = (sectionIdx, itemIdx) => {
    const key = `${activeDay}-${sectionIdx}-${itemIdx}`;
    setCompletedRestItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getDayProgress = (dayIdx) => {
    const d = days[dayIdx];
    if (d.type === "workout") {
      if (!d.exercises || !d.exercises.length) return null;
      const done = d.exercises.filter((_, i) => completedExercises[`${dayIdx}-${i}`]).length;
      return Math.round((done / d.exercises.length) * 100);
    }
    if (d.type === "rest" && d.restSections) {
      const total = d.restSections.reduce((a, s) => a + s.items.length, 0);
      if (!total) return null;
      let done = 0;
      d.restSections.forEach((s, si) => s.items.forEach((_, ii) => {
        if (completedRestItems[`${dayIdx}-${si}-${ii}`]) done++;
      }));
      return Math.round((done / total) * 100);
    }
    return null;
  };

  return (
    <div style={{ minHeight:"100vh", background:"#0d0d10", fontFamily:"'Segoe UI',system-ui,sans-serif", color:"#f0f0f0", paddingBottom:80, maxWidth:480, margin:"0 auto" }}>
      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)", padding:"28px 20px 20px", textAlign:"center", borderBottom:"1px solid rgba(255,255,255,0.08)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.03, backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)" }} />
        <div style={{ fontSize:11, letterSpacing:4, color:"#666", textTransform:"uppercase", marginBottom:6 }}>Calisthenics + Dumbbell</div>
        <h1 style={{ margin:0, fontSize:26, fontWeight:900, letterSpacing:-1 }}>🏆 Body, Mass & Strength</h1>
        <p style={{ margin:"6px 0 0", color:"#888", fontSize:12 }}>Pemula · Bodyweight + Dumbbell · Aesthetic · Naik BB</p>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0 16px", position:"sticky", top:0, background:"#0d0d10", zIndex:10 }}>
        {[["schedule","📅 Jadwal"],["roadmap","🗺️ Roadmap"],["nutrition","🥗 Bulking"]].map(([tab,label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex:1, padding:"14px 4px", background:"transparent", border:"none", borderBottom:`2px solid ${activeTab===tab?"#fff":"transparent"}`, color:activeTab===tab?"#fff":"#555", fontSize:12, fontWeight:700, cursor:"pointer", transition:"all 0.2s" }}>{label}</button>
        ))}
      </div>

      {/* SCHEDULE TAB */}
      {activeTab === "schedule" && (
        <div>
          <div style={{ display:"flex", gap:6, padding:"16px 16px 0", overflowX:"auto", scrollbarWidth:"none" }}>
            {days.map((d,i) => {
              const progress = getDayProgress(i);
              const isActive = activeDay === i;
              return (
                <button key={i} onClick={() => setActiveDay(i)} style={{ flex:"0 0 auto", padding:"10px 12px", borderRadius:12, border:`2px solid ${isActive?d.theme:"rgba(255,255,255,0.07)"}`, background:isActive?`${d.theme}20`:"rgba(255,255,255,0.03)", color:isActive?d.theme:"#555", fontSize:10, fontWeight:800, cursor:"pointer", textAlign:"center", minWidth:54, position:"relative", transition:"all 0.2s" }}>
                  <div style={{ fontSize:16, marginBottom:2 }}>{d.icon}</div>
                  <div>{d.day.slice(0,3)}</div>
                  {progress !== null && (
                    <div style={{ position:"absolute", bottom:-4, left:"50%", transform:"translateX(-50%)", width:28, height:3, borderRadius:2, background:"rgba(255,255,255,0.08)", overflow:"hidden" }}>
                      <div style={{ width:`${progress}%`, height:"100%", background:d.theme, borderRadius:2, transition:"width 0.3s" }} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div style={{ padding:"20px 16px 0" }}>
            <div style={{ background:`linear-gradient(135deg,${day.theme}18,${day.theme}08)`, border:`1px solid ${day.theme}33`, borderRadius:16, padding:18, marginBottom:14 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
                <div style={{ fontSize:32 }}>{day.icon}</div>
                <div>
                  <div style={{ fontSize:10, color:day.theme, letterSpacing:2, textTransform:"uppercase", fontWeight:800 }}>{day.day} · {day.label}</div>
                  <div style={{ fontSize:18, fontWeight:900, letterSpacing:-0.5, marginTop:2 }}>{day.focus}</div>
                </div>
              </div>
              <div style={{ fontSize:12, color:"#aaa", background:"rgba(255,255,255,0.05)", padding:"8px 12px", borderRadius:8 }}>🎯 {day.goal}</div>
              {day.skillTarget && <div style={{ fontSize:11, color:day.theme, marginTop:8, opacity:0.8 }}>{day.skillTarget}</div>}
              {getDayProgress(activeDay) !== null && (
                <div style={{ marginTop:12 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#666", marginBottom:5 }}>
                    <span>Progress hari ini</span>
                    <span style={{ color:day.theme, fontWeight:700 }}>{getDayProgress(activeDay)}%</span>
                  </div>
                  <div style={{ height:5, background:"rgba(255,255,255,0.07)", borderRadius:3, overflow:"hidden" }}>
                    <div style={{ width:`${getDayProgress(activeDay)}%`, height:"100%", background:`linear-gradient(90deg,${day.theme},${day.theme}88)`, borderRadius:3, transition:"width 0.3s" }} />
                  </div>
                </div>
              )}
            </div>

            {/* REST DAY */}
            {day.type === "rest" && day.restSections && (
              <div>
                {day.restSections.map((section,si) => (
                  <div key={si} style={{ marginBottom:16 }}>
                    <div style={{ fontSize:11, fontWeight:800, color:section.color, marginBottom:10, letterSpacing:0.5 }}>{section.title}</div>
                    {section.items.map((item,ii) => {
                      const key = `${activeDay}-${si}-${ii}`;
                      const done = !!completedRestItems[key];
                      return (
                        <div key={ii} onClick={() => toggleRestItem(si,ii)} style={{ background:done?`${section.color}15`:"rgba(255,255,255,0.03)", border:`1px solid ${done?section.color+"44":"rgba(255,255,255,0.06)"}`, borderRadius:12, padding:"12px 14px", marginBottom:7, cursor:"pointer", transition:"all 0.2s", display:"flex", gap:10, alignItems:"flex-start" }}>
                          <div style={{ width:20, height:20, borderRadius:5, flexShrink:0, marginTop:2, border:`2px solid ${done?section.color:"#444"}`, background:done?section.color:"transparent", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:done?"#000":"transparent", fontWeight:900, transition:"all 0.2s" }}>✓</div>
                          <div style={{ flex:1 }}>
                            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8, marginBottom:4, flexWrap:"wrap" }}>
                              <span style={{ fontSize:13, fontWeight:700, color:done?"#666":"#f0f0f0", textDecoration:done?"line-through":"none" }}>{item.name}</span>
                              {item.duration !== "—" && <span style={{ background:`${section.color}22`, color:section.color, padding:"2px 8px", borderRadius:20, fontSize:10, fontWeight:700, flexShrink:0 }}>{item.duration}</span>}
                            </div>
                            <div style={{ fontSize:11, color:"#666", lineHeight:1.4 }}>💡 {item.note}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            {/* WORKOUT DAY */}
            {day.type === "workout" && (
              <div>
                <div style={{ background:"rgba(255,255,255,0.04)", borderRadius:10, padding:"12px 14px", marginBottom:12, display:"flex", gap:10, alignItems:"flex-start" }}>
                  <span style={{ fontSize:18, flexShrink:0 }}>🔥</span>
                  <div>
                    <div style={{ fontSize:10, color:"#777", fontWeight:800, letterSpacing:1.5, marginBottom:4 }}>WARM-UP (5 menit)</div>
                    <div style={{ fontSize:12, color:"#bbb", lineHeight:1.7 }}>{day.warmup}</div>
                  </div>
                </div>
                {day.exercises.map((ex,i) => {
                  const key = `${activeDay}-${i}`;
                  const done = !!completedExercises[key];
                  const catColor = categoryColors[ex.category] || "#777";
                  const isDB = ex.category === "DB Mass" || ex.category === "Compound";
                  return (
                    <div key={i} onClick={() => toggleExercise(activeDay,i)} style={{ background:done?`${day.theme}15`:"rgba(255,255,255,0.03)", border:`1px solid ${done?day.theme+"44":isDB?"rgba(255,143,163,0.15)":"rgba(255,255,255,0.06)"}`, borderRadius:12, padding:"13px 14px", marginBottom:8, cursor:"pointer", transition:"all 0.2s" }}>
                      <div style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                        <div style={{ width:20, height:20, borderRadius:5, flexShrink:0, marginTop:2, border:`2px solid ${done?day.theme:"#444"}`, background:done?day.theme:"transparent", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:done?"#000":"transparent", fontWeight:900, transition:"all 0.2s" }}>✓</div>
                        <div style={{ flex:1 }}>
                          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8, marginBottom:5, flexWrap:"wrap" }}>
                            <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
                              <span style={{ fontSize:13, fontWeight:700, color:done?"#666":"#f0f0f0", textDecoration:done?"line-through":"none" }}>{ex.name}</span>
                              {isDB && <span style={{ fontSize:9, color:"#FF8FA3", background:"rgba(255,143,163,0.12)", padding:"1px 6px", borderRadius:8, fontWeight:700, border:"1px solid rgba(255,143,163,0.25)" }}>🏋️ DB</span>}
                              <span style={{ fontSize:9, color:catColor, background:`${catColor}18`, padding:"2px 7px", borderRadius:10, fontWeight:700, border:`1px solid ${catColor}33` }}>{ex.category}</span>
                            </div>
                            <div style={{ display:"flex", gap:5, flexShrink:0 }}>
                              <span style={{ background:`${day.theme}22`, color:day.theme, padding:"2px 8px", borderRadius:20, fontSize:10, fontWeight:800 }}>{ex.sets}×</span>
                              <span style={{ background:"rgba(255,255,255,0.07)", color:"#bbb", padding:"2px 8px", borderRadius:20, fontSize:10 }}>{ex.reps}</span>
                            </div>
                          </div>
                          <div style={{ fontSize:11, color:"#666", lineHeight:1.4 }}>💡 {ex.note}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div style={{ background:"rgba(255,255,255,0.03)", borderRadius:10, padding:"12px 14px", marginTop:4, display:"flex", gap:10, alignItems:"flex-start" }}>
                  <span style={{ fontSize:18, flexShrink:0 }}>❄️</span>
                  <div>
                    <div style={{ fontSize:10, color:"#777", fontWeight:800, letterSpacing:1.5, marginBottom:4 }}>COOL-DOWN</div>
                    <div style={{ fontSize:12, color:"#bbb", lineHeight:1.7 }}>{day.cooldown}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ROADMAP TAB */}
      {activeTab === "roadmap" && (
        <div style={{ padding:"20px 16px" }}>
          <div style={{ fontSize:11, color:"#555", marginBottom:16, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>Skill Progression Path</div>
          <div style={{ fontSize:12, color:"#777", marginBottom:20, lineHeight:1.7, background:"rgba(255,255,255,0.04)", padding:"12px 14px", borderRadius:10 }}>
            Dumbbell bangun massa, calisthenics bangun kekuatan & skill. Dua-duanya jalan <span style={{ color:"#FF8FA3" }}>bareng</span> — saling mendukung bukan bertabrakan. 💪
          </div>
          {progressionRoadmap.map((prog,pi) => (
            <div key={pi} style={{ marginBottom:24 }}>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
                <span style={{ fontSize:20 }}>{prog.icon}</span>
                <span style={{ fontSize:15, fontWeight:900, color:prog.color }}>{prog.skill} Progression</span>
              </div>
              <div style={{ position:"relative" }}>
                <div style={{ position:"absolute", left:14, top:20, bottom:20, width:2, background:`${prog.color}33` }} />
                {prog.steps.map((step,si) => (
                  <div key={si} style={{ display:"flex", alignItems:"center", gap:14, marginBottom:10, position:"relative" }}>
                    <div style={{ width:28, height:28, borderRadius:"50%", flexShrink:0, background:si===0?prog.color:si<=2?`${prog.color}55`:`${prog.color}22`, border:`2px solid ${prog.color}${si===0?"ff":si<=2?"88":"33"}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:900, color:si===0?"#000":si<=2?prog.color:`${prog.color}88`, zIndex:1 }}>{si+1}</div>
                    <div style={{ flex:1, background:si===0?`${prog.color}18`:"rgba(255,255,255,0.03)", border:`1px solid ${si===0?`${prog.color}44`:"rgba(255,255,255,0.06)"}`, borderRadius:10, padding:"10px 14px" }}>
                      <div style={{ fontSize:13, fontWeight:700, color:si===0?prog.color:si<=2?"#ddd":"#777" }}>{step}</div>
                      {si===0 && <div style={{ fontSize:10, color:prog.color, marginTop:3, opacity:0.7 }}>← Mulai dari sini</div>}
                      {si===prog.steps.length-1 && <div style={{ fontSize:10, color:"#FFE66D", marginTop:3 }}>🏆 Goal akhir</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ background:"rgba(255,215,0,0.08)", border:"1px solid rgba(255,215,0,0.2)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#FFE66D", marginBottom:8 }}>⏱️ Timeline Realistis</div>
            <div style={{ fontSize:11, color:"#aaa", lineHeight:1.9 }}>
              • <span style={{ color:"#ddd" }}>Bulan 1–2:</span> Push-up konsisten, Negative pull-up, DB form bagus, +1–2kg BB<br/>
              • <span style={{ color:"#ddd" }}>Bulan 3–4:</span> Pull-up pertama 🎉, Diamond push-up, Forward fold menyentuh lantai<br/>
              • <span style={{ color:"#ddd" }}>Bulan 5–6:</span> 5+ pull-up, Dips, Archer push-up, +3–5kg total BB<br/>
              • <span style={{ color:"#ddd" }}>Bulan 9–12:</span> 10+ pull-up, Pistol squat, Massa otot visible, BB ideal tercapai
            </div>
          </div>
        </div>
      )}

      {/* BULKING TAB */}
      {activeTab === "nutrition" && (
        <div style={{ padding:"20px 16px" }}>
          <div style={{ fontSize:11, color:"#555", marginBottom:6, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>Panduan Naik Berat Badan</div>
          <div style={{ background:"rgba(255,143,163,0.08)", border:"1px solid rgba(255,143,163,0.25)", borderRadius:12, padding:14, marginBottom:20, fontSize:12, color:"#ddd", lineHeight:1.7 }}>
            ⚡ <span style={{ color:"#FF8FA3", fontWeight:800 }}>Kamu kurus bukan karena malas makan</span> — kemungkinan besar karena metabolisme cepat + tidak cukup kalori. Solusinya: makan lebih sering, lebih padat kalori, dan konsisten.
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>Prinsip Bulking</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:20 }}>
            {bulkingTips.map((tip,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${tip.color}22`, borderRadius:12, padding:14 }}>
                <div style={{ fontSize:22, marginBottom:6 }}>{tip.icon}</div>
                <div style={{ fontSize:12, fontWeight:800, marginBottom:4 }}>{tip.title}</div>
                <div style={{ fontSize:10, color:tip.color, fontWeight:700, marginBottom:6 }}>{tip.value}</div>
                <div style={{ fontSize:11, color:"#666", lineHeight:1.5 }}>{tip.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>Contoh Meal Plan Harian</div>
          <div style={{ background:"rgba(255,255,255,0.03)", borderRadius:12, overflow:"hidden", marginBottom:12 }}>
            {mealPlan.map((meal,i) => (
              <div key={i} style={{ padding:"12px 14px", borderBottom:i<mealPlan.length-1?"1px solid rgba(255,255,255,0.05)":"none" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8, marginBottom:4 }}>
                  <span style={{ fontSize:11, color:"#4ECDC4", fontWeight:700 }}>{meal.waktu}</span>
                  <div style={{ display:"flex", gap:6 }}>
                    <span style={{ fontSize:9, color:"#FFE66D", background:"rgba(255,230,109,0.1)", padding:"2px 7px", borderRadius:10, fontWeight:700 }}>{meal.kalori}</span>
                    <span style={{ fontSize:9, color:"#FF8FA3", background:"rgba(255,143,163,0.1)", padding:"2px 7px", borderRadius:10, fontWeight:700 }}>{meal.protein}</span>
                  </div>
                </div>
                <div style={{ fontSize:12, color:"#bbb" }}>{meal.menu}</div>
              </div>
            ))}
            <div style={{ padding:"12px 14px", background:"rgba(255,255,255,0.04)", display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontSize:12, fontWeight:800 }}>Total per hari</span>
              <div style={{ display:"flex", gap:8 }}>
                <span style={{ fontSize:11, color:"#FFE66D", fontWeight:700 }}>~2.750 kkal</span>
                <span style={{ fontSize:11, color:"#FF8FA3", fontWeight:700 }}>~132g protein</span>
              </div>
            </div>
          </div>

          <div style={{ background:"rgba(255,107,53,0.08)", border:"1px solid rgba(255,107,53,0.2)", borderRadius:12, padding:16, marginBottom:12 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#FF6B35", marginBottom:8 }}>🥤 Bulking Shake (mudah, murah, efektif)</div>
            <div style={{ fontSize:12, color:"#bbb", lineHeight:1.8 }}>
              Blender: <span style={{ color:"#fff" }}>2 pisang + 1 gelas susu full cream + 2 telur + 3 sdm oat + 1 sdm madu</span><br/>
              → <span style={{ color:"#FFE66D", fontWeight:700 }}>~700 kkal · ~30g protein</span> dalam satu minuman. Minum 1x sehari.
            </div>
          </div>

          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#A8E6CF", marginBottom:8 }}>⚠️ Hindari Kesalahan Umum</div>
            <div style={{ fontSize:11, color:"#666", lineHeight:1.9 }}>
              ❌ Makan 2x sehari saja — otot tidak punya bahan bakar cukup<br/>
              ❌ Skip sarapan — metabolisme melambat<br/>
              ❌ Takut lemak — lemak sehat = hormon anabolik = otot tumbuh<br/>
              ❌ Stres berlebihan — kortisol tinggi = berat badan sulit naik<br/>
              ✅ Konsisten 3 bulan dulu sebelum menilai hasil
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
