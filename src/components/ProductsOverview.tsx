import { motion } from "framer-motion";
import { Fish, Waves, Truck, Code, Brain } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "bluefish",
    title: "蓝鳛",
    subtitle: "Bluefish",
    description: "免费国际物流服务工具，全球物流供应链数字化赋能，PC端+小程序全覆盖",
    icon: Fish,
    color: "hsl(199, 89%, 48%)",
    features: ["全球运价查询", "船期计划追踪", "物流可视化看板", "AI报关资料"],
  },
  {
    id: "bluewhale",
    title: "蓝鲸",
    subtitle: "BlueWhale SaaS",
    description: "外贸企业国际物流供应链协同平台，深度链接货代、船司、港口",
    icon: Waves,
    color: "hsl(222, 70%, 55%)",
    features: ["全链路数据可视化", "业财一体化", "ERP/WMS/OMS/TMS对接", "定制化开发"],
  },
  {
    id: "trucking",
    title: "蓝盟智运",
    subtitle: "Smart Trucking",
    description: "集装箱车队门户+司机小程序，集装箱运输全流程数字化管理",
    icon: Truck,
    color: "hsl(170, 70%, 45%)",
    features: ["车队司机管理", "订单智能调度", "GPS实时跟踪", "电子回单"],
  },
  {
    id: "api",
    title: "数据接口",
    subtitle: "API Toolkit",
    description: "开放API接口，快速接入物流跟踪、运价查询、在线下单能力",
    icon: Code,
    color: "hsl(280, 70%, 55%)",
    features: ["海运整箱接口", "跨境电商物流", "陆运拖车查询", "标准化对接"],
  },
  {
    id: "ai",
    title: "AI解决方案",
    subtitle: "AI Solutions",
    description: "基于大模型的智能物流解决方案，提升业务协同效率50%",
    icon: Brain,
    color: "hsl(45, 93%, 58%)",
    features: ["智能客服机器人", "询报价机器人", "单证识别", "费用录入"],
  },
];

const ProductsOverview = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            数字服务生态
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            五大核心<span className="text-gradient-ocean">产品矩阵</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            从免费工具到企业级平台，从API接口到AI智能，全方位赋能国际物流供应链
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              {...product}
              delay={index * 0.1}
              onClick={() => scrollToSection(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;
