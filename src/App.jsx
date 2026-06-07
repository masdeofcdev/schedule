import { useState } from "react";

const days = [
  {
    day: "SENIN",
    label: "Push — Dada & Triceps",
    theme: "#FF6B35",
    icon: "💪",
    type: "workout",
    focus: "Dada · Triceps",
    goal: "Volume penuh untuk dada dan triceps. Bahu punya hari sendiri di Sabtu — fokus di sini.",
    warmup: "10 arm circles → 10 wrist circles → 10 scapular push-up → 5 slow cat-cow",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "Push-Up",
        sets: "4", reps: "6–12",
        note: "Tangan selebar bahu, siku 45°. Turunkan dada sampai 2–3cm dari lantai. Jika belum kuat: mulai dari Incline Push-Up (tangan di meja). Kualitas > kuantitas.",
        why: "Fondasi push — dada, bahu depan, triceps. Ukuran progress paling mudah dilacak",
        category: "Main", db: false
      },
      {
        name: "DB Floor Press",
        sets: "4", reps: "10–12",
        note: "Berbaring di lantai, dumbbell di samping dada, siku 45°. Tekan ke atas penuh. Turunkan pelan 3 detik. Lantai = safety stopper alami untuk pemula.",
        why: "Massa dada utama — lebih banyak beban dari push-up, range gerak aman",
        category: "DB Mass", db: true
      },
      {
        name: "DB Floor Flyes",
        sets: "3", reps: "12–15",
        note: "Berbaring, dumbbell di atas dada dengan siku sedikit ditekuk. Buka tangan lebar ke samping sampai terasa stretch di dada, tutup kembali di atas. Ini bukan press — gerakkannya seperti memeluk pohon.",
        why: "Stretch + kontraksi dada penuh = shape dada yang lebar & defined",
        category: "Hypertrophy", db: true
      },
      {
        name: "Diamond Push-Up",
        sets: "3", reps: "6–10",
        note: "Tangan membentuk berlian di bawah dada. Siku menutup rapat ke badan saat turun. Ini lebih susah dari push-up biasa — mulai dari lutut jika perlu.",
        why: "Triceps isolation terbaik dengan bodyweight — lengan berisi dari semua sudut",
        category: "Bodyweight", db: false
      },
      {
        name: "Chair Dip",
        sets: "3", reps: "8–12",
        note: "Tangan di tepi kursi, kaki lurus ke depan. Turunkan badan hingga siku 90°. Jaga bahu tetap rendah — jangan angkat ke telinga.",
        why: "Triceps volume tambahan + sedikit lower chest — kombinasi sempurna setelah diamond push-up",
        category: "Bodyweight", db: false
      },
      {
        name: "DB Overhead Tricep Extension",
        sets: "3", reps: "12",
        note: "Duduk tegak, pegang satu dumbbell dengan dua tangan di atas kepala. Turunkan ke belakang kepala (siku tetap dekat telinga), angkat kembali. Terasa di belakang lengan atas.",
        why: "Long head triceps — bagian terbesar triceps, sering tidak kena dari dip & push-up saja",
        category: "DB Mass", db: true
      },
    ],
    cooldown: "Chest doorway stretch 45 detik → Tricep overhead stretch 30 detik/sisi → Child's pose 1 menit",
    skillTarget: "📈 Progression: Incline PU → Full PU → Diamond PU → Archer PU → One-Arm PU",
  },
  {
    day: "SELASA",
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
          { name: "Cat-Cow", duration: "10 reps pelan", note: "Buang napas saat punggung naik (cat), tarik napas saat punggung turun (cow). Gerak lambat dan sadar." },
          { name: "World's Greatest Stretch", duration: "5 reps/sisi", note: "Lunge, letakkan tangan dalam di sisi kaki depan. Putar dada ke atas. Satu gerakan, buka hip + thoracic + hamstring." },
          { name: "Deep Squat Hold", duration: "30–60 detik", note: "Duduk jongkok sedalam mungkin, tumit di lantai. Pegang pintu jika perlu. Buka ankle, hip, dan lower back." },
          { name: "Arm Swing Cross-Body", duration: "20 swing/arah", note: "Ayun kedua lengan ke depan-belakang, lalu silang. Panaskan bahu secara aktif." },
        ]
      },
      {
        title: "🤸 FLEXIBILITY SESSION (25–30 menit)",
        color: "#A8E6CF",
        items: [
          { name: "Jefferson Curl", duration: "5 reps lambat, 3 set", note: "Berdiri tegak, gulung tulang belakang satu per satu ke bawah dari leher hingga pinggang. Naik kembali perlahan. JANGAN TERBURU." },
          { name: "Pancake Stretch", duration: "3 × 45 detik", note: "Duduk kaki lebar, condong ke depan dari pinggul. Raih lantai di depan. Penting untuk L-sit & front lever." },
          { name: "Pigeon Pose", duration: "60 detik/sisi", note: "Dari push-up position, bawa kaki depan ke samping tangan. Turunkan pinggul. Hip flexor dalam + glute." },
          { name: "Couch Stretch", duration: "60 detik/sisi", note: "Kaki belakang sandarkan di tembok, lutut di lantai, badan tegak. Hip flexor terdalam. Wajib untuk yang banyak duduk." },
          { name: "Seated Pike Stretch", duration: "3 × 45 detik", note: "Duduk kaki lurus ke depan, condong dari pinggul, raih kaki. Hamstring & hip — fondasi L-sit." },
          { name: "Bridge Hold", duration: "3 × 20 detik", note: "Berbaring, lutut ditekuk. Tekan tangan & kaki ke lantai, angkat pinggul & punggung tinggi. Buka dada & bahu." },
          { name: "Wrist Prep (Flexor & Extensor)", duration: "30 detik/arah", note: "Luruskan lengan, tekuk telapak ke bawah tahan 30 detik, lalu ke atas tahan 30 detik. WAJIB untuk planche & push-up volume tinggi." },
        ]
      },
      {
        title: "🌙 EVENING WIND-DOWN (10 menit)",
        color: "#C77DFF",
        items: [
          { name: "Supine Spinal Twist", duration: "60 detik/sisi", note: "Berbaring, satu lutut jatuh ke sisi berlawanan, tangan membentang. Dekompresi tulang belakang pasca Senin." },
          { name: "Happy Baby Pose", duration: "60 detik", note: "Pegang telapak kaki dari dalam, lutut ke arah ketiak. Goyang pelan kiri-kanan. Buka hip dalam." },
          { name: "Child's Pose", duration: "60–90 detik", note: "Lutut lebar, dahi ke lantai, tangan ke depan. Rileks total." },
          { name: "Legs Up The Wall", duration: "3–5 menit", note: "Bokong ke tembok, kaki lurus ke atas. Recovery terbaik yang bisa kamu lakukan gratis." },
        ]
      }
    ],
    skillTarget: "🎯 Flexibility target: Full pike, Bridge nyaman, Pancake flat — fondasi skill advance",
  },
  {
    day: "RABU",
    label: "Pull — Punggung & Lengan",
    theme: "#4ECDC4",
    icon: "🏋️",
    type: "workout",
    focus: "Lats · Punggung · Biceps · Forearm",
    goal: "Sayap lebar = V-shape. Forearm kuat = grip pull-up lebih baik. Semua di satu hari.",
    warmup: "Dead hang 20 detik → scapular pull-up 8 reps → arm swings → shoulder dislocates pakai handuk",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "Dead Hang",
        sets: "3", reps: "20–30 detik",
        note: "Gantung di pull-up bar, genggam kuat, biarkan bahu naik alami. Fokus ke napas dan grip. Ini latihan nyata, bukan pemanasan.",
        why: "Grip strength + dekompresi tulang belakang. Grip yang lemah = pull-up gagal di tengah jalan",
        category: "Foundation", db: false
      },
      {
        name: "Australian Row — 3 Variasi Grip",
        sets: "4", reps: "8–12",
        note: "Tubuh lurus, tarik dada ke meja. ROTASI GRIP tiap set: Set 1 → pronated (telapak bawah, lat luar), Set 2 → supinated (telapak atas, lat bawah+biceps), Set 3 & 4 → pilih yang paling kena. Makin rebah = makin susah.",
        why: "Variasi grip = semua bagian lat terlatih merata. Ini kunci sayap yang lebar & tebal untuk V-shape",
        category: "Main", db: false
      },
      {
        name: "Straight Arm Pull (handuk/tali)",
        sets: "3", reps: "12–15",
        note: "Ikat handuk di atas pintu. Pegang kedua ujung, tangan LURUS sepanjang gerakan (ini bukan row). Tarik ke bawah hingga sejajar pinggul. Rasakan lat stretch di atas dan kontraksi di bawah.",
        why: "Isolasi lat murni tanpa bicep ikut bantu — memastikan sayap benar-benar berkembang",
        category: "Main", db: false
      },
      {
        name: "DB Bent-Over Row",
        sets: "3", reps: "10–12",
        note: "Bungkuk 45°, punggung LURUS. Tarik dumbbell ke pinggang, tahan 1 detik, turunkan pelan. Jangan ayun badan — kekuatan dari punggung, bukan momentum.",
        why: "Ketebalan punggung (mid-back, rhomboids) — V-shape butuh punggung yang lebar DAN tebal",
        category: "DB Mass", db: true
      },
      {
        name: "Negative Pull-Up",
        sets: "3", reps: "3–5 (turun 5–8 detik)",
        note: "Naik ke posisi chin over bar pakai kursi atau lompat. Lalu turunkan badan seperlahan mungkin. Target 5–8 detik per rep. Ini cara tercepat belajar full pull-up.",
        why: "Eccentric = cara paling efektif bangun kekuatan pull-up dari nol",
        category: "Progression", db: false
      },
      {
        name: "DB Bicep Curl",
        sets: "3", reps: "10–12",
        note: "Siku menempel di sisi badan (jangan gerak). Angkat bergantian atau bersamaan. Turunkan PELAN 3 detik — fase turun yang bangun otot. Minimal 2 set terakhir harus close to failure.",
        why: "Bicep berisi = lengan yang terlihat berotot, terutama saat pose flexing",
        category: "DB Mass", db: true
      },
      {
        name: "Reverse Curl (Brachioradialis)",
        sets: "3", reps: "10–12",
        note: "Telapak menghadap ke BAWAH (pronated grip). Angkat dumbbell ke atas, turunkan pelan. Pakai beban lebih ringan dari bicep curl. Ini bukan bicep curl — brachioradialis adalah primary mover di sini.",
        why: "Brachioradialis = otot paling dominan di lengan bawah. Reverse curl lebih efektif dari hammer curl untuk otot ini",
        category: "Forearm", db: true
      },
      {
        name: "DB Hammer Curl",
        sets: "3", reps: "10–12",
        note: "Telapak saling berhadapan (seperti pegang palu). Siku tetap di sisi badan. Turunkan pelan. Secondarily hits brachioradialis + brachialis.",
        why: "Brachialis & brachioradialis dari sudut berbeda — membuat lengan tebal dari semua sisi",
        category: "Forearm", db: true
      },
      {
        name: "🔁 SUPERSET: Wrist Curl + Wrist Extension",
        sets: "3", reps: "15 + 12–15",
        note: "Wrist curl dulu (telapak atas, kerutkan ke atas — FLEXORS) → langsung Wrist extension (telapak bawah, angkat ke atas — EXTENSORS, lebih lemah, pakai beban lebih ringan) → istirahat 60 detik. Forearm recovery cepat — targetkan close to failure tiap set.",
        why: "Lengkapi forearm 360°: flexors (depan) + extensors (atas). Forearm bisa handle 12–15 set/minggu karena recovery cepat",
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
    cooldown: "Lat stretch gantung rileks 20 detik → Bicep wall stretch 30 detik/sisi → Child's pose → Knee-to-chest stretch 30 detik/sisi",
    skillTarget: "📈 Progression: Australian Row → Negative Pull-Up → Full Pull-Up → Chest-to-Bar → Muscle-Up",
  },
  {
    day: "KAMIS",
    label: "Rest & Active Recovery",
    theme: "#888",
    icon: "😴",
    type: "rest",
    focus: "Pemulihan Aktif",
    goal: "Istirahat penuh atau aktivitas sangat ringan. Otot tumbuh saat recovery, bukan saat latihan.",
    restSections: [
      {
        title: "✅ BOLEH DILAKUKAN",
        color: "#A8E6CF",
        items: [
          { name: "Jalan santai 20–30 menit", duration: "—", note: "Bukan lari. Bukan jalan cepat. Jalan santai untuk sirkulasi darah ringan." },
          { name: "Foam rolling / self-massage", duration: "10–15 menit", note: "Paha, betis, punggung atas, bahu. Tekan titik yang pegel dan tahan 30 detik." },
          { name: "Stretching ringan", duration: "10 menit", note: "Hanya peregangan nyaman, bukan push ke batas. Ini recovery bukan sesi flexibility." },
          { name: "Tidur 7–9 jam malam ini", duration: "—", note: "Growth hormone 70% diproduksi saat tidur dalam. Ini bukan opsional untuk pertumbuhan otot." },
        ]
      },
      {
        title: "❌ JANGAN DILAKUKAN",
        color: "#FF8FA3",
        items: [
          { name: "Latihan intensif apapun", duration: "—", note: "Otot punggung & lengan baru saja dilatih keras kemarin. Butuh 48–72 jam untuk recovery penuh." },
          { name: "Cardio intensif", duration: "—", note: "HIIT, lari cepat, atau olahraga berat lain akan hambat recovery." },
          { name: "Skip makan", duration: "—", note: "Recovery = protein + kalori cukup. Justru hari ini sangat penting untuk makan dengan baik." },
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
    goal: "Kaki proporsional + core 360° kuat = fondasi semua gerakan calisthenics",
    warmup: "10 hip circles tiap arah → 10 leg swings per kaki → 10 glute bridge → 30 detik deep squat hold",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "DB Goblet Squat",
        sets: "4", reps: "10–12",
        note: "Pegang 1 dumbbell di depan dada dengan dua tangan. Squat dalam, siku masuk di antara lutut. Dorong lantai saat naik. Punggung tetap tegak.",
        why: "Squat paling aman & efektif untuk pemula — cover quad + glutes sekaligus",
        category: "DB Mass", db: true
      },
      {
        name: "DB Romanian Deadlift",
        sets: "3", reps: "10–12",
        note: "Dorong pinggul ke belakang, turunkan dumbbell mengikuti kaki hingga terasa tarikan di hamstring. Punggung LURUS. Dorong pinggul maju saat naik.",
        why: "Hamstring & glutes — dua otot terbesar = naik berat badan paling cepat",
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
        note: "Berbaring miring, kaki lurus. Angkat kaki atas setinggi pinggul, tahan 1 detik, turunkan pelan. Jaga badan tidak berputar ke belakang.",
        why: "Gluteus medius — cegah lutut ambles ke dalam saat squat. Sering jadi penyebab nyeri lutut",
        category: "Lower Body", db: false
      },
      {
        name: "🔁 SUPERSET: Calf Raise + Toe Raise",
        sets: "3", reps: "15/kaki + 15–20",
        note: "Calf raise dulu (tumit naik setinggi mungkin) → langsung Toe raise (jari kaki naik, tumit tetap di lantai) → baru istirahat 60 detik. Back-to-back tanpa henti.",
        why: "Betis depan & belakang sekaligus dalam waktu efisien — kaki lengkap & proporsional",
        category: "Lower Body", db: false
      },
      {
        name: "Dead Bug",
        sets: "3", reps: "8–10 per sisi",
        note: "Berbaring, angkat tangan & lutut 90°. Turunkan tangan kanan & kaki kiri bersamaan, punggung bawah tetap di lantai. Kembali, ganti sisi. PERLAHAN.",
        why: "Deep core stability — fondasi wajib untuk semua gerakan calisthenics lanjutan",
        category: "Core", db: false
      },
      {
        name: "V-Up (atau Tuck V-Up)",
        sets: "3", reps: "8–12",
        note: "Angkat kaki & badan bersamaan, raih kaki di titik puncak. Jika berat: Tuck V-Up (lutut ditekuk). Turunkan perlahan — jangan banting.",
        why: "Kontraksi full rectus abdominis dari atas & bawah sekaligus — abs tengah paling optimal",
        category: "Core", db: false
      },
      {
        name: "Side Plank",
        sets: "3", reps: "20–35 detik/sisi",
        note: "Siku di lantai, tubuh lurus dari kepala ke kaki dalam posisi miring. Angkat pinggul. Mulai dari lutut jika terlalu berat.",
        why: "Oblique primer — perut samping kencang = pinggang terlihat ramping untuk V-shape",
        category: "Oblique", db: false
      },
      {
        name: "Bicycle Crunch",
        sets: "3", reps: "10–12 per sisi (pelan)",
        note: "Tangan di belakang kepala, angkat bahu, bawa siku kanan ke lutut kiri sambil luruskan kaki kanan. Ganti sisi. PELAN — 2 detik per gerakan.",
        why: "Oblique dinamis + abs tengah — definisi perut samping yang paling terlihat",
        category: "Oblique", db: false
      },
    ],
    cooldown: "Hip flexor lunge stretch 40 detik/sisi → Hamstring stretch 40 detik/kaki → Side stretch berdiri 30 detik/sisi → Calf stretch 30 detik/kaki",
    skillTarget: "📈 Progression: Goblet Squat → Bulgarian Split Squat → Shrimp Squat → Pistol Squat",
  },
  {
    day: "SABTU",
    label: "Bahu + Skills + Endurance",
    theme: "#C77DFF",
    icon: "⚡",
    type: "workout",
    focus: "Bahu (V-shape) · Calisthenics Skill · Endurance",
    goal: "Dedicated shoulder day seperti yang disarankan video — mid delt butuh perhatian penuh untuk V-shape.",
    warmup: "Arm circles 30 detik → shoulder rolls → face pull ringan dengan handuk 10 reps → pike push-up ringan 5 reps",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "Pike Push-Up",
        sets: "4", reps: "8–10",
        note: "Badan V terbalik, tangan lebih lebar dari bahu. Turunkan kepala ke lantai di antara tangan. Makin tegak badan = makin berat. Ini latihan bahu, bukan dada.",
        why: "Mid delt dari sudut vertikal — mulai sesi bahu dengan gerakan compound dulu",
        category: "Shoulder", db: false
      },
      {
        name: "DB Lateral Raise — 3 Variasi",
        sets: "4", reps: "12–15",
        note: "Set 1: berdiri tegak. Set 2: condong ke depan 15° (lebih kena mid delt). Set 3: leaning ke sisi (stretch lebih dalam). Set 4: pilih yang paling kena. Jempol sedikit ke bawah. Beban SANGAT RINGAN. Turunkan pelan.",
        why: "INTI V-SHAPE — lateral delt yang tebal dari berbagai sudut = bahu yang lebar dari semua arah",
        category: "DB Mass", db: true
      },
      {
        name: "Face Pull (handuk/tali)",
        sets: "4", reps: "12–15",
        note: "Ikat handuk di handle pintu setinggi wajah. Tarik ke arah wajah, rentangkan tangan keluar, siku LEBIH TINGGI dari bahu. Tahan 1 detik. Terasa di belakang bahu dan trapezius tengah.",
        why: "Mid delt posterior + rear delt — melengkapi lateral raise untuk bahu 3D. Tanpa ini bahu hanya terlihat lebar dari depan",
        category: "Shoulder", db: false
      },
      {
        name: "DB Rear Delt Fly",
        sets: "3", reps: "12–15",
        note: "Bungkuk 45–90°, dumbbell tergantung. Angkat ke samping dengan siku sedikit ditekuk hingga sejajar bahu. JANGAN pakai momentum — ini harus terasa di belakang bahu. Beban sangat ringan.",
        why: "Bahu belakang 3D — cegah postur bungkuk & bikin bahu terlihat berisi dari samping",
        category: "DB Mass", db: true
      },
      {
        name: "DB Arnold Press",
        sets: "3", reps: "10–12",
        note: "Mulai telapak menghadap wajah, tekan ke atas sambil putar keluar hingga telapak ke depan. Turunkan balik dengan gerakan sebaliknya. Lambat & terkontrol.",
        why: "Latih semua 3 kepala bahu dalam 1 gerakan — volume bahu total yang tinggi",
        category: "DB Mass", db: true
      },
      {
        name: "Negative Pull-Up (max effort)",
        sets: "4", reps: "turun seperlahan mungkin",
        note: "Ini sesi skill pull-up terberat dalam seminggu. Naik pakai kursi, turun seperlahan mungkin. Catat waktu: minggu ini berapa detik? Target kalahkan minggu depan.",
        why: "Progressive eccentric training — di sinilah pull-up pertamamu akan terbentuk",
        category: "Skill Work", db: false
      },
      {
        name: "Push-Up AMRAP",
        sets: "3", reps: "sebanyak mungkin",
        note: "Catat rekormu setiap Sabtu. Ini benchmark mingguan — jika tidak naik setelah 2 minggu, tambah volume atau beban di latihan push.",
        why: "Track progress push strength mingguan. Angka ini yang menunjukkan program berjalan atau tidak",
        category: "Benchmark", db: false
      },
      {
        name: "Squat Jump + Mountain Climbers",
        sets: "3", reps: "12 + 30 detik",
        note: "Superset cardio finisher. Squat jump 12 reps → langsung mountain climbers 30 detik → istirahat 60 detik. Detak jantung naik = kalori terbakar + kondisi tubuh meningkat.",
        why: "Endurance finisher — jaga kebugaran kardiovaskular tanpa mengorbankan hari latihan khusus",
        category: "Cardio", db: false
      },
    ],
    cooldown: "Full shoulder mobility 5 menit → chest doorway stretch → wrist stretch → cool-down walk 5 menit",
    skillTarget: "📊 CATAT: Negative PU = ___ detik | Push-Up = ___ reps | Lateral raise = ___kg",
  },
  {
    day: "MINGGU",
    label: "Mobility & Mindful Rest",
    theme: "#FF8FA3",
    icon: "🌿",
    type: "rest",
    focus: "Deep Stretch · Sendi · Reset Mental",
    goal: "Pulihkan sendi, buka mobilitas, siapkan tubuh dan pikiran untuk minggu baru",
    restSections: [
      {
        title: "🔁 JOINT MOBILITY CIRCUIT (15 menit)",
        color: "#4ECDC4",
        items: [
          { name: "Neck Tilts & Rotations", duration: "5 reps/arah (pelan)", note: "Telinga ke bahu, dagu ke dada, putar perlahan. Jangan paksakan atau crack." },
          { name: "Shoulder CARs", duration: "5 reps/sisi", note: "Putar bahu full circle perlahan. Controlled Articular Rotation. Injury prevention planche." },
          { name: "Thoracic Rotation (duduk)", duration: "10 reps/sisi", note: "Duduk silang kaki, tangan di kepala, putar dada. Pinggul tetap diam." },
          { name: "Hip 90/90", duration: "60 detik/sisi", note: "Duduk dua kaki 90°. Buka hip yang paling dalam. Penting untuk split & pistol squat." },
          { name: "Ankle Circles", duration: "10 reps/arah/kaki", note: "Ankle kaku = squat buruk = lutut sakit. Investasi kecil, hasil besar." },
          { name: "Wrist CARs", duration: "5 reps/arah", note: "Putar pergelangan tangan full range. Injury prevention untuk push volume tinggi." },
        ]
      },
      {
        title: "🧘 DEEP FLEXIBILITY (20 menit)",
        color: "#C77DFF",
        items: [
          { name: "Standing Forward Fold", duration: "2 × 60 detik", note: "Kaki lurus, raih lantai. Biarkan gravitasi dan napas yang bekerja. Lutut boleh sedikit ditekuk jika hamstring kaku." },
          { name: "Lizard Pose", duration: "60 detik/sisi", note: "Lunge dalam, kaki depan di luar tangan. Deep hip flexor + groin." },
          { name: "Straddle + Side Reach", duration: "45 detik/sisi", note: "Kaki lebar, condong ke satu sisi. Inner thigh & oblique." },
          { name: "Doorway Chest Stretch", duration: "2 × 45 detik", note: "Siku 90° di kusen pintu, condong sedikit ke depan. Penting untuk postur & push-up range." },
          { name: "Thread the Needle", duration: "45 detik/sisi", note: "Dari all-four, selipkan satu tangan ke bawah. Buka thoracic spine." },
        ]
      },
      {
        title: "📓 WEEKLY CHECK-IN (5 menit)",
        color: "#FFE66D",
        items: [
          { name: "Timbang berat badan", duration: "—", note: "Timbang pagi setelah bangun, sebelum makan. Naik 0.3–0.7kg/minggu = on track untuk bulking." },
          { name: "Catat rekor latihan", duration: "—", note: "Push-up berapa? Negative PU berapa detik? Lateral raise beratnya berapa? Kalau sama = perlu tambah." },
          { name: "Foto progress (tiap 2 minggu)", duration: "—", note: "Foto depan, samping, belakang. Perubahan tidak terlihat harian, tapi jelas terlihat bulanan." },
          { name: "Set 1 target minggu depan", duration: "—", note: "Bukan 5 target. SATU yang spesifik: '+1 rep push-up' atau 'lateral raise naik 0.5kg'." },
          { name: "Makan & tidur malam ini", duration: "—", note: "Makan besar malam ini, tidur jam 10–11. Senin butuh tenaga penuh." },
        ]
      }
    ],
    skillTarget: "🎯 Flexibility goal: Forward fold tangan menyentuh lantai, Bridge nyaman, Hip 90/90 tanpa sakit",
  },
];

const bulkingTips = [
  { icon: "📈", title: "Caloric Surplus", value: "+300–500 kkal/hari", desc: "Hitung kebutuhan harianmu (~2000–2200 kkal) lalu tambah 300–500. Ini satu-satunya cara naik berat badan.", color: "#FF8FA3" },
  { icon: "🥚", title: "Protein", value: "80–100g/hari", desc: "Telur, ayam, tempe, tahu, susu, ikan. Spread sepanjang hari — jangan makan semua protein sekaligus.", color: "#4ECDC4" },
  { icon: "🍚", title: "Karbohidrat", value: "Prioritas tinggi", desc: "Nasi, ubi, oat, roti gandum. Karbo = bahan bakar otot. Jangan dipotong — kamu justru butuh lebih banyak.", color: "#FFE66D" },
  { icon: "🥑", title: "Lemak Sehat", value: "Jangan skip", desc: "Alpukat, kacang, kuning telur, minyak zaitun. Lemak = produksi testosteron & hormon pertumbuhan.", color: "#C77DFF" },
  { icon: "🥛", title: "Liquid Calories", value: "Trik orang kurus", desc: "Smoothie pisang + susu + telur + oat = ~700 kkal dalam satu gelas. Lebih mudah dari makan besar.", color: "#FF6B35" },
  { icon: "⏰", title: "Frekuensi Makan", value: "4–5x sehari", desc: "Sarapan → snack → makan siang → snack sore → makan malam. Jangan biarkan perut kosong > 4 jam.", color: "#A8E6CF" },
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
  { skill: "Squat", color: "#FFE66D", icon: "🦵", steps: ["BW Squat","Goblet Squat","Reverse Lunge","Bulgarian Split Squat","Shrimp Squat","Pistol Squat Assisted","Full Pistol Squat"] },
  { skill: "Flexibility", color: "#A8E6CF", icon: "🤸", steps: ["Hamstring kaku","Touch shin","Touch floor","Full Pike duduk","Bridge nyaman","Pancake 45°","Pancake flat"] },
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

  const tips = [
    {
      waktu:"🌅 Pagi (06.00–09.00)", color:"#FFE66D",
      pros:["Metabolisme aktif sepanjang hari","Konsistensi lebih tinggi","Mood bagus seharian"],
      cons:["Otot lebih kaku, warm-up lebih lama","Kekuatan sedikit lebih rendah"],
      verdict:"✅ Bagus untuk konsistensi. Cocok kalau mudah prokrastinasi."
    },
    {
      waktu:"🌇 Sore (15.00–19.00)", color:"#FF8FA3",
      pros:["Suhu tubuh & fleksibilitas optimal","Kekuatan & power di puncaknya","Koordinasi lebih baik"],
      cons:["Lebih mudah terganggu jadwal","Kalau terlalu malam bisa ganggu tidur"],
      verdict:"✅ Bagus untuk performa maksimal & PRs baru."
    },
  ];

  const supplements = [
    { nama:"Creatine Monohydrate", worth:"✅ Worth it", color:"#4ECDC4", desc:"Paling riset & paling efektif. Naikkan kekuatan 5–15%. Dosis: 3–5g/hari setiap hari. Murah." },
    { nama:"Protein Whey", worth:"✅ Opsional", color:"#FFE66D", desc:"Berguna kalau susah capai target protein dari makanan. Bukan wajib — makanan asli lebih baik." },
    { nama:"Multivitamin", worth:"✅ Berguna", color:"#A8E6CF", desc:"Tutup kekurangan micronutrient. Tapi ini bukan pengganti makanan bergizi." },
    { nama:"Pre-workout", worth:"⚠️ Hati-hati", color:"#FF8FA3", desc:"Kafein tinggi, bisa ganggu tidur & bikin ketergantungan. Kopi hitam biasa sudah cukup." },
    { nama:"Fat Burner / Mass Gainer Sachet", worth:"❌ Skip", color:"#FF6B35", desc:"Tidak efektif & mahal. Buat bulking shake sendiri — lebih murah, lebih sehat." },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"#0d0d10", fontFamily:"'Segoe UI',system-ui,sans-serif", color:"#f0f0f0", paddingBottom:80, maxWidth:480, margin:"0 auto" }}>
      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)", padding:"28px 20px 20px", textAlign:"center", borderBottom:"1px solid rgba(255,255,255,0.08)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.03, backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)" }} />
        <div style={{ fontSize:11, letterSpacing:4, color:"#555", textTransform:"uppercase", marginBottom:6 }}>4-Day Calisthenics + Dumbbell</div>
        <h1 style={{ margin:0, fontSize:26, fontWeight:900, letterSpacing:-1 }}>🏆 Body, Mass & V-Shape</h1>
        <p style={{ margin:"6px 0 0", color:"#777", fontSize:12 }}>4 Hari Latihan · 3 Hari Recovery · Dedicated Shoulder Day</p>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0 8px", position:"sticky", top:0, background:"#0d0d10", zIndex:10 }}>
        {[["schedule","📅 Jadwal"],["roadmap","🗺️ Roadmap"],["nutrition","🥗 Bulking"],["tips","💡 Tips"]].map(([tab,label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex:1, padding:"14px 2px", background:"transparent", border:"none", borderBottom:`2px solid ${activeTab===tab?"#fff":"transparent"}`, color:activeTab===tab?"#fff":"#555", fontSize:11, fontWeight:700, cursor:"pointer", transition:"all 0.2s" }}>{label}</button>
        ))}
      </div>

      {/* SCHEDULE */}
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

      {/* ROADMAP */}
      {activeTab === "roadmap" && (
        <div style={{ padding:"20px 16px" }}>
          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>Skill Progression Path</div>
          <div style={{ fontSize:12, color:"#777", marginBottom:20, lineHeight:1.7, background:"rgba(255,255,255,0.04)", padding:"12px 14px", borderRadius:10 }}>
            Setiap gerakan adalah anak tangga ke yang berikutnya. <span style={{ color:"#FF8FA3" }}>Jangan loncat step.</span> Kuasai yang sekarang dulu.
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
                      {si===0 && <div style={{ fontSize:10, color:prog.color, marginTop:3, opacity:0.7 }}>← Mulai dari sini sekarang</div>}
                      {si===prog.steps.length-1 && <div style={{ fontSize:10, color:"#FFE66D", marginTop:3 }}>🏆 Goal akhir</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div style={{ background:"rgba(255,215,0,0.08)", border:"1px solid rgba(255,215,0,0.2)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#FFE66D", marginBottom:8 }}>⏱️ Timeline Realistis (4 hari/minggu konsisten)</div>
            <div style={{ fontSize:11, color:"#aaa", lineHeight:2 }}>
              • <span style={{ color:"#ddd" }}>Bulan 1:</span> Push-up 10+, Australian row stabil, +0.5–1kg BB<br/>
              • <span style={{ color:"#ddd" }}>Bulan 2–3:</span> Negative pull-up kuat, bahu mulai terlihat lebih lebar<br/>
              • <span style={{ color:"#ddd" }}>Bulan 3–4:</span> Pull-up pertama 🎉, V-shape mulai kelihatan, +2–4kg BB<br/>
              • <span style={{ color:"#ddd" }}>Bulan 6:</span> 5+ pull-up, bahu 3D terlihat jelas, badan aesthetic keliatan
            </div>
          </div>
        </div>
      )}

      {/* BULKING */}
      {activeTab === "nutrition" && (
        <div style={{ padding:"20px 16px" }}>
          <div style={{ fontSize:11, color:"#555", marginBottom:6, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>Panduan Naik Berat Badan</div>
          <div style={{ background:"rgba(255,143,163,0.08)", border:"1px solid rgba(255,143,163,0.25)", borderRadius:12, padding:14, marginBottom:20, fontSize:12, color:"#ddd", lineHeight:1.7 }}>
            ⚡ <span style={{ color:"#FF8FA3", fontWeight:800 }}>Kamu kurus bukan karena malas makan</span> — metabolisme cepat + total kalori kurang. Fix ini dulu sebelum hal lainnya.
          </div>
          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>6 Prinsip Bulking</div>
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
          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>Meal Plan Harian (~2.750 kkal)</div>
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
            <div style={{ fontSize:12, fontWeight:800, color:"#FF6B35", marginBottom:8 }}>🥤 Bulking Shake Harian</div>
            <div style={{ fontSize:12, color:"#bbb", lineHeight:1.8 }}>
              <span style={{ color:"#fff" }}>2 pisang + 1 gelas susu full cream + 2 telur + 3 sdm oat + 1 sdm madu</span><br/>
              → <span style={{ color:"#FFE66D", fontWeight:700 }}>~700 kkal · ~30g protein</span>. Minum 1x sehari.
            </div>
          </div>
          <div style={{ background:"rgba(168,230,207,0.08)", border:"1px solid rgba(168,230,207,0.2)", borderRadius:12, padding:16, marginBottom: 12 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#A8E6CF", marginBottom:8 }}>⭐ Kualitas Protein > Kuantitas</div>
            <div style={{ fontSize:11, color:"#aaa", lineHeight:1.8 }}>
              Ingat: <span style={{ color:"#fff" }}>1kg tempe ≠ 1kg telur.</span> Jumlah protein di label tidak menggambarkan kualitas penyerapannya.<br/><br/>
              Ranking kualitas protein (dari tertinggi):<br/>
              🥇 <span style={{ color:"#FFE66D" }}>Telur, Susu, Whey</span> — complete amino acid profile, penyerapan terbaik<br/>
              🥈 <span style={{ color:"#FFE66D" }}>Ayam, Ikan, Daging</span> — protein lengkap, sangat baik<br/>
              🥉 <span style={{ color:"#aaa" }}>Tempe, Tahu, Kacang</span> — protein nabati, baik tapi tidak selengkap hewani<br/><br/>
              Solusi: kombinasikan protein hewani + nabati setiap hari untuk hasil optimal.
            </div>
          </div>
          <div style={{ background:"rgba(168,230,207,0.08)", border:"1px solid rgba(168,230,207,0.2)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#A8E6CF", marginBottom:8 }}>📌 Soal Lingkar Perut</div>
            <div style={{ fontSize:11, color:"#aaa", lineHeight:1.8 }}>
              Seperti yang dibahas di video — <span style={{ color:"#fff" }}>lingkar perut bukan masalah latihan, tapi masalah lemak.</span> Latihan oblique & core membangun otot, tapi tidak membakar lemak di atasnya.<br/><br/>
              Solusinya: <span style={{ color:"#A8E6CF", fontWeight:700 }}>diet / intermittent fasting</span> setelah fase bulking selesai. Sekarang fokus naik BB dulu — setelah otot terbentuk, baru cutting untuk reveal V-shape yang sesungguhnya. 💪
            </div>
          </div>
        </div>
      )}

      {/* TIPS */}
      {activeTab === "tips" && (
        <div style={{ padding:"20px 16px" }}>
          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>💥 Prinsip Hard Set & Close To Failure</div>
          <div style={{ marginBottom:20 }}>
            <div style={{ background:"rgba(255,107,53,0.08)", border:"1px solid rgba(255,107,53,0.25)", borderRadius:14, padding:16, marginBottom:10 }}>
              <div style={{ fontSize:13, fontWeight:800, color:"#FF6B35", marginBottom:10 }}>Minimal 2 Hard Set per Exercise</div>
              <div style={{ fontSize:11, color:"#bbb", lineHeight:1.8, marginBottom:10 }}>
                "Hard set" = set di mana kamu latihan sampai tidak kuat lagi (<span style={{ color:"#FF6B35", fontWeight:700 }}>Close To Failure / To Failure</span>). Di sinilah otot benar-benar terbentuk. Set yang terlalu santai tidak memberi stimulus pertumbuhan yang cukup.
              </div>
              {[
                { label:"Set 1–2", desc:"Pemanasan & aktivasi. Boleh tidak sampai failure, tapi tingkatkan beban.", color:"#888" },
                { label:"Set 3 (Hard)", desc:"Mulai berat. Lakukan sampai 1–2 reps sebelum failure. Rasakan ototnya bekerja.", color:"#FFE66D" },
                { label:"Set 4 (Hard)", desc:"Close to failure atau to failure. Ini set yang paling membangun otot.", color:"#FF6B35" },
              ].map((s,i) => (
                <div key={i} style={{ display:"flex", gap:10, alignItems:"flex-start", padding:"8px 0", borderBottom:i<2?"1px solid rgba(255,255,255,0.05)":"none" }}>
                  <span style={{ fontSize:11, color:s.color, fontWeight:800, minWidth:60, flexShrink:0 }}>{s.label}</span>
                  <span style={{ fontSize:11, color:"#888", lineHeight:1.5 }}>{s.desc}</span>
                </div>
              ))}
              <div style={{ marginTop:10, fontSize:11, color:"#777", lineHeight:1.7 }}>
                💡 Cara tahu latihan efektif: besok pagi otot yang dilatih terasa nyeri (<span style={{ color:"#fff" }}>DOMS</span>). Kalau tidak nyeri sama sekali, kemungkinan belum cukup keras.
              </div>
            </div>
            <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:14 }}>
              <div style={{ fontSize:12, fontWeight:800, color:"#4ECDC4", marginBottom:8 }}>📊 Track Kekuatan = Bukti Otot Tumbuh</div>
              <div style={{ fontSize:11, color:"#777", lineHeight:1.8 }}>
                Cara paling akurat tahu otot tumbuh atau tidak: <span style={{ color:"#fff" }}>kekuatan naik.</span><br/>
                Catat tiap sesi: nama exercise, sets, reps, beban.<br/>
                Kalau minggu ini angkat 5kg × 10 reps, minggu depan target 5kg × 11 reps atau 6kg × 8 reps.<br/>
                <span style={{ color:"#4ECDC4", fontWeight:700 }}>Kekuatan naik + form tetap = otot tumbuh. Sesederhana itu.</span>
              </div>
            </div>
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>🔄 Siklus 5 Hari (Advanced Option)</div>
          <div style={{ marginBottom:20 }}>
            <div style={{ background:"rgba(199,125,255,0.08)", border:"1px solid rgba(199,125,255,0.25)", borderRadius:14, padding:16 }}>
              <div style={{ fontSize:12, color:"#aaa", lineHeight:1.7, marginBottom:12 }}>
                Program 4 hari/minggu kita sudah bagus untuk pemula. Tapi ada konsep <span style={{ color:"#C77DFF", fontWeight:700 }}>rolling 5-day cycle</span> yang lebih optimal untuk recovery — tidak terikat Senin-Minggu, tapi berputar terus:
              </div>
              {[
                { hari:"Hari 1", sesi:"Pull", detail:"Lat, punggung, biceps, forearm", note:"Lats bekerja keras" },
                { hari:"Hari 2", sesi:"Legs", detail:"Quad, hamstring, glutes, core", note:"Lats istirahat penuh" },
                { hari:"Hari 3", sesi:"Push", detail:"Dada, triceps, bahu", note:"Lats sebagai stabilizer (sudah 2 hari recovery)" },
                { hari:"Hari 4", sesi:"Abs + Shoulder", detail:"Core, oblique, bahu fokus", note:"Dada sebagai stabilizer ringan" },
                { hari:"Hari 5", sesi:"Rest", detail:"Istirahat / flexibility", note:"Semua otot recovery" },
              ].map((d,i) => (
                <div key={i} style={{ display:"flex", gap:12, padding:"10px 0", borderBottom:i<4?"1px solid rgba(255,255,255,0.05)":"none", alignItems:"flex-start" }}>
                  <div style={{ minWidth:60, flexShrink:0 }}>
                    <div style={{ fontSize:10, color:"#C77DFF", fontWeight:800 }}>{d.hari}</div>
                    <div style={{ fontSize:12, fontWeight:700, color:"#fff" }}>{d.sesi}</div>
                  </div>
                  <div>
                    <div style={{ fontSize:11, color:"#bbb" }}>{d.detail}</div>
                    <div style={{ fontSize:10, color:"#555", marginTop:2 }}>{d.note}</div>
                  </div>
                </div>
              ))}
              <div style={{ marginTop:12, fontSize:11, color:"#777", lineHeight:1.7 }}>
                💡 Misalnya mulai Senin: Senin Pull → Selasa Legs → Rabu Push → Kamis Abs/Shoulder → Jumat Rest → Sabtu Pull lagi (bukan harus Senin). Otot selalu dapat recovery optimal.
              </div>
            </div>
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>⏰ Pagi vs Sore</div>
          <div style={{ marginBottom:20 }}>
            {tips.map((item,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${item.color}22`, borderRadius:14, padding:16, marginBottom:10 }}>
                <div style={{ fontSize:13, fontWeight:800, color:item.color, marginBottom:10 }}>{item.waktu}</div>
                <div style={{ marginBottom:8 }}>{item.pros.map((p,pi) => <div key={pi} style={{ fontSize:11, color:"#bbb", lineHeight:1.8 }}>✅ {p}</div>)}</div>
                <div style={{ marginBottom:10 }}>{item.cons.map((c,ci) => <div key={ci} style={{ fontSize:11, color:"#666", lineHeight:1.8 }}>⚠️ {c}</div>)}</div>
                <div style={{ fontSize:11, color:item.color, background:`${item.color}12`, padding:"6px 10px", borderRadius:8 }}>{item.verdict}</div>
              </div>
            ))}
            <div style={{ background:"rgba(255,255,255,0.04)", borderRadius:10, padding:"10px 14px", fontSize:11, color:"#aaa", lineHeight:1.7 }}>
              💡 <span style={{ color:"#fff", fontWeight:700 }}>Kesimpulan:</span> Waktu terbaik = yang bisa kamu lakukan KONSISTEN setiap minggu.
            </div>
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>🍽️ Pre & Post Workout</div>
          <div style={{ marginBottom:20 }}>
            {[
              { label:"PRE-WORKOUT", color:"#FF6B35", icon:"⚡", timing:"Makan besar: 1.5–2 jam sebelum | Snack: 30–45 menit sebelum", items:[
                { title:"Makan besar (1.5–2 jam sebelum)", desc:"Nasi + ayam + sayur. Karbo = bahan bakar. Protein = cegah otot pecah saat latihan." },
                { title:"Snack ringan (30–45 menit sebelum)", desc:"Pisang + 2 telur rebus. Cepat dicerna, energi langsung tersedia." },
                { title:"Minum air 500ml sebelum mulai", desc:"Dehidrasi 2% saja sudah turunkan performa 10–20%." },
              ]},
              { label:"POST-WORKOUT", color:"#4ECDC4", icon:"🔧", timing:"Makan dalam 1–2 jam setelah latihan", items:[
                { title:"Anabolic window: 1–2 jam, bukan 30 menit", desc:"Riset terbaru: 1–2 jam masih optimal. Jangan panik, tapi jangan juga makan 4 jam kemudian." },
                { title:"Prioritas: Protein 30–40g + Karbohidrat", desc:"Protein untuk repair otot. Karbo untuk isi ulang glikogen. Contoh: nasi + ayam + telur." },
                { title:"Post-workout = waktu terbaik nutrisi diserap", desc:"Untuk bulking: makan lebih besar dari biasa di waktu ini." },
              ]},
            ].map((section,si) => (
              <div key={si} style={{ background:`${section.color}10`, border:`1px solid ${section.color}30`, borderRadius:14, padding:16, marginBottom:10 }}>
                <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6 }}>
                  <span style={{ fontSize:20 }}>{section.icon}</span>
                  <span style={{ fontSize:13, fontWeight:800, color:section.color }}>{section.label}</span>
                </div>
                <div style={{ fontSize:10, color:section.color, background:`${section.color}15`, padding:"4px 10px", borderRadius:20, marginBottom:12, fontWeight:700, display:"inline-block" }}>⏱️ {section.timing}</div>
                {section.items.map((item,ii) => (
                  <div key={ii} style={{ paddingBottom:10, marginBottom:10, borderBottom:ii<section.items.length-1?"1px solid rgba(255,255,255,0.05)":"none" }}>
                    <div style={{ fontSize:12, fontWeight:700, color:"#eee", marginBottom:3 }}>{item.title}</div>
                    <div style={{ fontSize:11, color:"#666", lineHeight:1.6 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>📈 Tips Bulking & Recovery</div>
          <div style={{ marginBottom:20 }}>
            {[
              { icon:"📏", title:"Target Kenaikan Ideal", color:"#FFE66D", desc:"0.5–1kg per bulan = ideal untuk natural beginner. Naik terlalu cepat (>1.5kg/bulan) = sebagian besar lemak." },
              { icon:"🔄", title:"Progressive Overload Wajib", color:"#FF6B35", desc:"Makan banyak tanpa progressive overload = naik lemak bukan otot. Tiap 1–2 minggu: naikkan 1 rep atau beban 1–2kg." },
              { icon:"😴", title:"Tidur = Suplemen Gratis Terbaik", color:"#4ECDC4", desc:"Growth hormone 70% diproduksi saat tidur dalam. Kurang tidur = otot tidak tumbuh meski latihan & makan sempurna." },
              { icon:"📅", title:"Deload Setiap 6–8 Minggu", color:"#FF8FA3", desc:"Ambil 1 minggu deload: kurangi beban 40–50%. Ini bukan malas — ini recovery aktif yang membuat otot tumbuh lebih baik." },
              { icon:"🎯", title:"Mind-Muscle Connection", color:"#C77DFF", desc:"Fokuskan pikiran ke otot yang dilatih. Riset: ini meningkatkan aktivasi otot hingga 20%. Khususnya saat lateral raise & face pull." },
              { icon:"🐢", title:"Tempo Lambat = Hasil Lebih Baik", color:"#A8E6CF", desc:"2 detik naik, 1 detik tahan, 3 detik turun. Fase turun (eccentric) adalah yang paling membangun otot." },
            ].map((tip,i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${tip.color}25`, borderRadius:12, padding:"14px 14px", marginBottom:10, display:"flex", gap:12, alignItems:"flex-start" }}>
                <span style={{ fontSize:22, flexShrink:0 }}>{tip.icon}</span>
                <div>
                  <div style={{ fontSize:13, fontWeight:800, color:tip.color, marginBottom:5 }}>{tip.title}</div>
                  <div style={{ fontSize:11, color:"#666", lineHeight:1.7 }}>{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ fontSize:11, color:"#555", marginBottom:12, letterSpacing:1.5, textTransform:"uppercase", fontWeight:700 }}>💊 Suplemen</div>
          <div style={{ background:"rgba(255,255,255,0.03)", borderRadius:12, overflow:"hidden", marginBottom:20 }}>
            {supplements.map((sup,i) => (
              <div key={i} style={{ padding:"12px 14px", borderBottom:i<supplements.length-1?"1px solid rgba(255,255,255,0.05)":"none" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
                  <span style={{ fontSize:12, fontWeight:700, color:"#eee" }}>{sup.nama}</span>
                  <span style={{ fontSize:10, color:sup.color, background:`${sup.color}18`, padding:"2px 8px", borderRadius:20, fontWeight:700, flexShrink:0 }}>{sup.worth}</span>
                </div>
                <div style={{ fontSize:11, color:"#555", lineHeight:1.6 }}>{sup.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ background:"linear-gradient(135deg,rgba(255,107,53,0.1),rgba(199,125,255,0.1))", border:"1px solid rgba(255,107,53,0.2)", borderRadius:14, padding:16 }}>
            <div style={{ fontSize:13, fontWeight:800, color:"#fff", marginBottom:10 }}>🔥 Yang Paling Penting</div>
            {[
              "Program terbaik adalah yang kamu jalani konsisten — bukan yang paling sempurna di atas kertas.",
              "Hasil terlihat di bulan ke-3, terasa di bulan ke-2, dimulai di hari pertama.",
              "Bandingkan dirimu dengan dirimu 3 bulan lalu — bukan dengan orang lain.",
              "4 hari konsisten > 6 hari yang sering dilewat.",
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
