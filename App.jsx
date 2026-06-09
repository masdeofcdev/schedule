import { useState } from "react";

const days = [
  {
    day: "SENIN",
    label: "Push — Dada · Bahu · Triceps",
    theme: "#FF6B35",
    icon: "💪",
    type: "workout",
    focus: "Dada · Bahu (4 gerakan) · Triceps",
    goal: "Chest & shoulder adalah inti V-shape. Bahu dapat porsi terbesar hari ini.",
    warmup: "10 arm circles → 10 shoulder rolls → 5 scapular push-up → pike push-up ringan 5 reps",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "Push-Up",
        sets: "4", reps: "6–12",
        note: "Tangan selebar bahu, siku 45°. Turunkan dada sampai 2–3cm dari lantai. Jika belum kuat mulai dari Incline (tangan di meja). Minimal 2 set terakhir close to failure.",
        why: "Compound dada + triceps sekaligus. Triceps sudah kena di sini — makanya direct tricep dikurangi",
        category: "Main", db: false
      },
      {
        name: "DB Floor Press (Flat)",
        sets: "4", reps: "10–12",
        note: "Berbaring flat di lantai, dumbbell di samping dada, siku 45°. Tekan ke atas penuh. Turunkan pelan 3 detik. Lantai = safety stopper alami.",
        why: "Flat press = massa dada tengah & bawah. Fondasi chest yang tebal",
        category: "DB Mass", db: true
      },
      {
        name: "DB Incline Press",
        sets: "3", reps: "10–12",
        note: "Sandarkan punggung atas di tepi kursi/kasur rendah sudut 30–45°, atau ganjal punggung dengan bantal tebal di lantai. Dumbbell di bahu, tekan ke atas. Terasa lebih di dada atas.",
        why: "Incline press = dada atas (upper chest) — bikin dada terlihat penuh & berisi dari semua sudut, bukan cuma tengah",
        category: "DB Mass", db: true
      },
      {
        name: "Pike Push-Up",
        sets: "3", reps: "8–10",
        note: "Badan V terbalik, tangan lebih lebar dari bahu. Turunkan kepala ke lantai di antara tangan. Makin tegak badan = makin berat. Ini untuk bahu, bukan dada.",
        why: "Bahu #1 — mid delt dari sudut vertikal. Progression menuju handstand push-up",
        category: "Shoulder", db: false
      },
      {
        name: "DB Lateral Raise",
        sets: "4", reps: "12–15",
        note: "Angkat ke samping hingga sejajar bahu, jempol sedikit ke bawah. Variasikan tiap set: tegak → condong ke depan → leaning ke sisi. Beban SANGAT RINGAN. Turunkan pelan — ini yang bikin kena.",
        why: "Bahu #2 — KUNCI V-SHAPE. Satu-satunya cara isolasi lateral delt murni",
        category: "DB Mass", db: true
      },
      {
        name: "🔁 SUPERSET: DB Front Raise ↔ Rear Delt Fly",
        sets: "3", reps: "12–15 + 12–15",
        note: "Front Raise (angkat ke depan setinggi bahu — anterior delt) → langsung Rear Delt Fly tanpa istirahat (bungkuk, angkat ke samping — posterior delt) → istirahat 75 detik. Antagonist isolation sempurna.",
        why: "Bahu #3 & #4 — anterior vs posterior delt. Bahu 3D dari semua sudut",
        category: "Shoulder", db: true
      },
      {
        name: "Diamond Push-Up",
        sets: "3", reps: "6–10",
        note: "Tangan membentuk berlian di bawah dada. Siku menutup rapat ke badan saat turun. Lebih susah dari push-up biasa — mulai dari lutut jika perlu. Ini triceps primer.",
        why: "Triceps isolation bodyweight terbaik. 1 direct tricep exercise cukup — sudah dapat banyak dari Push-Up & Floor Press",
        category: "Bodyweight", db: false
      },
    ],
    cooldown: "Chest doorway stretch 45 detik → shoulder cross-body stretch 30 detik/sisi → tricep overhead stretch 30 detik/sisi",
    skillTarget: "📈 Progression: Incline PU → Full PU → Diamond PU → Archer PU | Pike PU → Handstand Wall Hold",
  },
  {
    day: "SELASA",
    label: "Istirahat / Kardio Ringan",
    theme: "#A8E6CF",
    icon: "🧘",
    type: "rest",
    focus: "Recovery Aktif · Fleksibilitas",
    goal: "Biarkan otot push hari Senin recovery. Gerak ringan untuk sirkulasi darah.",
    restSections: [
      {
        title: "🚶 KARDIO RINGAN (pilih salah satu)",
        color: "#A8E6CF",
        items: [
          { name: "Jalan santai 20–30 menit", duration: "—", note: "Bukan lari, bukan jalan cepat. Santai untuk sirkulasi darah." },
          { name: "Bersepeda santai", duration: "20 menit", note: "Intensitas rendah — detak jantung di bawah 120 BPM." },
          { name: "Renang santai", duration: "20 menit", note: "Low impact, bagus untuk recovery otot bahu & dada." },
        ]
      },
      {
        title: "🤸 FLEXIBILITY RINGAN (20 menit)",
        color: "#FFE66D",
        items: [
          { name: "Cat-Cow", duration: "10 reps pelan", note: "Mobilitas tulang belakang setelah push day." },
          { name: "Chest doorway stretch", duration: "45 detik × 2", note: "Buka dada yang mungkin masih kencang dari kemarin." },
          { name: "Shoulder cross-body stretch", duration: "30 detik/sisi × 2", note: "Bahu anterior yang mungkin DOMS dari kemarin." },
          { name: "Couch Stretch", duration: "60 detik/sisi", note: "Hip flexor — persiapan untuk Jumat leg day." },
          { name: "Seated Pike Stretch", duration: "3 × 45 detik", note: "Hamstring — persiapan untuk Jumat leg day." },
          { name: "Child's Pose", duration: "60–90 detik", note: "Rileks total. Napas dalam." },
        ]
      },
    ],
    skillTarget: "",
  },
  {
    day: "RABU",
    label: "Pull — Punggung · Biceps · Forearm",
    theme: "#4ECDC4",
    icon: "🏋️",
    type: "workout",
    focus: "Lats · Punggung · Biceps · Forearm",
    goal: "Sayap lebar = V-shape. Punggung tebal = badan berisi. Forearm kuat = grip pull-up.",
    warmup: "Dead hang 20 detik → scapular pull-up 8 reps → arm swings → shoulder dislocates pakai handuk",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "Dead Hang",
        sets: "3", reps: "20–30 detik",
        note: "Gantung di pull-up bar, genggam kuat, biarkan bahu naik alami. Fokus napas dan grip. Ini latihan nyata, bukan sekadar pemanasan.",
        why: "Grip strength + dekompresi tulang belakang. Grip lemah = pull-up gagal di tengah",
        category: "Foundation", db: false
      },
      {
        name: "Australian Row — 3 Variasi Grip",
        sets: "4", reps: "8–12",
        note: "Tubuh lurus, tarik dada ke meja. Rotasi grip tiap set: pronated (telapak bawah) → supinated (telapak atas) → neutral → pilih yang paling kena. Makin rebah = makin susah.",
        why: "Variasi grip = semua bagian lat terlatih. Kunci sayap lebar untuk V-shape",
        category: "Main", db: false
      },
      {
        name: "Straight Arm Pull (handuk/tali)",
        sets: "3", reps: "12–15",
        note: "Ikat handuk di atas pintu. Pegang kedua ujung, tangan LURUS sepanjang gerakan. Tarik ke bawah hingga sejajar pinggul. Rasakan lat stretch di atas dan kontraksi di bawah.",
        why: "Isolasi lat murni tanpa bicep bantu — memastikan sayap benar-benar berkembang",
        category: "Main", db: false
      },
      {
        name: "DB Bent-Over Row",
        sets: "3", reps: "10–12",
        note: "Bungkuk 45°, punggung LURUS. Tarik dumbbell ke pinggang, tahan 1 detik, turunkan pelan. Jangan ayun badan — kekuatan dari punggung, bukan momentum.",
        why: "Ketebalan punggung (mid-back, rhomboids) — punggung lebar DAN tebal",
        category: "DB Mass", db: true
      },
      {
        name: "Negative Pull-Up",
        sets: "3", reps: "3–5 (turun 5–8 detik)",
        note: "Naik ke posisi chin over bar pakai kursi atau lompat. Lalu turunkan badan seperlahan mungkin. Target 5–8 detik per rep. Catat waktu tiap minggu.",
        why: "Cara tercepat bangun kekuatan pull-up dari nol",
        category: "Progression", db: false
      },
      {
        name: "DB Bicep Curl",
        sets: "3", reps: "10–12",
        note: "Siku menempel di sisi badan. Angkat bergantian atau bersamaan. Turunkan PELAN 3 detik. Minimal 2 set terakhir close to failure.",
        why: "Bicep berisi = lengan berotot dari semua sudut",
        category: "DB Mass", db: true
      },
      {
        name: "Reverse Curl (Brachioradialis)",
        sets: "3", reps: "10–12",
        note: "Telapak menghadap ke BAWAH. Angkat dumbbell ke atas, turunkan pelan. Pakai beban lebih ringan dari bicep curl. Brachioradialis adalah primary mover di sini, bukan bicep.",
        why: "Brachioradialis = otot paling dominan di lengan bawah. Reverse curl lebih efektif dari hammer curl untuk otot ini",
        category: "Forearm", db: true
      },
      {
        name: "DB Hammer Curl",
        sets: "3", reps: "10–12",
        note: "Telapak saling berhadapan. Siku tetap di sisi badan. Turunkan pelan 3 detik.",
        why: "Brachialis & brachioradialis dari sudut berbeda — lengan bawah tebal dari semua sisi",
        category: "Forearm", db: true
      },
      {
        name: "Wrist Curl",
        sets: "3", reps: "15–20",
        note: "Duduk, lengan bawah di atas paha, telapak ke atas. Turunkan pergelangan ke bawah, kerutkan ke atas setinggi mungkin. Pakai beban sangat ringan. Close to failure di set terakhir.",
        why: "Forearm flexors — komponen depan lengan bawah yang tebal",
        category: "Forearm", db: true
      },
      {
        name: "Superman Hold",
        sets: "3", reps: "10–12 (tahan 2 detik)",
        note: "Tengkurap, tangan lurus ke depan. Angkat dada, tangan, dan kaki bersamaan. Tahan 2 detik, turunkan pelan. Rasakan kontraksi di punggung bawah.",
        why: "Lower back (erector spinae) — cegah cedera deadlift & squat, bangun postur tegak",
        category: "Lower Back", db: false
      },
    ],
    cooldown: "Lat stretch gantung rileks 20 detik → bicep wall stretch 30 detik/sisi → child's pose → knee-to-chest 30 detik/sisi",
    skillTarget: "📈 Progression: Australian Row → Negative Pull-Up → Full Pull-Up → Chest-to-Bar → Muscle-Up",
  },
  {
    day: "KAMIS",
    label: "Istirahat",
    theme: "#888",
    icon: "😴",
    type: "rest",
    focus: "Recovery Penuh",
    goal: "Otot punggung & lengan sedang recovery. Jangan ganggu prosesnya.",
    restSections: [
      {
        title: "✅ BOLEH DILAKUKAN",
        color: "#A8E6CF",
        items: [
          { name: "Jalan santai 15–20 menit", duration: "—", note: "Untuk sirkulasi darah ringan saja. Bukan olahraga." },
          { name: "Foam rolling / self-massage", duration: "10 menit", note: "Punggung atas, bicep, forearm. Tekan titik yang pegel, tahan 30 detik." },
          { name: "Stretching ringan", duration: "10 menit", note: "Hanya yang nyaman, tidak sampai batas. Ini recovery bukan sesi flexibility." },
          { name: "Tidur 7–9 jam malam ini", duration: "—", note: "Growth hormone 70% diproduksi saat tidur dalam. Prioritas utama." },
          { name: "Makan cukup protein", duration: "—", note: "Hari istirahat bukan berarti makan sedikit. Otot masih butuh bahan untuk rebuild." },
        ]
      },
      {
        title: "❌ HINDARI",
        color: "#FF8FA3",
        items: [
          { name: "Latihan pull atau bicep apapun", duration: "—", note: "Otot punggung & lengan baru dilatih keras kemarin. Butuh 48–72 jam recovery." },
          { name: "Kardio intensif / HIIT", duration: "—", note: "Akan memperlambat recovery otot." },
          { name: "Skip makan", duration: "—", note: "Recovery = kalori + protein cukup. Makan kurang = otot tidak tumbuh optimal." },
        ]
      }
    ],
    skillTarget: "",
  },
  {
    day: "JUMAT",
    label: "Legs, Core & Oblique",
    theme: "#FFE66D",
    icon: "🦵",
    type: "workout",
    focus: "Paha · Glutes · Betis · Core · Perut Samping",
    goal: "Kaki proporsional + core 360° = fondasi semua gerakan calisthenics",
    warmup: "10 hip circles tiap arah → 10 leg swings per kaki → 10 glute bridge → 30 detik deep squat hold",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "DB Goblet Squat",
        sets: "4", reps: "10–12",
        note: "Pegang 1 dumbbell di depan dada dengan dua tangan. Squat dalam, siku masuk di antara lutut. Dorong lantai saat naik. Punggung tetap tegak.",
        why: "Quad + glutes compound — squat paling aman & efektif untuk pemula",
        category: "DB Mass", db: true
      },
      {
        name: "DB Romanian Deadlift",
        sets: "3", reps: "10–12",
        note: "Dorong pinggul ke belakang, turunkan dumbbell mengikuti kaki hingga terasa tarikan di hamstring. Punggung LURUS. Dorong pinggul maju saat naik.",
        why: "Hamstring & glutes — dua otot terbesar di tubuh",
        category: "DB Mass", db: true
      },
      {
        name: "Reverse Lunge",
        sets: "3", reps: "8–10 per kaki",
        note: "Langkah ke BELAKANG. Turunkan lutut belakang hampir ke lantai. Dorong kembali dari kaki depan. Bisa pegang tembok untuk keseimbangan.",
        why: "Quad + glutes + hip flexor — lunge mundur lebih aman untuk lutut pemula",
        category: "Bodyweight", db: false
      },
      {
        name: "Glute Bridge",
        sets: "3", reps: "15 (tahan 2 detik di atas)",
        note: "Berbaring, lutut ditekuk. Tekan tumit ke lantai, angkat pinggul hingga tubuh lurus dari bahu ke lutut. Peras glutes keras di atas.",
        why: "Aktifkan gluteus maximus — glutes yang kuat = postur lebih baik & kaki lebih berisi",
        category: "Bodyweight", db: false
      },
      {
        name: "Side-Lying Hip Abduction",
        sets: "3", reps: "15 per sisi",
        note: "Berbaring miring, kaki lurus. Angkat kaki atas setinggi pinggul, tahan 1 detik, turunkan pelan. Jaga badan tidak berputar.",
        why: "Gluteus medius — cegah lutut ambles ke dalam saat squat",
        category: "Lower Body", db: false
      },
      {
        name: "🔁 SUPERSET: Calf Raise + Toe Raise",
        sets: "3", reps: "15/kaki + 15–20",
        note: "Calf raise (tumit naik setinggi mungkin) → langsung Toe raise (jari kaki naik, tumit di lantai) → istirahat 60 detik. Antagonist plantarflexion vs dorsiflexion.",
        why: "Betis depan & belakang sekaligus — antagonist sejati, satu istirahat saat yang lain kerja",
        category: "Lower Body", db: false
      },
      {
        name: "Dead Bug",
        sets: "3", reps: "8–10 per sisi",
        note: "Berbaring, angkat tangan & lutut 90°. Turunkan tangan kanan & kaki kiri bersamaan, punggung bawah tetap di lantai. Kembali, ganti sisi. PERLAHAN.",
        why: "Deep core stability — fondasi wajib semua gerakan calisthenics lanjutan",
        category: "Core", db: false
      },
      {
        name: "V-Up (atau Tuck V-Up)",
        sets: "3", reps: "8–12",
        note: "Angkat kaki & badan bersamaan, raih kaki di titik puncak. Jika berat: Tuck V-Up (lutut ditekuk). Turunkan perlahan.",
        why: "Kontraksi full rectus abdominis dari atas & bawah sekaligus",
        category: "Core", db: false
      },
      {
        name: "Side Plank",
        sets: "3", reps: "20–35 detik/sisi",
        note: "Siku di lantai, tubuh lurus dalam posisi miring. Angkat pinggul. Mulai dari lutut jika terlalu berat.",
        why: "Oblique primer — perut samping kencang = pinggang terlihat ramping",
        category: "Oblique", db: false
      },
      {
        name: "Bicycle Crunch",
        sets: "3", reps: "10–12 per sisi (pelan)",
        note: "Tangan di belakang kepala, angkat bahu, bawa siku kanan ke lutut kiri sambil luruskan kaki kanan. Ganti sisi. PELAN — 2 detik per gerakan.",
        why: "Oblique dinamis + abs tengah — definisi perut samping",
        category: "Oblique", db: false
      },
    ],
    cooldown: "Hip flexor lunge stretch 40 detik/sisi → hamstring stretch 40 detik/kaki → side stretch berdiri 30 detik/sisi → calf stretch 30 detik/kaki",
    skillTarget: "📈 Progression: Goblet Squat → Bulgarian Split Squat → Shrimp Squat → Pistol Squat",
  },
  {
    day: "SABTU",
    label: "Istirahat Total",
    theme: "#FF8FA3",
    icon: "🌿",
    type: "rest",
    focus: "Recovery Penuh · Recharge",
    goal: "Istirahat total = otot tumbuh maksimal. Jangan underestimate hari ini.",
    restSections: [
      {
        title: "😴 PRIORITAS HARI INI",
        color: "#FF8FA3",
        items: [
          { name: "Tidur 7–9 jam semalam?", duration: "—", note: "Kalau kurang, tidur siang 20–30 menit (power nap). Growth hormone paling tinggi saat tidur dalam." },
          { name: "Makan cukup & berkualitas", duration: "—", note: "Protein + karbo + lemak sehat. Hari sabtu = recovery nutrition untuk tiga hari latihan minggu ini." },
          { name: "Hidrasi 2–3L air", duration: "—", note: "Otot 75% adalah air. Kurang minum = recovery lambat, otot terasa flat." },
          { name: "Tidak ada latihan keras", duration: "—", note: "Berjalan-jalan santai boleh. Tapi tidak ada resistance training atau kardio intensif." },
        ]
      },
      {
        title: "🍱 MEAL PREP (opsional tapi sangat berguna)",
        color: "#FFE66D",
        items: [
          { name: "Siapkan protein untuk seminggu", duration: "—", note: "Rebus telur 10 butir, masak ayam batch, beli tempe/tahu untuk seminggu. Jadi tidak ada alasan skip protein." },
          { name: "Buat bulking shake batch", duration: "—", note: "Pisang 6 + susu 1 liter + oat + madu → blender per porsi, simpan di kulkas maksimal 2 hari." },
          { name: "Rencanakan makan minggu depan", duration: "—", note: "Tahu mau makan apa = tidak skip makan = kalori & protein terpenuhi." },
        ]
      },
    ],
    skillTarget: "",
  },
  {
    day: "MINGGU",
    label: "Full Body — Skill & Ringan",
    theme: "#C77DFF",
    icon: "🌀",
    type: "workout",
    focus: "Full Body · Skill · Bodyweight Only",
    goal: "Sentuh semua otot dengan intensitas ringan-sedang. Besok Push day — jaga tenaga untuk Senin.",
    warmup: "5 menit: arm circles → hip circles → leg swings → inchworm 5 reps",
    restTime: "60 detik antar set (lebih santai dari hari utama)",
    exercises: [
      {
        name: "Negative Pull-Up (Skill Focus)",
        sets: "4", reps: "turun seperlahan mungkin",
        note: "Naik pakai kursi, turun 6–10 detik. Ini sesi skill pull-up mingguan — catat waktu turunnya. Kualitas > kuantitas. Ini pull, bukan push, aman sebelum Senin.",
        why: "Pull-up skill progression — latihan rutin eccentric = pull-up pertama makin dekat",
        category: "Skill Work", db: false
      },
      {
        name: "Australian Row",
        sets: "3", reps: "10–12",
        note: "Pilih sudut yang nyaman hari ini — bukan yang terberat. Ini bukan sesi PR, ini active recovery pull.",
        why: "Lat & mid-back aktif tanpa overload. Pull otot tidak overlap dengan Senin push",
        category: "Main", db: false
      },
      {
        name: "Push-Up",
        sets: "3", reps: "8–10 (TIDAK sampai failure)",
        note: "Berhenti di 8–10 reps meskipun masih bisa lebih. Ini sengaja — besok Senin adalah Push day utama, jangan habiskan energi di sini. Tujuannya aktivasi, bukan stimulus maksimal.",
        why: "Sentuh dada & bahu ringan. Berhenti jauh dari failure = Senin tetap perform maksimal",
        category: "Main", db: false
      },
      {
        name: "Goblet Squat (ringan)",
        sets: "3", reps: "12–15",
        note: "Pakai beban lebih ringan dari Jumat. Fokus ke depth dan form yang sempurna, bukan beban berat.",
        why: "Kaki aktif seminggu sekali lagi = lebih cepat tumbuh. Beban ringan = recovery tidak terganggu",
        category: "DB Mass", db: true
      },
      {
        name: "Hollow Body Hold",
        sets: "3", reps: "20–30 detik",
        note: "Berbaring, tekan punggung bawah ke lantai. Angkat bahu + kaki sedikit dari lantai. Mulai dengan lutut ditekuk jika sulit. Napas tetap.",
        why: "Fondasi wajib semua skill calisthenics — tanpa ini, front lever & muscle-up tidak akan pernah tercapai",
        category: "Skill Work", db: false
      },
      {
        name: "V-Up",
        sets: "3", reps: "8–12",
        note: "Angkat kaki & badan bersamaan, raih kaki. Tuck V-Up jika perlu. Turunkan perlahan.",
        why: "Abs kena dua kali seminggu (Jumat + Minggu) = definisi lebih cepat terlihat",
        category: "Core", db: false
      },
      {
        name: "Dead Bug",
        sets: "3", reps: "8–10 per sisi",
        note: "Gerak perlahan, punggung bawah tetap menempel di lantai. Kontrol napas. Ini core stability, bukan cardio.",
        why: "Deep core aktif rutin = semua gerakan calisthenics makin stabil",
        category: "Core", db: false
      },
    ],
    cooldown: "Full body stretch ringan 10 menit → weekly check-in (timbang BB, catat rekor) → tidur cukup untuk Senin",
    skillTarget: "📊 Check-in: Berat badan = ___kg | Negative PU = ___ detik | Target minggu depan: ___",
  },
];

const bulkingTips = [
  { icon: "📈", title: "Caloric Surplus", value: "+300–500 kkal/hari", desc: "Hitung kebutuhan harianmu (~2000–2200 kkal) lalu tambah 300–500. Ini satu-satunya cara naik berat badan.", color: "#FF8FA3" },
  { icon: "🥚", title: "Protein Quality", value: "80–100g/hari", desc: "Kualitas > kuantitas. Ranking: Telur/Susu/Whey 🥇 → Ayam/Ikan 🥈 → Tempe/Tahu 🥉. Kombinasikan keduanya.", color: "#4ECDC4" },
  { icon: "🍚", title: "Karbohidrat", value: "Prioritas tinggi", desc: "Nasi, ubi, oat. Karbo = bahan bakar otot. Jangan dipotong — kamu butuh lebih banyak.", color: "#FFE66D" },
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
        <div style={{ fontSize:11, letterSpacing:4, color:"#555", textTransform:"uppercase", marginBottom:6 }}>PPL Program — 3 Hari/Minggu</div>
        <h1 style={{ margin:0, fontSize:26, fontWeight:900, letterSpacing:-1 }}>🏆 Push · Pull · Legs</h1>
        <p style={{ margin:"6px 0 0", color:"#777", fontSize:12 }}>Sen · Rab · Jum · Istirahat Optimal · V-Shape Focus</p>
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
            <div style={{ fontSize:12, fontWeight:800, color:"#FFE66D", marginBottom:8 }}>⏱️ Timeline PPL 3 Hari/Minggu</div>
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
            ⚡ <span style={{ color:"#FF8FA3", fontWeight:800 }}>Kamu kurus bukan karena malas makan</span> — metabolisme cepat + total kalori kurang. Fix ini dulu.
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
              💡 Tanda latihan efektif: besok pagi otot yang dilatih terasa DOMS (nyeri). Tidak nyeri sama sekali = belum cukup keras.
            </div>
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>📊 Track Kekuatan</div>
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:16, marginBottom:20 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#4ECDC4", marginBottom:8 }}>Kekuatan Naik = Otot Tumbuh</div>
            <div style={{ fontSize:11, color:"#777", lineHeight:1.8 }}>
              Catat tiap sesi: exercise, sets, reps, beban.<br/>
              Minggu ini 5kg × 10 reps → minggu depan target 5kg × 11 reps atau 6kg × 8 reps.<br/>
              <span style={{ color:"#4ECDC4", fontWeight:700 }}>Kekuatan naik + form tetap = otot tumbuh. Sesederhana itu.</span>
            </div>
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>⏰ Pagi vs Sore</div>
          <div style={{ marginBottom:20 }}>
            {[
              { waktu:"🌅 Pagi", color:"#FFE66D", verdict:"Konsistensi lebih tinggi, mood bagus seharian. Cocok yang mudah prokrastinasi." },
              { waktu:"🌇 Sore", color:"#FF8FA3", verdict:"Kekuatan & power di puncaknya. Cocok untuk sesi berat & PRs baru." },
            ].map((item,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${item.color}22`, borderRadius:12, padding:14, marginBottom:10 }}>
                <div style={{ fontSize:13, fontWeight:800, color:item.color, marginBottom:6 }}>{item.waktu}</div>
                <div style={{ fontSize:11, color:item.color, background:`${item.color}12`, padding:"6px 10px", borderRadius:8 }}>{item.verdict}</div>
              </div>
            ))}
            <div style={{ fontSize:11, color:"#666", background:"rgba(255,255,255,0.03)", padding:"10px 14px", borderRadius:10, lineHeight:1.7 }}>
              💡 Waktu terbaik = yang bisa kamu lakukan KONSISTEN setiap minggu.
            </div>
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
                { title:"Post-workout = waktu terbaik nutrisi diserap", desc:"Untuk bulking: makan lebih besar di waktu ini." },
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
              "3 hari PPL konsisten > 6 hari yang sering dilewat.",
              "Hasil terlihat di bulan ke-3, terasa di bulan ke-2, dimulai di hari pertama.",
              "Progressive overload tanpa konsistensi = tidak ada hasil.",
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
