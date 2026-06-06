import { useState } from "react";

const days = [
  {
    day: "SENIN",
    label: "Push Day",
    theme: "#FF6B35",
    icon: "💪",
    type: "workout",
    focus: "Dada · Bahu · Triceps",
    goal: "Bangun kekuatan dorong. Semua gerakan bisa dilakukan siapapun.",
    warmup: "10 arm circles ke depan & belakang → 10 wrist circles → 10 shoulder rolls → 5 slow cat-cow",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "Wall Push-Up → Incline Push-Up",
        sets: "3", reps: "10–15",
        note: "Mulai dari tembok jika push-up biasa belum kuat. Pindah ke meja setelah bisa 15 reps tembok dengan mudah.",
        why: "Membangun pola gerak push-up yang benar tanpa risiko cedera",
        category: "Foundation", db: false
      },
      {
        name: "Push-Up",
        sets: "4", reps: "5–10",
        note: "Tangan selebar bahu, siku 45° dari badan (bukan 90°). Turunkan dada sampai 2–3cm dari lantai. Kualitas > kuantitas.",
        why: "Gerakan push paling fundamental — bangun dada, bahu, dan triceps sekaligus",
        category: "Main", db: false
      },
      {
        name: "DB Floor Press",
        sets: "3", reps: "10–12",
        note: "Berbaring di lantai, dumbbell di samping dada, siku 45°. Tekan ke atas sampai lengan lurus. Turunkan pelan (2–3 detik). Lantai = safety stopper alami.",
        why: "Bangun massa dada lebih efektif dari push-up, range aman untuk pemula",
        category: "DB Mass", db: true
      },
      {
        name: "DB Seated Shoulder Press",
        sets: "3", reps: "10–12",
        note: "Duduk tegak di kursi, dumbbell di bahu. Tekan ke atas, jangan kunci siku penuh. Turunkan kembali ke bahu.",
        why: "Bahu lebar = badan terlihat lebih besar & V-shape. Posisi duduk lebih aman untuk pemula",
        category: "DB Mass", db: true
      },
      {
        name: "DB Lateral Raise",
        sets: "3", reps: "12–15",
        note: "Berdiri, dumbbell di sisi badan. Angkat ke samping hingga sejajar bahu, jempol sedikit ke bawah. PAKAI BEBAN RINGAN. Kontrol saat turun.",
        why: "Satu-satunya cara efektif latih bahu samping (medial delt) — kunci bahu lebar",
        category: "DB Mass", db: true
      },
      {
        name: "Bench / Chair Dip",
        sets: "3", reps: "8–12",
        note: "Tangan di tepi kursi, kaki lurus ke depan. Turunkan badan hingga siku 90°. Jaga bahu tetap rendah, jangan angkat ke telinga.",
        why: "Triceps berisi = lengan terlihat berotot. Lebih efektif dari push-up untuk triceps",
        category: "Bodyweight", db: false
      },
    ],
    cooldown: "Chest doorway stretch 30 detik → Tricep overhead stretch 30 detik/sisi → Child's pose 1 menit",
    skillTarget: "📈 Progression: Wall PU → Incline PU → Full PU → Diamond PU",
  },
  {
    day: "SELASA",
    label: "Pull Day",
    theme: "#4ECDC4",
    icon: "🏋️",
    type: "workout",
    focus: "Punggung · Biceps · Grip",
    goal: "Bangun kekuatan tarik. Ini fondasi untuk bisa pull-up pertamamu.",
    warmup: "20 detik dead hang → 10 arm swings → 10 shoulder dislocates pakai handuk → 5 scapular retractions",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "Dead Hang",
        sets: "3", reps: "15–30 detik",
        note: "Gantung di pull-up bar, genggam kuat, biarkan bahu naik. Fokus ke grip dan napas. Istirahat 60 detik antar set. Ini latihan, bukan pemanasan.",
        why: "Bangun grip strength, dekompresi tulang belakang, dan persiapkan bahu untuk pull-up",
        category: "Foundation", db: false
      },
      {
        name: "Scapular Pull-Up",
        sets: "3", reps: "8–10",
        note: "Gantung di bar, tanpa tekuk siku sama sekali. Hanya angkat & turunkan bahu (retract scapula). Gerakan kecil tapi penting.",
        why: "Aktifkan lat dan scapula — ini yang membuat pull-up menjadi mungkin",
        category: "Foundation", db: false
      },
      {
        name: "Australian Row (Meja / Low Bar)",
        sets: "4", reps: "8–12",
        note: "Pegang tepi meja kuat, tubuh lurus dari kepala ke kaki. Tarik dada ke meja, tahan 1 detik, turunkan pelan. Makin rebah = makin susah. Mulai 45°.",
        why: "Pull-up versi horizontal — lebih mudah tapi latih otot yang sama persis",
        category: "Main", db: false
      },
      {
        name: "DB Bent-Over Row",
        sets: "3", reps: "10–12",
        note: "Kaki selebar bahu, bungkuk 45°, punggung LURUS (penting!). Tarik dumbbell ke pinggang, tahan 1 detik, turunkan pelan. Jangan ayun badan.",
        why: "Latihan punggung terbaik dengan dumbbell — bangun V-taper & ketebalan punggung",
        category: "DB Mass", db: true
      },
      {
        name: "DB Bicep Curl",
        sets: "3", reps: "10–12",
        note: "Berdiri tegak, siku menempel di sisi badan (jangan gerak). Angkat bergantian atau bersamaan. Turunkan PELAN (3 detik) — ini yang bangun otot.",
        why: "Bicep berisi + lengan tebal = hasil yang terlihat paling cepat",
        category: "DB Mass", db: true
      },
      {
        name: "DB Hammer Curl",
        sets: "3", reps: "10–12",
        note: "Posisi sama dengan bicep curl tapi telapak saling berhadapan (seperti pegang palu). Siku tetap di sisi badan. Turunkan pelan. Terasa di sisi luar lengan bawah.",
        why: "Latih brachialis & brachioradialis — otot ini yang bikin lengan bawah tebal & penuh dari semua sisi",
        category: "Forearm", db: true
      },
      {
        name: "DB Wrist Curl",
        sets: "3", reps: "15–20",
        note: "Duduk di kursi, lengan bawah di atas paha, telapak menghadap ke atas. Pegang dumbbell, turunkan pergelangan tangan ke bawah, lalu kerutkan ke atas. Gerakannya kecil tapi burning. Pakai beban sangat ringan.",
        why: "Forearm flexors — otot depan lengan bawah. Bangun ketebalan & kekuatan grip saat deadlift & pull-up",
        category: "Forearm", db: true
      },
      {
        name: "Reverse Curl",
        sets: "3", reps: "10–12",
        note: "Sama seperti bicep curl tapi telapak menghadap ke BAWAH (pronated grip). Angkat dumbbell ke atas, turunkan pelan. Lebih berat dari curl biasa — pakai beban lebih ringan.",
        why: "Forearm extensors & brachioradialis — sisi atas lengan bawah. Tanpa ini lengan bawah terlihat tidak proporsional",
        category: "Forearm", db: true
      },
      {
        name: "Negative Pull-Up",
        sets: "3", reps: "3–5",
        note: "Naik ke posisi chin over bar pakai kursi/lompat. Lalu turunkan badan seperlahan mungkin (target 5–8 detik). Ini cara paling efektif belajar pull-up.",
        why: "Eccentric training = cara tercepat bangun kekuatan pull-up dari nol",
        category: "Progression", db: false
      },
      {
        name: "DB Rear Delt Fly",
        sets: "3", reps: "12–15",
        note: "Bungkuk 45–90°, dumbbell tergantung ke bawah. Angkat kedua tangan ke samping dengan siku sedikit ditekuk hingga sejajar bahu. JANGAN pakai momentum — ini harus terasa di belakang bahu. Pakai beban sangat ringan.",
        why: "Bahu belakang (rear delt) mencegah postur bungkuk & bikin bahu terlihat 3D dari samping",
        category: "DB Mass", db: true
      },
      {
        name: "Superman Hold",
        sets: "3", reps: "10–12 (tahan 2 detik)",
        note: "Berbaring tengkurap, tangan lurus ke depan. Angkat dada, tangan, dan kaki bersamaan dari lantai. Tahan 2 detik, turunkan pelan. Rasakan kontraksi di punggung bawah.",
        why: "Lower back (erector spinae) wajib dilatih — cegah cedera deadlift & squat, perbaiki postur tegak",
        category: "Lower Back", db: false
      },
    ],
    cooldown: "Lat stretch — gantung di bar rileks 20 detik → Bicep wall stretch 30 detik/sisi → Child's pose → Lower back knee-to-chest stretch 30 detik/sisi",
    skillTarget: "📈 Progression: Dead Hang → Scapular PU → Australian Row → Negative PU → Full Pull-Up",
  },
  {
    day: "RABU",
    label: "Legs & Core",
    theme: "#FFE66D",
    icon: "🦵",
    type: "workout",
    focus: "Paha · Glutes · Betis · Core · Perut Samping",
    goal: "Kaki kuat + core 360° = fondasi semua gerakan. Oblique = pinggang ramping & fungsional.",
    warmup: "10 hip circles tiap arah → 10 leg swings per kaki → 10 glute bridge → 30 detik deep squat hold → 10 side bend ringan",
    restTime: "60–90 detik antar set",
    exercises: [
      {
        name: "Bodyweight Squat",
        sets: "3", reps: "15–20",
        note: "Kaki selebar bahu, jari kaki sedikit keluar. Turunkan pinggul sampai sejajar lutut atau lebih dalam. Lutut ikut arah jari kaki. Dada tetap tegak.",
        why: "Pelajari pola squat yang benar dulu sebelum tambah beban",
        category: "Foundation", db: false
      },
      {
        name: "DB Goblet Squat",
        sets: "4", reps: "10–12",
        note: "Pegang 1 dumbbell di depan dada dengan dua tangan. Squat dalam, siku masuk di antara lutut di bawah. Dorong lantai saat naik. Punggung tetap tegak.",
        why: "Squat paling aman & efektif untuk pemula — beban di depan otomatis menjaga postur",
        category: "DB Mass", db: true
      },
      {
        name: "DB Romanian Deadlift",
        sets: "3", reps: "10–12",
        note: "Berdiri tegak, dumbbell di depan paha. Dorong pinggul ke belakang (bukan menekuk lutut), turunkan dumbbell mengikuti kaki hingga terasa tarikan di hamstring. Punggung LURUS. Dorong pinggul maju saat naik.",
        why: "Bangun hamstring & glutes — dua otot terbesar di tubuh = naik berat badan lebih cepat",
        category: "DB Mass", db: true
      },
      {
        name: "Glute Bridge",
        sets: "3", reps: "15 (tahan 2 detik di atas)",
        note: "Berbaring, lutut ditekuk, telapak kaki rata di lantai. Tekan tumit ke lantai, angkat pinggul hingga tubuh lurus dari bahu ke lutut. Peras glutes di atas. Turunkan pelan.",
        why: "Aktifkan glutes yang sering 'tidur' karena terlalu banyak duduk",
        category: "Bodyweight", db: false
      },
      {
        name: "Reverse Lunge",
        sets: "3", reps: "8–10 per kaki",
        note: "Dari posisi berdiri, langkah ke BELAKANG (lebih mudah dari forward lunge). Turunkan lutut belakang hampir ke lantai. Dorongan kembali dari kaki depan. Bisa pegang tembok untuk keseimbangan.",
        why: "Lunge mundur lebih aman untuk lutut dan lebih mudah dikontrol untuk pemula",
        category: "Bodyweight", db: false
      },
      {
        name: "Dead Bug",
        sets: "3", reps: "8–10 per sisi",
        note: "Berbaring, angkat tangan ke atas & lutut 90°. Turunkan tangan kanan & kaki kiri bersamaan sampai hampir lantai, sambil tekan punggung bawah ke lantai. Kembali, ganti sisi. PERLAHAN.",
        why: "Core stability terbaik untuk pemula — bangun deep core + anti-rotation yang jadi fondasi L-sit",
        category: "Core", db: false
      },
      {
        name: "V-Up (atau Tuck V-Up)",
        sets: "3", reps: "8–12",
        note: "Berbaring lurus, angkat kaki & badan bersamaan, raih kaki dengan tangan di titik puncak. Jika terlalu berat: TUCK V-UP — lutut ditekuk saat naik. Turunkan perlahan, jangan banting ke lantai. Kontrol = hasil lebih baik.",
        why: "Kontraksi penuh rectus abdominis dari atas & bawah sekaligus — abs tengah paling optimal. Juga bangun hip flexor untuk L-sit & hanging leg raise",
        category: "Core", db: false
      },
      {
        name: "Side Plank",
        sets: "3", reps: "20–35 detik/sisi",
        note: "Siku di lantai, tubuh lurus dari kepala ke kaki dalam posisi miring. Angkat pinggul — jangan biarkan turun ke bawah. Mulai dari lutut jika terlalu berat. Kerjakan kiri & kanan.",
        why: "Oblique primer — perut samping kencang, pinggang terlihat lebih ramping & proporsional",
        category: "Oblique", db: false
      },
      {
        name: "Bicycle Crunch",
        sets: "3", reps: "10–12 per sisi (pelan)",
        note: "Berbaring, tangan di belakang kepala (jangan tarik kepala). Angkat bahu, bawa siku kanan ke lutut kiri sambil luruskan kaki kanan. Ganti sisi. PELAN — 2 detik per gerakan. Ini bukan cardio.",
        why: "Latihan oblique + rectus abdominis terbaik — satu gerakan bangun perut samping & tengah",
        category: "Oblique", db: false
      },
      {
        name: "DB Side Bend",
        sets: "3", reps: "12–15 per sisi",
        note: "Berdiri, pegang dumbbell di satu tangan. Condongkan badan ke sisi dumbbell, lalu kencangkan oblique sisi SEBERANG untuk menarik balik ke tegak. Jangan putar badan. Kerjakan satu sisi selesai baru ganti.",
        why: "Tambah beban ke oblique = perut samping lebih berisi & terdefinisi, pinggang proporsional",
        category: "Oblique", db: true
      },
      {
        name: "Plank Hip Dip",
        sets: "3", reps: "10–12 per sisi",
        note: "Dari posisi forearm plank, putar pinggul ke kiri hingga hampir menyentuh lantai, kembali ke tengah, lalu ke kanan. Core dan oblique terus aktif sepanjang gerakan.",
        why: "Oblique + core stability dalam satu gerakan — lebih fungsional dari crunch biasa",
        category: "Oblique", db: false
      },
      {
        name: "Single-Leg Calf Raise",
        sets: "3", reps: "15 per kaki",
        note: "Berdiri di tepi tangga atau lantai datar, angkat satu kaki. Naik setinggi mungkin dengan jari kaki, tahan 1 detik, turunkan pelan sampai tumit di bawah level tangga. Bisa pegang tembok untuk keseimbangan.",
        why: "Betis (calves) = kaki terlihat lengkap & proporsional. Satu-satunya cara efektif latih otot ini",
        category: "Lower Body", db: false
      },
      {
        name: "Toe Raise (Tibialis Raise)",
        sets: "3", reps: "15–20",
        note: "Berdiri tegak, punggung ke tembok jika perlu. Angkat ujung kaki (jari kaki ke atas) setinggi mungkin sambil tumit tetap di lantai. Tahan 1 detik di atas. Terasa di depan tulang kering.",
        why: "Tibialis anterior (depan betis) — cegah shin splints & kram saat lari/lompat. Pasangan wajib calf raise",
        category: "Lower Body", db: false
      },
      {
        name: "Side-Lying Hip Abduction",
        sets: "3", reps: "15 per sisi",
        note: "Berbaring miring, kaki lurus. Angkat kaki atas setinggi pinggul (sekitar 45°), tahan 1 detik, turunkan pelan. Jaga badan tidak berputar ke belakang. Bisa tambah dumbbell di paha untuk beban.",
        why: "Gluteus medius (glutes samping) — cegah lutut ambles ke dalam saat squat & lari. Sering jadi penyebab nyeri lutut kalau tidak dilatih",
        category: "Lower Body", db: false
      },
      {
        name: "Sumo Squat",
        sets: "3", reps: "12–15",
        note: "Kaki lebar 2x selebar bahu, jari kaki keluar 45°. Turunkan lurus ke bawah, lutut ikut arah jari kaki. Remas paha dalam saat naik. Bisa tambah dumbbell di tengah.",
        why: "Satu-satunya gerakan yang langsung targetkan paha dalam (adductor) — penting untuk stabilitas lutut",
        category: "Lower Body", db: false
      },
    ],
    cooldown: "Hip flexor lunge stretch 40 detik/sisi → Hamstring stretch 40 detik/kaki → Side stretch berdiri 30 detik/sisi → Calf stretch di tangga 30 detik/kaki",
    skillTarget: "📈 Progression: Side Plank lutut → Side Plank penuh → Side Plank angkat kaki",
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
          { name: "Cat-Cow", duration: "10 reps pelan", note: "Dari posisi all-four. Buang napas saat punggung naik (cat), tarik napas saat punggung turun (cow). Gerak lambat." },
          { name: "World's Greatest Stretch", duration: "5 reps/sisi", note: "Lunge, letakkan tangan dalam di sisi kaki depan. Putar dada ke atas. Satu gerakan, buka hip + thoracic + hamstring." },
          { name: "Deep Squat Hold", duration: "30–60 detik", note: "Duduk jongkok sedalam mungkin, tumit di lantai. Pegang pintu jika perlu. Ini buka ankle, hip, dan lower back sekaligus." },
          { name: "Arm Swing Cross-Body", duration: "20 swing/arah", note: "Ayun kedua lengan ke depan-belakang, lalu silang. Panaskan bahu secara aktif." },
        ]
      },
      {
        title: "🤸 FLEXIBILITY SESSION (25–30 menit)",
        color: "#A8E6CF",
        items: [
          { name: "Jefferson Curl", duration: "5 reps lambat, 3 set", note: "Berdiri tegak, gulung tulang belakang satu per satu ke bawah dari leher hingga pinggang. Tangan menjuntai. Naik kembali perlahan. JANGAN TERBURU." },
          { name: "Pancake Stretch", duration: "3 × 45 detik", note: "Duduk kaki lebar, condong ke depan dari pinggul (bukan membungkuk punggung). Raih lantai di depan. Penting untuk L-sit & front lever." },
          { name: "Pigeon Pose", duration: "60 detik/sisi", note: "Dari push-up position, bawa kaki depan ke samping tangan. Turunkan pinggul. Hip flexor dalam + glute. Kunci untuk pistol squat." },
          { name: "Couch Stretch", duration: "60 detik/sisi", note: "Kaki belakang sandarkan di tembok/kursi, lutut di lantai, badan tegak. Hip flexor terdalam. Wajib untuk semua yang banyak duduk." },
          { name: "Seated Pike Stretch", duration: "3 × 45 detik", note: "Duduk, kaki lurus ke depan. Condong ke depan dari pinggul, raih kaki. Hamstring & hip — fondasi L-sit." },
          { name: "Bridge Hold", duration: "3 × 20 detik", note: "Berbaring, lutut ditekuk. Tekan tangan & kaki ke lantai, angkat pinggul & punggung tinggi. Buka dada & bahu. Bisa dimulai dari glute bridge dulu." },
          { name: "Wrist Prep (Flexor & Extensor)", duration: "30 detik/arah", note: "Luruskan lengan, tekuk telapak ke bawah tahan 30 detik, lalu ke atas tahan 30 detik. WAJIB untuk planche & push-up volume tinggi." },
        ]
      },
      {
        title: "🌙 EVENING WIND-DOWN (10 menit)",
        color: "#C77DFF",
        items: [
          { name: "Supine Spinal Twist", duration: "60 detik/sisi", note: "Berbaring, satu lutut jatuh ke sisi berlawanan, tangan membentang. Dekompresi tulang belakang pasca latihan." },
          { name: "Happy Baby Pose", duration: "60 detik", note: "Pegang telapak kaki dari dalam, lutut ke arah ketiak. Goyang pelan kiri-kanan. Buka hip dalam." },
          { name: "Child's Pose", duration: "60–90 detik", note: "Lutut lebar, dahi ke lantai, tangan ke depan. Rileks total. Ini bukan pose — ini recovery." },
          { name: "Legs Up The Wall", duration: "3–5 menit", note: "Bokong ke tembok, kaki lurus ke atas. Berbaring rileks. Sirkulasi kembali ke atas — recovery terbaik yang bisa kamu lakukan gratis." },
        ]
      }
    ],
    skillTarget: "🎯 Flexibility target: Full pike, Bridge, Pancake flat — fondasi skill advance",
  },
  {
    day: "JUMAT",
    label: "Full Body Strength",
    theme: "#C77DFF",
    icon: "⚡",
    type: "workout",
    focus: "Compound Movement · Kekuatan Total",
    goal: "Gerakan compound = latih banyak otot sekaligus = naik berat badan lebih cepat",
    warmup: "5 menit: 10 squat → 10 arm circles → 10 hip circles → 5 inchworm",
    restTime: "90 detik – 2 menit antar set (sesi berat)",
    exercises: [
      {
        name: "DB Deadlift",
        sets: "4", reps: "8–10",
        note: "Kaki selebar pinggul, dumbbell di sisi kaki. Tekuk lutut sedikit, punggung LURUS, dada tegak. Angkat dengan dorong lantai dari tumit — bukan tarik dengan punggung. Turunkan terkontrol.",
        why: "Raja semua latihan — aktifkan hamstring, glutes, punggung, core, dan trap sekaligus",
        category: "DB Mass", db: true
      },
      {
        name: "Push-Up (fokus kualitas)",
        sets: "4", reps: "5–8 (sempurna)",
        note: "Lakukan lebih sedikit tapi sempurna. Turunkan 3 detik, tahan 1 detik di bawah, dorong naik. Jika sudah mudah: kaki naik ke kursi untuk decline push-up.",
        why: "Hari Jumat = fokus kekuatan, bukan volume. Slow reps = stimulus lebih kuat",
        category: "Main", db: false
      },
      {
        name: "Australian Row / Negative Pull-Up",
        sets: "4", reps: "6–10",
        note: "Pilih yang lebih menantang hari ini. Negative pull-up: turun 5–8 detik seperlahan mungkin. Australian row: posisi makin horizontal = makin berat.",
        why: "Sesi pull terkuat dalam seminggu — di sinilah pull-up pertamamu akan lahir",
        category: "Main", db: false
      },
      {
        name: "DB Goblet Squat (berat)",
        sets: "4", reps: "8–10",
        note: "Gunakan dumbbell lebih berat dari hari Rabu. Squat dalam, jaga punggung tegak. Ini sesi kekuatan — beban lebih berat, reps lebih sedikit.",
        why: "Progressive overload — beban makin berat = otot makin tumbuh",
        category: "DB Mass", db: true
      },
      {
        name: "DB Arnold Press",
        sets: "3", reps: "10",
        note: "Mulai dengan telapak menghadap wajah, tekan ke atas sambil putar keluar hingga telapak menghadap ke depan. Turunkan dengan gerakan sebaliknya. Lambat & kontrol.",
        why: "Latih semua 3 bagian bahu dalam 1 gerakan — bahu paling lengkap untuk pemula",
        category: "DB Mass", db: true
      },
      {
        name: "Hollow Body Hold",
        sets: "3", reps: "20–30 detik",
        note: "Berbaring, tekan punggung bawah ke lantai (JANGAN sampai terangkat). Angkat bahu + kaki sedikit dari lantai. Rib cage turun. Mulai dengan lutut ditekuk jika sulit.",
        why: "Fondasi wajib semua skill calisthenics — tanpa ini, front lever & muscle-up tidak mungkin",
        category: "Core", db: false
      },
    ],
    cooldown: "Full body stretch 10 menit: lakukan semua stretch favorit kamu perlahan",
    skillTarget: "📈 Setelah 3–4 bulan program ini, mulai latihan skill: Handstand wall hold, Tuck front lever",
  },
  {
    day: "SABTU",
    label: "Endurance & Volume",
    theme: "#FF8FA3",
    icon: "🔥",
    type: "workout",
    focus: "Daya Tahan · Definisi Otot · Pump",
    goal: "Volume tinggi = muscle definition. Catat rekor dan kalahkan minggu depan.",
    warmup: "Jumping jacks 45 detik → high knees 30 detik → arm swings → jog di tempat 1 menit",
    restTime: "45–60 detik antar set (lebih pendek dari biasa)",
    exercises: [
      {
        name: "Push-Up AMRAP",
        sets: "3", reps: "semampu mungkin",
        note: "AMRAP = As Many Reps As Possible. Hitung dan catat! Berhenti ketika form mulai rusak, bukan saat terasa mau roboh. Target minggu ini vs minggu depan.",
        why: "Test & ukur progress nyata. Jika minggu ini 10, minggu depan target 11.",
        category: "Benchmark", db: false
      },
      {
        name: "Australian Row AMRAP",
        sets: "3", reps: "semampu mungkin",
        note: "Sama — catat angkanya. Posisi yang sama tiap minggu biar hasilnya bisa dibandingkan.",
        why: "Tracking pull strength progression — ini penanda kamu makin dekat ke pull-up",
        category: "Benchmark", db: false
      },
      {
        name: "DB Renegade Row",
        sets: "3", reps: "6–8 per sisi",
        note: "Posisi push-up dengan tangan di dumbbell. Row satu tangan ke pinggang, tahan core agar pinggul tidak berputar. Ganti sisi. Mulai dengan beban ringan.",
        why: "Push + pull + core dalam 1 gerakan — efficiency tinggi untuk seluruh upper body",
        category: "DB Mass", db: true
      },
      {
        name: "DB Shrug",
        sets: "3", reps: "15",
        note: "Berdiri tegak, dumbbell di samping. Angkat bahu setinggi mungkin ke arah telinga, tahan 1 detik, turunkan pelan. Jangan putar bahu.",
        why: "Trapezius = leher & bahu berisi. Sering dilewatkan, padahal krusial untuk badan aesthetic",
        category: "DB Mass", db: true
      },
      {
        name: "Squat Jump",
        sets: "3", reps: "12",
        note: "Squat turun, lompat setinggi mungkin, mendarat lembut dengan lutut sedikit ditekuk. Langsung squat lagi. Mendarat keras = salah.",
        why: "Power + cardio + kaki. Detak jantung naik = lemak terbakar + kondisi tubuh meningkat",
        category: "Cardio", db: false
      },
      {
        name: "Mountain Climbers",
        sets: "3", reps: "30 detik",
        note: "Posisi push-up, ganti kaki bergantian cepat seperti lari. Pinggul tetap flat, jangan naik turun. Core aktif terus.",
        why: "Cardio + core + bahu. Finisher sempurna untuk akhir sesi.",
        category: "Cardio", db: false
      },
      {
        name: "Russian Twist",
        sets: "3", reps: "12–15 per sisi",
        note: "Duduk, lutut ditekuk, angkat kaki sedikit dari lantai (atau tetap di lantai untuk pemula). Pegang tangan atau dumbbell ringan, putar badan ke kiri dan kanan dengan kontrol. Jangan banting — gerak terkontrol.",
        why: "Rotasi = oblique bekerja maksimal. Bagian ini yang bikin pinggang terlihat terbentuk",
        category: "Oblique", db: false
      },
      {
        name: "V-Up AMRAP",
        sets: "3", reps: "semampu mungkin",
        note: "Sama kayak push-up AMRAP — catat rekormu! Kalau udah lelah di tengah set, ganti ke Tuck V-Up (lutut ditekuk) dan lanjutkan. Jangan berhenti total.",
        why: "Volume tinggi di V-up = abs makin defined. Sabtu adalah hari benchmark — ukur progress abs kamu",
        category: "Benchmark", db: false
      },
    ],
    cooldown: "Jalan santai 5 menit → full body static stretch 10 menit. Jangan skip ini setelah sesi cardio.",
    skillTarget: "📊 CATAT hari ini: Push-Up = ___ reps | Row = ___ reps | Berat badan = ___kg",
  },
  {
    day: "MINGGU",
    label: "Mobility & Rest",
    theme: "#C77DFF",
    icon: "🌿",
    type: "rest",
    focus: "Sendi · Deep Stretch · Reset Mental",
    goal: "Pulihkan sendi, buka mobilitas, siapkan tubuh dan pikiran untuk minggu baru",
    restSections: [
      {
        title: "🔁 JOINT MOBILITY CIRCUIT (15 menit)",
        color: "#4ECDC4",
        items: [
          { name: "Neck Tilts & Rotations", duration: "5 reps/arah (pelan)", note: "Telinga ke bahu, dagu ke dada, putar perlahan. Jangan paksakan atau crack. Ini mobilitas, bukan peregangan." },
          { name: "Shoulder CARs", duration: "5 reps/sisi", note: "Putar bahu full circle perlahan — ke depan atas belakang bawah. Controlled Articular Rotation. Jaga siku lurus." },
          { name: "Thoracic Rotation (duduk)", duration: "10 reps/sisi", note: "Duduk silang kaki, tangan di belakang kepala, putar dada ke kiri & kanan. Pinggul tetap diam. Buka punggung atas." },
          { name: "Hip 90/90", duration: "60 detik/sisi", note: "Duduk dengan dua kaki dalam posisi 90° (satu di depan, satu di samping). Condong ke kaki depan. Ini buka hip yang paling dalam." },
          { name: "Ankle Circles", duration: "10 reps/arah/kaki", note: "Angkat satu kaki, putar ankle penuh. Ankle kaku = squat buruk = lutut sakit. Investasi kecil, hasil besar." },
          { name: "Wrist CARs", duration: "5 reps/arah", note: "Putar pergelangan tangan full range, perlahan. Injury prevention untuk volume push-up & planche." },
        ]
      },
      {
        title: "🧘 DEEP FLEXIBILITY (20 menit)",
        color: "#C77DFF",
        items: [
          { name: "Standing Forward Fold", duration: "2 × 60 detik", note: "Kaki lurus, raih lantai. Jangan paksa — biarkan gravitasi dan napas yang bekerja. Lutut boleh sedikit ditekuk jika hamstring sangat kaku." },
          { name: "Lizard Pose", duration: "60 detik/sisi", note: "Lunge dalam, kaki depan di luar tangan. Turunkan pinggul. Buka hip flexor terdalam + groin. Bisa di siku untuk lebih dalam." },
          { name: "Straddle + Side Reach", duration: "45 detik/sisi", note: "Duduk kaki lebar, raih satu sisi. Tangan atas bisa membantu pull sisi. Inner thigh & oblique." },
          { name: "Doorway Chest Stretch", duration: "2 × 45 detik", note: "Siku 90° di kusen pintu, langkah satu kaki ke depan, condong sedikit. Pecs terbuka. Penting untuk postur & push-up range." },
          { name: "Thread the Needle", duration: "45 detik/sisi", note: "Dari all-four, selipkan satu tangan di bawah badan ke sisi berlawanan. Bahu dan dada menyentuh lantai. Buka thoracic." },
        ]
      },
      {
        title: "📓 WEEKLY CHECK-IN (5 menit)",
        color: "#FFE66D",
        items: [
          { name: "Timbang berat badan", duration: "—", note: "Timbang pagi setelah bangun, sebelum makan & minum. Catat. Naik 0.3–0.7kg/minggu = on track." },
          { name: "Catat rekor latihan", duration: "—", note: "Push-up berapa? Row berapa? Plank berapa lama? Kalau sama saja dengan minggu lalu, tambah 1 reps minggu depan." },
          { name: "Foto progress (tiap 2 minggu)", duration: "—", note: "Foto depan, samping, belakang. Cahaya sama, posisi sama. Perubahan tidak terlihat harian, tapi jelas terlihat bulanan." },
          { name: "Set 1 target minggu depan", duration: "—", note: "Bukan 5 target. SATU. Spesifik: 'Negative pull-up turun 6 detik' atau 'Goblet squat naik 2kg'." },
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
  { skill: "Push-Up", color: "#FF6B35", icon: "⬇️", steps: ["Wall Push-Up","Incline Push-Up","Full Push-Up","Diamond Push-Up","Archer Push-Up","One-Arm Assisted","One-Arm Push-Up"] },
  { skill: "Squat", color: "#FFE66D", icon: "🦵", steps: ["BW Squat","Goblet Squat","Reverse Lunge","Bulgarian Split Squat","Shrimp Squat","Pistol Squat Assisted","Full Pistol Squat"] },
  { skill: "Flexibility", color: "#A8E6CF", icon: "🤸", steps: ["Hamstring kaku","Touch shin","Touch floor","Full Pike duduk","Bridge nyaman","Pancake 45°","Pancake flat"] },
];

const categoryColors = {
  "Foundation":"#888","Main":"#fff","Progression":"#FFE66D","Hypertrophy":"#FF8FA3",
  "Skill Work":"#C77DFF","Core":"#4ECDC4","Core Elite":"#C77DFF",
  "Benchmark":"#FFE66D","Cardio":"#FF8FA3","Finisher":"#FF6B35",
  "DB Mass":"#FF8FA3","Compound":"#C77DFF","Bodyweight":"#aaa",
  "Oblique":"#a8d8ea","Lower Body":"#FFE66D","Lower Back":"#f4a261",
  "Forearm":"#e9c46a",
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

  const toggleExpand = (key) => {
    setExpandedEx(prev => prev === key ? null : key);
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
        <div style={{ fontSize:11, letterSpacing:4, color:"#555", textTransform:"uppercase", marginBottom:6 }}>Beginner Calisthenics + Dumbbell</div>
        <h1 style={{ margin:0, fontSize:26, fontWeight:900, letterSpacing:-1 }}>🏆 Body, Mass & Strength</h1>
        <p style={{ margin:"6px 0 0", color:"#777", fontSize:12 }}>Optimal · Beginner Friendly · Aesthetic · Naik BB</p>
      </div>

      {/* Tabs */}
      <div style={{ display:"flex", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0 16px", position:"sticky", top:0, background:"#0d0d10", zIndex:10 }}>
        {[["schedule","📅 Jadwal"],["roadmap","🗺️ Roadmap"],["nutrition","🥗 Bulking"]].map(([tab,label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{ flex:1, padding:"14px 4px", background:"transparent", border:"none", borderBottom:`2px solid ${activeTab===tab?"#fff":"transparent"}`, color:activeTab===tab?"#fff":"#555", fontSize:12, fontWeight:700, cursor:"pointer", transition:"all 0.2s" }}>{label}</button>
        ))}
      </div>

      {/* SCHEDULE */}
      {activeTab === "schedule" && (
        <div>
          {/* Day Tabs */}
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
            {/* Header Card */}
            <div style={{ background:`linear-gradient(135deg,${day.theme}18,${day.theme}08)`, border:`1px solid ${day.theme}33`, borderRadius:16, padding:18, marginBottom:14 }}>
              <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
                <div style={{ fontSize:32 }}>{day.icon}</div>
                <div>
                  <div style={{ fontSize:10, color:day.theme, letterSpacing:2, textTransform:"uppercase", fontWeight:800 }}>{day.day} · {day.label}</div>
                  <div style={{ fontSize:18, fontWeight:900, letterSpacing:-0.5, marginTop:2 }}>{day.focus}</div>
                </div>
              </div>
              <div style={{ fontSize:12, color:"#aaa", background:"rgba(255,255,255,0.05)", padding:"8px 12px", borderRadius:8, marginBottom:8 }}>🎯 {day.goal}</div>
              {day.restTime && (
                <div style={{ fontSize:11, color:"#777", background:"rgba(255,255,255,0.03)", padding:"6px 12px", borderRadius:8, marginBottom:8 }}>⏱️ Istirahat: <span style={{ color:day.theme, fontWeight:700 }}>{day.restTime}</span></div>
              )}
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

            {/* REST DAY */}
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

            {/* WORKOUT DAY */}
            {day.type === "workout" && (
              <div>
                {/* Warmup */}
                <div style={{ background:"rgba(255,255,255,0.04)", borderRadius:10, padding:"12px 14px", marginBottom:12, display:"flex", gap:10, alignItems:"flex-start" }}>
                  <span style={{ fontSize:18, flexShrink:0 }}>🔥</span>
                  <div>
                    <div style={{ fontSize:10, color:"#666", fontWeight:800, letterSpacing:1.5, marginBottom:4 }}>WARM-UP (5 menit)</div>
                    <div style={{ fontSize:12, color:"#bbb", lineHeight:1.7 }}>{day.warmup}</div>
                  </div>
                </div>

                {/* Exercise list */}
                {day.exercises.map((ex,i) => {
                  const key = `${activeDay}-${i}`;
                  const done = !!completedExercises[key];
                  const isExpanded = expandedEx === key;
                  const catColor = categoryColors[ex.category] || "#777";
                  const isDB = ex.db;

                  return (
                    <div key={i} style={{ marginBottom:8 }}>
                      <div style={{ background:done?`${day.theme}15`:"rgba(255,255,255,0.03)", border:`1px solid ${done?day.theme+"44":isDB?"rgba(255,143,163,0.15)":"rgba(255,255,255,0.06)"}`, borderRadius:12, overflow:"hidden", transition:"all 0.2s" }}>
                        {/* Main row */}
                        <div style={{ padding:"13px 14px", display:"flex", gap:10, alignItems:"flex-start" }}>
                          {/* Checkbox */}
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
                                <span style={{ color:"#444", fontSize:12 }}>{isExpanded ? "▲" : "▼"}</span>
                              </div>
                            </div>
                            <div style={{ fontSize:11, color:"#555", lineHeight:1.4 }}>💡 {ex.note.length > 80 && !isExpanded ? ex.note.slice(0,80) + "..." : ex.note}</div>
                          </div>
                        </div>

                        {/* Expanded why */}
                        {isExpanded && (
                          <div style={{ padding:"10px 14px 12px 44px", borderTop:"1px solid rgba(255,255,255,0.05)", background:"rgba(255,255,255,0.02)" }}>
                            <div style={{ fontSize:11, color:day.theme, fontWeight:700, marginBottom:4 }}>Kenapa gerakan ini?</div>
                            <div style={{ fontSize:11, color:"#888", lineHeight:1.5 }}>{ex.why}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Cooldown */}
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
            Setiap gerakan adalah anak tangga ke yang berikutnya. <span style={{ color:"#FF8FA3" }}>Jangan loncat step.</span> Kuasai yang sekarang dulu — ini yang buat calisthenics berbeda dari gym biasa.
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
            <div style={{ fontSize:12, fontWeight:800, color:"#FFE66D", marginBottom:8 }}>⏱️ Timeline Realistis (konsisten 5x/minggu)</div>
            <div style={{ fontSize:11, color:"#aaa", lineHeight:2 }}>
              • <span style={{ color:"#ddd" }}>Minggu 1–2:</span> Badan menyesuaikan, form diperbaiki, otot mulai aktif<br/>
              • <span style={{ color:"#ddd" }}>Bulan 1:</span> Push-up 10+ reps, Australian row stabil, +0.5–1kg BB<br/>
              • <span style={{ color:"#ddd" }}>Bulan 2–3:</span> Negative pull-up kuat, push-up 15+, hamstring makin lentur<br/>
              • <span style={{ color:"#ddd" }}>Bulan 3–4:</span> Pull-up pertama 🎉, +2–4kg BB total, badan mulai terlihat beda<br/>
              • <span style={{ color:"#ddd" }}>Bulan 6:</span> 5+ pull-up, pistol squat assisted, badan aesthetic keliatan
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
              → <span style={{ color:"#FFE66D", fontWeight:700 }}>~700 kkal · ~30g protein</span>. Minum 1x sehari, bisa pagi atau post-workout.
            </div>
          </div>

          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:16 }}>
            <div style={{ fontSize:12, fontWeight:800, color:"#A8E6CF", marginBottom:8 }}>⚠️ Kesalahan Paling Umum</div>
            <div style={{ fontSize:11, color:"#555", lineHeight:2 }}>
              ❌ Makan 2–3x sehari saja — ini tidak cukup untuk naik BB<br/>
              ❌ Skip sarapan — mulai dengan defisit dari pagi<br/>
              ❌ Takut karbo — ini justru yang kamu butuhkan<br/>
              ❌ Tidak sabar — naik BB sehat butuh 3–6 bulan konsisten<br/>
              ✅ Konsistensi 90% &gt; program sempurna yang tidak dijalankan
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
