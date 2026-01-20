import { motion } from "framer-motion";
import { 
  Search, 
  Ship, 
  MapPin, 
  FileText, 
  Truck, 
  Globe, 
  Bell,
  Calculator,
  TrendingUp,
  MessageSquare,
  Smartphone,
  Monitor
} from "lucide-react";

const features = [
  { icon: Search, title: "运价查询", desc: "30+船东、30+航线、10000+运价在线" },
  { icon: Ship, title: "船期查询", desc: "覆盖全球基港+偏港，精准船期信息" },
  { icon: MapPin, title: "物流跟踪", desc: "海运/陆运全程可视化追踪" },
  { icon: FileText, title: "AI报关资料", desc: "智能生成报关所需文件" },
  { icon: Truck, title: "货车跟踪", desc: "拖车GPS实时定位" },
  { icon: Globe, title: "HS编码查询", desc: "商品编码快速查询" },
  { icon: Bell, title: "节点订阅", desc: "物流状态变更实时通知" },
  { icon: Calculator, title: "装箱大师", desc: "智能装箱方案计算" },
  { icon: TrendingUp, title: "运价趋势", desc: "航线运价走势分析" },
  { icon: MessageSquare, title: "智能客服", desc: "7*24小时在线解答" },
];

const BluefishSection = () => {
  return (
    <section id="bluefish" className="py-24 relative overflow-hidden bg-blue-50/30">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              免费使用
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-bluefish">蓝鳛</span>
              <span className="text-foreground ml-2">Bluefish</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              全球物流供应链数字化赋能工具
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              蓝鳛是面向外贸企业和物流从业者的免费工具，提供运价查询、船期查询、物流跟踪等
              核心功能，帮助用户快速获取物流信息，提升工作效率。支持PC端和微信小程序双端使用。
            </p>

            {/* Platform Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="http://pc.iloveseawin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <Monitor className="w-5 h-5" />
                PC端登录
              </a>
              <div className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-200 text-blue-600 rounded-full font-medium hover:border-blue-400 hover:bg-blue-50 transition-all duration-300">
                <Smartphone className="w-5 h-5" />
                微信搜"Bluefish 蓝鳛"
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "30+", label: "船东" },
                { value: "30+", label: "航线" },
                { value: "10000+", label: "在线运价" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-xl bg-white border border-blue-100 shadow-sm">
                  <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-4 rounded-xl bg-white border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-blue-500 mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BluefishSection;
