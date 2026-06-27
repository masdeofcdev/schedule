import { useState } from "react";

const days = [
  {
    day: "SENIN",
    label: "Push Day",
    theme: "#FF6B35",
    icon: "💪",
    type: "workout",
    goal: "Bangun kekuatan push & fondasi handstand",
    sections: [
      {
        title: "⚙️ CORE & JOINT PREP",
        restNote: "Istirahat opsional atau max 30 detik",
        color: "#888",
        exercises: [
          { name: "Scapular Push-Up", reps: "2 set × 8–12 reps", note: "Dari posisi plank, angkat & turunkan tulang belikat tanpa tekuk siku. Aktifkan scapula sebelum push." },
          { name: "Hollow Body Hold", reps: "2 set × 30 detik", note: "Berbaring, tekan punggung bawah ke lantai, angkat bahu & kaki sedikit. Rib cage turun." },
          { name: "Side Plank", reps: "2 set × 30 detik/sisi", note: "Siku di lantai, tubuh lurus. Angkat pinggul. Mulai dari lutut jika terlalu berat." },
        ]
      },
      {
        title: "🔥 THE PERFECT WARMUP",
        restNote: "Istirahat opsional atau max 30 detik",
        color: "#FFE66D",
        exercises: [
          { name: "Arm Circles", reps: "1 set × 30 detik", note: "Kecil ke besar, ke depan lalu ke belakang." },
          { name: "Pike to Plank", reps: "1 set × 30 detik", note: "Dari posisi pike (V terbalik), pindah ke posisi plank, kembali lagi. Bergantian." },
          { name: "Plank Walk", reps: "1 set × 30 detik", note: "Dari plank siku, naik ke plank tangan satu per satu, turun lagi. Bergantian kiri-kanan." },
          { name: "High Knees", reps: "1 set × 60 detik", note: "Lari di tempat, lutut setinggi pinggang. Temponya bisa disesuaikan." },
        ]
      },
      {
        title: "💪 STRENGTH TRAINING",
        restNote: "Istirahat minimal 90 detik antar set",
        color: "#FF6B35",
        exercises: [
          { name: "Planche Lean", reps: "2 set × 10 detik", note: "Dari posisi plank tangan, condongkan badan ke depan sampai bahu melewati tangan. Tahan. Ini skill work — kualitas bukan kuantitas.", badge: "SKILL" },
          { name: "Hindu Push-Up", reps: "3 set × 7 reps", note: "Mulai posisi pike, turunkan dada ke lantai sambil geser ke depan, naik ke cobra, kembali ke pike. Satu gerakan mengalir." },
          { name: "Incline Push-Up", reps: "3 set × 12 reps", note: "Tangan di meja/kursi. Turunkan dada ke permukaan, dorong kembali. Makin rendah permukaan = makin susah." },
          { name: "Pike Hold", reps: "2 set × 20–30 detik", note: "Posisi V terbalik, pinggul setinggi mungkin. Tahan tanpa bergerak. Target 3×30 detik nyaman sebelum coba Wall Pike Push-Up.", badge: "SKILL" },
          { name: "Diamond Push-Up", reps: "3 set × 6 reps", note: "Tangan berlian di bawah dada, siku menutup rapat ke badan. Mulai dari lutut jika perlu." },
          { name: "Chair Dip", reps: "3 set × 7 reps", note: "Tangan di tepi kursi, kaki lurus. Turunkan hingga siku 90°. Condong ke depan untuk lebih kena dada bawah." },
          { name: "Wall Handstand Hold", reps: "3 set × 10–20 detik", note: "Chest to wall (perut menghadap tembok). Tangan selebar bahu. Mulai dari 5 detik dan naik perlahan.", badge: "SKILL" },
        ]
      },
    ],
    cooldown: "Chest doorway stretch 30 detik → shoulder cross stretch 30 detik/sisi → child's pose 60 detik",
    skillTarget: "🪜 Pike Progression: Pike Hold → Wall Pike PU → Regular Pike PU → Elevated Pike PU → HSPU",
  },
  {
    day: "RABU",
    label: "Pull Day",
    theme: "#4ECDC4",
    icon: "🏋️",
    type: "workout",
    goal: "Bangun kekuatan pull & fondasi pull-up pertama",
    sections: [
      {
        title: "⚙️ CORE & JOINT PREP",
        restNote: "Istirahat opsional atau max 30 detik",
        color: "#888",
        exercises: [
          { name: "Cat and Cow Pose", reps: "1 set × 45 detik", note: "Dari posisi all-four. Buang napas saat punggung naik (cat), tarik napas saat punggung turun (cow). Pelan & sadar." },
          { name: "Bird Dog Pose", reps: "1 set × 45 detik", note: "Dari all-four, angkat tangan kanan & kaki kiri bersamaan. Tahan 2 detik. Ganti sisi. Jaga pinggul tidak berputar." },
          { name: "Scapular Pull-Up", reps: "2 set × 8–12 reps", note: "Gantung di bar, tanpa tekuk siku. Hanya angkat & turunkan bahu (retract scapula). Aktifkan lat sebelum pull." },
        ]
      },
      {
        title: "🔥 THE PERFECT WARMUP",
        restNote: "Istirahat opsional atau max 30 detik",
        color: "#FFE66D",
        exercises: [
          { name: "Superman", reps: "1 set × 8–12 reps", note: "Tengkurap, angkat dada + tangan + kaki bersamaan. Tahan 2 detik. Punggung bawah aktif." },
          { name: "Superman Side Crunches", reps: "1 set × 8–12 reps/sisi", note: "Tengkurap, angkat satu sisi (tangan kanan + kaki kanan bersamaan). Ganti sisi." },
          { name: "Cobra Push-Up", reps: "1 set × 8–12 reps", note: "Dari posisi tengkurap, tekan tangan ke lantai, angkat dada seperti cobra. Turunkan perlahan." },
          { name: "Reverse Plank", reps: "1 set × 8–12 reps", note: "Duduk, tangan di belakang, angkat pinggul hingga badan lurus dari kepala ke kaki. Tahan 2 detik." },
        ]
      },
      {
        title: "💪 STRENGTH TRAINING",
        restNote: "Istirahat minimal 90 detik antar set",
        color: "#4ECDC4",
        exercises: [
          { name: "Dead Hang", reps: "3 set × 20–30 detik", note: "Gantung di bar, grip kuat, biarkan bahu naik alami. Bangun grip strength & dekompresi tulang belakang. Ini pengganti FL Raise yang terlalu advance.", badge: "FONDASI" },
          { name: "Scapular Pull-Up", reps: "3 set × 8–10 reps", note: "Gantung di bar, angkat & turunkan bahu tanpa tekuk siku. Aktifkan lat. Pengganti Skin the Cat — latih otot yang sama dengan aman." },
          { name: "Australian Row (Bodyweight Row)", reps: "3 set × 8 reps", note: "Pegang tepi meja, tubuh lurus. Tarik dada ke meja, tahan 1 detik. Makin rebah = makin susah. Rotasi grip tiap set." },
          { name: "Negative Pull-Up", reps: "3 set × 3–5 reps", note: "Naik ke chin over bar pakai kursi. Turunkan badan seperlahan mungkin (5–8 detik). Ini cara paling efektif menuju pull-up pertama.", badge: "SKILL" },
          { name: "Bodyweight Curl", reps: "3 set × 7 reps", note: "Duduk di bawah meja rendah, pegang tepi meja dengan telapak ke atas. Angkat hanya lengan bawah (siku sebagai poros). Isolasi bicep tanpa dumbbell." },
          { name: "Wall Handstand Hold", reps: "3 set × 15 detik", note: "Chest to wall. Tangan selebar bahu. Fokus ke posisi bahu & core aktif.", badge: "SKILL" },
        ]
      },
    ],
    cooldown: "Lat stretch gantung rileks 20 detik → bicep wall stretch 30 detik/sisi → child's pose 60 detik",
    skillTarget: "🪜 Pull-Up Progression: Dead Hang → Scapular PU → Australian Row → Negative PU → Full Pull-Up",
  },
  {
    day: "KAMIS",
    label: "Cardio + Mobility",
    theme: "#A8E6CF",
    icon: "🧘",
    type: "mobility",
    goal: "Pulihkan tubuh, buka mobilitas, jaga kondisi kardio",
    sections: [
      {
        title: "🏃 CARDIO RINGAN (pilih salah satu)",
        restNote: "Langsung lanjut ke mobility setelah selesai",
        color: "#FF8FA3",
        exercises: [
          { name: "Jalan Cepat / Lari Santai", reps: "10–20 menit", note: "Intensitas rendah — bisa ngobrol tapi sedikit ngos-ngosan. Bukan sprint." },
          { name: "Jumping Jacks", reps: "3 set × 60 detik", note: "Alternatif kalau tidak bisa keluar. Istirahat 30 detik antar set." },
          { name: "High Knees", reps: "3 set × 45 detik", note: "Lari di tempat, lutut setinggi pinggang. Istirahat 30 detik antar set." },
        ]
      },
      {
        title: "🧘 MOBILITY TRAINING",
        restNote: "Istirahat 30–60 detik",
        color: "#A8E6CF",
        exercises: [
          { name: "Cat and Cow Pose", reps: "1 set × 60 detik", note: "Pelan, sadar, ikuti napas. Ini bukan exercise — ini pemulihan tulang belakang." },
          { name: "Cobra Pose", reps: "1 set × 60 detik", note: "Tengkurap, tangan di samping dada, angkat badan. Pinggul tetap di lantai. Buka dada & bahu anterior." },
          { name: "Child's Pose", reps: "1 set × 60 detik", note: "Lutut lebar, dahi ke lantai, tangan ke depan. Rileks total. Napas dalam." },
          { name: "Superman Hold", reps: "1 set × 60 detik", note: "Angkat & tahan perlahan bergantian atau bersamaan. Lower back aktif." },
          { name: "Reverse Snow Angels", reps: "1 set × 60 detik", note: "Tengkurap, tangan di sisi tubuh. Geser tangan dari samping tubuh ke atas kepala (seperti snow angel tapi terbalik). Buka shoulder & thoracic." },
          { name: "Squat to Pike Hold", reps: "1 set × 60 detik", note: "Jongkok dalam, lalu luruskan kaki dari posisi jongkok (pinggul tetap tinggi). Bergantian. Buka hamstring + ankle." },
          { name: "Prayer Squat", reps: "1 set × 60 detik", note: "Jongkok dalam, tangan prayer di depan dada, siku dorong lutut keluar. Buka hip & ankle." },
        ]
      },
    ],
    cooldown: "",
    skillTarget: "💡 Kamis = investasi untuk Jumat & siklus berikutnya. Jangan skip.",
  },
  {
    day: "JUMAT",
    label: "Full Body",
    theme: "#C77DFF",
    icon: "⚡",
    type: "workout",
    goal: "Gabungkan semua gerakan — push, pull, legs, core dalam satu sesi",
    sections: [
      {
        title: "⚙️ CORE & JOINT PREP",
        restNote: "Istirahat opsional atau max 30 detik",
        color: "#888",
        exercises: [
          { name: "Bird Dog Pose", reps: "2 set × 12 reps/sisi", note: "Dari all-four, angkat tangan kanan & kaki kiri bersamaan. Tahan 2 detik. Core stabil sepanjang gerakan." },
          { name: "Hollow Body Hold", reps: "2 set × 20 detik", note: "Fokus tekan punggung bawah ke lantai. Kalau berat, tekuk lutut dulu." },
        ]
      },
      {
        title: "🔥 THE PERFECT WARMUP",
        restNote: "Pilih bebas dari latihan warmup Senin atau Rabu",
        color: "#FFE66D",
        exercises: [
          { name: "Pilih dari warmup Senin atau Rabu", reps: "~5 menit total", note: "Arm circles, pike to plank, cobra push-up, reverse plank — pilih 3–4 yang paling terasa enak hari ini." },
        ]
      },
      {
        title: "💪 STRENGTH TRAINING",
        restNote: "Istirahat minimal 90 detik antar set",
        color: "#C77DFF",
        exercises: [
          { name: "Planche Lean", reps: "2 set × 10 detik", note: "Condong ke depan dari plank tangan. Skill work — kualitas penuh.", badge: "SKILL" },
          { name: "Incline Push-Up", reps: "3 set × 12 reps", note: "Tangan di meja. Turunkan dada penuh, dorong kembali. Makin rendah makin susah." },
          { name: "Cobra Push-Up", reps: "1 set × 15 reps", note: "Dari tengkurap ke cobra dengan menekan tangan. Gerakan mengalir, bukan melompat." },
          { name: "Back Bridge Press", reps: "3 set × 5 reps", note: "Berbaring, lutut ditekuk, tangan di samping kepala menghadap bawah. Tekan lantai, angkat badan membentuk bridge. Pelan & kontrol." },
          { name: "Australian Row", reps: "3 set × 8 reps", note: "Pegang meja, tubuh lurus. Tarik dada ke meja. Ganti grip tiap set untuk variasi." },
          { name: "Reverse Lunge", reps: "2 set × 8 reps/kaki", note: "Langkah ke belakang, turunkan lutut hampir ke lantai. Lebih mudah dari archer squat, sama efektifnya." },
          { name: "Bulgarian Split Squat", reps: "2 set × 6 reps/kaki", note: "Kaki belakang di kursi. Turunkan lutut belakang ke lantai. Ini akan terasa! Pegang tembok jika perlu." },
        ]
      },
    ],
    cooldown: "Hip flexor lunge stretch 40 detik/sisi → hamstring stretch 40 detik → chest stretch 30 detik → child's pose 60 detik",
    skillTarget: "📊 Jumat = test minggu ini. Bandingkan dengan Jumat sebelumnya — ada yang lebih gampang?",
  },
];

const categoryColors = {
  "SKILL": "#C77DFF",
  "FONDASI": "#4ECDC4",
};

export default function App() {
  const [activeDay, setActiveDay] = useState(0);
  const [completed, setCompleted] = useState({});
  const [expanded, setExpanded] = useState(null);

  const day = days[activeDay];

  const toggleDone = (dayIdx, secIdx, exIdx) => {
    const key = `${dayIdx}-${secIdx}-${exIdx}`;
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getDayProgress = (dayIdx) => {
    const d = days[dayIdx];
    if (!d.sections) return null;
    const total = d.sections.reduce((a, s) => a + s.exercises.length, 0);
    if (!total) return null;
    let done = 0;
    d.sections.forEach((s, si) => s.exercises.forEach((_, ei) => {
      if (completed[`${dayIdx}-${si}-${ei}`]) done++;
    }));
    return Math.round((done / total) * 100);
  };

  return (
    <div style={{ minHeight:"100vh", background:"#0d0d10", fontFamily:"'Segoe UI',system-ui,sans-serif", color:"#f0f0f0", paddingBottom:80, maxWidth:480, margin:"0 auto" }}>

      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#1a1a2e 0%,#16213e 60%,#0f3460 100%)", padding:"28px 20px 20px", textAlign:"center", borderBottom:"1px solid rgba(255,255,255,0.08)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.03, backgroundImage:"repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)" }} />
        <div style={{ fontSize:11, letterSpacing:4, color:"#555", textTransform:"uppercase", marginBottom:6 }}>4 Day Beginner Calisthenics</div>
        <h1 style={{ margin:0, fontSize:26, fontWeight:900, letterSpacing:-1 }}>🏆 Strength & Endurance</h1>
        <p style={{ margin:"6px 0 0", color:"#777", fontSize:12 }}>Bodyweight Focus · Skill Progression · Core & Joint Prep</p>
      </div>

      {/* Day Tabs */}
      <div style={{ display:"flex", gap:6, padding:"16px 16px 0", overflowX:"auto", scrollbarWidth:"none" }}>
        {days.map((d,i) => {
          const progress = getDayProgress(i);
          const isActive = activeDay === i;
          return (
            <button key={i} onClick={() => setActiveDay(i)} style={{ flex:"0 0 auto", padding:"10px 12px", borderRadius:12, border:`2px solid ${isActive?d.theme:"rgba(255,255,255,0.07)"}`, background:isActive?`${d.theme}20`:"rgba(255,255,255,0.03)", color:isActive?d.theme:"#555", fontSize:10, fontWeight:800, cursor:"pointer", textAlign:"center", minWidth:60, position:"relative", transition:"all 0.2s" }}>
              <div style={{ fontSize:18, marginBottom:2 }}>{d.icon}</div>
              <div>{d.day.slice(0,3)}</div>
              {progress !== null && (
                <div style={{ position:"absolute", bottom:-4, left:"50%", transform:"translateX(-50%)", width:32, height:3, borderRadius:2, background:"rgba(255,255,255,0.08)", overflow:"hidden" }}>
                  <div style={{ width:`${progress}%`, height:"100%", background:d.theme, borderRadius:2, transition:"width 0.3s" }} />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Day Content */}
      <div style={{ padding:"20px 16px 0" }}>

        {/* Day Header Card */}
        <div style={{ background:`linear-gradient(135deg,${day.theme}18,${day.theme}08)`, border:`1px solid ${day.theme}33`, borderRadius:16, padding:18, marginBottom:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:10 }}>
            <div style={{ fontSize:32 }}>{day.icon}</div>
            <div>
              <div style={{ fontSize:10, color:day.theme, letterSpacing:2, textTransform:"uppercase", fontWeight:800 }}>{day.day} · {day.label}</div>
              <div style={{ fontSize:16, fontWeight:900, marginTop:2 }}>{day.goal}</div>
            </div>
          </div>
          {day.skillTarget && <div style={{ fontSize:11, color:day.theme, opacity:0.85, background:`${day.theme}12`, padding:"6px 10px", borderRadius:8 }}>{day.skillTarget}</div>}
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

        {/* Sections */}
        {day.sections && day.sections.map((section, si) => (
          <div key={si} style={{ marginBottom:20 }}>
            {/* Section Header */}
            <div style={{ marginBottom:10 }}>
              <div style={{ fontSize:12, fontWeight:800, color:section.color, letterSpacing:0.5 }}>{section.title}</div>
              <div style={{ fontSize:10, color:"#555", marginTop:3 }}>⏱️ {section.restNote}</div>
            </div>

            {/* Exercises */}
            {section.exercises.map((ex, ei) => {
              const key = `${activeDay}-${si}-${ei}`;
              const done = !!completed[key];
              const isExpanded = expanded === key;

              return (
                <div key={ei} style={{ marginBottom:8 }}>
                  <div style={{ background:done?`${section.color}15`:"rgba(255,255,255,0.03)", border:`1px solid ${done?section.color+"44":"rgba(255,255,255,0.07)"}`, borderRadius:12, overflow:"hidden", transition:"all 0.2s" }}>
                    <div style={{ padding:"12px 14px", display:"flex", gap:10, alignItems:"flex-start" }}>
                      {/* Checkbox */}
                      <div onClick={() => toggleDone(activeDay, si, ei)} style={{ width:20, height:20, borderRadius:5, flexShrink:0, marginTop:2, border:`2px solid ${done?section.color:"#444"}`, background:done?section.color:"transparent", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:done?"#000":"transparent", fontWeight:900, transition:"all 0.2s", cursor:"pointer" }}>✓</div>

                      {/* Content */}
                      <div style={{ flex:1 }} onClick={() => setExpanded(isExpanded ? null : key)}>
                        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8, marginBottom:5, flexWrap:"wrap" }}>
                          <div style={{ display:"flex", alignItems:"center", gap:6, flexWrap:"wrap" }}>
                            <span style={{ fontSize:13, fontWeight:700, color:done?"#555":"#f0f0f0", textDecoration:done?"line-through":"none" }}>{ex.name}</span>
                            {ex.badge && (
                              <span style={{ fontSize:9, color:categoryColors[ex.badge], background:`${categoryColors[ex.badge]}18`, padding:"1px 7px", borderRadius:10, fontWeight:700, border:`1px solid ${categoryColors[ex.badge]}33` }}>{ex.badge}</span>
                            )}
                          </div>
                          <div style={{ display:"flex", gap:5, alignItems:"center", flexShrink:0 }}>
                            <span style={{ background:`${section.color}22`, color:section.color, padding:"2px 8px", borderRadius:20, fontSize:10, fontWeight:700 }}>{ex.reps}</span>
                            <span style={{ color:"#444", fontSize:11 }}>{isExpanded?"▲":"▼"}</span>
                          </div>
                        </div>
                        <div style={{ fontSize:11, color:"#555", lineHeight:1.5 }}>
                          {!isExpanded && ex.note.length > 70 ? ex.note.slice(0,70)+"..." : ex.note}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

        {/* Cooldown */}
        {day.cooldown && (
          <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:"12px 14px", display:"flex", gap:10, alignItems:"flex-start" }}>
            <span style={{ fontSize:18, flexShrink:0 }}>❄️</span>
            <div>
              <div style={{ fontSize:10, color:"#666", fontWeight:800, letterSpacing:1.5, marginBottom:4 }}>COOL-DOWN</div>
              <div style={{ fontSize:12, color:"#bbb", lineHeight:1.7 }}>{day.cooldown}</div>
            </div>
          </div>
        )}

      </div>

      {/* Bottom info */}
      <div style={{ padding:"20px 16px 0", textAlign:"center" }}>
        <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:14 }}>
          <div style={{ fontSize:11, color:"#555", marginBottom:10, letterSpacing:1, fontWeight:700 }}>📅 JADWAL MINGGUAN</div>
          {[
            { hari:"Senin", sesi:"Push Day", icon:"💪", theme:"#FF6B35" },
            { hari:"Selasa", sesi:"Rest", icon:"😴", theme:"#888" },
            { hari:"Rabu", sesi:"Pull Day", icon:"🏋️", theme:"#4ECDC4" },
            { hari:"Kamis", sesi:"Cardio + Mobility", icon:"🧘", theme:"#A8E6CF" },
            { hari:"Jumat", sesi:"Full Body", icon:"⚡", theme:"#C77DFF" },
            { hari:"Sabtu", sesi:"Rest", icon:"😴", theme:"#888" },
            { hari:"Minggu", sesi:"Rest", icon:"😴", theme:"#888" },
          ].map((d,i) => (
            <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"7px 0", borderBottom:i<6?"1px solid rgba(255,255,255,0.05)":"none" }}>
              <span style={{ fontSize:12, color:"#888" }}>{d.hari}</span>
              <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ fontSize:12 }}>{d.icon}</span>
                <span style={{ fontSize:12, color:d.theme, fontWeight:700 }}>{d.sesi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
