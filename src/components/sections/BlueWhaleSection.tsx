import { motion } from "framer-motion";
import { 
  Database, 
  Link2, 
  BarChart3, 
  Settings, 
  Shield,
  Layers,
  RefreshCw,
  FileCheck,
  Users,
  Wallet,
  MessageSquare
} from "lucide-react";
import ContactFormDialog from "@/components/ContactFormDialog";
import { Button } from "@/components/ui/button";
const capabilities = [
  {
    icon: Database,
    title: "全链路数据管理",
    desc: "管理所有货代运单，订单全生命周期追踪"
  },
  {
    icon: Link2,
    title: "深度链接",
    desc: "连接货代、船司、港口、车队，数据实时同步"
  },
  {
    icon: BarChart3,
    title: "可视化看板",
    desc: "运营数据实时呈现，辅助决策分析"
  },
  {
    icon: Wallet,
    title: "业财一体化",
    desc: "费用管理、对账结算、财务报表一站式处理"
  },
  {
    icon: RefreshCw,
    title: "系统对接",
    desc: "支持ERP/WMS/OMS/TMS等系统无缝衔接"
  },
  {
    icon: Settings,
    title: "定制开发",
    desc: "根据企业需求定制化功能开发"
  },
];

const features = [
  "询比价管理",
  "订单管理",
  "运单管理",
  "订舱管理",
  "拖车调度",
  "报关管理",
  "预警提醒",
  "数据报表",
  "数据大屏",
  "费用管理",
  "对账结算",
  "供应商管理"
];

const BlueWhaleSection = () => {
  return (
    <section id="bluewhale" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bluewhale/10 text-bluewhale text-sm mb-6">
            <Shield className="w-4 h-4" />
            SaaS 企业版
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-bluewhale">蓝鲸</span>
            <span className="text-foreground ml-2">BlueWhale</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            外贸企业国际物流供应链智能协同平台
            <br />
            <span className="text-lg">适用于年度出口量&gt;500Teu的中大型外贸企业</span>
          </p>
          
          <div className="mt-8">
            <ContactFormDialog title="蓝鲸方案咨询">
              <Button variant="outline" className="border-bluewhale text-bluewhale hover:bg-bluewhale/10 px-8 py-3 rounded-full">
                <MessageSquare className="w-4 h-4 mr-2" />
                方案咨询
              </Button>
            </ContactFormDialog>
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-bluewhale/30 transition-all duration-500 hover:shadow-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-bluewhale/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <cap.icon className="w-7 h-7 text-bluewhale" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{cap.title}</h3>
              <p className="text-muted-foreground">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-foreground">核心功能模块</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="px-4 py-2 rounded-full bg-bluewhale/10 text-bluewhale text-sm font-medium"
              >
                {feature}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-card border border-border"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">系统集成能力</h3>
              <p className="text-muted-foreground">
                支持与您现有系统无缝对接，包括 ERP、WMS、OMS、TMS 等
              </p>
            </div>
            <div className="flex items-center gap-4">
              {["ERP", "WMS", "OMS", "TMS"].map((sys, index) => (
                <div
                  key={index}
                  className="w-16 h-16 rounded-xl bg-bluewhale/10 flex items-center justify-center border border-bluewhale/20"
                >
                  <span className="text-sm font-bold text-bluewhale">{sys}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlueWhaleSection;
