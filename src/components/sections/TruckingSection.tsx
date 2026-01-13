import { motion } from "framer-motion";
import { 
  Truck, 
  MapPin, 
  Users, 
  FileText, 
  Smartphone,
  CheckCircle,
  Clock,
  Navigation,
  Package
} from "lucide-react";

const fleetFeatures = [
  { icon: Users, title: "司机管理", desc: "司机档案、资质管理" },
  { icon: Truck, title: "车辆管理", desc: "车辆信息、维护记录" },
  { icon: Package, title: "订单管理", desc: "智能派单、进度跟踪" },
  { icon: Navigation, title: "GPS跟踪", desc: "车辆实时定位监控" },
  { icon: FileText, title: "电子回单", desc: "拍照上传、自动归档" },
  { icon: Clock, title: "时效管理", desc: "节点监控、预警提醒" },
];

const driverFeatures = [
  "接单派单",
  "导航路线",
  "回单拍照",
  "费用申报",
  "行程记录",
  "消息通知"
];

const TruckingSection = () => {
  return (
    <section id="trucking" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Fleet Portal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-trucking/10 text-trucking text-sm mb-6">
              <Truck className="w-4 h-4" />
              车队门户 + 司机小程序
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-trucking">蓝盟智运</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-4">
              集装箱运输全流程数字化管理
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              为集装箱车队和工厂类型外贸企业打造的运输管理系统，实现从派单、运输、
              到回单的全流程数字化，提升车队运营效率，降低管理成本。
            </p>

            <a
              href="https://truck.iloveseawin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-trucking text-primary-foreground rounded-full font-medium hover:shadow-glow transition-all duration-300 mb-8"
            >
              <Truck className="w-5 h-5" />
              访问车队门户
            </a>

            {/* Fleet Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {fleetFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-4 rounded-xl bg-card border border-border"
                >
                  <feature.icon className="w-6 h-6 text-trucking mb-2" />
                  <h4 className="font-semibold text-foreground text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Driver App */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="relative bg-gradient-card rounded-[3rem] p-4 border border-border shadow-card">
                <div className="bg-background rounded-[2.5rem] p-6 min-h-[500px]">
                  {/* App Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-trucking/10 flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-trucking" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">司机小程序</h4>
                      <p className="text-sm text-muted-foreground">微信扫码使用</p>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3">
                    {driverFeatures.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
                      >
                        <CheckCircle className="w-5 h-5 text-trucking" />
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-trucking/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-trucking/10 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TruckingSection;
