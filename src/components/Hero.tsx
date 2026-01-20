import { motion } from "framer-motion";
import { ArrowDown, Anchor, Globe, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white" />
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Global Logistics Network"
          className="w-full h-full object-cover opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 shadow-sm text-sm text-muted-foreground mb-6">
            <Anchor className="w-4 h-4 text-primary" />
            蓝盟智联 · 数字服务生态
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">全球物流供应链</span>
          <br />
          <span className="text-gradient-ocean">数字化赋能平台</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          连接货代、船司、港口、车队，实现全链路数据可视化
          <br className="hidden md:block" />
          助力外贸企业提升国际物流供应链运营效率
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
        >
          {[
            { icon: Globe, value: "30+", label: "船东航线" },
            { icon: Anchor, value: "10000+", label: "在线运价" },
            { icon: Zap, value: "50%", label: "效率提升" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <stat.icon className="w-6 h-6 text-primary mb-2" />
              <span className="text-3xl md:text-4xl font-bold text-gradient-ocean">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-ocean text-primary-foreground font-semibold rounded-full transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            探索数字服务
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-blue-200/50 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
