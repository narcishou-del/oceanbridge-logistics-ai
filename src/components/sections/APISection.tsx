import { motion } from "framer-motion";
import { 
  Code, 
  Ship, 
  Plane, 
  Truck,
  Search,
  DollarSign,
  FileText,
  ArrowRight,
  Copy
} from "lucide-react";
import { useState } from "react";

const apiCategories = [
  {
    id: "ocean",
    title: "传统海运整箱",
    icon: Ship,
    color: "hsl(199, 89%, 48%)",
    apis: [
      {
        name: "物流跟踪查询",
        desc: "查询海运整箱物流节点状态",
        params: "提单号/订单号",
        returns: "物流节点、时间、状态"
      },
      {
        name: "运价查询",
        desc: "查询海运整箱运价",
        link: "https://s.apifox.cn/6dbdeb7a-100f-45d7-a809-33a2b8702706/api-139704864",
        params: "起运港、目的港、箱型",
        returns: "运价、船期、航线信息"
      },
      {
        name: "物流下单",
        desc: "创建海运整箱订单",
        params: "客户ID、港口、货物信息",
        returns: "订单号、状态"
      }
    ]
  },
  {
    id: "ecommerce",
    title: "跨境电商物流",
    icon: Plane,
    color: "hsl(280, 70%, 55%)",
    apis: [
      {
        name: "物流跟踪查询",
        desc: "查询跨境物流状态",
        params: "运单号",
        returns: "物流轨迹、状态"
      },
      {
        name: "运价查询",
        desc: "查询跨境电商物流运价",
        params: "始发地、目的地、邮编、仓库代码、重量、体积",
        returns: "产品名称、运费估算、时效说明、赔偿说明"
      },
      {
        name: "物流下单",
        desc: "创建跨境电商物流订单",
        params: "客户信息、产品渠道、货物信息",
        returns: "订单号、状态"
      }
    ]
  },
  {
    id: "trucking",
    title: "陆运拖车",
    icon: Truck,
    color: "hsl(170, 70%, 45%)",
    apis: [
      {
        name: "运价查询",
        desc: "查询集装箱拖车运价",
        params: "始发地、目的港、箱型、重量",
        returns: "20GP拖车运费、40HQ拖车运费"
      }
    ]
  }
];

const APISection = () => {
  const [activeCategory, setActiveCategory] = useState("ocean");
  const activeData = apiCategories.find(c => c.id === activeCategory);

  return (
    <section id="api" className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
            <Code className="w-4 h-4" />
            开发者接口
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-api">数据接口</span>
            <span className="text-foreground ml-2">API Toolkit</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            标准化 RESTful API，快速接入物流查询、运价比价、在线下单能力
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {apiCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-purple-600 text-white shadow-lg"
                  : "bg-white border border-blue-100 text-muted-foreground hover:text-foreground hover:border-purple-300"
              }`}
            >
              <category.icon className="w-5 h-5" />
              {category.title}
            </button>
          ))}
        </div>

        {/* API Cards */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeData?.apis.map((api, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white border border-blue-100 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">{api.name}</h3>
                {api.link && (
                  <a
                    href={api.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className="text-muted-foreground mb-4">{api.desc}</p>

              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <FileText className="w-4 h-4" />
                    入参
                  </div>
                  <p className="text-sm text-foreground">{api.params}</p>
                </div>

                <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Search className="w-4 h-4" />
                    返回
                  </div>
                  <p className="text-sm text-foreground">{api.returns}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Get Documentation Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-purple-200 text-purple-600 font-medium rounded-full hover:border-purple-400 hover:bg-purple-50 transition-all duration-300"
          >
            获取完整接口文档
          </a>
        </motion.div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-[#1a1a2e] border border-border overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-sm text-muted-foreground">API Request Example</span>
            </div>
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <Copy className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          <pre className="text-sm text-green-400 overflow-x-auto">
            <code>{`// 运价查询示例
fetch('https://api.iloveseawin.com/v1/rates', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_TOKEN'
  },
  body: JSON.stringify({
    loadingPort: 'CNSHA',
    dischargePort: 'USLAX',
    containerType: '40HQ'
  })
})`}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default APISection;
