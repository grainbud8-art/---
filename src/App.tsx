import { 
  Header, 
  ActionButton, 
  ReminderCard, 
  HealthDataCard, 
  BottomNav, 
  FloatingActions 
} from './components';

export default function App() {
  return (
    <div className="min-h-screen pb-32 pt-24 bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-5 flex flex-col gap-10">
        {/* Actions Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ActionButton icon="PHOTO" label="拍照上传" />
          <ActionButton icon="VOICE" label="语音识别" />
          <ActionButton icon="AI" label="AI助手" variant="primary" />
          <ActionButton icon="EMERGENCY" label="紧急呼叫" variant="error" />
        </section>

        {/* Reminders */}
        <section className="flex flex-col gap-3">
          <h2 className="text-3xl font-black text-on-surface mb-2">今日提醒</h2>
          <ReminderCard 
            icon="MEDS" 
            title="用药提醒" 
            subtitle="泼尼松、羟氯喹" 
            time="12:00" 
          />
          <ReminderCard 
            icon="CALENDAR" 
            title="就诊提醒" 
            subtitle="风湿免疫科复诊" 
            time="明天" 
          />
        </section>

        {/* Health Data */}
        <section className="flex flex-col gap-3">
          <h2 className="text-3xl font-black text-on-surface mb-2">健康数据</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HealthDataCard 
              type="体温" 
              icon="TEMPERATURE" 
              value="37.2" 
              unit="℃" 
              status="正常"
              borderColor="border-primary"
            />
            <HealthDataCard 
              type="皮疹情况" 
              icon="RASH" 
              value="轻微红斑" 
              borderColor="border-tertiary"
            />
          </div>
        </section>
      </main>

      <FloatingActions />
      <BottomNav />
    </div>
  );
}

