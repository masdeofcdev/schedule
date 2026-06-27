import { useState } from "react";

// ===== PUSH DAY CONTENT =====
const pushWarmup = "10 arm circles → 10 shoulder rolls → 10 wrist circles → 5 scapular push-up ringan";
const pushExercises = [
  {
    name: "Incline Push-Up",
    sets: "4", reps: "10–15",
    note: "Tangan di meja/kursi, badan lurus. Turunkan dada ke permukaan, dorong kembali. Makin rendah permukaan = makin susah. Jadikan ini exercise utama, bukan cuma pemanasan.",
    why: "Upper chest bodyweight — progressive overload dengan turunkan ketinggian tangan perlahan",
    category: "Main", db: false
  },
  {
    name: "Regular Push-Up",
    sets: "4", reps: "8–15",
    note: "Tangan selebar bahu, siku 45°. Turunkan dada sampai 2–3cm dari lantai. Minimal 2 set terakhir close to failure.",
    why: "Compound utama dada — chest, bahu depan, triceps sekaligus",
    category: "Main", db: false
  },
  {
    name: "Chair Dip",
    sets: "3", reps: "8–12",
    note: "Tangan di tepi kursi, kaki lurus ke depan. Turunkan badan hingga siku 90°. Condong sedikit ke depan untuk lebih kena dada bawah.",
    why: "Lower chest + triceps compound. Bridges chest dan triceps dengan satu gerakan",
    category: "Bodyweight", db: false
  },
  {
    name: "Pike Hold",
    sets: "3", reps: "20–30 detik",
    note: "Posisi V terbalik — tangan & kaki di lantai, pinggul setinggi mungkin. TAHAN tanpa gerakan naik turun. Istirahat 60 detik antar set. Target: 3×30 detik nyaman sebelum naik ke Wall Pike Push-Up.",
    why: "Bangun shoulder stability dari nol — fondasi wajib sebelum bisa melakukan wall pike push-up",
    category: "Skill Work", db: false
  },
  {
    name: "Wall Pike Push-Up",
    sets: "3", reps: "8–10",
    note: "Berdiri ~1 meter dari tembok, tangan di tembok setinggi bahu, badan condong membentuk V. Tekuk siku, turunkan dahi hampir ke tembok, dorong kembali. Makin jauh dari tembok = makin susah. Kalau sudah bisa 3×10 dengan mudah → naik ke Regular Pike Push-Up.",
    why: "Level 1 pike progression — vertical press bodyweight paling ringan untuk bangun bahu dari atas",
    category: "Progression", db: false
  },
  {
    name: "DB Lateral Raise",
    sets: "3", reps: "12–15",
    note: "Angkat ke samping hingga sejajar bahu, jempol sedikit ke bawah. Beban SANGAT RINGAN. Turunkan pelan 3 detik — fase turun yang bikin kena.",
    why: "KUNCI V-SHAPE — satu-satunya cara isolasi lateral delt murni. Bahu lebar = badan terlihat lebih besar",
    category: "DB Mass", db: true
  },
  {
    name: "DB Rear Delt Fly",
    sets: "3", reps: "12–15",
    note: "Bungkuk 45–90°, dumbbell tergantung. Angkat ke samping dengan siku sedikit ditekuk hingga sejajar bahu. JANGAN pakai momentum. Beban sangat ringan.",
    why: "Posterior delt — bahu 3D & cegah postur bungkuk dari terlalu banyak pressing",
    category: "DB Mass", db: true
  },
  {
    name: "DB Overhead Tricep Extension",
    sets: "3", reps: "12",
    note: "Duduk tegak, pegang satu dumbbell dengan dua tangan di atas kepala. Turunkan ke belakang kepala (siku tetap dekat telinga), angkat kembali. Gerakannya hanya di siku.",
    why: "Long head triceps — bagian terbesar triceps, tidak bisa dikena maksimal dari dip atau push-up saja",
    category: "DB Mass", db: true
  },
];
const pushCooldown = "Chest doorway stretch 45 detik → shoulder cross-body stretch 30 detik/sisi → tricep overhead stretch 30 detik/sisi";
const pushSkill = "🪜 Pike Progression: Pike Hold (sekarang) → Wall Pike PU → Regular Pike PU → Elevated Pike PU (kaki di kursi) → Handstand Wall Hold → HSPU";

// ===== PULL DAY CONTENT =====
const pullWarmup = "Dead hang 20–30 detik → scapular pull-up 8 reps → arm swings → shoulder dislocates pakai handuk";
const pullExercises = [
  {
    name: "Negative Pull-Up",
    sets: "4", reps: "3–5 (turun 5–8 detik)",
    note: "Naik ke posisi chin over bar pakai kursi atau lompat. Lalu turunkan badan seperlahan mungkin. Target 5–8 detik per rep. Catat waktu tiap minggu.",
    why: "Skill #1 — cara tercepat bangun kekuatan pull-up dari nol. Di sinilah pull-up pertamamu terbentuk",
    category: "Progression", db: false
  },
  {
    name: "Australian Row — 3 Variasi Grip",
    sets: "4", reps: "8–12",
    note: "Tubuh lurus, tarik dada ke meja. Rotasi grip tiap set: Set 1 pronated (telapak bawah) → Set 2 supinated (telapak atas, lebih kena bicep) → Set 3 neutral → Set 4 pilih yang paling kena. Makin rebah = makin susah.",
    why: "Back mass utama + lat — variasi grip pastikan semua bagian punggung & lat terlatih merata",
    category: "Main", db: false
  },
  {
    name: "Superman Hold",
    sets: "3", reps: "10–12 (tahan 2 detik)",
    note: "Tengkurap, tangan lurus ke depan. Angkat dada, tangan, dan kaki bersamaan. Tahan 2 detik, turunkan pelan. Rasakan kontraksi di punggung bawah.",
    why: "Lower back (erector spinae) — cegah cedera & bangun postur tegak",
    category: "Lower Back", db: false
  },
  {
    name: "DB Bicep Curl",
    sets: "3", reps: "10–12",
    note: "Siku menempel di sisi badan. Angkat bergantian atau bersamaan. Turunkan PELAN 3 detik. Minimal 2 set terakhir close to failure.",
    why: "Bicep berisi = lengan berotot dari semua sudut",
    category: "DB Mass", db: true
  },
  {
    name: "DB Hammer Curl",
    sets: "3", reps: "10–12",
    note: "Telapak saling berhadapan. Siku tetap di sisi badan. Turunkan pelan 3 detik.",
    why: "Forearm #1 — brachialis & brachioradialis. Penting banget untuk forearm yang lebih berisi",
    category: "Forearm", db: true
  },
  {
    name: "Reverse Curl",
    sets: "3", reps: "10–12",
    note: "Telapak menghadap ke BAWAH. Angkat dumbbell ke atas, turunkan pelan. Pakai beban lebih ringan dari bicep curl. Brachioradialis adalah primary mover di sini.",
    why: "Forearm #2 — brachioradialis, bagian yang bikin forearm terlihat tebal dekat siku",
    category: "Forearm", db: true
  },
  {
    name: "Wrist Curl",
    sets: "3", reps: "15–20",
    note: "Duduk, lengan bawah di atas paha, telapak ke atas. Turunkan pergelangan ke bawah, kerutkan ke atas setinggi mungkin. Pakai beban sangat ringan. Close to failure di set terakhir.",
    why: "Forearm #3 — flexor depan lengan bawah. Lengkapi forearm dari semua sisi",
    category: "Forearm", db: true
  },
];
const pullCooldown = "Lat stretch gantung rileks 20 detik → bicep wall stretch 30 detik/sisi → child's pose → knee-to-chest 30 detik/sisi";
const pullSkill = "📈 Progression: Australian Row → Negative Pull-Up → Full Pull-Up → Chest-to-Bar → Muscle-Up";

// ===== LEGS & CORE DAY CONTENT =====
const legsWarmup = "10 hip circles tiap arah → 10 leg swings per kaki → 10 glute bridge → 30 detik deep squat hold";
const legsExercises = [
  {
    name: "Bodyweight Squat",
    sets: "4", reps: "15–20",
    note: "Kaki selebar bahu, jari kaki sedikit keluar. Turunkan pinggul sampai sejajar lutut atau lebih dalam. Lutut ikut arah jari kaki. Dada tetap tegak. Progressive overload: tambah reps atau tempo lambat.",
    why: "Quad + glutes compound utama — bangun pola squat yang benar sebelum naik ke variasi yang lebih susah",
    category: "Main", db: false
  },
  {
    name: "Bulgarian Split Squat",
    sets: "3", reps: "8–10 per kaki",
    note: "Kaki belakang di atas kursi, kaki depan selangkah ke depan. Turunkan lutut belakang hampir ke lantai. Bisa pegang tembok untuk keseimbangan. Ini akan sangat terasa!",
    why: "Unilateral terbaik — quad + glutes + hamstring sekaligus, fix imbalance kiri-kanan",
    category: "Main", db: false
  },
  {
    name: "Reverse Lunge",
    sets: "3", reps: "10 per kaki",
    note: "Langkah ke BELAKANG. Turunkan lutut belakang hampir ke lantai. Dorong kembali dari kaki depan. Lebih ringan dari Bulgarian tapi tetap efektif.",
    why: "Suplemen Bulgarian — lebih mudah dikontrol, bangun koordinasi kaki",
    category: "Main", db: false
  },
  {
    name: "Glute Bridge",
    sets: "3", reps: "15 (tahan 2 detik di atas)",
    note: "Berbaring, lutut ditekuk. Tekan tumit ke lantai, angkat pinggul hingga tubuh lurus dari bahu ke lutut. Peras glutes keras di atas. Untuk lebih susah: single leg glute bridge.",
    why: "Hamstring + glutes BW terbaik — kompensasi dari tidak ada Romanian Deadlift",
    category: "Bodyweight", db: false
  },
  {
    name: "🔁 SUPERSET: Calf Raise + Toe Raise",
    sets: "3", reps: "15/kaki + 15–20",
    note: "Calf raise (tumit naik setinggi mungkin, tahan 1 detik) → langsung Toe raise (jari kaki naik, tumit di lantai) → istirahat 60 detik. Antagonist sejati.",
    why: "Betis depan & belakang sekaligus dalam waktu efisien",
    category: "Lower Body", db: false
  },
  {
    name: "V-Up (atau Tuck V-Up)",
    sets: "3", reps: "8–12",
    note: "Angkat kaki & badan bersamaan, raih kaki di titik puncak. Jika berat: Tuck V-Up (lutut ditekuk). Turunkan perlahan.",
    why: "Kontraksi full rectus abdominis dari atas & bawah sekaligus",
    category: "Core", db: false
  },
  {
    name: "Russian Twist",
    sets: "3", reps: "12–15 per sisi",
    note: "Duduk, lutut ditekuk, angkat kaki sedikit dari lantai (atau tetap di lantai untuk pemula). Putar badan ke kiri dan kanan dengan kontrol. Jangan banting gerakannya.",
    why: "Oblique dinamis — rotasi penuh = perut samping kena maksimal",
    category: "Oblique", db: false
  },
];
const legsCooldown = "Hip flexor lunge stretch 40 detik/sisi → hamstring stretch 40 detik/kaki → side stretch 30 detik/sisi → calf stretch 30 detik/kaki";
const legsSkill = "📈 Progression: BW Squat → Bulgarian Split Squat → Shrimp Squat → Pistol Squat Assisted → Full Pistol Squat";

// ===== REST DAY CONTENT (1x per cycle) =====
const restSectionsContent = [
  {
    title: "✅ BOLEH DILAKUKAN",
    color: "#A8E6CF",
    items: [
      { name: "Jalan santai 15–20 menit", duration: "—", note: "Untuk sirkulasi darah ringan saja. Bukan olahraga." },
      { name: "Foam rolling / self-massage", duration: "10 menit", note: "Otot yang masih pegal. Tekan titik yang pegel, tahan 30 detik." },
      { name: "Stretching ringan", duration: "10 menit", note: "Hanya yang nyaman, tidak sampai batas. Ini recovery bukan sesi flexibility." },
      { name: "Tidur 7–9 jam malam ini", duration: "—", note: "Growth hormone 70% diproduksi saat tidur dalam. Prioritas utama — besok langsung Push lagi." },
      { name: "Makan cukup protein & kalori", duration: "—", note: "Hari istirahat bukan berarti makan sedikit. Otot masih butuh bahan untuk rebuild." },
    ]
  },
  {
    title: "❌ HINDARI",
    color: "#FF8FA3",
    items: [
      { name: "Latihan resistance apapun", duration: "—", note: "Semua otot baru dilatih 3 hari berturut-turut (Push-Pull-Legs). Butuh recovery penuh sebelum siklus ulang." },
      { name: "Kardio intensif / HIIT", duration: "—", note: "Akan memperlambat recovery otot menjelang siklus berikutnya." },
      { name: "Skip makan", duration: "—", note: "Recovery = kalori + protein cukup. Makan kurang = otot tidak tumbuh optimal." },
    ]
  },
  {
    title: "📓 QUICK CHECK-IN (5 menit)",
    color: "#C77DFF",
    items: [
      { name: "Timbang berat badan", duration: "—", note: "Pagi sebelum makan. Naik 0.3–0.7kg/minggu = on track. Tidak naik = kurang kalori." },
      { name: "Catat rekor latihan terakhir", duration: "—", note: "Push-up berapa? Negative PU berapa detik? Goblet squat beratnya berapa?" },
      { name: "Set 1 target untuk siklus berikutnya", duration: "—", note: "Spesifik: '+1 rep push-up' atau 'lateral raise naik 0.5kg'. SATU target." },
    ]
  },
];

// ===== DAYS ARRAY (Push → Pull → Legs&Core → Rest, x2 dalam 7 hari) =====
const days = [
  {
    day: "SENIN", label: "Push (Mendorong)", theme: "#FF6B35", icon: "💪", type: "workout",
    focus: "Dada · Bahu · Triceps", goal: "Chest & shoulder adalah inti V-shape.",
    warmup: pushWarmup, restTime: "60–90 detik antar set", exercises: pushExercises,
    cooldown: pushCooldown, skillTarget: pushSkill,
  },
  {
    day: "SELASA", label: "Pull (Menarik)", theme: "#4ECDC4", icon: "🏋️", type: "workout",
    focus: "Lats · Punggung · Biceps · Forearm", goal: "Sayap lebar = V-shape. Punggung tebal = badan berisi.",
    warmup: pullWarmup, restTime: "60–90 detik antar set", exercises: pullExercises,
    cooldown: pullCooldown, skillTarget: pullSkill,
  },
  {
    day: "RABU", label: "Legs (Kaki) & Inti (Core)", theme: "#FFE66D", icon: "🦵", type: "workout",
    focus: "Paha · Glutes · Betis · Core · Oblique", goal: "Kaki proporsional + core 360° = fondasi semua gerakan.",
    warmup: legsWarmup, restTime: "60–90 detik antar set", exercises: legsExercises,
    cooldown: legsCooldown, skillTarget: legsSkill,
  },
  {
    day: "KAMIS", label: "Istirahat", theme: "#888", icon: "😴", type: "rest",
    focus: "Recovery Penuh", goal: "Otot baru dilatih 3 hari berturut-turut. Recovery di sini menentukan kualitas siklus berikutnya.",
    restSections: restSectionsContent, skillTarget: "",
  },
  {
    day: "JUMAT", label: "Push (Mendorong)", theme: "#FF6B35", icon: "💪", type: "workout",
    focus: "Dada · Bahu · Triceps", goal: "Siklus kedua dimulai. Sama seperti Senin — fokus form & progressive overload.",
    warmup: pushWarmup, restTime: "60–90 detik antar set", exercises: pushExercises,
    cooldown: pushCooldown, skillTarget: pushSkill,
  },
  {
    day: "SABTU", label: "Pull (Menarik)", theme: "#4ECDC4", icon: "🏋️", type: "workout",
    focus: "Lats · Punggung · Biceps · Forearm", goal: "Sayap & punggung lagi. Bandingkan kekuatan dengan sesi Selasa.",
    warmup: pullWarmup, restTime: "60–90 detik antar set", exercises: pullExercises,
    cooldown: pullCooldown, skillTarget: pullSkill,
  },
  {
    day: "MINGGU", label: "Legs (Kaki) & Inti (Core)", theme: "#FFE66D", icon: "🦵", type: "workout",
    focus: "Paha · Glutes · Betis · Core · Oblique", goal: "Tutup siklus minggu ini. Besok lanjut siklus baru dimulai dari Rest atau Push (cek catatan di Tips).",
    warmup: legsWarmup, restTime: "60–90 detik antar set", exercises: legsExercises,
    cooldown: legsCooldown, skillTarget: legsSkill,
  },
];

const bulkingTips = [
  { icon: "📈", title: "Caloric Surplus", value: "+300–500 kkal/hari", desc: "Hitung kebutuhan harianmu (~2000–2200 kkal) lalu tambah 300–500. Ini satu-satunya cara naik berat badan.", color: "#FF8FA3" },
  { icon: "🥚", title: "Protein Quality", value: "80–100g/hari", desc: "Kualitas > kuantitas. Ranking: Telur/Susu/Whey 🥇 → Ayam/Ikan 🥈 → Tempe/Tahu 🥉. Kombinasikan keduanya.", color: "#4ECDC4" },
  { icon: "🍚", title: "Karbohidrat", value: "Prioritas tinggi", desc: "Nasi, ubi, oat. Karbo = bahan bakar otot. Jangan dipotong — kamu butuh lebih banyak, apalagi latihan 6x/minggu.", color: "#FFE66D" },
  { icon: "🥑", title: "Lemak Sehat", value: "Jangan skip", desc: "Alpukat, kacang, kuning telur. Lemak = produksi testosteron & hormon pertumbuhan.", color: "#C77DFF" },
  { icon: "🥛", title: "Liquid Calories", value: "Trik orang kurus", desc: "Bulking shake: pisang + susu + telur + oat = ~700 kkal/gelas. Lebih mudah dari makan besar.", color: "#FF6B35" },
  { icon: "⏰", title: "Frekuensi Makan", value: "4–5x sehari", desc: "Sarapan → snack → siang → snack sore → malam. Jangan biarkan perut kosong > 4 jam.", color: "#A8E6CF" },
];

const mealPlan = [
  { waktu: "Pagi (07.00)", menu: "3 telur dadar + nasi + susu full cream segelas", kalori: "~600 kkal", protein: "~30g" },
  { waktu: "Snack (10.00)", menu: "2 pisang + kacang segenggam / roti + selai kacang", kalori: "~300 kkal", protein: "~8g" },
  { waktu: "Siang (13.00)", menu: "Nasi 2 centong + ayam/ikan + tahu/tempe + sayur", kalori: "~700 kkal", protein: "~35g" },
  { waktu: "Pre-Workout (16.00)", menu: "Pisang + telur rebus 2 butir", kalori: "~200 kkal", protein: "~14g" },
  { waktu: "Malam (19.00)", menu: "Nasi + protein + sayur", kalori: "~700 kkal", protein: "~30g" },
  { waktu: "Sebelum Tidur (21.00)", menu: "Susu full cream + telur rebus / tahu goreng", kalori: "~250 kkal", protein: "~15g" },
];

const progressionRoadmap = [
  { skill: "Pull-Up", color: "#4ECDC4", icon: "⬆️", steps: ["Dead Hang","Scapular Pull-Up","Australian Row","Negative Pull-Up","Full Pull-Up","Chest-to-Bar","Muscle-Up"] },
  { skill: "Push-Up", color: "#FF6B35", icon: "⬇️", steps: ["Incline Push-Up","Full Push-Up","Diamond Push-Up","Archer Push-Up","One-Arm Assisted","One-Arm Push-Up","Planche Push-Up"] },
  { skill: "Squat", color: "#FFE66D", icon: "🦵", steps: ["Goblet Squat","Reverse Lunge","Bulgarian Split Squat","Shrimp Squat","Pistol Squat Assisted","Full Pistol Squat","Weighted Pistol"] },
  { skill: "Flexibility", color: "#A8E6CF", icon: "🤸", steps: ["Touch Shin","Touch Floor","Full Pike duduk","Bridge nyaman","Pancake 45°","Pancake Flat","Front Split"] },
];

const categoryColors = {
  "Foundation":"#888","Main":"#fff","Progression":"#FFE66D","Hypertrophy":"#FF8FA3",
  "Skill Work":"#C77DFF","Core":"#4ECDC4","Core Elite":"#C77DFF",
  "Benchmark":"#FFE66D","Cardio":"#FF8FA3","Finisher":"#FF6B35",
  "DB Mass":"#FF8FA3","Compound":"#C77DFF","Bodyweight":"#aaa",
  "Oblique":"#a8d8ea","Lower Body":"#FFE66D","Lower Back":"#f4a261",
  "Forearm":"#e9c46a","Shoulder":"#C77DFF",
};

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [activeTab, setActiveTab] = useState("schedule");
  const [completedExercises, setCompletedExercises] = useState({});
  const [completedRestItems, setCompletedRestItems] = useState({});
  const [expandedEx, setExpandedEx] = useState(null);

  const day = days[activeDay];

  const toggleExercise = (dayIdx, exIdx) => {
    const key = `${dayIdx}-${exIdx}`;
    setCompletedExercises(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleRestItem = (sectionIdx, itemIdx) => {
    const key = `${activeDay}-${sectionIdx}-${itemIdx}`;
    setCompletedRestItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleExpand = (key) => setExpandedEx(prev => prev === key ? null : key);

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
      <div style={{ background:"linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)", padding:"28px 20px 20px", textAlign:"center", borderBottom:"1px solid rgba(255,255,255,0.08)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.03, backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)" }} />
        <div style={{ fontSize:11, letterSpacing:4, color:"#555", textTransform:"uppercase", marginBottom:6 }}>Push · Pull · Legs — Siklus Berulang</div>
        <h1 style={{ margin:0, fontSize:26, fontWeight:900, letterSpacing:-1 }}>🏆 Push · Pull · Legs</h1>
        <p style={{ margin:"6px 0 0", color:"#777", fontSize:12 }}>6 Hari Latihan · 1 Rest · V-Shape Focus</p>
      </div>

      <div style={{ display:"flex", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0 8px", position:"sticky", top:0, background:"#0d0d10", zIndex:10 }}>
        {[["schedule","📅 Jadwal"],["roadmap","🗺️ Roadmap"],["nutrition","🥗 Bulking"],["tips","💡 Tips"]].map(([tab,label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex:1, padding:"14px 2px", background:"transparent", border:"none", borderBottom:`2px solid ${activeTab===tab?"#fff":"transparent"}`, color:activeTab===tab?"#fff":"#555", fontSize:11, fontWeight:700, cursor:"pointer", transition:"all 0.2s" }}>{label}</button>
        ))}
      </div>

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
              <div style={{ fontSize:12, color:"#aaa", background:"rgba(255,255,255,0.05)", padding:"8px 12px", borderRadius:8, marginBottom:8 }}>🎯 {day.goal}</div>
              {day.restTime && <div style={{ fontSize:11, color:"#666", background:"rgba(255,255,255,0.03)", padding:"6px 12px", borderRadius:8, marginBottom:8 }}>⏱️ Istirahat: <span style={{ color:day.theme, fontWeight:700 }}>{day.restTime}</span></div>}
              {day.skillTarget && <div style={{ fontSize:11, color:day.theme, opacity:0.8 }}>{day.skillTarget}</div>}
              {getDayProgress(activeDay) !== null && (
                <div style={{ marginTop:12 }}>
                  <div style={{ display:"flex", justifyContent:"space-between", fontSize:11, color:"#555", marginBottom:5 }}>
                    <span>Progress hari ini</span>
                    <span style={{ color:day.theme, fontWeight:700 }}>{getDayProgress(activeDay)}%</span>
                  </div>
                  <div style={{ height:5, background:"rgba(255,255,255,0.07)", borderRadius:3, overflow:"hidden" }}>
                    <div style={{ width:`${getDayProgress(activeDay)}%`, height:"100%", background:`linear-gradient(90deg,${day.theme},${day.theme}88)`, borderRadius:3, transition:"width 0.3s" }} />
                  </div>
                </div>
              )}
            </div>

            {day.type === "rest" && day.restSections && (
              <div>
                {day.restSections.map((section,si) => (
                  <div key={si} style={{ marginBottom:16 }}>
                    <div style={{ fontSize:11, fontWeight:800, color:section.color, marginBottom:10 }}>{section.title}</div>
                    {section.items.map((item,ii) => {
                      const key = `${activeDay}-${si}-${ii}`;
                      const done = !!completedRestItems[key];
                      return (
                        <div key={ii} onClick={() => toggleRestItem(si,ii)} style={{ background:done?`${section.color}15`:"rgba(255,255,255,0.03)", border:`1px solid ${done?section.color+"44":"rgba(255,255,255,0.06)"}`, borderRadius:12, padding:"12px 14px", marginBottom:7, cursor:"pointer", transition:"all 0.2s", display:"flex", gap:10, alignItems:"flex-start" }}>
                          <div style={{ width:20, height:20, borderRadius:5, flexShrink:0, marginTop:2, border:`2px solid ${done?section.color:"#444"}`, background:done?section.color:"transparent", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:done?"#000":"transparent", fontWeight:900, transition:"all 0.2s" }}>✓</div>
                          <div style={{ flex:1 }}>
                            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8, marginBottom:4, flexWrap:"wrap" }}>
                              <span style={{ fontSize:13, fontWeight:700, color:done?"#555":"#f0f0f0", textDecoration:done?"line-through":"none" }}>{item.name}</span>
                              {item.duration !== "—" && <span style={{ background:`${section.color}22`, color:section.color, padding:"2px 8px", borderRadius:20, fontSize:10, fontWeight:700, flexShrink:0 }}>{item.duration}</span>}
                            </div>
                            <div style={{ fontSize:11, color:"#555", lineHeight:1.5 }}>💡 {item.note}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            {day.type === "workout" && (
              <div>
                <div style={{ background:"rgba(255,255,255,0.04)", borderRadius:10, padding:"12px 14px", marginBottom:12, display:"flex", gap:10, alignItems:"flex-start" }}>
                  <span style={{ fontSize:18, flexShrink:0 }}>🔥</span>
                  <div>
                    <div style={{ fontSize:10, color:"#666", fontWeight:800, letterSpacing:1.5, marginBottom:4 }}>WARM-UP (5 menit)</div>
                    <div style={{ fontSize:12, color:"#bbb", lineHeight:1.7 }}>{day.warmup}</div>
                  </div>
                </div>
                {day.exercises.map((ex,i) => {
                  const key = `${activeDay}-${i}`;
                  const done = !!completedExercises[key];
                  const isExpanded = expandedEx === key;
                  const catColor = categoryColors[ex.category] || "#777";
                  const isDB = ex.db;
                  return (
                    <div key={i} style={{ marginBottom:8 }}>
                      <div style={{ background:done?`${day.theme}15`:"rgba(255,255,255,0.03)", border:`1px solid ${done?day.theme+"44":isDB?"rgba(255,143,163,0.15)":"rgba(255,255,255,0.06)"}`, borderRadius:12, overflow:"hidden", transition:"all 0.2s" }}>
                        <div style={{ padding:"13px 14px", display:"flex", gap:10, alignItems:"flex-start" }}>
                          <div onClick={() => toggleExercise(activeDay,i)} style={{ width:20, height:20, borderRadius:5, flexShrink:0, marginTop:2, border:`2px solid ${done?day.theme:"#444"}`, background:done?day.theme:"transparent", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:done?"#000":"transparent", fontWeight:900, transition:"all 0.2s", cursor:"pointer" }}>✓</div>
                          <div style={{ flex:1 }} onClick={() => toggleExpand(key)}>
                            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8, marginBottom:5, flexWrap:"wrap" }}>
                              <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
                                <span style={{ fontSize:13, fontWeight:700, color:done?"#555":"#f0f0f0", textDecoration:done?"line-through":"none" }}>{ex.name}</span>
                                {isDB && <span style={{ fontSize:9, color:"#FF8FA3", background:"rgba(255,143,163,0.12)", padding:"1px 6px", borderRadius:8, fontWeight:700, border:"1px solid rgba(255,143,163,0.25)" }}>🏋️ DB</span>}
                                <span style={{ fontSize:9, color:catColor, background:`${catColor}18`, padding:"2px 7px", borderRadius:10, fontWeight:700, border:`1px solid ${catColor}33` }}>{ex.category}</span>
                              </div>
                              <div style={{ display:"flex", gap:5, flexShrink:0, alignItems:"center" }}>
                                <span style={{ background:`${day.theme}22`, color:day.theme, padding:"2px 8px", borderRadius:20, fontSize:10, fontWeight:800 }}>{ex.sets}×</span>
                                <span style={{ background:"rgba(255,255,255,0.07)", color:"#bbb", padding:"2px 8px", borderRadius:20, fontSize:10 }}>{ex.reps}</span>
                                <span style={{ color:"#444", fontSize:12 }}>{isExpanded?"▲":"▼"}</span>
                              </div>
                            </div>
                            <div style={{ fontSize:11, color:"#555", lineHeight:1.4 }}>💡 {!isExpanded && ex.note.length>80 ? ex.note.slice(0,80)+"..." : ex.note}</div>
                          </div>
                        </div>
                        {isExpanded && (
                          <div style={{ padding:"10px 14px 12px 44px", borderTop:"1px solid rgba(255,255,255,0.05)", background:"rgba(255,255,255,0.02)" }}>
                            <div style={{ fontSize:11, color:day.theme, fontWeight:700, marginBottom:4 }}>Kenapa gerakan ini?</div>
                            <div style={{ fontSize:11, color:"#777", lineHeight:1.5 }}>{ex.why}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div style={{ background:"rgba(255,255,255,0.03)", borderRadius:10, padding:"12px 14px", marginTop:4, display:"flex", gap:10, alignItems:"flex-start" }}>
                  <span style={{ fontSize:18, flexShrink:0 }}>❄️</span>
                  <div>
                    <div style={{ fontSize:10, color:"#666", fontWeight:800, letterSpacing:1.5, marginBottom:4 }}>COOL-DOWN</div>
                    <div style={{ fontSize:12, color:"#bbb", lineHeight:1.7 }}>{day.cooldown}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "roadmap" && (
        <div style={{ padding:"20px 16px" }}>
          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>Skill Progression Path</div>
          <div style={{ fontSize:12, color:"#777", marginBottom:20, lineHeight:1.7, background:"rgba(255,255,255,0.04)", padding:"12px 14px", borderRadius:10 }}>
            Setiap gerakan adalah anak tangga. <span style={{ color:"#FF8FA3" }}>Jangan loncat step.</span> Kuasai yang sekarang dulu — kekuatan naik minggu ke minggu = otot tumbuh.
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
                      <div style={{ fontSize:13, fontWeight:700, color:si===0?prog.color:si<=2?"#ddd":"#666" }}>{step}</div>
                      {si===0 && <div style={{ fontSize:10, color:prog.color, marginTop:3, opacity:0.7 }}>← Mulai dari sini</div>}
                      {si===prog.steps.length-1 && <div style={{ fontSize:10, color:"#FFE66D", marginTop:3 }}>🏆 Goal akhir</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ background:"rgba(255,215,0,0.08)", border:"1px solid rgba(255,215,0,0.2)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#FFE66D", marginBottom:8 }}>⏱️ Timeline Push/Pull/Legs (6 hari/minggu)</div>
            <div style={{ fontSize:11, color:"#aaa", lineHeight:2 }}>
              • <span style={{ color:"#ddd" }}>Bulan 1:</span> Push-up 10+, Australian row stabil, bahu mulai sedikit lebih lebar<br/>
              • <span style={{ color:"#ddd" }}>Bulan 2–3:</span> Negative pull-up kuat, V-shape mulai terlihat, +1–3kg BB<br/>
              • <span style={{ color:"#ddd" }}>Bulan 3–4:</span> Pull-up pertama 🎉, lateral delt terlihat, +2–4kg BB total<br/>
              • <span style={{ color:"#ddd" }}>Bulan 6:</span> 5+ pull-up, bahu 3D, badan aesthetic keliatan jelas
            </div>
          </div>
        </div>
      )}

      {activeTab === "nutrition" && (
        <div style={{ padding:"20px 16px" }}>
          <div style={{ fontSize:11, color:"#555", marginBottom:6, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>Panduan Naik Berat Badan</div>
          <div style={{ background:"rgba(255,143,163,0.08)", border:"1px solid rgba(255,143,163,0.25)", borderRadius:12, padding:14, marginBottom:20, fontSize:12, color:"#ddd", lineHeight:1.7 }}>
            ⚡ <span style={{ color:"#FF8FA3", fontWeight:800 }}>Kamu kurus bukan karena malas makan</span> — metabolisme cepat + total kalori kurang. Apalagi sekarang latihan 6x/minggu, kebutuhan kalori naik. Fix ini dulu.
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:20 }}>
            {bulkingTips.map((tip,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${tip.color}22`, borderRadius:12, padding:14 }}>
                <div style={{ fontSize:22, marginBottom:6 }}>{tip.icon}</div>
                <div style={{ fontSize:12, fontWeight:800, marginBottom:4 }}>{tip.title}</div>
                <div style={{ fontSize:10, color:tip.color, fontWeight:700, marginBottom:6 }}>{tip.value}</div>
                <div style={{ fontSize:11, color:"#555", lineHeight:1.5 }}>{tip.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ background:"rgba(255,255,255,0.03)", borderRadius:12, overflow:"hidden", marginBottom:12 }}>
            {mealPlan.map((meal,i) => (
              <div key={i} style={{ padding:"12px 14px", borderBottom:i<mealPlan.length-1?"1px solid rgba(255,255,255,0.05)":"none" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:8, marginBottom:4 }}>
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
              <span style={{ fontSize:12, fontWeight:800 }}>Total</span>
              <div style={{ display:"flex", gap:8 }}>
                <span style={{ fontSize:11, color:"#FFE66D", fontWeight:700 }}>~2.750 kkal</span>
                <span style={{ fontSize:11, color:"#FF8FA3", fontWeight:700 }}>~132g protein</span>
              </div>
            </div>
          </div>
          <div style={{ background:"rgba(255,107,53,0.08)", border:"1px solid rgba(255,107,53,0.2)", borderRadius:12, padding:16, marginBottom:12 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#FF6B35", marginBottom:8 }}>🥤 Bulking Shake</div>
            <div style={{ fontSize:12, color:"#bbb", lineHeight:1.8 }}>
              <span style={{ color:"#fff" }}>2 pisang + 1 gelas susu full cream + 2 telur + 3 sdm oat + 1 sdm madu</span><br/>
              → <span style={{ color:"#FFE66D", fontWeight:700 }}>~700 kkal · ~30g protein</span>. Minum 1x sehari.
            </div>
          </div>
          <div style={{ background:"rgba(168,230,207,0.08)", border:"1px solid rgba(168,230,207,0.2)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#A8E6CF", marginBottom:8 }}>📌 Soal Lingkar Perut</div>
            <div style={{ fontSize:11, color:"#aaa", lineHeight:1.8 }}>
              Lingkar perut = masalah lemak, bukan otot. Latihan oblique & core membangun otot tapi tidak membakar lemak di atasnya.<br/><br/>
              Solusi: <span style={{ color:"#A8E6CF", fontWeight:700 }}>diet / intermittent fasting</span> setelah fase bulking selesai. Sekarang fokus naik BB dulu. 💪
            </div>
          </div>
        </div>
      )}

      {activeTab === "tips" && (
        <div style={{ padding:"20px 16px" }}>
          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>🔄 Cara Baca Siklus Ini</div>
          <div style={{ background:"rgba(199,125,255,0.08)", border:"1px solid rgba(199,125,255,0.25)", borderRadius:14, padding:16, marginBottom:20 }}>
            <div style={{ fontSize:11, color:"#aaa", lineHeight:1.8 }}>
              Siklusnya: <span style={{ color:"#fff", fontWeight:700 }}>Push → Pull → Legs → Rest</span>, lalu berulang lagi: <span style={{ color:"#fff", fontWeight:700 }}>Push → Pull → Legs</span>. Tiap otot dapat 2 sesi penuh dalam 7 hari dengan gap recovery 3–4 hari di antaranya — masih dalam batas aman.<br/><br/>
              <span style={{ color:"#C77DFF", fontWeight:700 }}>Penting:</span> kalau minggu depan kamu mulai lagi dari Senin = Push, berarti dari Minggu (Legs) ke Senin (Push) hanya 1 hari jeda. Itu masih oke karena legs & push beda otot total. Tapi kalau badan terasa terlalu lelah, boleh insert 1 hari rest ekstra sebelum mulai ulang.
            </div>
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>💥 Hard Set & Close To Failure</div>
          <div style={{ background:"rgba(255,107,53,0.08)", border:"1px solid rgba(255,107,53,0.25)", borderRadius:14, padding:16, marginBottom:20 }}>
            <div style={{ fontSize:13, fontWeight:800, color:"#FF6B35", marginBottom:10 }}>Minimal 2 Hard Set per Exercise</div>
            <div style={{ fontSize:11, color:"#bbb", lineHeight:1.8, marginBottom:12 }}>
              "Hard set" = set di mana kamu latihan sampai tidak kuat lagi (<span style={{ color:"#FF6B35", fontWeight:700 }}>Close To Failure</span>). Di sinilah otot benar-benar terbentuk.
            </div>
            {[
              { label:"Set 1–2", desc:"Pemanasan & aktivasi. Tingkatkan beban bertahap.", color:"#888" },
              { label:"Set 3 (Hard)", desc:"Berat. Lakukan sampai 1–2 reps sebelum failure.", color:"#FFE66D" },
              { label:"Set 4 (Hard)", desc:"Close to failure atau to failure. Set yang paling membangun otot.", color:"#FF6B35" },
            ].map((s,i) => (
              <div key={i} style={{ display:"flex", gap:10, padding:"8px 0", borderBottom:i<2?"1px solid rgba(255,255,255,0.05)":"none" }}>
                <span style={{ fontSize:11, color:s.color, fontWeight:800, minWidth:70, flexShrink:0 }}>{s.label}</span>
                <span style={{ fontSize:11, color:"#888", lineHeight:1.5 }}>{s.desc}</span>
              </div>
            ))}
            <div style={{ marginTop:10, fontSize:11, color:"#777", lineHeight:1.7 }}>
              💡 Tanda latihan efektif: besok pagi otot yang dilatih terasa DOMS (nyeri). Tidak nyeri sama sekali = belum cukup keras. Tapi karena siklus ini padat (6 hari/minggu), jangan paksakan to-failure di SEMUA set — pilih 2 exercise utama saja per hari untuk benar-benar to failure.
            </div>
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>📊 Track Kekuatan</div>
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:16, marginBottom:20 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#4ECDC4", marginBottom:8 }}>Kekuatan Naik = Otot Tumbuh</div>
            <div style={{ fontSize:11, color:"#777", lineHeight:1.8 }}>
              Catat tiap sesi: exercise, sets, reps, beban.<br/>
              Karena Push & Pull muncul 2x per minggu, bandingkan sesi pertama vs kedua — harusnya kekuatan sesi kedua minimal sama, idealnya sedikit lebih baik.<br/>
              <span style={{ color:"#4ECDC4", fontWeight:700 }}>Kekuatan naik + form tetap = otot tumbuh.</span>
            </div>
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>⏰ Pagi vs Sore</div>
          <div style={{ marginBottom:20 }}>
            {[
              { waktu:"🌅 Pagi", color:"#FFE66D", verdict:"Konsistensi lebih tinggi, mood bagus seharian. Penting banget untuk siklus 6 hari/minggu — jangan sampai terlewat." },
              { waktu:"🌇 Sore", color:"#FF8FA3", verdict:"Kekuatan & power di puncaknya. Cocok untuk sesi berat & PRs baru." },
            ].map((item,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${item.color}22`, borderRadius:12, padding:14, marginBottom:10 }}>
                <div style={{ fontSize:13, fontWeight:800, color:item.color, marginBottom:6 }}>{item.waktu}</div>
                <div style={{ fontSize:11, color:item.color, background:`${item.color}12`, padding:"6px 10px", borderRadius:8 }}>{item.verdict}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>🍽️ Pre & Post Workout</div>
          <div style={{ marginBottom:20 }}>
            {[
              { label:"PRE-WORKOUT", color:"#FF6B35", icon:"⚡", items:[
                { title:"Makan besar 1.5–2 jam sebelum", desc:"Nasi + protein + sayur. Karbo = bahan bakar." },
                { title:"Snack 30–45 menit sebelum", desc:"Pisang + 2 telur rebus. Cepat dicerna." },
                { title:"Minum 500ml air sebelum mulai", desc:"Dehidrasi 2% turunkan performa 10–20%." },
              ]},
              { label:"POST-WORKOUT", color:"#4ECDC4", icon:"🔧", items:[
                { title:"Makan dalam 1–2 jam setelah latihan", desc:"Bukan 30 menit. Tapi jangan sampai 4 jam kemudian." },
                { title:"Protein 30–40g + Karbohidrat", desc:"Protein untuk repair. Karbo untuk isi ulang glikogen." },
                { title:"Krusial untuk siklus 6 hari/minggu", desc:"Recovery cepat antara sesi sangat tergantung nutrisi post-workout yang konsisten." },
              ]},
            ].map((section,si) => (
              <div key={si} style={{ background:`${section.color}10`, border:`1px solid ${section.color}30`, borderRadius:14, padding:16, marginBottom:10 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
                  <span style={{ fontSize:20 }}>{section.icon}</span>
                  <span style={{ fontSize:13, fontWeight:800, color:section.color }}>{section.label}</span>
                </div>
                {section.items.map((item,ii) => (
                  <div key={ii} style={{ paddingBottom:8, marginBottom:8, borderBottom:ii<section.items.length-1?"1px solid rgba(255,255,255,0.05)":"none" }}>
                    <div style={{ fontSize:12, fontWeight:700, color:"#eee", marginBottom:3 }}>{item.title}</div>
                    <div style={{ fontSize:11, color:"#666", lineHeight:1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ background:"linear-gradient(135deg,rgba(255,107,53,0.1),rgba(199,125,255,0.1))", border:"1px solid rgba(255,107,53,0.2)", borderRadius:14, padding:16 }}>
            <div style={{ fontSize:13, fontWeight:800, color:"#fff", marginBottom:10 }}>🔥 Yang Paling Penting</div>
            {[
              "Ikuti siklus Push-Pull-Legs-Rest tanpa putus — itu lebih penting dari sempurna di atas kertas.",
              "Hasil terlihat di bulan ke-3, terasa di bulan ke-2, dimulai di hari pertama.",
              "Kalau terasa terlalu capek, istirahat ekstra itu sah. Dengarkan tubuhmu.",
              "Bandingkan dirimu dengan dirimu 3 bulan lalu — bukan orang lain.",
            ].map((q,i) => (
              <div key={i} style={{ display:"flex", gap:10, marginBottom:i<3?10:0 }}>
                <span style={{ color:"#FF6B35", fontWeight:900, flexShrink:0 }}>→</span>
                <span style={{ fontSize:12, color:"#bbb", lineHeight:1.6 }}>{q}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
